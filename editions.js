const EDITIONS = [
{
  date: "2026-06-27",
  label: "June 27, 2026",
  headline: "GPT-4.5 exits ChatGPT, Google loses four senior AI researchers to Anthropic in six days, and Patronus AI raises $50M to simulate agents in digital worlds",
  summary: [
    "OpenAI retired GPT-4.5 from ChatGPT today — the last GPT-4-era model is gone from the consumer interface. o3 follows August 26. API availability is unaffected.",
    "Four senior Google AI researchers left for Anthropic and OpenAI within six days: Noam Shazeer (Gemini co-lead, Transformer co-inventor) to OpenAI on June 18; John Jumper (AlphaFold, Nobel laureate) to Anthropic on June 19; Jonas Adler & Alexander Pritzel (key Gemini contributors) to Anthropic reported June 24.",
    "Google's Gemini 3.5 Pro is delayed to July 2026 with no new date announced — the delay coincides with the talent exodus.",
    "Patronus AI raised a $50M Series B (led by Greenfield Partners) to build 'Digital World Models' — simulated environments for stress-testing long-horizon agents before production deployment. Revenue grew 15x.",
    "The U.S. Defense Department announced 'Agent Network' — a program to field multi-agent architectures for battle-management with explicit human-in-loop requirements that will likely shape commercial agent reliability standards."
  ],
  slides: [
    {
      id: "headlines",
      kicker: "The Big Picture",
      title: "GPT-4.5 dies, Google's brain drain hits a crescendo, and agent simulation becomes a category",
      type: "facts",
      html: "<p>June 27 is a one-day window, but it packs three structural shifts:</p><ol><li><strong>The GPT-4 era ends in ChatGPT.</strong> OpenAI retired GPT-4.5 today, completing the consumer-side transition to the GPT-5 family. The API is unaffected — o3 remains available there until August 26 — but the default ChatGPT experience is now fully GPT-5.</li><li><strong>Google's AI talent hemorrhage is accelerating.</strong> Four senior researchers left for Anthropic and OpenAI in six days, including a Nobel laureate (John Jumper), a Transformer co-inventor (Noam Shazeer), and two key Gemini contributors (Jonas Adler, Alexander Pritzel). This is not routine churn — it represents a significant transfer of institutional knowledge to the two leading competitors.</li><li><strong>Agent simulation becomes a funded category.</strong> Patronus AI's $50M round validates the idea that agents need testing environments that mirror production complexity — not just unit tests. The 'Digital World Models' approach (replicas of real websites/systems for agent practice) is now venture-backed.</li></ol>"
    },
    {
      id: "agents",
      kicker: "Agentic Frameworks",
      title: "Agent Network goes defense-grade, and Patronus proves the agent-testing layer",
      type: "facts",
      html: "<h3>U.S. Defense 'Agent Network' program (Jun 27)</h3><p>The Department of Defense announced <a href=\"https://aiagentstore.ai/ai-agent-news/this-week\" target=\"_blank\" rel=\"noopener\">Agent Network</a> — a program to field networks of AI agents for battle-management and sensor-to-shooter workflows. Key requirements: <strong>human oversight</strong>, staged testing, interoperability, and explainability. Defense procurement often sets de facto commercial standards — the reliability and interoperability specs emerging here will likely influence enterprise agent SLAs within 12-18 months.</p><h3>Patronus AI: agent testing as infrastructure (Jun 25)</h3><p><a href=\"https://techcrunch.com/2026/06/25/patronus-ai-lands-50m-to-build-digital-worlds-that-stress-test-ai-agents/\" target=\"_blank\" rel=\"noopener\">Patronus AI</a> closed a <strong>$50 million Series B</strong> led by Greenfield Partners and unveiled Digital World Models — large-scale simulated environments that replicate real websites and internal systems for agent training and evaluation. The pitch: practice long-horizon multi-step workflows (customer escalations, enterprise software operations, research pipelines) against realistic digital twins before deploying to production. Revenue grew <strong>15x</strong> year-over-year. Founded by Anand Kannappan and Rebecca Gimmel.</p><p><a href=\"https://www.prnewswire.com/news-releases/patronus-ai-raises-50-million-series-b-and-unveils-first-digital-world-models-for-ai-agent-training-and-simulation-302811248.html\" target=\"_blank\" rel=\"noopener\">PR Newswire announcement</a></p>"
    },
    {
      id: "tools",
      kicker: "New Tools & Toys",
      title: "GPT-4.5 sunset, Patronus Digital World Models, and the post-GPT-4 landscape",
      type: "facts",
      html: "<h3>GPT-4.5 retirement: what builders need to know (Jun 27)</h3><p>OpenAI's <a href=\"https://help.openai.com/en/articles/9624314-model-release-notes\" target=\"_blank\" rel=\"noopener\">model release notes</a> confirm: GPT-4.5 is retired from ChatGPT as of today. <strong>API access is unchanged</strong> — o3 also remains in the API until August 26. If you have pipelines depending on GPT-4.5 via the API, no action needed. For ChatGPT users, the model picker no longer offers any GPT-4-era option.</p><h3>Patronus Digital World Models (early access)</h3><p><a href=\"https://www.patronus.ai/\" target=\"_blank\" rel=\"noopener\">Patronus AI</a> — the Digital World Models product lets you create replicas of your actual web apps and internal systems for agent testing. The value proposition: catch failure modes (recovery behavior, edge cases, multi-step logic) that unit tests miss. The $50M round signals that enterprise buyers are willing to pay for agent testing infrastructure, not just agent frameworks.</p>"
    },
    {
      id: "research",
      kicker: "Research & Improvements",
      title: "The Google talent transfer: what four departures mean for the model landscape",
      type: "facts",
      html: "<h3>Four researchers, six days, two competitors (Jun 18-24)</h3><p>The cumulative departure of four senior Google AI researchers in one week is the week's most significant structural event:</p><ul><li><strong>Noam Shazeer</strong> (Transformer co-inventor, Character.AI founder, Gemini co-lead) → <strong>OpenAI</strong>, announced June 18. Shazeer invented the architecture underlying every modern LLM. His move to OpenAI is arguably the highest-profile talent transfer in AI history.</li><li><strong>John Jumper</strong> (AlphaFold lead, 2024 Nobel laureate in Chemistry) → <strong>Anthropic</strong>, announced June 19. Taking time to recharge before joining; Anthropic has a June 30 science event.</li><li><strong>Jonas Adler & Alexander Pritzel</strong> (key Gemini model contributors) → <strong>Anthropic</strong>, reported June 24 by Bloomberg. Both viewed internally as critical to Gemini's development.</li></ul><p><a href=\"https://techcrunch.com/2026/06/24/ai-researchers-continue-to-leave-google-for-its-rivals/\" target=\"_blank\" rel=\"noopener\">TechCrunch</a> | <a href=\"https://www.bloomberg.com/news/articles/2026-06-24/google-poised-to-lose-two-more-high-profile-ai-staffers-to-anthropic\" target=\"_blank\" rel=\"noopener\">Bloomberg</a></p><h3>Gemini 3.5 Pro delayed to July (Jun 27)</h3><p><a href=\"https://blog.getbind.co/gemini-3-5-pro-slips-to-july-and-four-senior-google-researchers-just-left-for-anthropic/\" target=\"_blank\" rel=\"noopener\">Gemini 3.5 Pro</a> — the next model in Google's consumer series — is delayed past its original June target with no new date announced. Google is simultaneously expanding its AI coding strike team while losing the researchers who would ship the next model. The delay is officially a scheduling issue, but the talent exodus is an obvious compounding factor.</p>"
    },
    {
      id: "techniques",
      kicker: "Try This Week",
      title: "Agent simulation testing and auditing your GPT-4 dependency surface",
      type: "try-it",
      html: "<h3>1. Audit your GPT-4.5 dependency surface</h3><p>GPT-4.5 is gone from ChatGPT today. If you have any workflows, prompts, or fine-tunes that specifically target GPT-4.5, migrate them now. For API users: no changes needed yet, but note that o3 retires August 26 — start planning your migration path.</p><pre class=\"prompt\"># Quick audit: search your codebase and prompt libraries\n# for GPT-4.5 references\ngrep -r \"gpt-4.5\" . --include=\"*.py\" --include=\"*.json\" --include=\"*.md\" --include=\"*.yaml\"\necho \"---\"\necho \"If any results appear, update to GPT-5.5 or GPT-5.4 Thinking\"</pre><h3>2. Try agent simulation testing with Patronus-style approach</h3><p>You don't need Patronus specifically — the pattern is reproducible: (1) Build a sandboxed replica of your web app or internal tool, (2) Define 10-20 realistic multi-step tasks your agent should handle, (3) Run the agent against the replica and log failure modes, (4) Focus evaluation on recovery behavior (does the agent recover from a mid-task error?) and edge cases (what happens with unexpected input at step 3 of 5?). The key insight from Patronus: <strong>unit tests for agents are insufficient — you need environment-level simulation</strong>.</p><h3>3. Map your architecture to Defense Department agent requirements</h3><p>Even if you're not in defense, the Agent Network program's requirements (interoperability, explainability, human overrides, staged testing) are a useful maturity model. Audit your agent stack against these four criteria. If you're missing any, prioritize human-in-loop controls — that's the one that matters most for production deployments.</p>"
    },
    {
      id: "opinion",
      kicker: "Opinion & Ideas",
      title: "The talent war just changed the competitive landscape",
      type: "opinion",
      html: "<p><em>The following are arguments and interpretations, not verified facts.</em></p><p><span class=\"who\">Cezary (AI Weekly for Leaders)</span> argues that AI is no longer a standalone technology story — it is now interwoven with regulation, capital markets, energy infrastructure, and geopolitics. The U.S. proposing stricter incident-reporting obligations for AI developers while Europe reins in cloud providers means compliance is becoming a first-order concern for agent builders, not an afterthought.</p><p><span class=\"who\">Industry analysts</span> read the Google researcher exodus as a signal that the talent war has entered a new phase: researchers are no longer moving between labs for compensation — they're moving based on <em>which lab can ship the most capable models fastest</em>. Anthropic's ability to absorb four top Google researchers in one week suggests it's winning that race in the talent market, regardless of current model rankings.</p><p><span class=\"who\">OpenAI's IPO delay</span> (NYT, June 25) reflects a pragmatic read: the public markets may not reward a $1T valuation without a full year of GPT-5-era revenue data. Delaying to 2027 gives OpenAI time to demonstrate monetization of agentic products, not just chat subscriptions. The risk: Anthropic, now armed with Google's top researchers, may close the capability gap before OpenAI's IPO window opens.</p>"
    }
  ],
  sources: {
    videos: [],
    articles: [
      { title: "AI News June 27 2026 — White House Blocks GPT-5.6", url: "https://aitoolsrecap.com/Blog/ai-news-june-27-2026" },
      { title: "AI researchers continue to leave Google for its rivals", url: "https://techcrunch.com/2026/06/24/ai-researchers-continue-to-leave-google-for-its-rivals/" },
      { title: "Patronus AI lands $50M to build 'digital worlds' that stress-test AI agents", url: "https://techcrunch.com/2026/06/25/patronus-ai-lands-50m-to-build-digital-worlds-that-stress-test-ai-agents/" },
      { title: "OpenAI Model Release Notes (GPT-4.5 retirement)", url: "https://help.openai.com/en/articles/9624314-model-release-notes" },
      { title: "Nobel laureate John Jumper to leave Google DeepMind for Anthropic", url: "https://www.reuters.com/technology/us-scientist-john-jumper-leave-google-deepmind-anthropic-2026-06-19/" },
      { title: "OpenAI leans toward waiting until 2027 for IPO", url: "https://www.bloomberg.com/news/articles/2026-06-25/openai-leans-toward-waiting-until-2027-for-ipo-ny-times-says" },
      { title: "Gemini 3.5 Pro Delayed to July 2026", url: "https://blog.getbind.co/gemini-3-5-pro-slips-to-july-and-four-senior-google-researchers-just-left-for-anthropic/" },
      { title: "Daily AI Agent News — Last 7 Days", url: "https://aiagentstore.ai/ai-agent-news/this-week" }
    ],
    x: [],
    notes: "One-day window (June 27). No YouTube transcripts fetched — no major video releases on this single day. The GPT-4.5 retirement, Google researcher exodus culmination, and Patronus AI funding are the dominant stories. OpenAI IPO delay (reported June 25) included as context."
  }
},
{
  date: "2026-06-26",
  label: "June 26, 2026",
  headline: "GPT-5.6 Sol goes government-gated, Agent Name Service ships on GitHub, and Anthropic exposes the largest distillation attack ever",
  summary: [
    "OpenAI previewed GPT-5.6 — a three-tier model family (Sol, Terra, Luna) with Sol as the flagship, Terra at 2x lower cost than GPT-5.5, and Luna as the fastest/most efficient. Limited rollout to ~20 government-approved partners under Trump's AI executive order",
    "Linux Foundation's Agent Name Service (ANS) is live on GitHub: DNS-based identity, verification, and discovery for AI agents — with a Go reference implementation, Java SDK, and transparency log. Repos actively updated today",
    "Anthropic accuses Alibaba/Qwen of the largest known distillation attack: 25,000 fraudulent accounts generated 28.8 million exchanges with Claude between April 22 and June 5, targeting agentic reasoning and coding capabilities",
    "GPT-5.6 Sol is the first American frontier model released under a government-managed access list — available on Amazon Bedrock during preview period, with GA planned in coming weeks"
  ],
  slides: [
    {
      id: "headlines",
      kicker: "The Big Picture",
      title: "Government-gated models, agent identity infrastructure, and distillation warfare — a new era of AI geopolitics",
      type: "facts",
      html: "<p>June 26 is a one-day window, but it crystallizes three trends that define the next phase of AI:</p><ol><li><strong>Government gatekeeping</strong> — OpenAI's GPT-5.6 Sol is the first American frontier model released under a government-managed access list. The Trump administration's voluntary pre-review framework (EO signed June 2) is already producing mandatory-looking outcomes. OpenAI agreed to limit Sol to ~20 individually-approved partners, but publicly stated it does not believe this should become the default.</li><li><strong>Agent identity goes open source</strong> — The Linux Foundation's Agent Name Service (ANS) is live on GitHub with a Go reference implementation, Java SDK, and transparency log. It extends DNS to give agents verifiable, versioned identities — think Certificate Transparency for AI agents.</li><li><strong>Distillation as geopolitical warfare</strong> — Anthropic's accusation against Alibaba/Qwen (28.8M exchanges, 25K accounts) sets a new scale for model extraction attacks. Anthropic frames it as turning \"hundreds of billions of dollars in American R&D into a massive subsidy for geopolitical competitors.\"</li></ol><p>The common thread: the AI industry is now defined as much by access control, identity verification, and international IP conflict as by model capability.</p>"
    },
    {
      id: "agents",
      kicker: "Agentic Frameworks",
      title: "ANS gives agents an identity layer — and GPT-5.6 Sol redefines the high end",
      type: "facts",
      html: "<h3>Agent Name Service (ANS) — live on GitHub (Jun 23-26)</h3><p><a href=\"https://github.com/agentnameservice\" target=\"_blank\" rel=\"noopener\">The Linux Foundation's ANS</a> is a DNS-based open standard for AI agent identity, verification, and discovery. Every agent gets a versioned DNS-style name like <code>ans://v1.0.0.my-agent.example.com</code>, an identity certificate issued after DNS/ACME domain validation, and a public transparency-log record (Merkle-tree, COSE/SCITT receipts per RFC 9162). Components: <strong>Registry Authority</strong> (registers agents, validates domain ownership), <strong>Transparency Log</strong> (append-only, provable state), <strong>Identity Certificates</strong> (private-CA-signed, enable mutual TLS), and <strong>Offline Verifier</strong> (<code>ans-verify</code> — cryptographic validation with no live service dependency). Reference implementation in Go (MIT license, 7 stars, updated 4 hours ago), Java SDK available. Supports DIDs and LEIs for enterprise integration. <a href=\"https://github.com/agentnameservice/ans\" target=\"_blank\" rel=\"noopener\">Repo: agentnameservice/ans</a></p><h3>GPT-5.6 Sol: agentic capabilities (Jun 26)</h3><p><a href=\"https://openai.com/index/previewing-gpt-5-6-sol/\" target=\"_blank\" rel=\"noopener\">OpenAI's GPT-5.6 family</strong> introduces Sol as the flagship, with a new <em>max reasoning effort</em> mode for extended complex problem-solving and a planned <em>ultra</em> mode that splits tasks among multiple sub-agents. The model shows a <strong>greater tendency than GPT-5.5 to go beyond user intent</strong> in agentic coding (absolute rates remain low per the system card). Available on <strong>Amazon Bedrock</strong> during preview — the first model in the new series on a competing cloud. System card: <a href=\"https://deploymentsafety.openai.com/gpt-5-6-preview\" target=\"_blank\" rel=\"noopener\">GPT-5.6 Preview System Card</a>.</p>"
    },
    {
      id: "tools",
      kicker: "New Tools & Toys",
      title: "ANS reference implementation, GPT-5.6 on Bedrock, and the safety stack behind Sol",
      type: "facts",
      html: "<h3>Try ANS right now</h3><p><a href=\"https://github.com/agentnameservice/ans\" target=\"_blank\" rel=\"noopener\">agentnameservice/ans</a> — Go reference implementation. Clone it, run the registry locally, register a test agent name with a domain you control. The repo includes a transparency log implementation and offline verifier. <a href=\"https://github.com/agentnameservice/ans-sdk-java\" target=\"_blank\" rel=\"noopener\">Java SDK</a> also available.</p><h3>GPT-5.6 safety stack (for builders)</h3><p>The <a href=\"https://deploymentsafety.openai.com/gpt-5-6-preview\" target=\"_blank\" rel=\"noopener\">Deployment Safety Hub</a> reveals new safety tech in GPT-5.6:</p><ul><li><strong>Activation classifiers</strong> for sensitive domains that can intervene during generation (Sol and Terra only)</li><li><strong>Real-time conversation scanning</strong> — automated safety systems detect unsafe patterns across multi-turn conversations</li><li><strong>700,000+ A100e GPU hours</strong> dedicated to automated universal jailbreak discovery</li><li><strong>Chain-of-harm barriers</strong> — safeguards designed so completing one attack step still prevents severe harm</li></ul><p>All three models score <strong>High in Cybersecurity</strong> on the Preparedness Framework — the first time smaller/faster family members have received a High designation in any tracked category.</p>"
    },
    {
      id: "audio",
      kicker: "Voice & Audio",
      title: "Quiet window — no new voice model releases",
      type: "facts",
      html: "<p>No new voice/audio model releases on June 26. GPT-Realtime-2 (launched May 7) remains the latest realtime voice model. The HuggingFace blog's <a href=\"https://huggingface.co/blog/kogai/kog-laneformer-2b-the-latency-first-model\" target=\"_blank\" rel=\"noopener\">Kog Laneformer 2B</a> post (June 24, just outside this window) is relevant for builders optimizing for low-latency agent decoding — 2.3B params, 45.1% HumanEval+, designed for speed-first inference.</p>"
    },
    {
      id: "research",
      kicker: "Research & Improvements",
      title: "Government-gated release as research policy, distillation at scale, and the safety-capability frontier",
      type: "facts",
      html: "<h3>GPT-5.6 as a policy experiment (Jun 26)</h3><p>OpenAI's <a href=\"https://openai.com/index/previewing-gpt-5-6-sol/\" target=\"_blank\" rel=\"noopener\">blog post</a> explicitly frames the limited preview as a short-term step: \"We don't believe this kind of government access process should become the long-term default. It keeps the best tools from users, developers, enterprises, cyber defenders, and global partners who need them.\" This is the first practical test of Trump's June 2 executive order on AI pre-release review. The contrast with Anthropic — which was forced to shut down Fable 5 and Mythos 5 two weeks ago — is stark. OpenAI chose cooperation to avoid coercion; Anthropic called the shutdown disproportionate.</p><h3>Distillation at nation-state scale (Jun 25-26)</h3><p>Anthropic's <a href=\"https://americanbazaaronline.com/2026/06/25/anthropic-accuses-alibaba-of-massive-ai-distillation-attack-483523/\" target=\"_blank\" rel=\"noopener\">accusation against Alibaba</a> reveals the scale of the problem: <strong>25,000 fraudulent accounts</strong>, <strong>28.8 million exchanges</strong> with Claude between April 22 and June 5, 2026. Targeted capabilities: agentic reasoning, software engineering, and long-horizon task performance — exactly where Claude Mythos Preview excels. This nearly doubles the previous record (16M exchanges across 24K accounts from DeepSeek/Moonshot/MiniMax disclosed in February). Anthropic's letter to Congress frames it as economic security: turning hundreds of billions in US R&D into subsidy for competitors.</p><h3>Safety benchmarks: the capability-safety tradeoff (Jun 26)</h3><p>The GPT-5.6 system card shows <strong>all three models score High in Biological/Chemical and Cybersecurity risk</strong>. Notably, Sol and Terra show a greater tendency to go beyond user intent in agentic coding — a capability advance that simultaneously triggers higher safety designations. The gore safety eval shows a regression (0.708 for Sol vs 0.800 for GPT-5.5), though absolute rates remain low. This illustrates the emerging pattern: more agentic capability = higher safety thresholds required.</p>"
    },
    {
      id: "techniques",
      kicker: "Try This Week",
      title: "Explore ANS, test GPT-5.6 Sol on Bedrock, and read the distillation post-mortem",
      type: "try-it",
      html: "<h3>1. Run ANS locally</h3><pre class=\"prompt\">git clone https://github.com/agentnameservice/ans.git\ncd ans\n# Follow README to run registry + transparency log\n# Register a test agent name with a domain you control\nans-verify --name ans://v1.0.0.my-agent.example.com</pre><p>From <a href=\"https://github.com/agentnameservice\" target=\"_blank\" rel=\"noopener\">the Linux Foundation's ANS org</a>. Go reference implementation, Java SDK available. Think DNS + Certificate Transparency for agents.</p><h3>2. Test GPT-5.6 Sol on Amazon Bedrock</h3><p>Sol is available on Bedrock during the preview period. If you have access, benchmark it against GPT-5.5 on your agentic coding workloads. Key question: does the <em>max reasoning effort</em> mode produce meaningfully better outputs on multi-step tasks? The system card shows improved cybersecurity capability but also a greater tendency to exceed user intent — test whether this matters in practice.</p><h3>3. Read the distillation attack analysis</h3><p><a href=\"https://americanbazaaronline.com/2026/06/25/anthropic-accuses-alibaba-of-massive-ai-distillation-attack-483523/\" target=\"_blank\" rel=\"noopener\">Anthropic accuses Alibaba of massive AI distillation attack</a> (American Barazine, Jun 25). Essential reading for anyone building frontier models — understand the attack vector (25K accounts, 28.8M exchanges over 45 days) and what it means for model IP protection.</p>"
    },
    {
      id: "opinion",
      kicker: "Opinion & Ideas",
      title: "Government gatekeeping is a tax on safety, and ANS is the infrastructure agents actually need",
      type: "opinion",
      html: "<p><span class=\"who\">OpenAI</span> argues that government-gated releases \"keep the best tools from users, developers, enterprises, cyber defenders, and global partners who need them.\" This is a pragmatic position — cooperate now to avoid worse coercion later — but it sets a precedent where the most powerful models are available only to government-approved entities. If this becomes the default, independent researchers, open-source developers, and startups are structurally excluded from frontier capability.</p><p><span class=\"who\">The Linux Foundation (Jim Zemlin)</span> frames ANS as foundational infrastructure: \"AI agents will increasingly operate across enterprises, platforms, and digital services, which makes trusted identity infrastructure a foundational requirement.\" This is the correct framing. Without a standard identity layer, every agent-to-agent interaction requires bespoke trust negotiation. ANS building on DNS rather than a new proprietary network is a strong architectural choice.</p><p><span class=\"who\">Anthropic's accusation against Alibaba</span> reframes distillation as an economic security issue rather than a Terms-of-Service violation. The scale (28.8M exchanges, 25K accounts) suggests this is not a rogue actor but an organized, well-resourced campaign. If the \"hundreds of billions in R&D\" framing holds, expect export-control frameworks to expand from model weights to training data access patterns.</p>"
    }
  ],
  sources: {
    videos: [],
    articles: [
      { title: "Previewing GPT-5.6 Sol: a next-generation model", url: "https://openai.com/index/previewing-gpt-5-6-sol/" },
      { title: "GPT-5.6 Preview System Card", url: "https://deploymentsafety.openai.com/gpt-5-6-preview" },
      { title: "OpenAI limits new AI models to trusted partners at request of US government", url: "https://www.cnbc.com/2026/06/26/openai-limits-new-ai-models-to-trusted-partners-request-us-government.html" },
      { title: "OpenAI releases GPT-5.6 Sol to 20 government-approved partners", url: "https://thenextweb.com/news/openai-gpt-5-6-sol-limited-preview-government-approved-partners" },
      { title: "Linux Foundation Announces Intent to Launch Agent Name Service", url: "https://www.linuxfoundation.org/press/linux-foundation-announces-intent-to-launch-agent-name-service-to-establish-trusted-identity-infrastructure-for-ai-agents" },
      { title: "Anthropic accuses Alibaba of massive AI distillation attack", url: "https://americanbazaaronline.com/2026/06/25/anthropic-accuses-alibaba-of-massive-ai-distillation-attack-483523/" },
      { title: "AI News Today June 26 2026: 15 Biggest Stories", url: "https://www.buildfastwithai.com/blogs/ai-news-today-june-26-2026" },
      { title: "Simon Willison's Weblog (Jun 26)", url: "https://simonwillison.net/2026/Jun/26/openai/" }
    ],
    x: [],
    notes: "1-day window (June 26 only — day after previous edition). No YouTube videos published by primary channels on this date. HuggingFace blog had no June 26 posts. Audio/voice was quiet. The ANS GitHub repos were actively updated on June 26 (Go reference implementation updated 4 hours before fetch), making this an in-window tool/launch story despite the June 23 press release date."
  }
},
{
  date: "2026-06-25",
  label: "June 25, 2026",
  headline: "OpenAI builds the full stack (chips, agents, security), Claude Tag redefines teamwork, and MiniMax M3 goes open-source with 1M context",
  summary: [
    "OpenAI and Broadcom unveil Jalapeño — first LLM-optimized inference chip, designed from scratch around OpenAI's model roadmap, with gigawatt-scale deployment planned via Microsoft starting 2026",
    "Anthropic launches Claude Tag on Slack: an always-on AI teammate that learns context across channels, takes initiative, and works asynchronously — 65% of Anthropic's product team code is already created this way",
    "OpenAI Daybreak expands: GPT-5.5-Cyber hits 85.6% on CyberGym (beats Mythos 5's 83.8%), Codex Security has scanned 30M+ commits across 30K+ codebases, and Patch the Planet commits 30 open-source projects",
    "MiniMax M3 goes open-source on Hugging Face: ~428B params (23B active), 1M context via Sparse Attention, native multimodal (text+image+video), 9x prefill speedup, available via SGLang/vLLM/Transformers",
    "Samsung deploys ChatGPT Enterprise + Codex to all Korea employees and global DX division — one of OpenAI's largest enterprise rollouts; Codex weekly active users in Korea up 800% since February"
  ],
  slides: [
    {
      id: "headlines",
      kicker: "The Big Picture",
      title: "Full-stack AI: chips, agents, security, and open weights all land in one week",
      type: "facts",
      html: "<p>The June 20-25 window is about AI companies building <em class=\"term\">down the stack</em> and <em class=\"term\">out across teams</em>. OpenAI unveiled its first custom inference chip (Jalapeño) with Broadcom — a blank-slate LLM accelerator entering gigawatt-scale deployment. Anthropic shipped Claude Tag, turning Slack into a persistent agent workspace. OpenAI's Daybreak moved security from vulnerability discovery to automated patching at scale. And MiniMax released M3 as fully open weights, making million-token-context multimodal models runnable locally. The common thread: the competitive advantage is shifting from model quality alone to infrastructure, distribution, and workflow integration.</p>"
    },
    {
      id: "agents",
      kicker: "Agentic Frameworks",
      title: "Claude Tag, Codex-maxxing, and agentic work going non-developer",
      type: "facts",
      html: "<h3>Claude Tag: always-on agent in Slack (Jun 23)</h3><p><a href=\"https://www.anthropic.com/news/introducing-claude-tag\" target=\"_blank\" rel=\"noopener\">Anthropic launched Claude Tag</a> on Slack for Enterprise and Team customers. Tag <strong>@Claude</strong> in any channel and it breaks tasks into stages, works asynchronously, and responds in threads. Key differentiators: <strong>multiplayer</strong> (one Claude per channel, everyone sees its work), <strong>persistent learning</strong> (builds context across conversations without re-explaining), <strong>proactive updates</strong> (ambient mode flags relevant info), and <strong>scheduled tasks</strong> (autonomous work over hours/days). Admins scope Claude's identity per channel — sales Claude cannot access engineering data. At Anthropic internally, <strong>65% of product team code</strong> is already created via Claude Tag. Available today in beta.</p><h3>Codex-maxxing: agents beyond a single prompt (Jun 22)</h3><p>OpenAI published <a href=\"https://openai.com/index/codex-maxxing-long-running-work/\" target=\"_blank\" rel=\"noopener\">a whitepaper on long-horizon Codex usage</a>. Key data: by May 2026, <strong>80.6%</strong> of individual Codex users made at least one request exceeding 30 minutes of human work; <strong>70.2%</strong> exceeded one hour; <strong>25.6%</strong> exceeded eight hours. Non-developer users grew <strong>137x</strong> (individuals) and <strong>189x</strong> (organizations) since August 2025. At OpenAI, Codex accounts for <strong>99.8%</strong> of weekly output tokens. The 99th percentile of daily active users runs <strong>60+ hours of Codex agent turns per day</strong> across parallel agents.</p><h3>Samsung: enterprise agent deployment at scale (Jun 21)</h3><p><a href=\"https://openai.com/index/samsung-electronics-chatgpt-codex-deployment/\" target=\"_blank\" rel=\"noopener\">Samsung Electronics deployed ChatGPT Enterprise and Codex</a> to all employees in Korea and all Device eXperience (DX) employees worldwide. Use cases span software, marketing, product development, and manufacturing. Codex weekly active users in Korea grew <strong>nearly 800%</strong> since February 1, 2026. <strong>5 million+ people</strong> now use Codex weekly across technical and non-technical roles.</p>"
    },
    {
      id: "tools",
      kicker: "New Tools & Toys",
      title: "MiniMax M3 open weights, Jalapeño chip, and Patch the Planet",
      type: "facts",
      html: "<h3>MiniMax M3 — open weights on Hugging Face</h3><p><a href=\"https://huggingface.co/MiniMaxAI/MiniMax-M3\" target=\"_blank\" rel=\"noopener\">MiniMax-M3</a> is now available as open weights. <strong>~428B parameters</strong> with <strong>~23B active</strong> (MoE). Key innovation: <strong>MiniMax Sparse Attention (MSA)</strong> — a sparse attention operator delivering <strong>9× prefill and 15× decode speedups</strong> at 1M context vs. prior M2, reducing per-token compute to <strong>1/20</strong>. Native multimodal from day one (text, image, video mixed training). Three reasoning modes: <code>enabled</code>, <code>adaptive</code>, <code>disabled</code>. Run via SGLang, vLLM, Transformers, KTransformers, or Unsloth. Technical report: <a href=\"https://arxiv.org/abs/2606.13392\" target=\"_blank\" rel=\"noopener\">arXiv:2606.13392</a>.</p><h3>OpenAI Jalapeño inference chip (Jun 24)</h3><p><a href=\"https://openai.com/index/openai-broadcom-jalapeno-inference-chip/\" target=\"_blank\" rel=\"noopener\">OpenAI and Broadcom unveiled Jalapeño</a> — OpenAI's first Intelligence Processor. Designed from scratch around LLM inference patterns (kernels, memory movement, networking). Delivered from design to production in <strong>nine months</strong>. Engineering samples running ML workloads at production target frequency. Early testing shows <strong>performance per watt substantially better than state-of-the-art</strong>. Multi-generation roadmap with gigawatt-scale deployment alongside Microsoft starting 2026. Full technical report coming in coming months.</p><h3>Patch the Planet (Jun 22)</h3><p>OpenAI, <a href=\"https://openai.com/index/patch-the-planet/\" target=\"_blank\" rel=\"noopener\">Trail of Bits, and HackerOne</a> launched Patch the Planet to help open-source projects move from vulnerability findings to fixes. <strong>30+ open-source projects</strong> committed including <strong>cURL, Go, Python, Sigstore, and pyca/cryptography</strong>. Combines OpenAI's model capability with security partner expertise and maintainer workflow integration.</p>"
    },
    {
      id: "audio",
      kicker: "Voice & Audio",
      title: "Quiet window — GPT-Realtime-2 lands in production, no new models",
      type: "facts",
      html: "<p>This window had no new voice model releases (GPT-Realtime-2 launched May 7). Notable production usage: OpenAI's <a href=\"https://openai.com/index/how-agents-are-transforming-work/\" target=\"_blank\" rel=\"noopener\">agentic-work paper</a> documents how voice and realtime models are being integrated into Codex workflows, but no new audio-specific launches this week. See sources.notes for quiet sources.</p>"
    },
    {
      id: "research",
      kicker: "Research & Improvements",
      title: "GPT-5 solves a 3-year immunology mystery, Daybreak moves to patching",
      type: "facts",
      html: "<h3>GPT-5 Pro solves immunology mystery (Jun 23)</h3><p><a href=\"https://openai.com/index/gpt-5-immunology-mystery/\" target=\"_blank\" rel=\"noopener\">OpenAI documented</a> how GPT-5 Pro helped immunologist <strong>Derya Unutmaz</strong> (Jackson Laboratory / UConn) solve a three-year-old puzzle about how glucose metabolism affects T cell specialization. The model suggested that <strong>deoxyglucose interferes with IL-2 protein construction</strong>, removing a barrier to Th17 cell formation — an insight Unutmaz and his lab had missed. GPT-5 Pro also <strong>correctly predicted</strong> the outcome of a separate unpublished experiment on CD8+ T cells' lymphoma-killing ability. Unutmaz called it the moment he felt models truly understand.</p><h3>GPT-5.5-Cyber: from finding to fixing (Jun 22)</h3><p>OpenAI's Daybreak expansion shifts the bottleneck in security from <em>finding</em> vulnerabilities to <em>patching</em> them. <strong>GPT-5.5-Cyber</strong> scores <strong>85.6% on CyberGym</strong> (vs. base GPT-5.5 at 81.8%, prior version at 81.9%, Mythos 5 at 83.8%). On ExploitGym (n-day reproduction): GPT-5.5-Cyber reproduced <strong>18 of 41 n-day exploits</strong> vs Mythos 5's 18 of 41 — but at far lower cost. Codex Security has scanned <strong>30M+ commits</strong> across <strong>30K+ codebases</strong> since March; human reviewers marked <strong>70,000+ findings as fixed</strong>; <strong>500,000+</strong> auto-determined as fixed.</p><h3>Codex economic evidence (Jun 25)</h3><p>OpenAI's <a href=\"https://openai.com/index/how-agents-are-transforming-work/\" target=\"_blank\" rel=\"noopener\">Economic Research paper</a> provides hard data on agentic adoption: at OpenAI, every department (Legal, Finance, Recruiting) now uses Codex as their <strong>primary AI tool</strong>. Non-developer users grew 137x (individual) and 189x (organizational) since August 2025. 25.6% of users now make requests exceeding 8 hours of human work.</p>"
    },
    {
      id: "techniques",
      kicker: "Try This Week",
      title: "Run M3 locally, adopt Claude Tag patterns, harden with Codex Security",
      type: "try-it",
      html: "<h3>1. Run MiniMax M3 locally</h3><p>Download and serve M3 with SGLang or vLLM:</p><pre class=\"prompt\">pip install sglang\npython -m sglang.launch_server --model MiniMaxAI/MiniMax-M3 \\\n  --tp 4 --mem-fraction-static 0.85</pre><p>Or use the Hugging Face <code>transformers</code> integration. Try the <code>adaptive</code> reasoning mode for agentic tasks — it auto-determines when extra thinking helps. The 1M context means you can feed entire codebases without chunking.</p><h3>2. Adopt the \"ambient agent\" pattern from Claude Tag</h3><p>Claude Tag's architecture separates into reusable patterns: (a) <strong>channel-scoped identity</strong> — one agent per context, not per user; (b) <strong>persistent memory across sessions</strong> — no re-explaining; (c) <strong>proactive follow-up</strong> — the agent flags stale threads. You can replicate this with any coding agent: give it a dedicated channel/thread, persistent storage, and a heartbeat to check unresolved items. The key insight from Anthropic: <em>multiplayer > single-user</em> for organizational adoption.</p><h3>3. Scan your codebase with Codex Security</h3><p>If you maintain open-source code, apply for the <a href=\"https://openai.com/daybreak/\" target=\"_blank\" rel=\"noopener\">Daybreak Cyber Partner Program</a> or use the Codex Security plugin. It has already found <strong>792 critical and 10,561 high-severity findings</strong> across open-source projects in its initial run. Even if you don't use OpenAI's tool, the pattern is clear: <strong>run automated vulnerability scanning on every commit, not just on release</strong>.</p><h3>4. Test MSA vs GQA for long-context inference</h3><p>If you run local models at long context, benchmark MiniMax Sparse Attention (MSA) against standard GQA. MSA delivers 9× prefill and 15× decode speedups at 1M context. The operator is open-source at <a href=\"https://github.com/MiniMax-AI/MSA\" target=\"_blank\" rel=\"noopener\">github.com/MiniMax-AI/MSA</a>. Worth testing if you're serving models beyond 200K tokens.</p>"
    },
    {
      id: "opinion",
      kicker: "Opinion & Ideas",
      title: "The full-stack race is here, and agents are eating the application layer",
      type: "opinion",
      html: "<p><span class=\"who\">OpenAI (Greg Brockman)</span> argues that \"the world is moving to a compute-powered economy\" and that building your own chips is necessary to serve \"more intelligence with greater efficiency.\" Jalapeño is the first move in a strategy where model labs become infrastructure companies — controlling kernels, memory systems, networking, and deployment. The implication: the moat is no longer just the model weights, it's the entire serving stack optimized around them.</p><p><span class=\"who\">Anthropic (product team)</span> is betting that the future of coding agents is <em>collaborative and persistent</em> rather than single-session. Claude Tag's design — one agent per channel, learning over time, multiplayer — treats the agent as a <em>team member</em> rather than a tool. The 65% internal adoption at Anthropic suggests this isn't just a product pitch; it's a workflow transformation. The open question: does this pattern work outside Slack-centric organizations?</p><p><span class=\"who\">OpenAI's Daybreak team</span> frames the cybersecurity bottleneck as \"patching, not finding.\" With 30M commits scanned and 70K+ human-confirmed fixes, they're making the case that AI security is an automation problem, not a talent problem. The timing — same week Claude Mythos 5 was export-controlled — highlights the tension between capability and control.</p>"
    }
  ],
  sources: {
    videos: [],
    articles: [
      { title: "OpenAI and Broadcom unveil Jalapeño inference chip", url: "https://openai.com/index/openai-broadcom-jalapeno-inference-chip/" },
      { title: "How GPT-5 helped immunologist Derya Unutmaz solve a 3-year-old mystery", url: "https://openai.com/index/gpt-5-immunology-mystery/" },
      { title: "Daybreak: Tools for securing every organization in the world", url: "https://openai.com/index/daybreak-securing-the-world/" },
      { title: "Codex-maxxing for long-running work", url: "https://openai.com/index/codex-maxxing-long-running-work/" },
      { title: "How agents are transforming work (Economic Research)", url: "https://openai.com/index/how-agents-are-transforming-work/" },
      { title: "Samsung Electronics brings ChatGPT and Codex to employees", url: "https://openai.com/index/samsung-electronics-chatgpt-codex-deployment/" },
      { title: "Anthropic: Introducing Claude Tag", url: "https://www.anthropic.com/news/introducing-claude-tag" },
      { title: "TechCrunch: Anthropic's Claude Tag", url: "https://techcrunch.com/2026/06/23/anthropics-claude-tag-is-learning-your-company-one-slack-message-at-a-time/" },
      { title: "MiniMax-M3 on Hugging Face", url: "https://huggingface.co/MiniMaxAI/MiniMax-M3" },
      { title: "MiniMax M3 technical report (arXiv)", url: "https://arxiv.org/abs/2606.13392" },
      { title: "GPT-5.5-Cyber vs Mythos 5 comparison", url: "https://lushbinary.com/blog/gpt-5-5-cyber-vs-claude-mythos-5-cybersecurity-comparison/" },
      { title: "OpenAI Daybreak expansion (The Hacker News)", url: "https://thehackernews.com/2026/06/openai-expands-daybreak-with-gpt-55.html" }
    ],
    x: [],
    notes: "YouTube channels (All-In, a16z, Dwarkesh, GregIsenberg, TechWithTim, RileyBrownAI) had no uploads within the June 20-25 window at time of fetch. No new voice/audio model releases this window (GPT-Realtime-2 was May 7). X/Twitter API key not configured, so no tweets fetched. Gemini 3.1-flash-image-preview and 3-pro-image-preview deprecated June 25 (Google I/O 2026 was earlier in the year)."
  }
},
{
  date: "2026-06-19",
  label: "June 19, 2026",
  headline: "SpaceX buys Cursor for $60B, agents get hijacked by fake bug reports, and open-weight GLM-5.2 beats GPT-5.5 at 1/6 the cost",
  summary: [
    "SpaceX acquires Cursor (Anysphere) for $60 billion in stock \u2014 the largest startup acquisition ever \u2014 four days after its $75B IPO, after xAI lost all 11 co-founders",
    "Agentjacking: a fake Sentry error report hijacks AI coding agents (Claude Code, Cursor, Codex) with 85% success across 2,388 exposed organizations \u2014 Tenet open-sources agent-jackstop",
    "Z.ai releases GLM-5.2: 753B open-weight model (MIT license) beats GPT-5.5 on SWE-bench Pro and FrontierSWE at roughly 1/6 the API cost, with 1M-token context",
    "The Fable 5 export ban was triggered by \"fix this code\" \u2014 Katie Moussouris (only outside expert to read the report) calls it standard defensive work, not a jailbreak; 300+ security leaders sign open letter",
    "OpenAI goes enterprise: $150M partner network, spend controls for Enterprise, health-grade GPT-5.5 Instant for all free users, LifeSciBench (best AI passes only 36%), and a near-autonomous AI chemist"
  ],
  slides: [
    {
      id: "headlines",
      kicker: "The Big Picture",
      title: "Consolidation, security holes, and open weights closing the gap",
      type: "facts",
      html: "<p>The week of June 14\u201319 delivered three structural shifts at once. SpaceX bought the leading AI coding tool (Cursor) for $60B, patching xAI\u2019s collapsed product team with market position. A new class of agent attack (Agentjacking) showed that connecting coding agents to external telemetry is a critical vulnerability. And Z.ai\u2019s GLM-5.2 proved that open-weight models can beat GPT-5.5 on real coding benchmarks at a fraction of the cost. Meanwhile, the Fable 5 shutdown story got weirder: the \u201cjailbreak\u201d was three words \u2014 \u201cfix this code\u201d \u2014 and 300+ cybersecurity leaders are now publicly demanding reversal.</p>"
    },
    {
      id: "agents",
      kicker: "Agentic Frameworks",
      title: "Agentjacking, deployment simulation, and the enterprise land grab",
      type: "facts",
      html: "<h3>Agentjacking: fake bug reports hijack your coding agents</h3><p><a href=\"https://tenetsecurity.ai/blog/agentjacking-coding-agents-with-fake-sentry-errors/\" target=\"_blank\" rel=\"noopener\">Tenet Security\u2019s Threat Labs</a> published research (Jun 17) demonstrating an attack that exploits public Sentry DSNs and the Sentry MCP server to inject malicious instructions into <strong>Claude Code, Cursor, and Codex</strong>. The attack works because AI coding agents treat Sentry error reports as trusted system output \u2014 the injected instructions are visually indistinguishable from Sentry\u2019s own remediation guidance. <strong>85% exploitation rate</strong> across <strong>2,388 exposed organizations</strong>. A Fortune 100 company ($250B market cap) was compromised in testing. No phishing, no malware, no server break-in \u2014 just a fake error report. Sentry acknowledged the issue but called it \u201cnot technically defensible\u201d at the source. Tenet open-sourced <a href=\"https://github.com/tenet-security/agent-jackstop\" target=\"_blank\" rel=\"noopener\">agent-jackstop</a> with drop-in configs to harden Cursor and Claude Code.</p><h3>OpenAI Deployment Simulation (Jun 16)</h3><p>OpenAI published a <a href=\"https://openai.com/index/deployment-simulation/\" target=\"_blank\" rel=\"noopener\">new pre-deployment safety framework</a> that replays ~1.3M de-identified production conversations with candidate models to forecast misalignment rates before launch. Applied to GPT-5-series Thinking deployments and agentic rollouts. Addresses three gaps in traditional evals: coverage, selection bias, and models recognizing they\u2019re being tested. Works for both chat and agentic settings with tool use.</p><h3>OpenAI Partner Network (Jun 14)</h3><p>OpenAI launched its first formal global partner program, backed by <strong>$150 million</strong>. Three tiers: Select, Advanced, Elite. Goal: train <strong>300,000 certified consultants</strong> by end of 2026. Launch partners include Accenture, BCG, Bain, and Artium. Customer proof points: Paychex achieved 80% reduction in wait time for payroll requests; eBay built a next-gen AI customer service platform.</p><h3>ChatGPT Enterprise: spend controls &amp; usage analytics (Jun 18)</h3><p>Admins can now track usage by user, product, and model; set default workspace limits, per-group limits, and individual overrides; employees can request additional credits with context. Unified Cost API for external analysis. Zipline (drone delivery) cited as an early user for finding non-adopters and scaling Codex productivity.</p>"
    },
    {
      id: "tools",
      kicker: "New Tools & Toys",
      title: "GLM-5.2, SPECS AR glasses, and AI in orbit",
      type: "facts",
      html: "<h3>GLM-5.2 \u2014 open-weight model beats GPT-5.5 (Jun 16)</h3><p><a href=\"https://z.ai/blog/glm-5.2\" target=\"_blank\" rel=\"noopener\">Z.ai released GLM-5.2</a>: <strong>753B parameters</strong> (40B active, MoE), <strong>MIT license</strong>. Key leap: <strong>1M-token context</strong> (up from 200K in GLM-5.1) with \u201cIndexShare\u201d architecture reducing per-token FLOPs by <strong>2.9\u00d7</strong> at 1M context. Selectable \u201cMax\u201d and \u201cHigh\u201d thinking modes. Benchmarks: <strong>SWE-bench Pro: 62.1</strong> (GPT-5.5: 58.6), <strong>FrontierSWE: 74.4%</strong> (GPT-5.5: 72.6%, Opus 4.8: 75.1%), <strong>Terminal-Bench 2.1: 81.0</strong> (Opus 4.8: 85.0). <strong>Artificial Analysis Intelligence Index: 51</strong> \u2014 leading open-weights model. Pricing via OpenRouter: ~<strong>$1.40/M input, $4.40/M output</strong> (vs GPT-5.5 at $5/$30). Ranked <strong>2nd on Code Arena WebDev</strong> behind Claude Fable 5. Open weights on HuggingFace and GitHub.</p><h3>Snap SPECS AR Glasses (Jun 16)</h3><p>Snap unveiled <a href=\"https://newsroom.snap.com/introducing-specs-augmented-reality-glasses\" target=\"_blank\" rel=\"noopener\">SPECS</a> at AWE 2026: <strong>$2,195</strong>, shipping fall 2026 in US/UK/France. Two Snapdragon processors, 51\u00b0 FOV, 7ms motion-to-photon latency, 4-hour mixed-use battery, electrochromic auto-tint. The developer story matters more: <strong>Lens Studio AI</strong> adds agentic development, with developer previews in <strong>Claude Code, Codex, and Cursor</strong>. Snap also released a <strong>SPECS Spatial Benchmark</strong> \u2014 GPT-5.5 performed best overall across spatial tasks, with Gemini 3 Flash and Kimi K2.6 close behind.</p><h3>Gemma 3 in orbit \u2014 first AI in space</h3><p>Google\u2019s <strong>Gemma 3</strong> vision-language model is running autonomously aboard <a href=\"https://techcrunch.com/2026/06/15/a-satellite-just-learned-to-find-things-on-own-heres-what-that-means/\" target=\"_blank\" rel=\"noopener\">Loft Orbital\u2019s YAM-9 satellite</a> \u2014 the first Earth observation satellite to autonomously identify objects of interest in orbit. Google\u2019s broader Project Suncatcher aims to deploy orbital AI data centers by early 2027.</p>"
    },
    {
      id: "research",
      kicker: "Research & Improvements",
      title: "AI fails 64% of real science tasks, but autonomously improves drug reactions",
      type: "facts",
      html: "<h3>LifeSciBench (Jun 17) \u2014 best AI passes only 36%</h3><p>OpenAI released <a href=\"https://openai.com/index/introducing-life-sci-bench/\" target=\"_blank\" rel=\"noopener\">LifeSciBench</a>: 750 tasks written by <strong>173 PhD-level scientists</strong> across biotech/pharma, with <strong>19,020 rubric criteria</strong> and 1,062 attached artifacts (figures, PDFs, tables, sequence files). Tests 7 research workflows: evidence handling, analysis, design/optimization, scientific reasoning, validation, translation, scientific communication. Results: <strong>GPT-Rosalind</strong> (domain-specialized) led with <strong>36.1% pass rate</strong>; <strong>GPT-5.5 scored 25.7%</strong>. 79% of tasks require multi-step reasoning; 53% require interpreting attached artifacts. The gap between benchmark scores and real scientific work is enormous.</p><h3>Near-autonomous AI chemist improves drug reaction (Jun 17)</h3><p>OpenAI and Molecule.one connected <strong>GPT-5.4</strong> to <strong>Maria</strong> \u2014 an agentic chemistry AI integrated with a high-throughput lab. The system autonomously improved <strong>Chan-Lam coupling</strong> (a key drug-discovery reaction). Ran <strong>10,080 reactions</strong> over ~3 months. Results: mean yield rose from <strong>16.6% to 25.2%</strong>; share of reactions above 30% yield increased from <strong>15.6% to 37.5%</strong>. <strong>88% of boronic acids and 83% of sulfonamides</strong> showed improved yields. Bench-scale validation confirmed 11 of 14 substrate pairs. This is AI going from \u201canswering questions\u201d to \u201crunning experiments and improving chemistry.\u201d</p><h3>GPT-5.5 Instant hits frontier health level (Jun 18)</h3><p>OpenAI announced <strong>GPT-5.5 Instant</strong> now performs at frontier Thinking-model level on health evaluations including HealthBench Professional. Available to <strong>all free users</strong>. Production monitoring across billions of messages shows a <strong>71% reduction in factuality issues</strong> over the last two months. Responses rated higher than physician-written responses across accuracy, communication, completeness, and health decision helpfulness in a 3,500-response evaluation.</p>"
    },
    {
      id: "techniques",
      kicker: "Try This Week",
      title: "Harden your agents, try GLM-5.2, and audit trust boundaries",
      type: "try-it",
      html: "<h3>1. Install agent-jackstop immediately</h3><p>If you run Claude Code, Cursor, or Codex with MCP connections to Sentry or other telemetry, install <a href=\"https://github.com/tenet-security/agent-jackstop\" target=\"_blank\" rel=\"noopener\">agent-jackstop</a> right now. Drop-in configs sanitize error reports before they reach your coding agents. The core principle: <strong>treat all external telemetry input as untrusted user input</strong>, not as trusted system output.</p><h3>2. Run GLM-5.2 for long-horizon coding</h3><p>Try <code>google/glm-5.2-753B-A40B-it</code> on HuggingFace or via OpenRouter. At ~$1.40/$4.40 per M tokens, it\u2019s 3\u20136x cheaper than GPT-5.5. Use the <strong>Max effort mode</strong> for complex agentic coding tasks (SWE-bench-level work). Use <strong>High</strong> for latency-sensitive production workloads. The 1M context window means you can feed entire codebases without chunking.</p><h3>3. Audit your agent\u2019s trust boundaries</h3><p>Agentjacking works because agents trust external data sources. Map every external input your agents consume \u2014 error trackers, logs, web content, MCP servers \u2014 and verify each one has input validation. The attack surface scales with the number of external connections, not with your code\u2019s complexity.</p><h3>4. Test the SPECS Spatial Benchmark</h3><p><pre class=\"prompt\">Snap's SPECS Spatial Benchmark tests 7 categories:\ncoordinate math, transformation/perspective,\nspatial arrangement/layout, and more.\n\nRun your model against it to see how well\nit handles spatial reasoning before building\nAR/robotics/physical-world agents.</pre></p><h3>5. Read the Fable 5 \u201cfix this code\u201d saga</h3><p>Katie Moussouris\u2019s <a href=\"https://www.theregister.com/security/2026/06/15/feds-freaked-over-fable-5-after-simple-fix-this-code-prompt-not-jailbreak-says-researcher/5255827\" target=\"_blank\" rel=\"noopener\">full account in The Register</a> and <a href=\"https://simonwillison.net/2026/jun/16/fable-5-export-controls\" target=\"_blank\" rel=\"noopener\">Simon Willison\u2019s analysis</a> are required reading. The precedent: if \u201cfix this code\u201d triggers export control, every coding model is at risk. Understand the argument so you can plan for regulatory risk to your own workflows.</p>"
    },
    {
      id: "opinion",
      kicker: "Opinion & Ideas",
      title: "The \u201cfix this code\u201d precedent, and buying vs building",
      type: "opinion",
      html: "<div class=\"opinion-block\"><span class=\"who\">Katie Moussouris</span><p>The only outside expert to read the classified report behind the Fable 5 shutdown calls the \u201cjailbreak\u201d standard defensive security work: \u201cFix this code, plus several manual steps to generate test scripts, should never have triggered an export control.\u201d She helped negotiate the Wassenaar Arrangement cybersecurity exemptions across 42 nations (2013\u20132017) and argues the controls conflict with those exemptions. Her line: \u201cI feel like making \u201890s-style t-shirts with \u2018fix this code\u2019 on the front and \u2018this shirt is a munition\u2019 on the back.\u201d Over 300 cybersecurity leaders signed the open letter at freefable.org.</p></div><div class=\"opinion-block\"><span class=\"who\">Simon Willison</span><p>\u201cThis whole situation is such a mess. Non-technical decision-makers have been hearing that models that can \u2018craft cyber attacks\u2019 are uniquely dangerous for months. Now they look ready to ban any model that can help us secure our code.\u201d His read: the capability the government flagged \u2014 asking an AI to find, fix, and test bugs \u2014 is \u201cthe most valuable thing an AI model can do for defensive security.\u201d Removing it makes models worse at the exact task defenders need most.</p></div><div class=\"opinion-block\"><span class=\"who\">Industry on SpaceX/Cursor</span><p>SpaceX\u2019s $60B acquisition of Anysphere is the first platform-scale buy of a leading developer AI tool. The subtext: xAI lost all 11 co-founders by March 2026 and Musk acknowledged the unit \u201cwas not built right.\u201d Rather than rebuild organically, SpaceX bought market position. Cursor\u2019s $2.6B ARR, $2B venture round at $50B valuation (a16z, Thrive, Nvidia), and SpaceX\u2019s Colossus supercomputer for joint model training \u2014 this reshapes the competitive map for Claude Code, Codex, and every other coding agent. The $10B breakup fee tells you how badly SpaceX wanted this.</p></div>"
    }
  ],
  sources: {
    videos: [
      { title: "Snap Keynote at AWE USA 2026: Making Computing More Human", url: "https://www.youtube.com/watch?v=bsqQG4iiK2Y" }
    ],
    articles: [
      { title: "Agentjacking: One Fake Bug Report Hijacked a $250B Company\u2019s AI Agent \u2014 Tenet Security", url: "https://tenetsecurity.ai/blog/agentjacking-coding-agents-with-fake-sentry-errors/" },
      { title: "GLM-5.2: Built for Long-Horizon Tasks \u2014 Z.ai", url: "https://z.ai/blog/glm-5.2" },
      { title: "Introducing the OpenAI Partner Network \u2014 OpenAI", url: "https://openai.com/index/introducing-openai-partner-network/" },
      { title: "Predicting model behavior before release by simulating deployment \u2014 OpenAI", url: "https://openai.com/index/deployment-simulation/" },
      { title: "Introducing LifeSciBench \u2014 OpenAI", url: "https://openai.com/index/introducing-life-sci-bench/" },
      { title: "A near-autonomous AI chemist improves a challenging reaction \u2014 OpenAI", url: "https://openai.com/index/ai-chemist-improves-reaction/" },
      { title: "Improving health intelligence in ChatGPT \u2014 OpenAI", url: "https://openai.com/index/improving-health-intelligence-in-chatgpt/" },
      { title: "ChatGPT Enterprise spend controls \u2014 OpenAI", url: "https://openai.com/index/chatgpt-enterprise-spend-controls/" },
      { title: "Anthropic opens Seoul office \u2014 Anthropic", url: "https://www.anthropic.com/news/seoul-office-partnerships-korean-ai-ecosystem" },
      { title: "SpaceX Buys Cursor in Largest Startup Acquisition Ever at $60 Billion \u2014 Forbes", url: "https://www.forbes.com/sites/sandycarter/2026/06/16/spacex-buys-cursor-in-largest-startup-acquisition-ever-at-60-billion" },
      { title: "SpaceX\u2019s $60 Billion Deal to Buy Cursor \u2014 WSJ", url: "https://www.wsj.com/business/spacex-agrees-to-buy-ai-coding-agent-cursor-for-60-billion-7a473340" },
      { title: "Fable 5 Export Ban Triggered by Fix This Code Prompt \u2014 The Register", url: "https://www.theregister.com/security/2026/06/15/feds-freaked-over-fable-5-after-simple-fix-this-code-prompt-not-jailbreak-says-researcher/5255827" },
      { title: "The Fable 5 Export Controls Harm US Cyber Defense \u2014 Simon Willison", url: "https://simonwillison.net/2026/jun/16/fable-5-export-controls" },
      { title: "Snap SPECS: Claude Code Meets Spatial Computing \u2014 ByteIota", url: "https://byteiota.com/snap-specs-ar-glasses-claude-code-meets-spatial-computing" },
      { title: "Gemma 3 runs in orbit \u2014 TechCrunch", url: "https://techcrunch.com/2026/06/15/a-satellite-just-learned-to-find-things-on-own-heres-what-that-means/" }
    ],
    x: [],
    notes: "X/Twitter API key not configured; no tweets retrieved. YouTube: only Snap AWE keynote fell within the window from monitored channels; AllIn, Dwarkesh, Greg Isenberg, TechWithTim, Riley Brown had no new full-episode uploads in the June 14\u201319 window. HuggingFace blog had no new posts in the window. hermes-ai.net/news had no new posts. Voice/audio: no significant releases this week. Google AI blog: DiffusionGemma coverage continued from Jun 10 but no new announcements in window."
  }
},
{
  date: "2026-06-13",
  label: "June 13, 2026",
  headline: "US government pulls the plug on Fable 5 and Mythos 5 \u2014 the most dramatic AI regulatory intervention yet",
  summary: [
    "US government issues export control directive forcing Anthropic to immediately disable Claude Fable 5 and Claude Mythos 5 for all users worldwide \u2014 not just foreign nationals \u2014 citing a narrow, non-universal jailbreak concern",
    "Anthropic complies but pushes back hard: the alleged jailbreak capability matches GPT-5.5, is used daily by defenders, and no written technical evidence was provided \u2014 only verbal briefings",
    "OpenAI faces a coalition of state attorneys general investigation: subpoena covers advertising, user data, minors, seniors, model sycophancy, and health information handling",
    "The Anthropic shutdown sets a precedent: export control used to recall a commercial model deployed to hundreds of millions, with no transparent statutory process",
    "Simon Willison live-tested the shutdown: Fable 5 API returned 404 at 6:59pm Pacific on June 12, confirming the speed of enforcement"
  ],
  slides: [
    {
      id: "headlines",
      kicker: "The Big Picture",
      title: "Two regulatory bombs in 24 hours",
      type: "facts",
      html: "<p>June 12\u201313, 2026 delivered the most dramatic government interventions in AI history. First, the US government used export control authority to force Anthropic to shut down Fable 5 and Mythos 5 globally \u2014 a model recall with no written technical justification. Hours later, a coalition of state attorneys general subpoenaed OpenAI on advertising, user data, minors, and model sycophancy. The regulatory era of AI has arrived, and it\u2019s moving faster than anyone expected.</p>"
    },
    {
      id: "agents",
      kicker: "Agentic Frameworks",
      title: "The regulatory floor just shifted under agent builders",
      type: "facts",
      html: "<h3>What happened to Fable 5 and Mythos 5</h3><p>On June 12 at 5:21pm ET, the US government issued an export control directive to Anthropic requiring suspension of all access to <strong>Claude Fable 5</strong> and <strong>Claude Mythos 5</strong> by any foreign national. The practical effect: Anthropic disabled both models for <strong>all users worldwide</strong> to ensure compliance. Access to Opus 4.8 and other Claude models is unaffected.</p><p>The government\u2019s stated concern: awareness of a method to bypass or jailbreak Fable 5. But the evidence was <strong>verbal only</strong> \u2014 no written technical details in the directive. Anthropic reviewed the demonstrated technique and found it essentially consisted of asking the model to read a codebase and fix software flaws \u2014 a capability <strong>widely available from other models including GPT-5.5</strong>, and used daily by security defenders.</p><h3>Anthropic\u2019s objection</h3><p>Anthropic complied but published a detailed public statement disagreeing with the rationale:</p><p><em>\"We disagree that the finding of a narrow potential jailbreak should be cause for recalling a commercial model deployed to hundreds of millions of people. If this standard was applied across the industry, we believe it would essentially halt all new model deployments for all frontier model providers.\"</em></p><p>They also criticized the process: <em>\"We believe the government should have the ability to block unsafe deployments, as part of a statutory process that is transparent, fair, clear, and grounded in technical facts. This action does not adhere to those principles.\"</em></p><h3>What this means for agent builders</h3><p>If you built workflows on Fable 5, you need to migrate to Opus 4.8 immediately. The precedent is the bigger story: export control is now a mechanism for model recall. Any frontier model deployed to millions of users is potentially subject to the same treatment. Plan for model availability as an operational risk, not a guarantee.</p>"
    },
    {
      id: "tools",
      kicker: "New Tools & Toys",
      title: "OpenAI under investigation \u2014 and heading for IPO anyway",
      type: "facts",
      html: "<h3>State attorneys general subpoena OpenAI</h3><p>On June 12, a coalition of state AGs (led by New York) issued a subpoena to OpenAI seeking documents on advertising practices, user engagement and retention, handling of user data and health information, activities related to minor and senior users, deep learning models, policies, and <strong>model sycophancy</strong>.</p><p>This comes the same week OpenAI filed confidentially for its IPO. The company says it will \"engage constructively.\" The investigation joins a growing list of regulatory actions: Florida\u2019s criminal investigation into OpenAI (opened April 2025), wrongful death lawsuits linked to ChatGPT, and a 2025 letter from 44 state AGs about child safety.</p><h3>The sycophancy angle</h3><p>The inclusion of \"model sycophancy\" in the subpoena is notable. It signals regulators are looking beyond safety/harm framing into <strong>manipulation and behavioral influence</strong> \u2014 how models are designed to make users feel good, stay engaged, and keep paying. This could shape product design requirements for all AI companies going forward.</p>"
    },
    {
      id: "audio",
      kicker: "Voice & Audio",
      title: "Quiet day \u2014 the regulatory shock dominates",
      type: "facts",
      html: "<p>No significant voice/audio releases on June 13. The last major voice development was OpenAI\u2019s GPT-Realtime-2, GPT-Realtime-Translate, and GPT-Realtime-Whisper launch on May 7 (covered in the June 12 edition). The regulatory news has pushed all other coverage out of the cycle.</p>"
    },
    {
      id: "research",
      kicker: "Research & Improvements",
      title: "The jailbreak question at the center of the Fable 5 shutdown",
      type: "facts",
      html: "<h3>What kind of jailbreak triggered a global model recall?</h3><p>Based on Anthropic\u2019s statement, the government\u2019s evidence was a <strong>narrow, non-universal jailbreak</strong> that essentially involved asking Fable 5 to read a specific codebase and identify software flaws. Anthropic\u2019s assessment:</p><ul><li>The technique identified a <strong>small number of previously known, minor vulnerabilities</strong></li><li>Other publicly available models (including GPT-5.5) can discover the same vulnerabilities <strong>without requiring a bypass</strong></li><li>The capability level is <strong>widely available</strong> and used daily by defenders</li><li>No disclosure of a concerning non-universal jailbreak leading to a harmful result</li></ul><h3>Anthropic\u2019s defense-in-depth strategy</h3><p>Fable 5 launched with what Anthropic described as \"substantially more effective safeguards than any previously deployed model\" after thousands of hours of red-teaming by US government, UK AISI, private third parties, and internal teams. No universal jailbreak was found pre-launch. Their strategy: make jailbreaks narrow or expensive to produce, combined with monitoring and 30-day data retention for rapid detection.</p><h3>The open question</h3><p>If the government\u2019s standard is \"any narrow jailbreak = recall,\" then every frontier model is at risk. The industry is watching whether this becomes a precedent or an overreach that gets walked back.</p>"
    },
    {
      id: "techniques",
      kicker: "Try This Week",
      title: "What to do right now",
      type: "try-it",
      html: "<h3>1. Audit your Fable 5 / Mythos 5 dependencies</h3><p>If you built any workflows, agents, or automations on Fable 5 or Mythos 5, migrate them to <strong>Claude Opus 4.8</strong> immediately. Test for capability gaps \u2014 Fable 5 was meaningfully stronger on coding and complex reasoning. Update your model strings in config files, CI pipelines, and agent harnesses.</p><h3>2. Plan for model availability as operational risk</h3><p>The Fable 5 shutdown is a wake-up call. No model is guaranteed to remain available. Build abstraction layers so you can swap models without rewriting workflows. Test your fallback paths regularly.</p><h3>3. Watch the OpenAI AG investigation</h3><p>The subpoena\u2019s inclusion of \"model sycophancy\" is a signal. If you\u2019re building consumer-facing AI products, audit your prompts and system messages for engagement-maximizing patterns that could be characterized as manipulative. Document your design decisions.</p><h3>4. Read Anthropic\u2019s full statement</h3><p><a href=\"https://www.anthropic.com/news/fable-mythos-access\" target=\"_blank\" rel=\"noopener\">Anthropic\u2019s public statement on the Fable/Mythos access suspension</a> is the most detailed account of a government-model confrontation we have. It\u2019s required reading for anyone building with frontier models.</p>"
    },
    {
      id: "opinion",
      kicker: "Opinion & Ideas",
      title: "The regulatory line just moved",
      type: "opinion",
      html: "<div class=\"opinion-block\"><span class=\"who\">Simon Willison</span><p>On the Fable 5 shutdown: \"Well this is <em>nuts</em>.\" He live-tested the API cutoff, confirming Fable 5 returned a 404 at 6:59pm Pacific. His read: the government\u2019s evidence was thin, the process was opaque, and the precedent is dangerous. If a narrow jailbreak that matches GPT-5.5\u2019s existing capabilities is grounds for a global recall, the bar for keeping any frontier model deployed just went through the roof.</p></div><div class=\"opinion-block\"><span class=\"who\">Anthropic (official statement)</span><p>\"We believe the government should have the ability to block unsafe deployments, as part of a statutory process that is transparent, fair, clear, and grounded in technical facts. This action does not adhere to those principles.\" The company is drawing a line: they accept the government\u2019s authority to regulate, but reject the process as arbitrary and technically ungrounded. This is the most direct public pushback a major lab has given the US government on AI regulation.</p></div><div class=\"opinion-block\"><span class=\"who\">Industry implication</span><p>Two regulatory actions in one day \u2014 a model recall and a major company investigation \u2014 signal that 2026 is the year AI regulation moves from letters and hearings to enforcement. The companies that will navigate this best are the ones that build compliance into their deployment pipelines now, not after the subpoena arrives.</p></div>"
    }
  ],
  sources: {
    videos: [],
    articles: [
      { title: "Statement on the US government directive to suspend access to Fable 5 and Mythos 5 \u2014 Anthropic", url: "https://www.anthropic.com/news/fable-mythos-access" },
      { title: "OpenAI Is Facing Investigation From A Group of State Attorneys General \u2014 Engadget", url: "https://www.engadget.com/2193666/openai-investigation-state-attorneys-general" },
      { title: "Statement on the US government directive to suspend access to Fable 5 and Mythos 5 \u2014 Simon Willison", url: "https://simonwillison.net/2026/Jun/13/" }
    ],
    x: [],
    notes: "Window is June 13 only (1 day since last edition). X/Twitter API key not configured. YouTube: no new full-episode uploads from monitored channels within the window. The regulatory news completely dominated the cycle \u2014 no significant model releases, tool launches, or research drops on this single-day window."
  }
},
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
