# Research Workflow: Delegate + Parallel Verification

The weekly-wrapup research phase uses a specific pattern to balance breadth (subagent sweep) with accuracy (direct verification). This is reusable for any research-heavy report.

## Pattern

1. **Dispatch orchestrator subagent** (`delegate_task` with `role="orchestrator"`, `toolsets=["web","browser","search"]`) to sweep all sources in parallel. Pass window dates, coverage priorities, and source list in `context`.

2. **Simultaneously do direct verification fetches** — while the subagent runs, use `web_extract` / `web_search` against the primary sources (OpenAI newsroom, Anthropic newsroom, HuggingFace blog). This catches hallucinated model names, fake benchmark numbers, and fabricated releases before they enter the output.

3. **Cross-check subagent claims** — for every major claim (model names, benchmark numbers, acquisition details, tool releases), verify against the claimed URL or a targeted search. Discard anything unverifiable.

## Why this matters

Orchestrator subagents hallucinate plausible-sounding releases. In past runs, this produced fabricated model names and fake benchmark numbers that would have shipped to the publication without the parallel verification pass. The 30-second direct fetch of the actual newsroom page is cheap insurance.

## When to use this

Any time you're building a report that:
- Requires sweeping multiple sources for a time window
- Needs factual accuracy (model names, dates, numbers, prices)
- Uses a subagent for breadth but the output goes to a publication

## Concrete example (weekly-wrapup June 27, 2026)

- Subagent was dispatched to sweep all sources for June 27
- Simultaneously, direct `web_extract` calls hit the OpenAI Help Center (GPT-4.5 retirement), TechCrunch (Google researcher departures), and AIToolsRecap (daily digest)
- The subagent returned a claim about "four researchers leaving Google" — verified directly against TechCrunch and Bloomberg URLs before inclusion
- The subagent's claim about "Patronus AI $50M round" was verified against TechCrunch and PR Newswire
