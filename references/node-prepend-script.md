# Node Prepend Script — Working Example

Concrete example of the JSON-serialize-then-prepend pattern that ran successfully on June 29, 2026.

## What worked

1. Built the edition object as a Python dict in `execute_code`
2. Wrote it to a JSON file using `json.dump` to a Windows TEMP path:
   ```python
   import os, json
   tmp_path = os.path.join(os.environ.get('TEMP', 'C:\\Temp'), 'new_edition.json')
   with open(tmp_path, 'w') as f:
       json.dump(new_edition, f, indent=2)
   ```
3. Wrote a `prepend.js` helper to the skill directory using `write_file`
4. Ran it via `terminal("node prepend.js")`
5. Verified with `node --check editions.js`
6. Cleaned up the helper script before committing

## The prepend.js structure

```js
const fs = require('fs');
const path = require('path');

const editionsPath = path.join(__dirname, 'editions.js');
const currentCode = fs.readFileSync(editionsPath, 'utf8');
const newEdition = JSON.parse(fs.readFileSync('C:\\Users\\swizz\\AppData\\Local\\Temp\\new_edition.json', 'utf8'));

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

const newEditionJs = toJsLiteral(newEdition, 0);
const headerRegex = /^const EDITIONS = \[\r?\n/;
const bodyAfterHeader = currentCode.replace(headerRegex, '');
const newFile = 'const EDITIONS = [\n' + newEditionJs + ',\n' + bodyAfterHeader;
fs.writeFileSync(editionsPath, newFile, 'utf8');
```

## Key details for Windows

- Use `C:\\Users\\swizz\\AppData\\Local\\Temp\\` (not `/tmp/`) for the JSON file path in the node script
- The `headerRegex` handles both LF and CRLF: `/^const EDITIONS = \[\r?\n/`
- `toJsLiteral` with `JSON.stringify` for strings handles all escaping (quotes, newlines, backslashes)
- After prepend, verify with: `node --check editions.js`
- Delete `prepend.js` before `git commit` — it's a one-shot helper, not part of the repo

## Common failure: `__dirname` in write_file'd scripts

When `write_file` creates `prepend.js`, the file goes to the skill directory. Running it with `node prepend.js` from the same CWD works because `__dirname` resolves to the skill dir. If you run it from elsewhere, use `path.join('C:\\Users\\swizz\\AppData\\Local\\hermes\\skills\\weekly-wrapup\\', 'editions.js')` explicitly.
