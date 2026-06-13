const EDITIONS = [
{
  date: "2026-06-12",
  label: "June 12, 2026",
  headline: "Mythos-class goes public, diffusion breaks the autoregressive monopoly, and every lab ships an agent framework",
  summary: [
    "Claude Fable 5 launches as Anthropic's first public Mythos-class model — 80.3% on SWE-Bench Pro, $10/$50 pricing, with cybersecurity guardrails that route flagged queries to Opus 4.8",
    "Google releases DiffusionGemma: a 26B open-weight model that generates 256-token blocks in parallel, 4x faster than AR counterparts, Apache 2.0 — quality trails Gemma 4 but the architecture is a paradigm shift",
    "GPT-5.5 lands at $5/$30 with 82.7% Terminal-Bench 2.0, ChatGPT gets auto-updating memory \"Dreaming V3\", and Claude Opus 4.8's Dynamic Workflows push agentic coding forward",
    "The agent framework wars consolidate: Microsoft Agent Framework 1.0 GA, CrewAI at 52.4k stars, MCP crosses 200 servers, ACP merges into A2A, and Windsurf becomes Devin Desktop",
    "Voice AI hits production maturity: OpenAI Realtime API + gpt-realtime-1.5, ElevenMusic launches, Deepgram Nova-3 at $0.0077/min, and sub-700ms E2E agents on managed platforms"
  ],
  slides: [
    {
      id: "headlines",
      kicker: "The Big Picture",
      title: "Three fronts opened at once",
      type: "facts",
      html: "<p>This week’s window (May 22 – Jun 12) saw the model layer, the agent framework layer, and the inference architecture layer all shift simultaneously. Anthropic pushed capability forward with Fable 5. Google broke the autoregressive consensus with DiffusionGemma. And the tooling ecosystem — coding IDEs, memory systems, voice stacks, MCP — crossed from experimental to production-grade.</p>"
    },
    {
      id: "agents",
      kicker: "Agentic Frameworks",
      title: "Every major lab now ships an agent SDK",
      type: "facts",
      html: "<h3>Framework consolidation</h3><p>Five major agent frameworks now have production-grade 2026 releases. <a href=\"https://devblogs.microsoft.com/semantic-kernel/introducing-microsoft-agent-framework-1-0/\" target=\"_blank\" rel=\"noopener\">Microsoft Agent Framework 1.0 GA</a> (Apr 3) merged AutoGen and Semantic Kernel into one .NET/Python SDK with MCP + A2A support. <a href=\"https://www.anthropic.com/news/claude-opus-4-8\" target=\"_blank\" rel=\"noopener\">Claude Agent SDK</a> moved to a separate subscription credit starting June 15 ($20 on Pro, $100 on Max 5x, $200 on Max 20x). CrewAI 1.14.6 hit <strong>52,400 GitHub stars</strong> and ~2 billion agent executions in 12 months.</p><p>The protocol layer consolidated: <strong>ACP merged into A2A</strong> under the Linux Foundation. <strong>MCP crossed 200 server implementations</strong>. Google shipped ADK 1.0 for Java and Go (four-language SDK: Python, TypeScript, Java, Go).</p><h3>Claude Code Dynamic Workflows</h3><p>Opus 4.8's new <strong>Dynamic Workflows</strong> feature (research preview) spawns hundreds of parallel subagents that approach a problem from independent angles, refute each other's findings, and iterate until answers converge. Available on Max/Team/Enterprise. Combined with <strong>effort controls</strong> (low/medium/high/xhigh/max) now surfaced in all Claude products and <strong>Fast mode</strong> at 2.5x speed and 3x cheaper than previous Opus generations.</p><h3>Windsurf becomes Devin Desktop</h3><p>On June 2, Cognition pushed an OTA update renaming Windsurf to <a href=\"https://windsurf.com/\" target=\"_blank\" rel=\"noopener\">Devin Desktop</a>. The primary interface is now agent sessions (Kanban view), not the editor. Cascade is replaced by <strong>Devin Local</strong> — a Rust rewrite that's 30% more token-efficient with subagent support. Cascade deprecated after July 1, 2026.</p><h3>Hermes Agent v2026.6.5</h3><p><a href=\"https://hermes-ai.net/news/\" target=\"_blank\" rel=\"noopener\">Hermes Desktop v2026.6.5 \"The Surface Release\"</a> shipped with a native desktop app for macOS, Linux, and Windows — one-click install, in-app self-update, drag-and-drop chat files, inline model picker, and remote gateway sign-in. The project crossed <strong>100,000 GitHub stars</strong> on April 28.</p>"
    },
    {
      id: "tools",
      kicker: "New Tools & Toys",
      title: "DiffusionGemma, memory upgrades, and the local LLM leap",
      type: "facts",
      html: "<h3>DiffusionGemma (Jun 10)</h3><p><a href=\"https://deepmind.google/models/gemma/diffusiongemma/\" target=\"_blank\" rel=\"noopener\">Google DeepMind released DiffusionGemma 26B-A4B</a> — the first open-weight, large-scale text-diffusion LLM. Instead of generating one token at a time, it denoises a <strong>256-token canvas in parallel</strong>, achieving <strong>1,000+ tok/sec on H100</strong> and <strong>700+ on RTX 5090</strong>. That's ~4x the throughput of the AR Gemma 4 counterpart. 26B total MoE, only 3.8B active parameters. Apache 2.0, on Hugging Face/Kaggle/Vertex AI. Multimodal (text + images + 60s video), 256K context, 140+ languages. Google openly states quality trails AR: MMLU Pro 77.6 vs 82.6. Best suited for code infilling, editing, and speed-critical workflows.</p><h3>ChatGPT Memory: Dreaming V3 (Jun 4)</h3><p>OpenAI upgraded ChatGPT's memory architecture with <strong>automatic memory updates</strong>, a readable memory summary page, and time-sensitive memory revision (e.g., updating \"going to Singapore in July\" → \"went to Singapore in July 2026\"). Plus and Pro users get <strong>2x memory capacity</strong>. Free users get the update in the coming weeks. Compute cost for Free-tier dreaming was cut by <strong>5x</strong>.</p><h3>Claude Code Auto Dream</h3><p>Anthropic shipped <strong>Auto Dream</strong> for Claude Code — a background consolidation process that prunes stale notes, merges contradictory entries, and reorganizes MEMORY.md files. Like REM sleep for your AI agent. Combined with the existing CLAUDE.md → Auto Memory → Auto Dream pipeline, Claude Code now has a self-maintaining project memory.</p><h3>Cursor Composer 2.5 (May 18)</h3><p>Cursor's in-house agentic coding model, built on Moonshot AI's Kimi K2.5 open-source base with 85% post-training done by Cursor. <strong>SWE-Bench Multilingual 79.8%</strong>, CursorBench v3.1 <strong>63.2%</strong> (beats Opus 4.7's 61.6%). Priced at $0.50/$2.50 per M tokens (standard) — roughly 10x cheaper per token than frontier models. Only available inside Cursor IDE/CLI (no external API).</p><h3>Reflect Memory</h3><p><a href=\"https://reflectmemory.com/\" target=\"_blank\" rel=\"noopener\">Reflect Memory</a> provides a shared memory layer across ChatGPT, Claude, Cursor, Gemini, Grok, Lovable, and n8n. Save something in one tool, every other connected tool can recall it. Sub-50ms recall. Zero data training. Integrates via OAuth/PKCE.</p>"
    },
    {
      id: "audio",
      kicker: "Voice & Audio",
      title: "Voice agents cross the production threshold",
      type: "facts",
      html: "<h3>OpenAI Realtime API + gpt-realtime-1.5 (Apr 23)</h3><p>The structural change of the window: speech-to-speech without an STT step. Priced at <strong>$32/$64 per M audio tokens</strong>. Opens a prosody-preserving voice agent architecture that bypasses the classic STT→LLM→TTS pipeline. Trade-off: audio bills at 6-12x text rates.</p><h3>Stack leaders stabilize</h3><p>By mid-2026, the production voice stack has clear category winners: <strong>Deepgram Nova-3</strong> for streaming STT (6.84% WER, sub-300ms, $0.0077/min), <strong>Cartesia Sonic Turbo</strong> for low-latency TTS (40ms TTFA), <strong>ElevenLabs v3 Multilingual</strong> for quality and cloning (32+ languages), and <strong>Retell AI</strong> for voice agent orchestration (~600-780ms E2E, $0.07/min, HIPAA compliant).</p><h3>ElevenMusic (Apr 1)</h3><p>ElevenLabs moved beyond voice cloning into music generation with <a href=\"https://apps.apple.com/us/app/elevenmusic-by-elevenlabs/id6755965224\" target=\"_blank\" rel=\"noopener\">ElevenMusic</a> on iOS. Full song generation, remixing, and discovery from text prompts. Directly competing with Suno and Udio. Free tier available with paid plans for longer tracks and commercial rights.</p><h3>Sub-700ms agents are now an engineering pick</h3><p>Managed platforms (Retell, Vapi) deliver sub-700ms end-to-end voice agent latency. No longer a research problem — it's a vendor selection and configuration task.</p>"
    },
    {
      id: "research",
      kicker: "Research & Improvements",
      title: "Diffusion LLMs and the efficiency playbook",
      type: "facts",
      html: "<h3>Diffusion LLM paradigm goes open</h3><p>DiffusionGemma isn't just a new model — it's the first open-weight, diffusion-based LLM at this scale. The approach (from Google's Gemini Diffusion research) replaces sequential token prediction with parallel canvas denoising. <strong>15-20 tokens commit per forward pass, up to 48 denoising steps</strong>. Throughput gains of 3.5-4x over AR counterparts. The trade-off is quality (MMLU Pro ~5 points lower), but for code infilling, editing, and real-time interactive applications, the speed advantage is substantial. NVIDIA optimized it with <strong>NVFP4 quantization</strong> for RTX 5090/4090 consumer GPUs at ~18GB VRAM.</p><h3>LongLoRA for efficient long-context fine-tuning</h3><p><a href=\"https://arxiv.org/abs/2309.12307\" target=\"_blank\" rel=\"noopener\">LongLoRA</a> (ICLR 2024 oral) continues to be applied for extending pre-trained LLMs to long contexts. Shrinking Llama2 7B from 4k to <strong>100k context</strong>, or Llama2 70B to 32k, on a single 8x A100. Works with Flash-Attention2 and adds only two lines of training code.</p><h3>QuantLRM: quantization via fine-tuning signals</h3><p>New research (<a href=\"https://arxiv.org/abs/2602.02581\" target=\"_blank\" rel=\"noopener\">arXiv 2602.02581</a>) shows that weight magnitude changes during reasoning-incentivized fine-tuning can guide quantization of Large Reasoning Models. Classical magnitude pruning meets modern post-training.</p><h3>RAG vs Fine-Tuning vs Long Context in 2026</h3><p>Industry practice has converged: <strong>RAG for knowledge, fine-tuning for behavior, long context for prototyping</strong>. With context windows at 1M+ tokens and fine-tuning costs dropping, teams layer all three. The evaluation framework matters more than the choice — teams that measure when each piece actually helps win.</p>"
    },
    {
      id: "techniques",
      kicker: "Try This Week",
      title: "Five things to build with right now",
      type: "try-it",
      html: "<h3>1. Run DiffusionGemma locally</h3><p>Download <code>google/diffusiongemma-26B-A4B-it</code> from Hugging Face. At 4-bit QA quantization it fits in 18GB VRAM. Use it for code infilling and interactive editing where throughput matters more than perfect prose. The bidirectional attention means it handles mid-context insertion naturally.</p><h3>2. Use Dynamic Workflows in Claude Code</h3><p>If you have Max/Team/Enterprise, use Opus 4.8's Dynamic Workflows for codebase-scale migrations or complex refactoring. The model will fan out across hundreds of parallel subagents, cross-validate findings, and converge on a solution. Stripe used Fable 5-level capability to migrate a 50-million-line Ruby codebase in one day.</p><h3>3. Set up Claude Code memory properly</h3><p>Layer your memory: <strong>CLAUDE.md for durable rules</strong> (build commands, coding standards, architecture decisions — committed to git), <strong>Auto Memory for learned patterns</strong> (Claude captures corrections and conventions over time), and let <strong>Auto Dream consolidate</strong> every few sessions. Run <code>/memory</code> to inspect what loaded and <code>/context</code> to see budget usage.</p><h3>4. Try Reflect Memory for multi-tool continuity</h3><p>Connect ChatGPT, Claude, and Cursor to Reflect Memory. Make a technical decision in Cursor, then open Claude — it already knows what you decided and why. 50ms recall, zero data training, no vendor lock-in.</p><h3>5. Benchmark coding agents head-to-head</h3><p><pre class=\"prompt\">Task: Build a REST API with auth, CRUD endpoints, \nand test coverage in [your preferred framework].\n\nTry the same prompt across:\n- Claude Code + Fable 5 or Opus 4.8 (Dynamic Workflows)\n- Cursor Composer 2.5\n- GPT-5.5 + Codex\n- OpenAI Codex CLI\n\nMeasure: time to working PR, token cost, test pass rate.</pre></p>"
    },
    {
      id: "opinion",
      kicker: "Opinion & Ideas",
      title: "What the smartest people are arguing about",
      type: "opinion",
      html: "<div class=\"opinion-block\"><span class=\"who\">Steven Levy (Wired)</span><p>The fact that Anthropic shipped Fable 5 publicly — even with guardrails that route cyber/bio queries back to Opus 4.8 — and admitted that the unreleased Mythos 5 is even more capable, tells you how fast the capability curve is moving. The gap between what's available to trusted partners and what's available to the public is widening. That's either responsible capability release or a new kind of information asymmetry. Probably both.</p></div><div class=\"opinion-block\"><span class=\"who\">Simon Willison</span><p>On Anthropic's \"secret sabotage\" policy walk-back: \"Anthropic admitted they made the wrong tradeoff and apologized.\" That's unusually honest for a lab. The fact that a 319-page system card included secret intervention methods — prompt modification, steering vectors, PEFT for requests related to frontier LLM development — and then walked it back after community backlash shows the tension between capability control and openness. Making safeguards visible (flagged requests fall back to Opus 4.8, API returns refusal reasons) is the right call.</p></div><div class=\"opinion-block\"><span class=\"who\">Andrej Karpathy</span><p>\"I feel a lot of things changing as working software increasingly comes out on a tap. The Jevon's paradox kicks in and I feel my own demand for software growing substantially.\" Claude Fable 5 is a beast — slow, expensive, handles everything. The productivity unlock is real: a single developer can now do work that previously required a team. The question is what you build when the constraint shifts from \"can it be built?\" to \"should it be built?\"</p></div>"
    }
  ],
  sources: {
    videos: [
      { title: "How AI Agents Will Transform in 2026 (a16z Big Ideas)", url: "https://www.youtube.com/watch?v=ULszsXDyjMY" },
      { title: "How to Build a $1M+ Solo AI Agent Business — Greg Isenberg", url: "https://www.youtube.com/watch?v=BI-MNjm1tTQ" },
      { title: "AI Coding for Beginners (Full Course 2026) — Riley Brown", url: "https://www.youtube.com/watch?v=ktl8mNiWqMM" }
    ],
    articles: [
      { title: "Introducing Claude Opus 4.8 — Anthropic", url: "https://www.anthropic.com/news/claude-opus-4-8" },
      { title: "Introducing GPT-5.5 — OpenAI", url: "https://openai.com/index/introducing-gpt-5-5" },
      { title: "DiffusionGemma — Google DeepMind", url: "https://deepmind.google/models/gemma/diffusiongemma/" },
      { title: "AI Agent Frameworks (2026 Update): 8 SDKs Compared — MorphLLM", url: "https://www.morphllm.com/ai-agent-framework" },
      { title: "Claude Opus 4.8: Features, Benchmarks, Claude Code — ComputingForGeeks", url: "https://computingforgeeks.com/claude-opus-4-8-released-features-benchmarks" },
      { title: "Claude Fable 5 Is Free on Your Subscription Until June 22 — ai.rs", url: "https://ai.rs/ai-for-business/claude-fable-5-free-test-window-how-to-switch" },
      { title: "Cursor Composer 2.5: Benchmarks, Pricing & Access — Thesys", url: "https://www.thesys.dev/blogs/cursor-composer-2-5" },
      { title: "Windsurf Is Now Devin Desktop — ChatForest", url: "https://chatforest.com/builders-log/windsurf-devin-desktop-rebrand-devin-local-acp-builder-guide" },
      { title: "Best Voice AI in April 2026 — FutureAGI", url: "https://futureagi.com/blog/best-voice-ai-april-2026" },
      { title: "ChatGPT Memory Dreaming V3 — Let's Data Science", url: "http://letsdatascience.com/news/openai-upgrades-chatgpt-memory-architecture-for-fresher-pers-b26b51d5" },
      { title: "Hermes Agent v2026.6.5 — Hermes News", url: "https://hermes-ai.net/news/" },
      { title: "Open-Source Coding Models 2026 — Kilo", url: "https://kilo.ai/open-source-models" }
    ],
    x: [],
    notes: "X/Twitter API key not configured. YouTube transcripts: AllIn, DwarkeshPatel channels had no full-episode uploads within the window. TechWithTim and GregIsenberg had relevant videos; transcripts were fetch-blocked by the URL filter. Google Blog was client-rendered, returning nav-only boilerplate via web_fetch — relied on search snippet summaries. hermes-ai.net/news served clean server-rendered content."
  }
}
];
