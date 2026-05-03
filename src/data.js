// ─────────────────────────────────────────────
//  100X Agentic Engineering — Content Data File
//  Structured teaching format: What → How → Why
//  All copy, code samples, and structured data
//  lives here. Components in App.jsx stay pure.
// ─────────────────────────────────────────────

export const META = {
  title: `100X Agentic Engineering`,
  logoLabel: `Agentic Engineering Bible`,
  eyebrow: `Complete Guide · Basics to Mastery`,
  heroSub:
    `A structured, teaching-style guide to agentic coding — from foundational concepts to advanced multi-agent orchestration. Synthesized from Anthropic's 2026 research, Boris Cherny's workflow, Addy Osmani's framework, and top community intelligence.`,
  footerNote: `April 2026 Edition · Teaching Guide\nSynthesized from Anthropic, Boris Cherny & Addy Osmani.\nShare freely. Build better systems.`,
  sidebarMeta:
    `Start from Section 00 if you're new to agentic coding. Each section builds on the previous — from "what is this?" to "how do I master it?"`,
}

export const HERO_STATS = [
  { n: `55%`, label: `Faster task completion (GitHub study, n=95)` },
  { n: `72–77%`, label: `Real bugs solved autonomously (SWE-bench Verified)` },
  { n: `73%`, label: `Developers report staying in flow (2,000+ surveyed)` },
  { n: `87%`, label: `Less mental effort on repetitive tasks` },
]

export const NAV_ITEMS = [
  { id: `agentic-coding`, num: `00`, label: `What is Agentic Coding?` },
  { id: `claude-code`, num: `01`, label: `Claude Code` },
  { id: `copilot`, num: `02`, label: `GitHub Copilot` },
  { id: `agents-landscape`, num: `03`, label: `AI Coding Agents` },
  { id: `multiagent`, num: `04`, label: `Multi-Agent Systems` },
  { id: `context`, num: `05`, label: `Context Engineering` },
  { id: `plan-verify`, num: `06`, label: `Plan → Verify` },
  { id: `claudemd`, num: `07`, label: `CLAUDE.md Mastery` },
  { id: `selfimprove`, num: `08`, label: `Self-Improvement Loop` },
  { id: `patterns`, num: `09`, label: `Orchestration Patterns` },
  { id: `mcp`, num: `10`, label: `MCP + A2A Protocols` },
  { id: `git`, num: `11`, label: `Git Discipline` },
  { id: `tools`, num: `12`, label: `Tools & Stack` },
  { id: `graphify`, num: `13`, label: `Graphify & Knowledge Graphs` },
  { id: `security`, num: `14`, label: `Security & Safety` },
  { id: `antipatterns`, num: `15`, label: `Anti-Patterns` },
  { id: `mindset`, num: `16`, label: `Mindset Shifts` },
  { id: `hierarchy`, num: `17`, label: `Engineering Hierarchy` },
  { id: `action`, num: `18`, label: `Action Plan` },
]

// ─────────────────────────────────────────────
//  SECTIONS
// ─────────────────────────────────────────────

