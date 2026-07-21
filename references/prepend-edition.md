# Prepending a New Edition to editions.js

The most error-prone step in the weekly-wrapup workflow is prepending a new edition object to the `EDITIONS` array without breaking JS syntax.

## Correct pattern (patch tool)

Use `patch()` with `mode: "replace"`. The `old_string` must span from the array opening through the first existing edition's `date:` line, and `new_string` must include the new edition followed by a comma and the old content:

```
old_string:
const EDITIONS = [
{
  date: "2026-06-19",

new_string:
const EDITIONS = [
{
  date: "2026-06-25",
  label: "June 25, 2026",
  ...
  sources: { ... }
},
{
  date: "2026-06-19",
```

### Key rules:
1. **Include `date:` line in both old and new** — this makes the match unique (dates are always distinct) and ensures the comma ends up between the objects.
2. **Close new edition with `},`** — the comma separates it from the next object.
3. **After patching, run `node --check editions.js`** to confirm valid JS.
4. **Keep SKILL.md staged but unstaged** if it was modified by skill_view — only `git add editions.js` for the report commit, then `git push origin main`.

## Common failure: missing comma

If you match too little context, you may end up with:
```
  }
}
{
  date: "2026-06-19",
```
This is invalid JS (missing comma between array elements). `node --check editions.js` will catch it with `SyntaxError: Unexpected token '{'`. Fix by running a second patch with `old_string: "}\n}\n{"` → `new_string: "}\n},\n{"`.

## The JSON-serialize-then-prepend pattern (preferred for complex editions)

The `patch()` and `write_file()` tools corrupt HTML-heavy edition objects because they re-process escape sequences: nested `\"` in `<a href="...">` becomes raw `"` (breaking the JS string), `\\\"` becomes invalid, and CRLF/LF mismatches between tool output and file cause `node --check` to fail on what looks like an unescaped quote but is actually a line-ending artifact.

**Prefer this workflow for editions with rich HTML content (tables, links, styled spans):**

1. **Write the edition as JSON** using Python's `json.dump` (or `execute_code` → write to a `.json` temp file). `json.dump` produces correct JSON escaping that survives file I/O.
2. **Serialize to JS via a node script** (write a small `.js` helper to `/tmp/` using `write_file`, then run with `terminal("node /c/.../helper.js")`). Within node:
   - `JSON.parse()` the JSON file
   - `JSON.stringify` each value (handles `"` → `\"`, newlines → `\n`, etc.)
   - Hand-format objects/arrays to match the file's 2-space indent style
   - Strip the original `const EDITIONS = [\n` header using a regex that handles CRLF: `/^const EDITIONS = \[\r?\n/`
   - Write the merged file
3. **Verify** with a wrapped `node --check`: wrap the output in an IIFE `(function(){\r\n` + code + `\r\n})();` to a temp file, then run `node --check` on it using `execSync` with `shell: 'cmd.exe'` and a forward-slash path.

Format helper (inside the node script):
```js
function toJsLiteral(obj, indent) {
  const pad = ' '.repeat(indent);
  const pad1 = ' '.repeat(indent + 2);
  if (Array.isArray(obj)) {
    if (obj.length === 0) return '[]';
    const items = obj.map(item => pad1 + toJsLiteral(item, indent + 2)).join(',\n');
    return '[\n' + items + '\n' + pad + ']';
  }
  if (typeof obj === 'object' && obj !== null) {
    const keys = Object.keys(obj);
    const items = keys.map(k => pad1 + k + ': ' + toJsLiteral(obj[k], indent + 2)).join(',\n');
    return '{\n' + items + '\n' + pad + '}';
  }
  if (typeof obj === 'string') return JSON.stringify(obj);
  return String(obj);
}
```

**Why this works when `patch()` fails:** The node script reads bytes directly. `JSON.stringify` produces exactly the escape sequences the JS parser expects. The CRLF header-regex accounts for the file's Windows line endings. No intermediate tool layer reinterpretes the escaping.

**Verification pattern:**
```js
const wrapped = '(function(){\r\n' + outputCode + '\r\n})();';
fs.writeFileSync(tmpPath, wrapped);
execSync('node --check "' + tmpPath.replace(/\\/g, '/') + '"', { stdio: 'pipe', shell: 'cmd.exe' });
```
Using `shell: 'cmd.exe'` avoids MSYS path mangling on Windows.

## Windows path notes

On Windows with bash/MSYS terminal:
- `terminal` tool: paths like `/c/Users/...` or native `C:\\Users\\...` both work.
- `patch`/`read_file`/`write_file` tool: **never use `/c/...` style absolute paths.** They resolve incorrectly to `C:\\c\\Users\\...` and fail with confusing "path outside workspace" errors. Always use bare filenames (e.g. `editions.js`) when the CWD is already the skill directory, or native Windows paths (`C:\\Users\\...\\editions.js`) for absolute references.
- If `patch()` fails with `Failed to read file: C:\\c\\Users\\...` — this is the POSIX path bug. Switch to a relative path and retry.
- **For node scripts prepended to `node` on Windows, use MSYS-style paths** (`/c/Users/...` or `/tmp/prepend.js`) — native Windows paths get prepended with the MSYS root (`C:\\Users\\...\\Users\\...`). The prepend script's internal JS string literals should use `String.raw\`...\`` or double backslashes to avoid path-corruption.