export const SECTIONS = [

  // ══════════════════════════════════════════
  //  00 — WHAT IS AGENTIC CODING?
  // ══════════════════════════════════════════
  {
    id: `agentic-coding`,
    sectionNum: `00`,
    title: `What is Agentic Coding?`,
    subtitle: `The paradigm shift from writing code to orchestrating AI agents`,
    type: `teaching`,
    intro: `Agentic coding is the biggest shift in software engineering since the IDE. Instead of writing every line yourself — or using AI for autocomplete — you design systems where AI agents autonomously plan, write, test, debug, and deploy code on your behalf.`,
    blocks: [
      {
        type: `what`, icon: `📘`, label: `What It Is`,
        text: `Agentic coding is the practice of using AI agents that independently execute multi-step programming tasks. Unlike copilot-style autocomplete that suggests one line at a time, agentic tools can read your entire codebase, plan an approach, write code across multiple files, run tests, fix errors, and deliver working features — all from a single natural language instruction.`,
        bullets: [
          `Autonomous execution — agents plan and code without step-by-step guidance`,
          `Multi-file awareness — agents understand your full project context`,
          `Tool use — agents run shell commands, tests, linters, and git operations`,
          `Self-correction — agents detect errors and fix them iteratively`,
          `Parallel operation — multiple agents work on different tasks simultaneously`,
        ],
      },
      {
        type: `how`, icon: `⚙️`, label: `How It Works`,
        text: `You describe what you want built in natural language. The agent reads relevant files, plans its approach, writes code, runs tests, and iterates until complete. You review the output and approve or request changes. The full cycle — spec to working code — happens in minutes, not hours.`,
        bullets: [
          `You write a clear task specification — the more precise, the better the output`,
          `The agent reads your codebase, docs, and configuration files (like CLAUDE.md)`,
          `It creates a plan — which files to modify, what tests to write, what to verify`,
          `It executes: writing code, running commands, fixing errors automatically`,
          `You review, provide feedback, and approve the final result`,
        ],
      },
      {
        type: `why`, icon: `💡`, label: `Why It Matters`,
        text: `GitHub's controlled study with 95 professional developers found 55% faster task completion with AI coding tools. The key insight: the best engineers aren't writing better prompts — they're designing better systems. Your role shifts from "person who writes code" to "person who designs systems that write code."`,
        bullets: [
          `55% faster task completion in controlled studies (GitHub research, P=.0017)`,
          `One engineer can manage 10\u201315 parallel coding sessions simultaneously`,
          `Multi-agent isolation significantly outperforms single-agent approaches`,
          `Every correction encoded in config compounds into permanent productivity gains`,
          `The skill ceiling is system design quality, not typing speed`,
        ],
      },
    ],
    callout: {
      label: `The Mental Model Shift`,
      text: `Stop thinking "how do I code this?" and start thinking "how do I specify this so precisely that an agent can code it correctly?" Your value as an engineer is now in specification quality, system design, and verification — not typing speed.`,
    },
  },

  // ══════════════════════════════════════════
  //  01 — CLAUDE CODE
  // ══════════════════════════════════════════
  {
    id: `claude-code`,
    sectionNum: `01`,
    title: `Claude Code`,
    subtitle: `Anthropic's terminal-based agentic AI for software engineering`,
    type: `teaching`,
    intro: `Claude Code is the most powerful agentic coding tool available in 2026. It lives in your terminal and can autonomously execute complex, multi-step programming tasks across your entire codebase.`,
    blocks: [
      {
        type: `what`, icon: `📘`, label: `What It Is`,
        text: `Claude Code is Anthropic's terminal-based agentic AI. It runs in your terminal with full access to your filesystem, shell, and git. Powered by Claude Opus and Sonnet models, it can read/write files, execute commands, search codebases, manage branches, run tests, and coordinate sub-agents — all autonomously.`,
        bullets: [
          `Terminal-native — full system access (files, shell, git, processes)`,
          `Powered by Claude Opus 4 (complex reasoning) and Sonnet 4 (fast tasks)`,
          `Configurable via CLAUDE.md — persistent project-specific instructions`,
          `Sub-agent spawning — delegate subtasks to specialist agents`,
          `MCP integration — connect to databases, APIs, and external tools`,
        ],
      },
      {
        type: `how`, icon: `⚙️`, label: `How It Works`,
        text: `Launch with the claude command in any project directory. Describe your task. Claude reads relevant files, plans the approach, executes changes, runs tests, and iterates. Configure behavior with CLAUDE.md and .claude/ folder structure.`,
        bullets: [
          `Install: npm install -g @anthropic-ai/claude-code`,
          `Launch: cd your-project && claude`,
          `Task: "Refactor the auth module to use JWT RS256"`,
          `Configure: CLAUDE.md, .claude/commands/, .claude/agents/, .claude/hooks/`,
          `Parallel: spawn sub-agents for multi-task execution`,
        ],
        code: {
          label: `Getting started with Claude Code`,
          content: `# Install Claude Code globally
npm install -g @anthropic-ai/claude-code

# Start a session in your project
cd my-project && claude

# Give it a task
> "Add rate limiting to the API routes in src/api/"
> "Write comprehensive tests for the auth module"
> "Refactor the database layer to use connection pooling"

# Use Plan Mode for complex tasks (3+ files)
> /plan "Migrate the REST API to GraphQL"

# Use slash commands for reusable workflows
> /project:review    # your custom code review
> /project:pr-prep   # prepare a PR automatically`,
        },
      },
      {
        type: `why`, icon: `💡`, label: `Why It Matters`,
        text: `Claude Code is the go-to tool for long autonomous tasks, codebase-wide refactors, multi-agent orchestration, and MCP-connected workflows. Terminal access means it can do anything you can do — but faster and in parallel.`,
        bullets: [
          `Best for: autonomous multi-step tasks, refactors, orchestration`,
          `Sub-agents enable parallel execution with isolated context windows`,
          `CLAUDE.md creates a persistent "brain" surviving session resets`,
          `Hooks (.claude/hooks/) automate linting, testing, validation`,
          `MCP servers connect Claude to databases, GitHub, external APIs`,
        ],
      },
    ],
    callout: {
      label: `Pro Tip`,
      text: `Run /init on your project to auto-generate a CLAUDE.md. Then refine it to ~100 lines. This single file will 2\u20133\u00D7 your output quality by giving Claude the right context every session.`,
      variant: `info`,
    },
  },

  // ══════════════════════════════════════════
  //  02 — GITHUB COPILOT
  // ══════════════════════════════════════════
  {
    id: `copilot`,
    sectionNum: `02`,
    title: `GitHub Copilot`,
    subtitle: `AI coding assistant — inline, chat, and autonomous agent modes`,
    type: `teaching`,
    intro: `GitHub Copilot is the most widely adopted AI coding tool, integrated directly into your IDE. It offers three distinct modes covering everything from quick autocomplete to fully autonomous coding.`,
    blocks: [
      {
        type: `what`, icon: `📘`, label: `What It Is`,
        text: `GitHub Copilot is an AI assistant built into VS Code, JetBrains, Neovim, and other IDEs. It operates in three modes: inline autocomplete (suggests code as you type), chat (answer questions and generate code), and Coding Agent (cloud-based, works on GitHub issues and creates PRs autonomously).`,
        bullets: [
          `Inline mode — suggests code completions as you type, accept with Tab`,
          `Chat mode — ask questions, generate code blocks, explain code, fix bugs`,
          `Agent mode — autonomous in-editor coding with terminal and tool access`,
          `Coding Agent — cloud-based, assigns to GitHub issues, creates full PRs`,
          `Multi-model — uses GPT-4o, Claude, and Gemini models`,
        ],
      },
      {
        type: `how`, icon: `⚙️`, label: `How It Works`,
        text: `Inline: start typing and Copilot suggests completions — Tab to accept. Chat: open the panel and ask questions or request code. Agent mode: give a task and Copilot edits files, runs commands, iterates. Coding Agent: assign a GitHub issue, Copilot creates a branch, writes code, opens a PR.`,
        bullets: [
          `Inline: fastest iteration for known patterns — just Tab to accept`,
          `Chat: "@workspace explain the auth module" or "generate a test for this"`,
          `Agent mode: "add validation to all API endpoints" — edits + terminal`,
          `Coding Agent: label a GitHub issue \u2192 Copilot works in cloud \u2192 PR appears`,
          `Custom instructions via .github/copilot-instructions.md`,
        ],
      },
      {
        type: `why`, icon: `💡`, label: `Why It Matters`,
        text: `Copilot is the fastest tool for inline suggestions and quick edits. It lives in your IDE — zero context switching. The Coding Agent works on issues while you sleep. Most productive when paired with Claude Code.`,
        bullets: [
          `Fastest inline autocomplete — removes friction from known patterns`,
          `IDE-native — no terminal switching, works in your natural flow`,
          `Coding Agent drains backlog overnight — assign issues, get PRs`,
          `Copilot + Claude Code is the most common high-productivity combo in 2026`,
          `Custom instructions file gives project context to all modes`,
        ],
      },
    ],
  },

  // ══════════════════════════════════════════
  //  03 — AI CODING AGENTS LANDSCAPE
  // ══════════════════════════════════════════
  {
    id: `agents-landscape`,
    sectionNum: `03`,
    title: `AI Coding Agents Landscape`,
    subtitle: `Cursor, Codex, Jules, Windsurf, and the broader 2026 ecosystem`,
    type: `teaching`,
    intro: `Beyond Claude Code and Copilot, the 2026 landscape includes several powerful AI coding agents. Each has different strengths — understanding the ecosystem helps you always pick the right tool.`,
    blocks: [
      {
        type: `what`, icon: `📘`, label: `The Major Players`,
        text: `The 2026 AI coding ecosystem has three categories: terminal agents (Claude Code), IDE agents (Copilot, Cursor, Windsurf), and cloud agents (Codex, Jules, Copilot Coding Agent). Each category excels at different workflows and can be combined.`,
        bullets: [
          `Cursor — IDE-native agent with visual diff review and fast iteration`,
          `OpenAI Codex — cloud agent, fire-and-forget, returns production-ready PRs`,
          `Google Jules — cloud agent for background tasks, Google ecosystem integration`,
          `Windsurf — IDE agent with Cascade flow for multi-step inline edits`,
          `Amazon Q Developer — IDE + CLI agent with strong AWS integration`,
        ],
      },
      {
        type: `how`, icon: `⚙️`, label: `How To Choose`,
        text: `IDE agents (Cursor, Windsurf) work best for synchronous, interactive coding where you see changes in real-time. Cloud agents (Codex, Jules) work asynchronously — assign a task, close your laptop, return to a PR. Terminal agents (Claude Code) offer maximum power and flexibility.`,
        bullets: [
          `Interactive coding \u2192 Cursor or Copilot (see changes as they happen)`,
          `Long autonomous tasks \u2192 Claude Code (full system access, sub-agents)`,
          `Background execution \u2192 Codex, Jules, or Copilot Coding Agent`,
          `Quick inline edits \u2192 Copilot inline (fastest autocomplete available)`,
          `Most top engineers use 2\u20133 tools in combination, not just one`,
        ],
      },
      {
        type: `why`, icon: `💡`, label: `Why It Matters`,
        text: `Using the wrong tool for a task is like using a screwdriver as a hammer. The 2026 pattern: Copilot for inline flow, Claude Code for agentic terminal work, cloud agents for overnight backlog draining.`,
        bullets: [
          `A 2-tool stack (Copilot + Claude Code) covers 90% of daily use cases`,
          `Cloud agents are best for well-specified, PR-ready tasks`,
          `IDE agents excel at visual, interactive, synchronous work`,
          `The tool landscape changes fast — coordination skills transfer permanently`,
          `A well-designed 2-agent system beats a poorly designed 10-agent one`,
        ],
      },
    ],
    callout: {
      label: `The Golden Rule`,
      text: `Don't outsource your mastery of agents to tools. Understanding coordination patterns matters more than any specific tool. Learn the patterns first, then pick the tools.`,
    },
  },

  // ══════════════════════════════════════════
  //  04 — MULTI-AGENT SYSTEMS
  // ══════════════════════════════════════════
  {
    id: `multiagent`,
    sectionNum: `04`,
    title: `Multi-Agent Systems`,
    subtitle: `From single-agent prompting to orchestrating specialist fleets`,
    type: `teaching`,
    intro: `Multi-agent systems are the architectural leap that separates 10\u00D7 engineers from 100\u00D7 engineers. Instead of prompting one agent repeatedly, you design systems where multiple specialist agents work in parallel.`,
    blocks: [
      {
        type: `what`, icon: `📘`, label: `What It Is`,
        text: `A multi-agent system uses multiple specialist AI agents — each with its own context window, tools, and responsibilities — coordinated by an orchestrator agent. Instead of one overloaded generalist, you have a team of focused specialists that work in parallel.`,
        bullets: [
          `Orchestrator decomposes tasks and delegates to specialists`,
          `Each specialist has: isolated context, specific tools, clear role`,
          `Agents work in parallel — frontend, backend, security, testing`,
          `Results are synthesized and verified by the orchestrator`,
          `You design the system and verify output — you don't type code`,
        ],
      },
      {
        type: `how`, icon: `⚙️`, label: `How It Works`,
        text: `You talk to the orchestrator — not individual agents. It reads your spec, breaks it into subtasks, assigns each to the right specialist, monitors progress, and synthesizes the final result. Each specialist works in isolation with only the context it needs.`,
        bullets: [
          `Define specialist agents in .claude/agents/ with YAML frontmatter`,
          `Each agent has: name, description, model, tools, and system prompt`,
          `Orchestrator decomposes: "Build auth" \u2192 [API agent, DB agent, Test agent]`,
          `Agents execute in parallel — each in its own git worktree`,
          `Orchestrator synthesizes results and runs integration checks`,
        ],
      },
      {
        type: `why`, icon: `💡`, label: `Why It Matters`,
        text: `Multi-agent isolation significantly outperforms single-agent approaches — isolated specialist agents avoid context pollution and produce higher-quality output. The token cost is higher but the accuracy gain justifies it for any non-trivial work. Strong engineers get MORE leverage — precise specs multiply into precise implementations everywhere.`,
        bullets: [
          `Isolated specialist agents dramatically outperform overloaded generalists`,
          `Enables 10\u201315 parallel coding sessions per engineer`,
          `Context isolation prevents one task from polluting another`,
          `Your value shifts from typing speed to specification quality`,
          `A vague spec multiplies errors; a precise spec multiplies quality`,
        ],
      },
    ],
    callout: {
      label: `The Paradigm Shift`,
      text: `You are no longer the lead engineer — you are the system designer. In 2026, top engineers stop talking to individual agents and start talking to an orchestrator that conducts the fleet.`,
    },
    pillars: [
      {
        id: `MA-01`, title: `Old model vs new model`, tag: `Core Concept`, open: true,
        tiers: [
          { badge: `coral`, label: `Old Model`, text: `You \u2192 Single agent \u2192 Output (sequential, context-capped, all-or-nothing)` },
          { badge: `teal`, label: `New Model`, text: `You \u2192 Orchestrator \u2192 [Frontend | Backend | Security | Test agents] \u2192 Parallel output \u2192 Verified PR`, bold: true },
        ],
        rules: [
          { color: `teal`, title: `Strong engineers get MORE leverage, not less`, desc: `A vague spec multiplies errors across dozens of parallel runs. A precise spec multiplies into precise implementations everywhere. The more autonomous your agents, the more expensive a bad spec becomes.` },
        ],
      },
      {
        id: `MA-02`, title: `The 3-tier orchestration stack (Addy Osmani)`, tag: `Strategy`,
        tiers: [
          { badge: `purple`, label: `Tier 1`, text: `Single terminal, interactive. Claude Code subagents, Claude Squad. Best for exploratory work and 3\u20135 agent teams. You watch in real-time.` },
          { badge: `teal`, label: `Tier 2`, text: `Local multi-session, dashboard-driven. Conductor, Vibe Kanban. Your machine, multiple worktrees, diff review. Best for 3\u201310 agent parallel sprints.` },
          { badge: `gold`, label: `Tier 3`, text: `Cloud agents, fire and forget. Codex Web, Copilot Coding Agent, Jules. Assign a task, close your laptop, return to a PR. Best for draining backlogs.` },
        ],
        rules: [
          { color: `teal`, title: `Most top developers in 2026 use all three tiers`, desc: `Tier 1 for interactive work, Tier 2 for parallel feature sprints, Tier 3 for background tasks and tech debt. Don't outsource understanding to tools.` },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════
  //  05 — CONTEXT ENGINEERING
  // ══════════════════════════════════════════
  {
    id: `context`,
    sectionNum: `05`,
    title: `Context Engineering`,
    subtitle: `The #1 skill of 2026 — managing what your agents know`,
    type: `teaching`,
    intro: `Context engineering replaces "prompt engineering" as the critical skill. It's not about crafting the perfect prompt — it's about designing the information architecture that surrounds your agents.`,
    blocks: [
      {
        type: `what`, icon: `📘`, label: `What It Is`,
        text: `Context engineering is the art and science of managing what information an AI agent has access to at any moment. It covers four operations: SELECT (choose relevant info), WRITE (persist knowledge), COMPRESS (manage window size), and ISOLATE (give each agent its own context).`,
        bullets: [
          `SELECT — pull only relevant code, docs, and context via RAG, grep, AST parsing`,
          `WRITE — persist lessons, rules, and knowledge to CLAUDE.md and memory files`,
          `COMPRESS — compact at 70% usage, /clear between unrelated tasks`,
          `ISOLATE — give each agent its own context window for maximum accuracy`,
        ],
      },
      {
        type: `how`, icon: `⚙️`, label: `How It Works`,
        text: `Think of the context window as scarce memory in a performance-critical system. Budget it: 5% for constraints, 35% for task context, 40% for project patterns, 20% for background knowledge. Focused tool selection dramatically improves accuracy vs providing all tools at once.`,
        bullets: [
          `Priority 1 (5%) — security policies, type definitions, business rules`,
          `Priority 2 (35%) — current files, imports, tests, requirements`,
          `Priority 3 (40%) — architecture decisions, code style, patterns`,
          `Priority 4 (20%) — framework docs, language reference, API docs`,
          `Compress proactively at 70%, not 95% — fresh context = better output`,
        ],
      },
      {
        type: `why`, icon: `💡`, label: `Why It Matters`,
        text: `Karpathy: "Context engineering is the delicate art of filling the context window with just the right information for the next step." Focused tool selection dramatically improves accuracy. Multi-agent isolation prevents context pollution. Context is everything.`,
        bullets: [
          `Focused tool selection dramatically improves accuracy vs dumping all tools`,
          `Multi-agent isolation prevents context pollution between tasks`,
          `Every correction written to CLAUDE.md compounds indefinitely`,
          `/clear between tasks = treating sessions like git branches`,
          `Fresh, focused context outperforms stale, bloated context every time`,
        ],
      },
    ],
    pillars: [
      {
        id: `CE-01`, title: `The 4 operations in detail`, tag: `Foundation`,
        rules: [
          { color: `teal`, title: `SELECT — only pull what's needed`, desc: `Use RAG, AST parsing, grep, and semantic similarity to inject relevant code and docs. The context window is scarce — treat it like memory in a performance-critical system.`, tip: `Focused tool selection dramatically improves accuracy vs giving Claude all tools at once` },
          { color: `gold`, title: `WRITE — persist knowledge across sessions`, desc: `Use scratchpads, tasks/lessons.md, and CLAUDE.md. Boris Cherny's rule: "Anytime Claude does something incorrectly, add it to CLAUDE.md so it never repeats."` },
          { color: `purple`, title: `COMPRESS — compact at 70% context usage`, desc: `Don't wait for auto-compact. Use /clear between unrelated tasks. Fresh context produces measurably better output.`, tip: `/clear between unrelated tasks — treat sessions like git branches` },
          { color: `coral`, title: `ISOLATE — each agent gets its own context`, desc: `Multi-agent isolation significantly outperforms single-agent approaches. The cost is more tokens but the accuracy gain justifies it for non-trivial work.`, tip: `Isolation prevents context pollution — each agent stays focused on its task` },
        ],
      },
      {
        id: `CE-02`, title: `Context budget allocation strategy`, tag: `Advanced`,
        code: {
          label: `Context budget for 200k token window`,
          content: `// Context Budget \u2014 200k token window

Priority 1 \u2014 Critical Constraints    (5% = 10k tokens)
\u251C\u2500\u2500 Security policies (non-negotiable)
\u251C\u2500\u2500 Type definitions and schemas
\u2514\u2500\u2500 Business invariant rules

Priority 2 \u2014 Task Context            (35% = 70k tokens)
\u251C\u2500\u2500 Current file being edited
\u251C\u2500\u2500 Related files (imports, dependencies)
\u251C\u2500\u2500 Test files for reference
\u2514\u2500\u2500 Specific requirements for this task

Priority 3 \u2014 Project Patterns        (40% = 80k tokens)
\u251C\u2500\u2500 Architecture Decision Records (ADRs)
\u251C\u2500\u2500 Code style guidelines
\u251C\u2500\u2500 Common patterns and examples
\u2514\u2500\u2500 Recent similar implementations

Priority 4 \u2014 Background Knowledge    (20% = 40k tokens)
\u251C\u2500\u2500 Framework documentation snippets
\u251C\u2500\u2500 Language reference
\u2514\u2500\u2500 Third-party API docs`,
        },
      },
    ],
  },

  // ══════════════════════════════════════════
  //  06 — PLAN → EXECUTE → VERIFY
  // ══════════════════════════════════════════
  {
    id: `plan-verify`,
    sectionNum: `06`,
    title: `Plan \u2192 Execute \u2192 Verify`,
    subtitle: `The non-negotiable workflow for agentic engineering`,
    type: `teaching`,
    intro: `Every task touching 3+ files must follow this discipline. The planning phase isn't overhead — it's the product. A vague spec multiplies errors across your entire agent fleet.`,
    blocks: [
      {
        type: `what`, icon: `📘`, label: `What It Is`,
        text: `A three-phase workflow: Plan (specify before coding), Execute (gated phases with test checkpoints), and Verify (human approval before merge). This prevents the #1 failure mode: agents confidently building the wrong thing at scale.`,
        bullets: [
          `Plan Mode — write the spec before any code is generated`,
          `Phase-gated execution — 5\u201310 minute phases with test gates`,
          `Cross-review — spawn a second agent to review the plan`,
          `Human verification — you are the final approval gate, always`,
          `Rewind, don't fix forward — if Claude drifts, restart clean`,
        ],
      },
      {
        type: `how`, icon: `⚙️`, label: `How It Works`,
        text: `Start every complex task in Plan Mode. Write a clear spec with architecture and acceptance criteria. Have a second Claude review it. Execute in atomic phases — each passes tests before proceeding. Never skip verification.`,
        bullets: [
          `Start: /plan "Describe your task with architecture details"`,
          `Review: spawn second Claude \u2192 "Review this as a staff engineer"`,
          `Execute: break into 5\u201310 minute phases with test gates`,
          `Verify: every PR gets human review — never skip this step`,
          `Challenge: "What would a staff engineer say is wrong here?"`,
        ],
      },
      {
        type: `why`, icon: `💡`, label: `Why It Matters`,
        text: `The more autonomous your agents, the more expensive a bad spec becomes. Planning costs minutes and saves hours. Verification is what makes scale safe. The quality gap is usually an accountability gap, not a skill gap.`,
        bullets: [
          `Bad specs multiply errors across all parallel agents`,
          `Phase gates catch drift before it compounds`,
          `Cross-review catches architecture issues before code is written`,
          `Human verification prevents "almost-right" code from shipping`,
          `"It compiled, ship it" is the most expensive agentic mistake`,
        ],
      },
    ],
    pillars: [
      {
        id: `PV-01`, title: `Planning discipline`, tag: `Phase 1`, open: true,
        rules: [
          { color: `teal`, title: `Start every 3+ file task in Plan Mode`, desc: `Boris Cherny starts most sessions in Plan Mode. The spec is product thinking made explicit. The more autonomous your agents, the more expensive a bad spec becomes.` },
          { color: `gold`, title: `Spawn a second Claude to review your plan`, desc: `Before executing, open a second session: "Review this plan as a staff engineer. What's wrong, risky, or missing?" Cross-model review catches architectural drift.`, tip: `This costs minutes and saves hours` },
          { color: `purple`, title: `Phase-wise gated execution`, desc: `Break tasks into atomic phases of 5\u201310 minutes each. Each phase must pass unit, automation, and integration test gates before proceeding. No phase skipping.` },
        ],
      },
      {
        id: `PV-02`, title: `Verification discipline`, tag: `Phase 3`,
        rules: [
          { color: `teal`, title: `You are the final approval gate \u2014 never skip it`, desc: `"It compiled, ship it" is the most expensive mistake in agentic engineering. Every PR gets human review. Develop pattern recognition for agent failure modes.` },
          { color: `gold`, title: `Build feedback loops into CLAUDE.md`, desc: `Tell Claude to run tests, linters, and build after every change. Without feedback loops, Claude assumes changes work and moves on. This alone can 2\u20133\u00D7 output quality.`, tip: `Always run pytest after changing Python files \u2192 baked into CLAUDE.md` },
          { color: `coral`, title: `Challenge Claude \u2014 don't just accept it`, desc: `Use adversarial verification: "Grill me on these changes" \u00B7 "Prove to me this works." The quality gap is often just an accountability gap.`, tip: `"What would a staff engineer say is wrong here?"` },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════
  //  07 — CLAUDE.MD MASTERY
  // ══════════════════════════════════════════
  {
    id: `claudemd`,
    sectionNum: `07`,
    title: `CLAUDE.md Mastery`,
    subtitle: `Infrastructure \u00B7 hooks \u00B7 agents \u00B7 rules \u00B7 commands (skills)`,
    type: `claudemd`,
    callout: {
      label: `Community Consensus 2026`,
      text: `CLAUDE.md is now as important as .gitignore \u2014 it's essential infrastructure, not optional docs. Every project needs one. It's the permanent brain that survives session resets.`,
    },
    structureCode: {
      label: `Recommended .claude/ folder structure`,
      content: `project-root/
\u251C\u2500\u2500 CLAUDE.md                     # Root \u2014 50\u2013100 lines max
\u2502   \u251C\u2500\u2500 ## Rules                  # NEVER / ALWAYS / YOU MUST constraints
\u2502   \u251C\u2500\u2500 ## Project Overview       # Tech stack, architecture, key files
\u2502   \u2514\u2500\u2500 ## Workflow               # How Claude should work in this codebase
\u2502
\u251C\u2500\u2500 .claude/
\u2502   \u251C\u2500\u2500 agents/                   # Specialist sub-agent definitions
\u2502   \u2502   \u251C\u2500\u2500 code-reviewer.md      # Invoked for PR reviews
\u2502   \u2502   \u251C\u2500\u2500 test-writer.md        # Generates test suites
\u2502   \u2502   \u2514\u2500\u2500 security-auditor.md  # Scans for vulnerabilities
\u2502   \u2502
\u2502   \u251C\u2500\u2500 commands/                 # Skills \u2014 reusable slash commands
\u2502   \u2502   \u251C\u2500\u2500 review.md             # /project:review
\u2502   \u2502   \u251C\u2500\u2500 pr-prep.md            # /project:pr-prep
\u2502   \u2502   \u2514\u2500\u2500 deploy.md             # /project:deploy
\u2502   \u2502
\u2502   \u251C\u2500\u2500 hooks/                    # Lifecycle automation scripts
\u2502   \u2502   \u251C\u2500\u2500 post-write.sh         # Auto lint/test after every file write
\u2502   \u2502   \u2514\u2500\u2500 pre-bash.sh           # Validate bash before execution
\u2502   \u2502
\u2502   \u2514\u2500\u2500 settings.json             # MCP servers, permissions, hooks config
\u2502
\u251C\u2500\u2500 src/
\u2502   \u2514\u2500\u2500 CLAUDE.md                 # Module-level context (auto-loaded)
\u2514\u2500\u2500 docs/
    \u2514\u2500\u2500 CLAUDE.md                 # Docs-level context (auto-loaded)`,
    },
    folders: [
      {
        name: `hooks/`,
        icon: `\uD83E\uDE9D`,
        color: `teal`,
        what: `Shell scripts that run automatically at Claude lifecycle events: PreToolUse (before any tool call), PostToolUse (after), Notification (when Claude alerts you), and Stop (when a session ends). Configured in .claude/settings.json.`,
        howToUse: [
          `Create the shell scripts in .claude/hooks/`,
          `Register them in .claude/settings.json under "hooks"`,
          `Use environment variable $CLAUDE_TOOL_INPUT to read the incoming tool call`,
          `Use $CLAUDE_TOOL_OUTPUT to read the tool's result`,
          `Exit code 0 = allow, non-zero = block with error message`,
        ],
        codeLabel: `.claude/settings.json \u2014 hooks configuration`,
        code: `{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [{
          "type": "command",
          "command": "bash .claude/hooks/pre-bash.sh"
        }]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Write|Edit|MultiEdit",
        "hooks": [{
          "type": "command",
          "command": "bash .claude/hooks/post-write.sh"
        }]
      }
    ]
  }
}`,
        code2Label: `.claude/hooks/post-write.sh \u2014 auto lint after every file write`,
        code2: `#!/bin/bash
# Runs automatically after Claude writes/edits any file
# $CLAUDE_TOOL_OUTPUT contains the written file path

MODIFIED="$CLAUDE_TOOL_OUTPUT"

# TypeScript / TSX files \u2192 typecheck + lint
if [[ "$MODIFIED" == *.ts || "$MODIFIED" == *.tsx ]]; then
  echo "\u2192 Running TypeScript check..."
  npx tsc --noEmit 2>&1 | head -20

  echo "\u2192 Running ESLint..."
  npx eslint "$MODIFIED" --max-warnings=0 2>&1 | head -15
fi

# Python files \u2192 run tests
if [[ "$MODIFIED" == *.py ]]; then
  echo "\u2192 Running pytest on modified module..."
  python -m pytest "$(dirname $MODIFIED)" -x -q 2>&1 | tail -10
fi

exit 0  # always allow; errors are informational`,
      },
      {
        name: `agents/`,
        icon: `\uD83E\uDD16`,
        color: `purple`,
        what: `Markdown files in .claude/agents/ that define specialist sub-agents with their own name, description, model, tools, and system prompt. Claude can spawn these automatically or you can reference them explicitly. Each agent gets its own isolated context window.`,
        howToUse: [
          `Create a .md file in .claude/agents/ with YAML frontmatter`,
          `Set name, description, model (optional), and tools (optional)`,
          `Write the system prompt as the file body`,
          `Reference via "use agent: code-reviewer" in your prompt`,
          `Or let the orchestrator auto-select based on the description field`,
        ],
        codeLabel: `.claude/agents/code-reviewer.md`,
        code: `---
name: code-reviewer
description: >
  Reviews code changes for quality, security, architecture alignment,
  and test coverage. Invoked automatically on any PR-related task.
model: claude-opus-4-5
tools:
  - Read
  - Grep
  - Bash(git diff:true, git log:true)
---

You are a senior staff engineer conducting rigorous code reviews.

## Review Checklist
For every review, run these steps in order:

1. **Diff analysis** \u2014 run \\\`git diff --staged\\\` or \\\`git diff main\\\`
2. **Security scan** \u2014 check for: hardcoded secrets, SQL injection,
   unvalidated inputs, insecure deserialization
3. **Type safety** \u2014 verify TypeScript strict compliance, no \\\`any\\\`
4. **Test coverage** \u2014 ensure every new function has at least one test
5. **Architecture** \u2014 verify changes align with CLAUDE.md patterns
6. **Performance** \u2014 flag O(n\u00B2) patterns, missing indexes, N+1 queries

## Output Format
**Verdict**: APPROVE | REQUEST_CHANGES | COMMENT
**Critical Issues** (block merge):
- (list or "none")
**Suggestions** (optional improvements):
- (list or "none")
**Verdict Rationale**: one sentence`,
        code2Label: `.claude/agents/test-writer.md`,
        code2: `---
name: test-writer
description: >
  Generates comprehensive test suites for any function or module.
  Covers unit tests, edge cases, and integration tests.
tools:
  - Read
  - Write
  - Bash(npm test:true, pytest:true)
---

You are a test engineering specialist.

## Test Generation Rules
- Write tests BEFORE looking at implementation details
- Cover: happy path, null/undefined inputs, boundary values,
  error cases, async edge cases
- Use the project's existing test framework (detect from package.json)
- Each test must have a clear \\\`it('should ...')\\\` description
- Run tests after writing \u2014 fix until green`,
      },
      {
        name: `rules`,
        displayPath: `CLAUDE.md \u2192 ## Rules`,
        icon: `\uD83D\uDCCB`,
        color: `gold`,
        what: `Hard constraints written directly in a ## Rules section inside CLAUDE.md using emphatic keywords: NEVER, ALWAYS, YOU MUST, IMPORTANT. Rules are the permanent contract between you and Claude \u2014 they encode lessons learned, project invariants, and quality gates that apply to every single session forever.`,
        howToUse: [
          `Add a "## Rules" section near the top of your CLAUDE.md`,
          `Use NEVER for absolute prohibitions \u2014 things that break the codebase`,
          `Use ALWAYS for required habits: run tests, create branches, add types`,
          `Use YOU MUST for strong project-specific obligations`,
          `Use IMPORTANT for rules that are easy to forget but consequential`,
          `After any correction in a session, immediately encode it as a rule`,
        ],
        codeLabel: `CLAUDE.md \u2014 ## Rules section (real example)`,
        code: `## Rules

### Non-Negotiable (NEVER)
- NEVER commit directly to main or staging branches
- NEVER use \\\`any\\\` type in TypeScript \u2014 use \\\`unknown\\\` and narrow
- NEVER put secrets, API keys, or tokens in source code
- NEVER delete files without explicit user confirmation
- NEVER skip the test run before marking a task complete

### Required Habits (ALWAYS)
- ALWAYS run \\\`npm test\\\` after modifying any TypeScript file
- ALWAYS run \\\`python -m pytest\\\` after modifying any Python file
- ALWAYS add JSDoc / TSDoc to exported functions you create
- ALWAYS create a git branch before starting any task

### Project-Specific (YOU MUST)
- YOU MUST keep files under 300 lines \u2014 split larger files into modules
- YOU MUST follow the API contract in docs/api-spec.md exactly
- YOU MUST add a migration file when changing database schemas

### IMPORTANT Reminders
- IMPORTANT: The auth module uses JWT RS256, not HS256 \u2014 don't change
- IMPORTANT: All dates are stored as UTC ISO-8601 in the database
- IMPORTANT: Run \\\`npm run build\\\` after changing any config file`,
        code2Label: `CLAUDE.md \u2014 Boris's 3 universal principles (add at the bottom)`,
        code2: `## Universal Principles
1. Make every change as simple as possible. Delete lines, don't add them.
2. Fix root causes \u2014 no band-aids, no temporary fixes, no TODO comments.
3. Only touch what's necessary \u2014 no side effects, no scope creep.`,
      },
      {
        name: `commands/`,
        displayPath: `.claude/commands/ \u2014 Skills`,
        icon: `\u26A1`,
        color: `coral`,
        what: `Markdown files in .claude/commands/ \u2014 these are your "skills". Each file is a reusable slash command invoked with /project:<name>. Think of them as your team's CLI for recurring workflows: code review, PR prep, refactoring, security scans. Teams with documented skills onboard new members significantly faster.`,
        howToUse: [
          `Create a .md file in .claude/commands/ \u2014 the filename becomes the skill name`,
          `Write the instructions as plain text (no YAML frontmatter needed)`,
          `Invoke with /project:<filename> in any Claude session`,
          `Use $ARGUMENTS to pass dynamic input: /project:review src/auth.ts`,
          `Chain skills: have one skill call another for complex multi-step workflows`,
          `Share the .claude/commands/ folder via git \u2014 skills are team infrastructure`,
        ],
        codeLabel: `.claude/commands/review.md \u2192 invoked as /project:review`,
        code: `Review the code in the current branch or $ARGUMENTS if provided.

## Review Steps
1. Run \\\`git diff main -- $ARGUMENTS\\\` to get the changeset
2. **TypeScript**: run \\\`npx tsc --noEmit\\\` \u2014 report all errors
3. **Lint**: run \\\`npx eslint $ARGUMENTS --max-warnings=0\\\`
4. **Tests**: run \\\`npm test -- --coverage\\\` \u2014 flag any coverage drop
5. **Secrets scan**: \\\`git diff main | grep -iE "(api_key|password|secret|token)"\\\`
6. **File size**: flag any file over 300 lines
7. **Architecture**: verify changes align with CLAUDE.md patterns

## Output
Produce a Markdown table:
| Check | Status | Details |
|-------|--------|---------|
| TypeScript | \u2705/\u274C | ... |
| Lint       | \u2705/\u274C | ... |
| Tests      | \u2705/\u274C | ... |
...
**Overall**: READY TO MERGE | NEEDS FIXES`,
        code2Label: `.claude/commands/pr-prep.md \u2192 invoked as /project:pr-prep`,
        code2: `Prepare a production-ready PR for the current branch.

1. Run /project:review \u2014 fix all issues before proceeding
2. Generate a PR description with:
   - **Summary**: what changed and why (2\u20133 sentences)
   - **Changes**: bullet list of key modifications
   - **Testing**: how it was tested
   - **Screenshots**: note if UI changes present
   - **Breaking Changes**: list or "None"
3. Squash all commits into one: \\\`git rebase -i main\\\`
4. Suggest a PR title following: \\\`type(scope): description\\\`
   (feat/fix/refactor/chore/docs)
5. Verify the branch name follows: \\\`type/short-description\\\``,
      },
    ],
    pillars: [
      {
        id: `CM-01`, title: `The 100-line rule (Boris Cherny's secret)`, tag: `Structure`,
        rules: [
          { color: `teal`, title: `Boris's CLAUDE.md is ~100 lines. Most devs write 500\u20131000. Boris's works better.`, desc: `Every line must earn its place. For each line ask: "Would removing this cause Claude to make mistakes?" If not, cut it. Bloated files cause Claude to ignore your actual instructions.` },
          { color: `gold`, title: `The 10-section structure that works`, desc: `Project overview \u00B7 Tech stack \u00B7 Architecture \u00B7 Code standards \u00B7 Key file locations \u00B7 Common commands \u00B7 Workflow rules \u00B7 Gotchas/quirks \u00B7 Lessons learned \u00B7 Agent delegation rules.` },
          { color: `purple`, title: `Use @imports for detailed sections`, desc: `Root CLAUDE.md stays 50\u2013100 lines with @imports for sub-sections. Domain knowledge lives in child CLAUDE.md files per directory.`, tip: `@./docs/auth-patterns.md \u2014 loaded only when working in the auth module` },
          { color: `coral`, title: `Treat it like code: version, review, prune regularly`, desc: `Check it into git. Never add to .gitignore. Review when things go wrong. Update multiple times a week. It's documentation AND institutional knowledge AND onboarding.` },
        ],
      },
      {
        id: `CM-02`, title: `Slash commands & automation`, tag: `Workflows`,
        rules: [
          { color: `teal`, title: `Teams with documented workflows onboard significantly faster`, desc: `Each custom command pays for itself from the second use. Build commands for: code review, PR prep, test generation, refactoring, documentation, dependency audits.` },
          { color: `gold`, title: `Use /loop and /schedule for recurring tasks`, desc: `/loop runs monitoring tasks locally for up to 3 days. /schedule runs cloud-based recurring tasks even when your machine is off.` },
          { color: `purple`, title: `Permission levels per environment`, desc: `Local dev = permissive. CI/CD = restricted to read + test + lint. Code review = read-only. Configure once in global CLAUDE.md, adjust per project.`, tip: `/sandbox significantly reduces permission prompts` },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════
  //  08 — SELF-IMPROVEMENT LOOP
  // ══════════════════════════════════════════
  {
    id: `selfimprove`,
    sectionNum: `08`,
    title: `The Self-Improvement Loop`,
    subtitle: `Compounding gains \u2014 every correction becomes a permanent rule`,
    type: `teaching`,
    intro: `The self-improvement loop is the difference between linear and exponential productivity. It turns every mistake into a permanent advantage.`,
    blocks: [
      {
        type: `what`, icon: `📘`, label: `What It Is`,
        text: `A 6-step compounding cycle: Plan \u2192 Execute \u2192 Review \u2192 Correct \u2192 Write Rule \u2192 Import into CLAUDE.md. Each correction you encode makes every future session better. After 6 months of consistent looping, your CLAUDE.md knows your codebase better than most new hires.`,
        bullets: [
          `Every session correction becomes a permanent CLAUDE.md rule`,
          `Rules compound \u2014 they apply to every future session automatically`,
          `After 6 months, your config is a serious competitive moat`,
          `If Claude repeats a mistake, the loop is broken \u2014 fix it immediately`,
        ],
      },
      {
        type: `how`, icon: `⚙️`, label: `How It Works`,
        text: `After any correction during a session, immediately encode it: "Write a rule in tasks/lessons.md that prevents this mistake." Then import it into CLAUDE.md. Use emphatic keywords (NEVER, ALWAYS, YOU MUST) for critical rules.`,
        bullets: [
          `Step 1: Correct Claude during the session`,
          `Step 2: "Write a rule in tasks/lessons.md preventing this"`,
          `Step 3: Import the rule into CLAUDE.md`,
          `Step 4: Verify the rule works in the next session`,
          `If Claude keeps violating a rule \u2192 file is too long or phrasing is ambiguous`,
        ],
      },
      {
        type: `why`, icon: `💡`, label: `Why It Matters`,
        text: `A session where you don't encode a lesson is a session that didn't compound. The 3 universal principles from Boris Cherny prevent more bugs than any linter: simplicity, root causes only, no side effects.`,
        bullets: [
          `Linear: fix mistakes as they come, same mistakes recur`,
          `Exponential: encode every fix, mistakes vanish permanently`,
          `After 6 months: CLAUDE.md > most new hire's codebase knowledge`,
          `The 3 principles: simplify, root causes only, no scope creep`,
        ],
      },
    ],
    callout: {
      label: `Boris Cherny's 3 Universal Principles`,
      text: `1. Make every change as simple as possible. Delete lines, don't add them. 2. Fix root causes \u2014 no band-aids, no temporary fixes. 3. Only touch what's necessary \u2014 no side effects, no scope creep.`,
    },
  },

  // ══════════════════════════════════════════
  //  09 — ORCHESTRATION PATTERNS
  // ══════════════════════════════════════════
  {
    id: `patterns`,
    sectionNum: `09`,
    title: `The 4 Orchestration Patterns`,
    subtitle: `Architecture \u2014 choose the right topology for the task`,
    type: `teaching`,
    intro: `Not all multi-agent systems are built the same. There are four production-proven patterns, each optimized for different workloads. Choosing the right one is an architectural decision.`,
    blocks: [
      {
        type: `what`, icon: `📘`, label: `What They Are`,
        text: `Four topologies for coordinating agents: Pipeline (sequential stages), Orchestrator-Worker (parallel delegation), Router (classify and dispatch), and Plan-and-Execute (strategy + execution split). Each has optimal use cases.`,
        bullets: [
          `Pipeline \u2014 sequential stages, highest accuracy`,
          `Orchestrator-Worker \u2014 parallel execution, significantly higher success`,
          `Router \u2014 classify and dispatch to specialists`,
          `Plan-and-Execute \u2014 frontier model plans, cheaper model executes`,
        ],
      },
      {
        type: `how`, icon: `⚙️`, label: `How To Choose`,
        text: `Use Pipeline when correctness matters more than speed. Use Orchestrator-Worker for parallel codebases. Use Router when requests have clear categories. Use Plan-and-Execute when cost matters — significant cost reduction via model tiering.`,
        bullets: [
          `Pipeline: Research \u2192 Draft \u2192 Review (content, doc processing)`,
          `Orchestrator: 1 coordinator + N workers (codebases with clear modules)`,
          `Router: Bug \u2192 Debug agent, Feature \u2192 Arch agent (triage systems)`,
          `Plan-and-Execute: Opus plans, Haiku executes (cost-sensitive work)`,
        ],
      },
      {
        type: `why`, icon: `💡`, label: `Why It Matters`,
        text: `Wrong topology = wasted tokens and poor results. The merge rule: if two agents spend 80% time on similar tasks \u2192 merge them. If one agent's context is polluted by unrelated work \u2192 split it.`,
        bullets: [
          `Orchestrator-Worker significantly outperforms single-agent on complex tasks`,
          `Plan-and-Execute = major cost reduction via model tiering`,
          `Start small: 1 orchestrator + 1 worker. Add agents with evidence only`,
          `The merge/split rule keeps your system lean and efficient`,
        ],
      },
    ],
    pillars: [
      {
        id: `OP-01`, title: `All 4 patterns explained`, tag: `Architecture`,
        rules: [
          { color: `teal`, title: `1. Pipeline \u2014 sequential stages, highest accuracy`, desc: `Research agent \u2192 Draft agent \u2192 Review agent. Each output becomes the next input. Best when correctness matters more than speed.` },
          { color: `gold`, title: `2. Orchestrator-Worker \u2014 parallel, significantly higher success`, desc: `One orchestrator decomposes and delegates to specialist workers in parallel, then synthesizes. Best for codebases with clear module boundaries.`, tip: `Start small: 1 orchestrator + 1 worker. Add agents only with evidence.` },
          { color: `purple`, title: `3. Router \u2014 classify and dispatch`, desc: `A triage agent classifies the request type and routes to the specialist: Bug \u2192 Debug agent, Feature \u2192 Arch agent. Keeps each specialist's context clean.` },
          { color: `coral`, title: `4. Plan-and-Execute \u2014 major cost reduction`, desc: `Frontier model (Opus) creates the strategy. Cheaper model (Haiku) executes the steps. Model tiering is now a standard architectural decision.` },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════
  //  10 — MCP + A2A PROTOCOLS
  // ══════════════════════════════════════════
  {
    id: `mcp`,
    sectionNum: `10`,
    title: `MCP + A2A: The New HTTP for Agents`,
    subtitle: `Protocols \u2014 the connectivity layer that makes agent fleets possible`,
    type: `teaching`,
    intro: `MCP (Model Context Protocol) and A2A (Agent-to-Agent Protocol) are the two protocols that turn isolated AI agents into connected, interoperable systems. Think of them as HTTP and REST \u2014 but for agents.`,
    blocks: [
      {
        type: `what`, icon: `📘`, label: `What They Are`,
        text: `MCP standardizes how agents connect to external tools, databases, and APIs \u2014 it's the plug-and-play layer for tool connectivity. A2A (Google's Agent-to-Agent Protocol) enables cross-agent communication so agents from different vendors can collaborate peer-to-peer.`,
        bullets: [
          `MCP \u2014 connects agents to tools (databases, GitHub, filesystems, APIs)`,
          `A2A \u2014 connects agents to each other (cross-vendor collaboration)`,
          `MCP uses lazy loading \u2014 tools activate only when context triggers them`,
          `A2A uses typed schemas for safe agent-to-agent communication`,
        ],
      },
      {
        type: `how`, icon: `⚙️`, label: `How They Work`,
        text: `Configure MCP servers in .claude/settings.json. Each server provides tools (read DB, call API, manage files). Set lazy_load with triggers to dramatically reduce startup cost. For A2A, agents advertise capabilities and discover each other automatically.`,
        bullets: [
          `Configure in .claude/settings.json under "mcpServers"`,
          `Set read_only: true for all production data sources`,
          `Use lazy_load with triggers to reduce startup overhead significantly`,
          `Block sensitive patterns (*.env, *.key, */secrets/*) at config level`,
          `Circuit breaker: error rate > 1% = automatic halt`,
        ],
      },
      {
        type: `why`, icon: `💡`, label: `Why They Matter`,
        text: `Without MCP, every agent-to-tool connection is custom code. Without A2A, agents from different vendors can't collaborate. These protocols turn the agent ecosystem from siloed tools into a composable platform.`,
        bullets: [
          `MCP = standardized tool connectivity (no more custom integrations)`,
          `A2A = cross-vendor agent collaboration (composable systems)`,
          `Major startup savings with lazy MCP loading`,
          `Security at the config level, not as a prompt-time reminder`,
        ],
      },
    ],
    pillars: [
      {
        id: `MP-01`, title: `Production MCP configuration`, tag: `Config`, open: true,
        rules: [
          { color: `teal`, title: `Always apply these 3 safety settings`, desc: `Set read_only: true for all production data MCP servers. Use lazy_load with triggers. Block sensitive path patterns at the config level \u2014 not as a prompt-time reminder.`, tip: `Circuit breaker: error rate > 1% = automatic halt. No exceptions.` },
        ],
        code: {
          label: `.claude/settings.json \u2014 production MCP config`,
          content: `{
  "mcpServers": {
    "postgres": {
      "command": "mcp-server-postgres",
      "args": ["--connection-string", "\\\${DATABASE_URL}"],
      "read_only": true,
      "lazy_load": true,
      "triggers": ["database", "sql", "schema", "query"],
      "blocked_patterns": ["*.env", "*.key", "*/secrets/*"]
    },
    "github": {
      "command": "mcp-server-github",
      "lazy_load": true,
      "triggers": ["git", "pr", "commit", "branch", "issue"]
    },
    "filesystem": {
      "command": "mcp-server-filesystem",
      "args": ["--root", "./src"],
      "read_only": false,
      "blocked_patterns": ["**/.env*", "**/*.pem", "**/secrets/**"]
    }
  }
}`,
        },
      },
    ],
  },

  // ══════════════════════════════════════════
  //  11 — GIT DISCIPLINE
  // ══════════════════════════════════════════
  {
    id: `git`,
    sectionNum: `11`,
    title: `Git Discipline = Agentic Safety Net`,
    subtitle: `One worktree per session is the baseline, not the ceiling`,
    type: `teaching`,
    intro: `Git discipline is the safety net that makes agentic parallelism possible. Without it, 10\u201315 parallel agent sessions would collide constantly.`,
    blocks: [
      {
        type: `what`, icon: `📘`, label: `What It Is`,
        text: `A git workflow designed for agentic coding: one git worktree per Claude session, one branch per task, squash merge everything. This isolation ensures agents never collide, and you can review, merge, or discard each session independently.`,
        bullets: [
          `One git worktree per agent session \u2014 changes never collide`,
          `One branch per task \u2014 never let agents work directly on main`,
          `Squash merge everything \u2014 clean linear history, easy revert`,
          `10\u201315 parallel sessions work because branches never intersect`,
        ],
      },
      {
        type: `how`, icon: `⚙️`, label: `How It Works`,
        text: `Create a worktree for each task, launch Claude in it, let the agent work independently. When done, review the diff, squash merge to main, delete the worktree. Keep PRs small and focused — atomic changes are easier to review and revert.`,
        bullets: [
          `git worktree add ../feature-x && cd ../feature-x && claude`,
          `Agent works in isolated worktree \u2014 no interference with others`,
          `Review: git diff main (in the worktree)`,
          `Merge: squash merge for clean history, one commit per feature`,
          `Cleanup: git worktree remove ../feature-x`,
        ],
      },
      {
        type: `why`, icon: `💡`, label: `Why It Matters`,
        text: `Worktrees are free to create. Production rollbacks from colliding agents are not. Squash merging gives clean linear history with easy git revert and git bisect. Agent-generated intermediate commits are noise \u2014 squash them away.`,
        bullets: [
          `Boris runs 10\u201315 Claude sessions simultaneously, all in separate worktrees`,
          `Squash merge = one commit per feature = easy revert`,
          `Agent intermediate commits are noise \u2014 squash them away`,
          `git bisect works perfectly with clean squash-merged history`,
        ],
      },
    ],
  },

  // ══════════════════════════════════════════
  //  12 — TOOLS & STACK
  // ══════════════════════════════════════════
  {
    id: `tools`,
    sectionNum: `12`,
    title: `Tools & Stack`,
    subtitle: `Decision matrix \u2014 right tool for the right job`,
    type: `tools`,
    callout: {
      label: `The Golden Rule`,
      text: `Don't outsource your mastery of agents to tools. Understand the coordination patterns first, then pick the tool. A well-designed 2-agent system beats a poorly designed 10-agent one.`,
    },
    toolGroups: [
      {
        id: `TL-01`, title: `When to use which tool`, tag: `Decision Matrix`, open: true,
        tools: [
          { name: `Claude Code`, desc: `Long autonomous tasks, multi-agent orchestration, codebase-wide refactors, MCP integration. Your primary agentic terminal.` },
          { name: `GitHub Copilot`, desc: `Inline autocomplete, quick function generation, IDE-native flow. Complementary to Claude Code \u2014 they compound together.` },
          { name: `Cursor`, desc: `Interactive in-editor agent mode, fast iteration on focused files, visual diff review. Best for synchronous work.` },
          { name: `Codex / Jules`, desc: `Cloud agents for background tasks. Fire-and-forget: assign a task, return to a diff. Best for draining backlogs overnight.` },
        ],
        rule: { color: `teal`, title: `The two-tool stack that works best`, desc: `Copilot handles inline autocomplete in the IDE. Claude Code handles everything agentic in the terminal. They don't overlap \u2014 they complement. This is the most common high-productivity setup in 2026.` },
      },
      {
        id: `TL-02`, title: `Multi-agent frameworks`, tag: `When You Need More`,
        tools: [
          { name: `LangGraph`, desc: `Graph-based workflows with typed state. Best for complex branching, loops, and visual monitoring. Most searched framework in 2026.` },
          { name: `CrewAI`, desc: `Role-based agents with distinct responsibilities. Best when agents should mirror how a human team works. Great for research workflows.` },
          { name: `AutoGen / Semantic Kernel`, desc: `Enterprise-grade orchestration with OpenTelemetry tracing and self-healing. Use for full observability and compliance-grade audits.` },
          { name: `Claude SDK`, desc: `Native Anthropic agent framework. Tightest integration with Claude models, MCP, and A2A. Best for Claude-native products.` },
        ],
        rule: { color: `gold`, title: `Model tiering for 40\u201360% cost reduction`, desc: `Claude Haiku for triage/routing, Sonnet for standard tasks, Opus for complex reasoning. Mixing models reduces costs 40\u201360% vs running one premium model everywhere.` },
      },
    ],
  },

  // ══════════════════════════════════════════
  //  13 — GRAPHIFY & KNOWLEDGE GRAPHS
  // ══════════════════════════════════════════
  {
    id: `graphify`,
    sectionNum: `13`,
    title: `Graphify — Knowledge Graphs for AI Coding`,
    subtitle: `Compress your codebase into a reusable, token-efficient architectural map that persists across sessions`,
    type: `teaching`,
    layout: `vertical`,
    intro: `The #1 problem with AI coding agents: they start every session blind. Reading 500 files burns 150k+ tokens just to rebuild context — then the session ends and it's all lost. Knowledge graphs solve this permanently. Graphify (VS Code extension) generates a structural map of your codebase in seconds. That map persists as a file. Every future session — Claude, Copilot, Cursor — starts with full architectural awareness for ~2k tokens instead of 150k. Generate once → reuse forever → compound intelligence across sessions.`,
    blocks: [
      {
        type: `what`, icon: `📘`, label: `What It Is`,
        text: `Graphify is a VS Code extension that performs AST-based structural extraction and builds an interactive knowledge graph of your codebase. It maps every file, class, function, and module into nodes, and every import, call, and inheritance relationship into edges — producing both a visual explorer and a portable text representation.`,
        bullets: [
          `One-click: right-click any folder → "Graphify: Build Knowledge Graph" → done`,
          `10+ languages: Python, JS, TS, Go, Rust, Java, C++, Ruby, PHP via deep AST parsing`,
          `Interactive vis.js dashboard — zoom, pan, filter, click any node → jumps to source`,
          `Auto-detects "God Nodes" (over-coupled classes) and "Surprising Connections" (hidden deps)`,
          `Portable output — graph data persists as reusable files across sessions`,
          `Install: VS Code Marketplace → "Graphify" by Anytechie Studio (Python 3.9+ required)`,
        ],
        code: {
          label: `What Graphify produces — your codebase as a graph`,
          content: `┌─────────────────────────────────────────────────────────┐
│              YOUR CODEBASE (500 files)                   │
│                                                         │
│  src/auth/           src/api/          src/db/          │
│  ├── jwt.ts          ├── routes.ts     ├── pool.ts     │
│  ├── middleware.ts   ├── validators.ts ├── models.ts   │
│  ├── roles.ts        ├── handlers.ts   ├── migrate.ts  │
│  └── session.ts      └── errors.ts     └── seeds.ts    │
│                                                         │
│  Reading all files = ~150,000 tokens (75% of context)   │
└─────────────────────────────────────────────────────────┘
                         │
                    Graphify AST
                     Extraction
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│           KNOWLEDGE GRAPH OUTPUT (~2,000 tokens)        │
│                                                         │
│  ⚠️  GOD NODES (high coupling — refactor candidates):  │
│      → AuthMiddleware (14 inbound connections)          │
│      → DatabasePool (11 inbound connections)            │
│                                                         │
│  🔗 KEY RELATIONSHIPS:                                  │
│      routes.ts → validators.ts → handlers.ts → db/     │
│      middleware.ts → jwt.ts → session.ts → roles.ts    │
│      ALL api/ handlers → DatabasePool (single point)   │
│                                                         │
│  ⚡ SURPRISING CONNECTIONS:                             │
│      seeds.ts → jwt.ts (why does seeding need auth?)   │
│      errors.ts → models.ts (circular risk)             │
│                                                         │
│  📊 MODULES: auth(4) → api(4) → db(4)                 │
│     Coupling score: 0.73 (moderate — watch auth/)      │
└─────────────────────────────────────────────────────────┘

Result: 150,000 tokens → 2,000 tokens (98.7% compression)
        Persists across ALL future sessions forever`,
        },
      },
      {
        type: `how`, icon: `⚙️`, label: `How to Use It`,
        text: `Three steps to go from "agent guessing" to "agent understanding your architecture." The graph generates in seconds and produces a persistent file you never have to regenerate (unless the architecture changes significantly).`,
        bullets: [
          `Step 1: Install → VS Code Marketplace "Graphify" + pip install anytechie-graphify`,
          `Step 2: Right-click any folder → "Graphify: Build Knowledge Graph" (30 seconds)`,
          `Step 3: Copy graph summary → paste into CLAUDE.md or agent system prompt`,
          `Step 4: Every future session starts with full architecture (no re-reading files)`,
          `Step 5: Re-run monthly or after major refactors to keep the graph fresh`,
          `Configure: Settings → graphify.pythonPath for virtual environments`,
        ],
        code: {
          label: `Real workflow — from generation to agent usage`,
          content: `# ━━━ STEP 1: Generate the knowledge graph (one-time, ~30s) ━━━
# Right-click folder in VS Code → "Graphify: Build Knowledge Graph"
# OR via command palette: Cmd+Shift+P → "Analyze Folder"

# ━━━ STEP 2: Copy graph summary into CLAUDE.md ━━━
# File: CLAUDE.md (persists across ALL sessions)

## Architecture Map (generated by Graphify)
- God Nodes: AuthMiddleware (14 deps), DatabasePool (11 deps)
- Module flow: api/routes → validators → handlers → db/
- Auth flow: middleware → jwt → session → roles
- ⚠️ Circular risk: errors.ts ↔ models.ts
- ⚠️ Unexpected: seeds.ts imports jwt.ts

## Refactoring Rules
- Never modify AuthMiddleware without updating all 14 dependents
- DatabasePool changes require integration test suite run
- seeds.ts → jwt.ts coupling should be removed (tech debt)

# ━━━ STEP 3: Every new session starts informed ━━━
# Claude/Copilot reads CLAUDE.md automatically
# Agent now knows: "AuthMiddleware has 14 dependents,
#   I should be careful and check all of them"
# WITHOUT reading all 500 files (saved 148k tokens)`,
        },
      },
      {
        type: `why`, icon: `💡`, label: `Why — Token Preservation & Cross-Session Memory`,
        text: `This is the key insight most engineers miss: AI agents have no memory between sessions. Every new chat starts at zero. Without a knowledge graph, agents burn 50-80% of their context window just re-reading files to understand your architecture — and still miss relationships. The graph solves both problems: massive token savings AND persistent cross-session memory.`,
        bullets: [
          `98% token compression — full architecture in ~2k tokens vs 150k+ for raw file reading`,
          `Persistent memory — graph file survives session endings, model switches, tool changes`,
          `Zero cold-start — new sessions load pre-built understanding instantly`,
          `Architecture-aware decisions — agents know "this class has 14 dependents" before editing`,
          `Blast radius visibility — agents see impact of changes before making them`,
          `God Node alerts — immediately spot over-coupled code that needs decomposition`,
          `Hidden dependency detection — find connections docs don't mention but code proves`,
          `Multi-agent continuity — all agents in a fleet share the same architectural truth`,
        ],
        code: {
          label: `Token economics — before vs after knowledge graph`,
          content: `┌─────────────────────────────────────────────────────────────┐
│  WITHOUT KNOWLEDGE GRAPH (every session)                    │
├─────────────────────────────────────────────────────────────┤
│  Action                          │ Tokens   │ % of 200k    │
│  ─────────────────────────────── │ ──────── │ ──────────   │
│  Read project structure          │  5,000   │   2.5%       │
│  Read core source files          │ 80,000   │  40.0%       │
│  Read related test files         │ 40,000   │  20.0%       │
│  Read config/types/schemas       │ 25,000   │  12.5%       │
│  ─────────────────────────────── │ ──────── │ ──────────   │
│  TOTAL CONTEXT BURNED            │ 150,000  │  75.0% ❌    │
│  Remaining for actual work       │  50,000  │  25.0%       │
│                                                             │
│  ⚠️  And this repeats EVERY new session!                   │
│  ⚠️  Agent still misses cross-file relationships           │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  WITH KNOWLEDGE GRAPH (every session)                       │
├─────────────────────────────────────────────────────────────┤
│  Action                          │ Tokens   │ % of 200k    │
│  ─────────────────────────────── │ ──────── │ ──────────   │
│  Load graph summary (CLAUDE.md)  │  2,000   │   1.0%       │
│  Read only the specific files    │ 15,000   │   7.5%       │
│  needed for current task         │          │              │
│  ─────────────────────────────── │ ──────── │ ──────────   │
│  TOTAL CONTEXT BURNED            │  17,000  │   8.5% ✅    │
│  Remaining for actual work       │ 183,000  │  91.5%       │
│                                                             │
│  ✅ Graph persists — never regenerated unless arch changes  │
│  ✅ Agent knows ALL relationships from day one              │
│  ✅ 10× more context available for actual coding            │
└─────────────────────────────────────────────────────────────┘

│ Session 1 │ Session 2 │ Session 3 │ Session 4 │ ...
│ Generate  │  Reuse    │  Reuse    │  Reuse    │ FREE
│  graph    │  graph    │  graph    │  graph    │ FOREVER
│ (30 sec)  │ (0 sec)   │ (0 sec)   │ (0 sec)   │`,
        },
      },
      {
        type: `key`, icon: `🔑`, label: `Workflow Integration Pattern`,
        text: `Here's the complete workflow that top engineers use: generate graph → extract key insights → embed in CLAUDE.md → every agent session starts smart. You can also expose the graph via MCP for real-time querying, or share it across your agent fleet for multi-agent architectural consistency.`,
        bullets: [
          `CLAUDE.md integration — graph summary auto-loaded into every Claude Code session`,
          `MCP exposure — serve graph as queryable tool: "which files depend on auth/jwt.ts?"`,
          `Agent fleet sync — all sub-agents share same architectural truth (no conflicting views)`,
          `Pre-refactor ritual — always re-run graph before touching God Nodes`,
          `PR review enhancement — graph diff shows architecture changes, not just code diff`,
          `Monthly refresh cadence — re-run after sprints to catch architecture drift`,
          `Incident response — graph shows blast radius instantly during production fires`,
        ],
        code: {
          label: `Complete integration — CLAUDE.md + MCP + multi-agent`,
          content: `# ━━━ CLAUDE.md — Architecture section (auto-loaded every session) ━━━

## 🏗️ Architecture Graph (last updated: 2026-04-27)
## Generated by: Graphify → "Build Knowledge Graph" on src/

### Critical Paths (touch carefully)
- AuthMiddleware → 14 dependents (God Node — never edit alone)
- DatabasePool → 11 dependents (single point of failure)
- api/routes.ts → validators → handlers → db/ (main request flow)

### Module Boundaries
- auth/ (4 files) — owns: JWT, sessions, roles, middleware
- api/ (4 files) — owns: routes, validation, handlers, errors
- db/ (4 files) — owns: pool, models, migrations, seeds

### Known Debt (from Surprising Connections)
- seeds.ts imports jwt.ts — REMOVE (seeding shouldn't need auth)
- errors.ts ↔ models.ts — BREAK circular before it spreads

### Refactoring Safety Rules
- God Node changes → run FULL test suite (not just unit tests)
- New module? → re-run Graphify to update this section
- Cross-module import? → get architecture review first

# ━━━ MCP Server — expose graph for real-time agent queries ━━━
# .claude/mcp_servers/architecture.json
{
  "name": "architecture-graph",
  "command": "graphify serve --format json",
  "tools": [
    { "name": "get_dependents", "desc": "Files that depend on X" },
    { "name": "get_god_nodes", "desc": "Over-coupled components" },
    { "name": "get_blast_radius", "desc": "Impact of changing X" }
  ]
}

# Agent can now ask: "What's the blast radius of changing jwt.ts?"
# Response: "14 files affected: middleware.ts, session.ts, ..."
# → Agent adjusts its approach automatically`,
        },
      },
    ],
    callout: {
      label: `The 30-Second Investment That Pays Forever`,
      text: `Generate a knowledge graph once (30 seconds). Save 148,000 tokens per session. Persist across unlimited future sessions. Give every agent in your fleet architectural awareness from line one. This is the highest-ROI action in agentic engineering: one command → permanent intelligence upgrade for all your AI tools.`,
    },
    pillars: [
      {
        id: `GR-01`, title: `Token economics deep dive`, tag: `Why This Matters`, open: true,
        rules: [
          { color: `teal`, title: `The cold-start tax you're paying every session`, desc: `Without a graph, agents spend 50-75% of context re-reading files. On a 200k window, that's 100-150k tokens WASTED on orientation before any real work begins. Multiply by 10 sessions/day = 1-1.5M tokens burned on redundant reading. The graph eliminates this entirely.` },
          { color: `gold`, title: `Compression ratio: 98.7% for architecture`, desc: `A 500-file project (~150k tokens raw) compresses to ~2k tokens of graph summary while preserving ALL structural relationships. The agent knows "AuthMiddleware has 14 dependents" without reading any of those 14 files. Relationships are the most expensive thing to discover and the cheapest to store.` },
          { color: `purple`, title: `Cross-session memory without RAG complexity`, desc: `RAG systems need vector databases, embeddings, retrieval logic. A knowledge graph is just a text file in your repo. Every tool that reads CLAUDE.md gets the graph. No infrastructure, no maintenance, no retrieval failures. It's the simplest form of persistent AI memory that actually works.` },
          { color: `coral`, title: `Multi-agent architectural consistency`, desc: `When 5 agents work on your codebase simultaneously, they ALL read the same graph. No agent has a stale or incomplete view. No conflicting assumptions about architecture. One source of truth for your entire agent fleet — updated with a single re-run.` },
        ],
      },
      {
        id: `GR-02`, title: `Advanced patterns — beyond single repos`, tag: `Power User`,
        rules: [
          { color: `teal`, title: `Incident data as knowledge graphs`, desc: `Feed incident data (services, alerts, responders, timelines) into graph structures. "What happened last time this service broke?" becomes an instant graph lookup — not 30 minutes of Slack archaeology. See Rootly-Graphify integration.` },
          { color: `gold`, title: `Blast radius prediction from historical data`, desc: `The graph learns co-failure patterns: when Service X goes down, which other services tend to follow? This is learned from real incident history, not documentation. During incidents, the graph tells you what's likely to break next.` },
          { color: `purple`, title: `Architecture drift detection`, desc: `Generate graphs weekly. Diff them. If coupling scores increase or new God Nodes appear, you've caught architecture degradation BEFORE it becomes a crisis. Automate this in CI: "graph coupling score > 0.8 = block merge."` },
          { color: `coral`, title: `Onboarding acceleration`, desc: `New engineer joins. Instead of 2 weeks reading code: open the graph visualizer, spend 30 minutes exploring the interactive map, understand the full system. Graph-based onboarding dramatically accelerates time-to-productivity for new hires.` },
        ],
        code: {
          label: `CI integration — automated architecture health checks`,
          content: `# .github/workflows/architecture-check.yml
name: Architecture Health
on: [pull_request]
jobs:
  graph-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: pip install anytechie-graphify
      - run: graphify analyze src/ --output graph.json

      # Fail PR if architecture degrades
      - run: |
          COUPLING=$(jq '.metrics.coupling_score' graph.json)
          GOD_NODES=$(jq '.god_nodes | length' graph.json)
          if (( $(echo "$COUPLING > 0.8" | bc -l) )); then
            echo "❌ Coupling too high: $COUPLING (max: 0.8)"
            exit 1
          fi
          if (( GOD_NODES > 3 )); then
            echo "❌ Too many God Nodes: $GOD_NODES (max: 3)"
            exit 1
          fi
          echo "✅ Architecture healthy"`,
        },
      },
    ],
  },

  // ══════════════════════════════════════════
  //  14 — SECURITY & SAFETY
  // ══════════════════════════════════════════
  {
    id: `security`,
    sectionNum: `14`,
    title: `Security & Safety in Agentic Systems`,
    subtitle: `Non-negotiable \u2014 the blast radius you don't see is the one that hurts`,
    type: `teaching`,
    intro: `Agentic systems operate with broad permissions and can take irreversible actions. The #1 cause of agentic incidents in 2026 is under-scoped permission boundaries \u2014 not model errors.`,
    blocks: [
      {
        type: `what`, icon: `📘`, label: `What It Is`,
        text: `Security in agentic systems means designing permission boundaries, blast radius minimization, human-in-the-loop checkpoints, prompt injection protection, and secret management \u2014 all as first-class architectural features, not afterthoughts.`,
        bullets: [
          `Principle of Least Privilege \u2014 agents get only required permissions`,
          `Blast Radius Minimization \u2014 worst-case failure affects smallest surface`,
          `Human-in-the-Loop \u2014 approval gates before irreversible actions`,
          `Prompt Injection Protection \u2014 sanitize all external data`,
          `Secret Management \u2014 never in the context window`,
        ],
      },
      {
        type: `how`, icon: `⚙️`, label: `How It Works`,
        text: `Configure permission boundaries at the infrastructure level: MCP read_only for production data, blocked patterns for sensitive files, human approval gates for destructive actions. Log every agent action with its justification for audit trails.`,
        bullets: [
          `MCP read_only: true for all production data sources`,
          `Block *.env, *.key, */secrets/* at config level`,
          `Any action that can't be undone in <60s requires human confirmation`,
          `Use typed schemas for agent-to-agent communication, not freeform text`,
          `Structured JSON logging for every agent action + justification`,
        ],
      },
      {
        type: `why`, icon: `💡`, label: `Why It Matters`,
        text: `The #1 cause of agentic incidents is under-scoped permissions, not model hallucinations. Security must be designed in, not bolted on. A circuit breaker (>1% error rate = halt) belongs in the orchestrator as a first-class feature.`,
        bullets: [
          `Under-scoped permissions = #1 cause of agentic incidents`,
          `Prompt injection can turn agents against your own codebase`,
          `Without audit trails, debugging multi-agent failures is archaeology`,
          `Circuit breaker: >1% error rate = automatic halt + rollback`,
        ],
      },
    ],
    pillars: [
      {
        id: `SS-01`, title: `The 5 security primitives`, tag: `Non-Negotiable`, open: true,
        rules: [
          { color: `coral`, title: `Principle of Least Privilege`, desc: `Every agent gets only permissions required for its current task. Read-only for research. Write scoped to sandboxed dirs. Never grant production DB write without human approval.`, tip: `MCP read_only: true for all production data. Block *.env, *.key at config.` },
          { color: `teal`, title: `Blast Radius Minimization`, desc: `Design every workflow so worst-case failure affects smallest surface. Use isolated branches, sandboxed environments, ephemeral containers.` },
          { color: `gold`, title: `Human-in-the-Loop Checkpoints`, desc: `Hardcode approval gates before: file deletion, production DB writes, external API calls with cost, any push to main.`, tip: `Any action that can't be undone in <60 seconds requires human confirmation.` },
          { color: `purple`, title: `Prompt Injection Protection`, desc: `External sources (web, files, APIs, user input) can inject instructions. Always sanitize. Use typed schemas for agent-to-agent communication.` },
          { color: `coral`, title: `Secret Management`, desc: `API keys and credentials must never appear in the context window. Use environment variables and dedicated secret managers. Block patterns at MCP config.` },
        ],
      },
      {
        id: `SS-02`, title: `Audit trails and circuit breakers`, tag: `Production`,
        rules: [
          { color: `gold`, title: `Log every agent action with justification`, desc: `Every file touched, command run, API call \u2014 logged with the agent's reasoning. This is your post-mortem trail. Use structured JSON logging.` },
          { color: `teal`, title: `The circuit breaker pattern`, desc: `Error rate > 1% = halt entire workflow automatically. Circuit breakers are first-class orchestrator features, not emergency afterthoughts.`, tip: `>1% error rate = automatic halt + alert + rollback. No exceptions.` },
        ],
        code: {
          label: `Minimal agent audit log schema (JSON)`,
          content: `{
  "ts":             "2026-04-27T14:23:01Z",
  "agent_id":       "backend-worker-3",
  "action":         "file.write",
  "path":           "src/auth/middleware.ts",
  "justification":  "Adding rate-limit guard per spec PL-01",
  "approved_by":    "orchestrator",
  "reversible":     true,
  "rollback_cmd":   "git checkout src/auth/middleware.ts",
  "session_id":     "ses_abc123",
  "error_rate":     0.000
}`,
        },
      },
    ],
  },

  // ══════════════════════════════════════════
  //  15 — ANTI-PATTERNS
  // ══════════════════════════════════════════
  {
    id: `antipatterns`,
    sectionNum: `15`,
    title: `10 Anti-Patterns That Kill Agentic Velocity`,
    subtitle: `Failure modes \u2014 recognise them before they compound into real damage`,
    type: `antipatterns`,
    callout: {
      label: `The Hidden Tax`,
      text: `Most developers unknowingly sacrifice 40\u201360% of their agentic productivity to just 3 of these patterns: not encoding lessons, skipping planning, and over-trusting output.`,
    },
    cards: [
      { num: `01`, title: `Context Window Hoarding`, desc: `Running the same session for hours, accumulating irrelevant context. Each distinct task deserves a fresh window. Use /clear aggressively \u2014 treat sessions like git branches.` },
      { num: `02`, title: `Over-trusting Agent Output`, desc: `"It compiled, ship it." Every PR requires human review. Build pattern recognition for agent failure modes: silent scope creep, confident hallucination, over-engineering.` },
      { num: `03`, title: `Building Monolithic Agents`, desc: `One agent handles frontend + backend + tests + docs. It fails at all. Specialist agents with isolated contexts dramatically outperform generalists.` },
      { num: `04`, title: `Skipping the Planning Phase`, desc: `Jumping to execution on 3+ file tasks. A bad spec costs 10\u00D7 more to fix post-execution. Plan Mode is non-negotiable.` },
      { num: `05`, title: `Not Encoding Corrections`, desc: `Correcting Claude verbally, then repeating the same correction next day. Every correction not written to CLAUDE.md is a correction that doesn't compound.` },
      { num: `06`, title: `Agents Working on Main`, desc: `Letting Claude work directly on main or staging. One branch per task, one worktree per session \u2014 always.` },
      { num: `07`, title: `Opus for Everything`, desc: `Using your most powerful model for routing, triage, and formatting. Model tiering saves 40\u201360% with zero accuracy loss on appropriate tasks.` },
      { num: `08`, title: `No Feedback Loops in CLAUDE.md`, desc: `A CLAUDE.md that doesn't tell Claude to run tests after changes. Without feedback loops, Claude assumes changes work. One "run pytest after every edit" line = 2\u20133\u00D7 quality.` },
      { num: `09`, title: `Fuzzy Agent Boundaries`, desc: `Agents with vague responsibilities like "handle the backend." Without crisp contracts \u2014 types, schemas, APIs \u2014 agents generate conflicting code.` },
      { num: `10`, title: `Premature Orchestration Complexity`, desc: `Building 10-agent systems before validating a 2-agent solution works. Every agent added multiplies coordination overhead. Start minimal, expand with evidence.` },
    ],
  },

  // ══════════════════════════════════════════
  //  16 — MINDSET SHIFTS
  // ══════════════════════════════════════════
  {
    id: `mindset`,
    sectionNum: `16`,
    title: `Mindset Shifts That Unlock 100X`,
    subtitle: `Mental models \u2014 the questions that change everything`,
    type: `mindset`,
    cards: [
      { q: `"Am I writing code or designing systems?"`, a: `The most valuable engineers in 2026 aren't those who type fastest. They're those who design coordination systems. Your leverage is in what you architect, not what you type.` },
      { q: `"Is this task verifiable quickly?"`, a: `If yes \u2192 delegate fully and aggressively. If not \u2192 work collaboratively. The delegation intuition is a skill built over time. Start by delegating anything with clear acceptance criteria.` },
      { q: `"Am I treating agents as leverage or magic?"`, a: `Treat agents as leverage, not magic. Use them aggressively where speed is cheap. Be conservative where mistakes are expensive. The 80% problem \u2014 almost-right AI solutions \u2014 comes from skipping verification.` },
      { q: `"Is my codebase agent-ready?"`, a: `Agents struggle with disorganized codebases, unclear conventions, and missing documentation. A well-structured project enables dramatically better agent performance.` },
      { q: `"What would a staff engineer say is wrong here?"`, a: `The single best quality-gate prompt. Ask it after every significant agent output. Build it into your slash commands. Never mark a task complete without passing it.` },
      { q: `"Am I compounding or just consuming?"`, a: `The self-improvement loop is the difference between linear and exponential productivity. Every session where you don't encode a lesson is a session that didn't compound.` },
    ],
  },

  // ══════════════════════════════════════════
  //  17 — ENGINEERING HIERARCHY
  // ══════════════════════════════════════════
  {
    id: `hierarchy`,
    sectionNum: `17`,
    title: `The Engineering Hierarchy`,
    subtitle: `Where are you? Where are you going?`,
    type: `hierarchy`,
    levels: [
      { level: `L1`, colorClass: `l1`, title: `Tool Operator`, desc: `Uses AI for autocomplete and basic generation. Reactive, session-bound, no persistence. Commodity tier \u2014 being automated away by L3+ engineers.`, fill: 25, fillColor: `var(--coral)` },
      { level: `L2`, colorClass: `l2`, title: `Context Engineer`, desc: `Masters SELECT/WRITE/COMPRESS/ISOLATE. Designs persistent context architectures. CLAUDE.md as infrastructure. Professional tier \u2014 increasing leverage weekly.`, fill: 50, fillColor: `var(--amber)` },
      { level: `L3`, colorClass: `l3`, title: `Agent Architect`, desc: `Designs multi-agent systems with safety constraints. Orchestrates autonomous workflows. Expert tier \u2014 top 10%. Talks to orchestrators, not individual agents.`, fill: 75, fillColor: `var(--teal)` },
      { level: `L4`, colorClass: `l4`, title: `Autonomous Systems Engineer`, desc: `Builds self-improving, self-healing software systems. AI manages AI. Elite tier \u2014 top 1\u20132%. The system designs itself.`, fill: 100, fillColor: `var(--purple)` },
    ],
    callout: {
      label: `Final Principle`,
      text: `Your competitive advantage isn't using AI. It's designing systems where AI operates at peak effectiveness through superior context engineering and safety architecture.`,
    },
  },

  // ══════════════════════════════════════════
  //  18 — ACTION PLAN
  // ══════════════════════════════════════════
  {
    id: `action`,
    sectionNum: `18`,
    title: `Week 1 Action Plan`,
    subtitle: `Start here \u2014 one concrete task per day`,
    type: `action`,
    cards: [
      {
        day: `Day 1`, title: `CLAUDE.md Foundation`,
        items: [`Run /init on your main project`, `Refine CLAUDE.md to ~100 lines`, `Add your 3 most common workflows as slash commands`, `Set up tasks/lessons.md for the self-improvement loop`],
      },
      {
        day: `Day 2`, title: `Git Worktree Setup`,
        items: [`Set up git worktrees for parallel sessions`, `Run 3 parallel Claude sessions on 3 independent tasks`, `Practice the merge + review workflow`, `Configure squash merge as your default`],
      },
      {
        day: `Day 3`, title: `First Specialist Agent`,
        items: [`Write your Code Reviewer agent in .claude/agents/`, `Wire it into your PR workflow`, `Test it on your most recent PR`, `Document its rules in CLAUDE.md`],
      },
      {
        day: `Day 4`, title: `Self-Improvement Loop`,
        items: [`Activate the lessons.md loop permanently`, `Every correction from today \u2192 a rule`, `Review and prune your CLAUDE.md`, `Build your first /project:review command`],
      },
      {
        day: `Day 5`, title: `MCP Integration`,
        items: [`Set up your first MCP server (GitHub or filesystem)`, `Configure lazy loading and triggers`, `Block sensitive path patterns`, `Test the circuit breaker rule`],
      },
      {
        day: `Week 2+`, title: `Orchestrator Build`, dark: true,
        items: [`Design your orchestrator agent`, `Add specialist agents one at a time`, `Measure quality vs your baseline`, `Compound from there. Indefinitely.`],
      },
    ],
  },
]
