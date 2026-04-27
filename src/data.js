// ─────────────────────────────────────────────
//  100X Agentic Engineering — Content Data File
//  All copy, code samples, and structured data
//  lives here. Components in App.jsx stay pure.
// ─────────────────────────────────────────────

export const META = {
  title: `100X Agentic Engineering`,
  logoLabel: `Agentic Engineering Bible`,
  eyebrow: `Unlock Guide · Top 1% Practices`,
  heroSub:
    `Synthesized from Anthropic's 2026 Coding Trends Report, Boris Cherny's workflow, Addy Osmani's agent orchestra framework, and the sharpest community intelligence of the year.`,
  date: `April 2026`,
  footerNote: `April 2026 Edition · Research Synthesis\nSynthesized from Anthropic, Boris Cherny & Addy Osmani.\nShare freely. Build better systems.`,
  sidebarMeta:
    `The single most important insight: top 2% engineers aren't using more tools or writing better prompts. They're engineering better systems.`,
}

export const HERO_STATS = [
  { n: `252×`, label: `Faster than traditional workflows` },
  { n: `90.2%`, label: `Higher success with multi-agent isolation` },
  { n: `90%`, label: `Cost reduction via Plan-and-Execute` },
  { n: `Top 2%`, label: `Engineers manage fleets, not prompts` },
]

export const NAV_ITEMS = [
  { id: `fundamentals`, num: `01`, label: `Fundamentals` },
  { id: `context`, num: `02`, label: `Context Engineering` },
  { id: `plan`, num: `03`, label: `Plan Before You Build` },
  { id: `delegate`, num: `04`, label: `Delegate & Verify` },
  { id: `git`, num: `05`, label: `Git Discipline` },
  { id: `claudemd`, num: `06`, label: `CLAUDE.md Mastery` },
  { id: `selfimprove`, num: `07`, label: `Self-Improvement Loop` },
  { id: `commands`, num: `08`, label: `Slash Commands` },
  { id: `multiagent`, num: `09`, label: `Multi-Agent Systems` },
  { id: `patterns`, num: `10`, label: `Orchestration Patterns` },
  { id: `tier3`, num: `11`, label: `3-Tier Stack` },
  { id: `mcp`, num: `12`, label: `MCP + A2A Protocols` },
  { id: `tools`, num: `13`, label: `Tools & Stack` },
  { id: `security`, num: `14`, label: `Security & Safety` },
  { id: `mindset`, num: `15`, label: `Mindset Shifts` },
  { id: `antipatterns`, num: `16`, label: `Anti-Patterns` },
  { id: `hierarchy`, num: `17`, label: `Engineering Hierarchy` },
  { id: `action`, num: `18`, label: `Action Plan` },
]

// ─────────────────────────────────────────────
//  SECTIONS
// ─────────────────────────────────────────────

export const SECTIONS = [

  // ── 00: FUNDAMENTALS ──────────────────────
  {
    id: `fundamentals`,
    sectionNum: `00`,
    title: `Fundamentals`,
    subtitle: `The 6 pillars that separate amateurs from architects`,
    type: `fundamentals`,
    callout: {
      label: `Core Insight`,
      text: `"The top 2% aren't using more tools or writing better prompts. They're engineering better systems — coordination, context, and feedback loops at scale."`,
    },
    cards: [
      { color: `gold`, icon: `⚡`, title: `Context Engineering`, desc: `The #1 skill of 2026. Mastering SELECT, WRITE, COMPRESS, and ISOLATE on the context window is what separates great agentic engineers from average ones.` },
      { color: `teal`, icon: `🗺️`, title: `Plan Before Building`, desc: `Every task touching 3+ files starts in Plan Mode. A vague spec multiplies errors across your whole agent fleet. The spec isn't overhead — it is the product.` },
      { color: `purple`, icon: `🔀`, title: `Multi-Agent Systems`, desc: `You are no longer the lead engineer — you are the system designer. Orchestrate fleets of specialist agents instead of prompting a single agent repeatedly.` },
      { color: `blue`, icon: `🔁`, title: `Self-Improvement Loop`, desc: `Every correction encoded in CLAUDE.md compounds indefinitely. After 6 months of consistent looping, your config knows your codebase better than most new hires.` },
      { color: `coral`, icon: `🛡️`, title: `Safety & Verification`, desc: `You are the final approval gate — never skip it. Human-in-the-loop checkpoints and blast radius minimization aren't optional friction; they're what makes scale safe.` },
      { color: `green`, icon: `🌿`, title: `Git Discipline`, desc: `One worktree per session. One branch per task. Squash merge everything. 10–15 parallel sessions only work because the branches never collide.` },
    ],
    infoCallout: {
      label: `How to use this guide`,
      text: `Each of the 18 sections below is a deep-dive into one core practice. Start with Context Engineering (#01) and CLAUDE.md Mastery (#06) — these two alone will transform your daily workflow immediately.`,
      variant: `info`,
    },
  },

  // ── 01: CONTEXT ENGINEERING ───────────────
  {
    id: `context`,
    sectionNum: `01`,
    title: `Context Engineering Is the New #1 Skill`,
    subtitle: `Foundation · Replaces prompt engineering entirely`,
    type: `pillars`,
    callout: { label: `Karpathy, June 2025`, text: `\`Context engineering is the delicate art and science of filling the context window with just the right information for the next step.\`` },
    pillars: [
      {
        id: `CE-01`, title: `The 4 core operations to master`, tag: `Foundation`, open: true,
        rules: [
          { color: `teal`, title: `SELECT — only pull what's needed`, desc: `Use RAG, AST parsing, grep, and semantic similarity to inject relevant code and docs. Providing all tools simultaneously hurts accuracy 3× vs semantic selection. The context window is scarce — treat it like memory in a performance-critical system.`, tip: `Tool selection via semantic similarity = 3× better accuracy vs giving Claude all tools at once` },
          { color: `gold`, title: `WRITE — persist knowledge across sessions`, desc: `Use scratchpads, tasks/lessons.md, and long-term memory files. Boris Cherny's rule: "Anytime Claude does something incorrectly, add it to CLAUDE.md so it never repeats." Every correction encoded compounds indefinitely.` },
          { color: `purple`, title: `COMPRESS — compact at 70–95% context usage`, desc: `Don't wait for auto-compact. Proactively clear with /clear between unrelated tasks. Compact at 70% context usage as a habit. Fresh context produces measurably better output — session hygiene is part of the craft.`, tip: `/clear between unrelated tasks — treat sessions like git branches` },
          { color: `coral`, title: `ISOLATE — give each agent its own context window`, desc: `Multi-agent isolation delivers 90.2% higher task success vs single-agent execution. The cost is 15× tokens but the accuracy gain justifies it for any non-trivial work.`, tip: `Isolation = 90.2% higher success rate (15× token cost — worth every token)` },
        ],
      },
      {
        id: `CE-02`, title: `The context budget allocation strategy`, tag: `Advanced`,
        code: {
          label: `Context budget for 200k token window`,
          content: `// Context Budget — 200k token window
// Based on Claude optimal performance research

Priority 1 — Critical Constraints    (5% = 10k tokens)
├── Security policies (non-negotiable)
├── Type definitions and schemas
└── Business invariant rules

Priority 2 — Task Context            (35% = 70k tokens)
├── Current file being edited
├── Related files (imports, dependencies)
├── Test files for reference
└── Specific requirements for this task

Priority 3 — Project Patterns        (40% = 80k tokens)
├── Architecture Decision Records (ADRs)
├── Code style guidelines
├── Common patterns and examples
└── Recent similar implementations

Priority 4 — Background Knowledge    (20% = 40k tokens)
├── Framework documentation snippets
├── Language reference
└── Third-party API docs

// Dynamic compression triggers at 95% usage
if (context_usage > 0.95) {
    summarize_oldest_messages();
    compress_successful_trajectories();
}`,
        },
      },
    ],
  },

  // ── 02: PLAN ──────────────────────────────
  {
    id: `plan`,
    sectionNum: `02`,
    title: `Plan Before You Build`,
    subtitle: `Workflow · Non-negotiable for any task touching 3+ files`,
    type: `pillars`,
    pillars: [
      {
        id: `PL-01`, title: `Plan Mode is not optional for complex tasks`, tag: `Core Habit`, open: true,
        rules: [
          { color: `teal`, title: `Start every 3+ file task in Plan Mode`, desc: `Boris Cherny starts most sessions in Plan Mode. The spec you write upfront is product thinking made explicit — a vague spec multiplies errors across your entire agent fleet. The more autonomous your agents, the more expensive a bad spec becomes.` },
          { color: `gold`, title: `Spawn a second Claude to review your plan`, desc: `Before executing, open a second session and ask it to review your plan as a staff engineer. Cross-model review catches architectural drift before any code is written. This costs minutes and saves hours.`, tip: `"Review this plan as a staff engineer. What's wrong, risky, or missing?"` },
          { color: `purple`, title: `Phase-wise gated execution`, desc: `Break tasks into atomic phases of 5–10 minutes each. Each phase must pass unit, automation, and integration test gates before proceeding. No phase skipping, no exceptions. Build the gates into the plan itself, not as an afterthought.` },
          { color: `coral`, title: `If Claude goes sideways — stop, don't fix forward`, desc: `Use Esc+Esc (/rewind) when Claude drifts. If you've corrected the same mistake twice, clear and restart. Correcting in-context piles debt on top of wrong assumptions — you're not fixing the problem, you're burying it.`, tip: `After any mediocre fix: "Scrap this. Implement the elegant solution from scratch."` },
        ],
      },
    ],
  },

  // ── 03: DELEGATE ──────────────────────────
  {
    id: `delegate`,
    sectionNum: `03`,
    title: `Delegate Aggressively, Verify Relentlessly`,
    subtitle: `Execution · The quality gap is usually an accountability gap`,
    type: `pillars`,
    pillars: [
      {
        id: `DV-01`, title: `The delegation and verification system`, tag: `Execution`, open: true,
        rules: [
          { color: `teal`, title: `Delegate what's verifiable — hold what's design-critical`, desc: `Engineers delegate tasks they can "sniff-check for correctness" quickly: boilerplate, tests, migrations, formatting, documentation. Keep conceptually difficult or architecture-defining work collaborative. Your judgment is the scarce resource — spend it wisely.` },
          { color: `gold`, title: `Build feedback loops into CLAUDE.md permanently`, desc: `Tell Claude to run tests, linters, and build commands after every change. Without a feedback loop, Claude assumes changes work and moves on. Boris says this alone can 2–3× output quality.`, tip: `Always run pytest after changing Python files → baked into CLAUDE.md, not a one-time prompt` },
          { color: `purple`, title: `You are the final approval gate — never skip it`, desc: `"It compiled, ship it" is the most expensive mistake in agentic engineering. Every PR gets human review. Develop pattern recognition for agent-generated code: common failure modes, architectural drift, security holes, over-engineering.` },
          { color: `coral`, title: `Challenge Claude — don't just accept it`, desc: `Use adversarial verification prompts that force Claude to defend its output. The quality gap is often just an accountability gap.`, tip: `"Grill me on these changes" · "What would a staff engineer say is wrong here?" · "Prove to me this works."` },
        ],
      },
    ],
  },

  // ── 04: GIT ───────────────────────────────
  {
    id: `git`,
    sectionNum: `04`,
    title: `Git Discipline = Agentic Safety Net`,
    subtitle: `Safety · One worktree per session is the baseline`,
    type: `pillars`,
    pillars: [
      {
        id: `GD-01`, title: `Worktrees, branches, and squash merges`, tag: `Safety`, open: true,
        rules: [
          { color: `teal`, title: `One git worktree per Claude session`, desc: `Boris runs 10–15 Claude sessions simultaneously, each in its own git worktree. Changes don't collide. You can review, merge, or discard independently. This is not an advanced technique — it's the team's baseline.`, tip: `git worktree add ../feature-x && cd ../feature-x && claude` },
          { color: `gold`, title: `Always create a branch before Claude touches code`, desc: `One task per branch. Never let agents work directly on main. Small, focused PRs: the Anthropic team's median is 118 lines across 141 PRs, with 45K lines changed in a single day.` },
          { color: `purple`, title: `Squash merge everything from agent branches`, desc: `Squash merging gives you a clean linear history, one commit per feature, easy git revert and git bisect. Agent-generated intermediate commits are noise — squash them away.` },
        ],
      },
    ],
  },

  // ── 05: CLAUDE.MD ─────────────────────────
  {
    id: `claudemd`,
    sectionNum: `05`,
    title: `CLAUDE.md Mastery`,
    subtitle: `Infrastructure · hooks · agents · rules · commands (skills)`,
    type: `claudemd`,
    callout: {
      label: `Community Consensus 2026`,
      text: `CLAUDE.md is now as important as .gitignore — it's essential infrastructure, not optional docs. Every project needs one. It's the permanent brain that survives session resets.`,
    },
    structureCode: {
      label: `Recommended .claude/ folder structure`,
      content: `project-root/
├── CLAUDE.md                     # Root — 50–100 lines max
│                                 # Project overview, commands, global rules
├── .claude/
│   ├── agents/                   # Sub-agent definitions
│   │   ├── code-reviewer.md      # Invoked for PR reviews
│   │   ├── test-writer.md        # Generates test suites
│   │   └── security-auditor.md  # Scans for vulnerabilities
│   │
│   ├── commands/                 # Custom slash commands (skills)
│   │   ├── review.md             # /project:review
│   │   ├── pr-prep.md            # /project:pr-prep
│   │   └── refactor.md          # /project:refactor
│   │
│   ├── hooks/                    # Lifecycle automation scripts
│   │   ├── post-write.sh         # Runs lint/typecheck after file edits
│   │   └── pre-bash.sh           # Validates bash commands before execution
│   │
│   └── settings.json             # MCP servers, permissions, hooks config
│
├── src/
│   └── CLAUDE.md                 # Module-level context (auto-loaded)
└── docs/
    └── CLAUDE.md                 # Docs-level context (auto-loaded)`,
    },
    folders: [
      {
        name: `hooks/`,
        icon: `🪝`,
        color: `teal`,
        what: `Shell scripts that run automatically at Claude lifecycle events: PreToolUse (before any tool call), PostToolUse (after), Notification (when Claude alerts you), and Stop (when a session ends). Configured in .claude/settings.json.`,
        howToUse: [
          `Create the shell scripts in .claude/hooks/`,
          `Register them in .claude/settings.json under "hooks"`,
          `Use environment variable $CLAUDE_TOOL_INPUT to read the incoming tool call`,
          `Use $CLAUDE_TOOL_OUTPUT to read the tool's result`,
          `Exit code 0 = allow, non-zero = block with error message`,
        ],
        codeLabel: `.claude/settings.json — hooks configuration`,
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
        code2Label: `.claude/hooks/post-write.sh — auto lint after every file write`,
        code2: `#!/bin/bash
# Runs automatically after Claude writes/edits any file
# $CLAUDE_TOOL_OUTPUT contains the written file path

MODIFIED="$CLAUDE_TOOL_OUTPUT"

# TypeScript / TSX files → typecheck + lint
if [[ "$MODIFIED" == *.ts || "$MODIFIED" == *.tsx ]]; then
  echo "→ Running TypeScript check..."
  npx tsc --noEmit 2>&1 | head -20

  echo "→ Running ESLint..."
  npx eslint "$MODIFIED" --max-warnings=0 2>&1 | head -15
fi

# Python files → run tests
if [[ "$MODIFIED" == *.py ]]; then
  echo "→ Running pytest on modified module..."
  python -m pytest "$(dirname $MODIFIED)" -x -q 2>&1 | tail -10
fi

exit 0  # always allow; errors are informational`,
      },
      {
        name: `agents/`,
        icon: `🤖`,
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

1. **Diff analysis** — run \`git diff --staged\` or \`git diff main\`
2. **Security scan** — check for: hardcoded secrets, SQL injection,
   unvalidated inputs, insecure deserialization
3. **Type safety** — verify TypeScript strict compliance, no \`any\`
4. **Test coverage** — ensure every new function has at least one test
5. **Architecture** — verify changes align with CLAUDE.md patterns
6. **Performance** — flag O(n²) patterns, missing indexes, N+1 queries

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
- Each test must have a clear \`it('should ...')\` description
- Run tests after writing — fix until green`,
      },
      {
        name: `rules`,
        icon: `📋`,
        color: `gold`,
        what: `Hard constraints written directly in CLAUDE.md using emphatic keywords (NEVER, ALWAYS, YOU MUST, IMPORTANT). Rules are the contract between you and Claude — they encode lessons learned, project invariants, and quality gates that apply to every session permanently.`,
        howToUse: [
          `Add a "## Rules" section to your CLAUDE.md`,
          `Use NEVER for absolute prohibitions (things that break the codebase)`,
          `Use ALWAYS for required habits (run tests, add types)`,
          `Use YOU MUST for strong obligations specific to this project`,
          `Use IMPORTANT for rules that are easy to forget but consequential`,
          `After any correction in a session, immediately encode it as a rule`,
        ],
        codeLabel: `CLAUDE.md — ## Rules section (real example)`,
        code: `## Rules

### Non-Negotiable (NEVER)
- NEVER commit directly to main or staging branches
- NEVER use \`any\` type in TypeScript — use \`unknown\` and narrow
- NEVER put secrets, API keys, or tokens in source code
- NEVER delete files without explicit user confirmation
- NEVER skip the test run before marking a task complete

### Required Habits (ALWAYS)
- ALWAYS run \`npm test\` after modifying any TypeScript file
- ALWAYS run \`python -m pytest\` after modifying any Python file
- ALWAYS add JSDoc / TSDoc to exported functions you create
- ALWAYS create a git branch before starting any task

### Project-Specific (YOU MUST)
- YOU MUST keep files under 300 lines — split larger files into modules
- YOU MUST follow the API contract in docs/api-spec.md exactly
- YOU MUST add a migration file when changing database schemas

### IMPORTANT Reminders
- IMPORTANT: The auth module uses JWT RS256, not HS256 — don't change
- IMPORTANT: All dates are stored as UTC ISO-8601 in the database
- IMPORTANT: Run \`npm run build\` after changing any config file`,
        code2Label: `CLAUDE.md — Boris's 3 universal principles (add at the bottom)`,
        code2: `## Universal Principles
1. Make every change as simple as possible. Delete lines, don't add them.
2. Fix root causes — no band-aids, no temporary fixes, no TODO comments.
3. Only touch what's necessary — no side effects, no scope creep.`,
      },
      {
        name: `commands/ (skills)`,
        icon: `⚡`,
        color: `coral`,
        what: `Markdown files in .claude/commands/ that define reusable slash commands invoked with /project:<name>. Think of these as your personal CLI for recurring workflows — code review, PR preparation, refactoring, dependency audits. Teams with 5+ documented commands onboard 25% faster.`,
        howToUse: [
          `Create a .md file in .claude/commands/ — the filename becomes the command`,
          `Write the instructions as plain text (no frontmatter needed)`,
          `Invoke with /project:<filename> in any Claude session`,
          `Use $ARGUMENTS to pass dynamic input: /project:review src/auth.ts`,
          `Chain commands: have one command call another for complex workflows`,
        ],
        codeLabel: `.claude/commands/review.md → invoked as /project:review`,
        code: `Review the code in the current branch or $ARGUMENTS if provided.

## Review Steps
1. Run \`git diff main -- $ARGUMENTS\` to get the changeset
2. **TypeScript**: run \`npx tsc --noEmit\` — report all errors
3. **Lint**: run \`npx eslint $ARGUMENTS --max-warnings=0\`
4. **Tests**: run \`npm test -- --coverage\` — flag any coverage drop
5. **Secrets scan**: \`git diff main | grep -iE "(api_key|password|secret|token)"\`
6. **File size**: flag any file over 300 lines
7. **Architecture**: verify changes align with CLAUDE.md patterns

## Output
Produce a Markdown table:
| Check | Status | Details |
|-------|--------|---------|
| TypeScript | ✅/❌ | ... |
| Lint       | ✅/❌ | ... |
| Tests      | ✅/❌ | ... |
...
**Overall**: READY TO MERGE | NEEDS FIXES`,
        code2Label: `.claude/commands/pr-prep.md → invoked as /project:pr-prep`,
        code2: `Prepare a production-ready PR for the current branch.

1. Run /project:review — fix all issues before proceeding
2. Generate a PR description with:
   - **Summary**: what changed and why (2–3 sentences)
   - **Changes**: bullet list of key modifications
   - **Testing**: how it was tested
   - **Screenshots**: note if UI changes present
   - **Breaking Changes**: list or "None"
3. Squash all commits into one: \`git rebase -i main\`
4. Suggest a PR title following: \`type(scope): description\`
   (feat/fix/refactor/chore/docs)
5. Verify the branch name follows: \`type/short-description\``,
      },
    ],
    pillars: [
      {
        id: `CM-01`, title: `The 100-line rule (Boris Cherny's secret)`, tag: `Structure`,
        rules: [
          { color: `teal`, title: `Boris's CLAUDE.md is ~100 lines. Most devs write 500–1000. Boris's works better.`, desc: `Every line must earn its place. For each line ask: "Would removing this cause Claude to make mistakes?" If not, cut it. Bloated files cause Claude to ignore your actual instructions — critical rules get lost in the noise.` },
          { color: `gold`, title: `The 10-section structure that works`, desc: `Project overview · Tech stack · Architecture · Code standards · Key file locations · Common commands · Workflow rules · Gotchas/quirks · Lessons learned · Agent delegation rules. Each section prevents a specific class of mistake.` },
          { color: `purple`, title: `Use @imports for detailed sections`, desc: `Root CLAUDE.md stays 50–100 lines with @imports for sub-sections. Domain knowledge lives in child CLAUDE.md files per directory — Claude loads them on demand without bloating every session.`, tip: `@./docs/auth-patterns.md — loaded only when working in the auth module` },
          { color: `coral`, title: `Treat it like code: version, review, prune regularly`, desc: `Check it into git. Never add to .gitignore — it's documentation AND institutional knowledge AND onboarding material. Review it when things go wrong. Update it multiple times a week.` },
        ],
      },
    ],
  },

  // ── 06: SELF-IMPROVEMENT ──────────────────
  {
    id: `selfimprove`,
    sectionNum: `06`,
    title: `The Self-Improvement Loop`,
    subtitle: `Compounding gains · Every correction becomes a permanent rule`,
    type: `pillars`,
    pillars: [
      {
        id: `SI-01`, title: `Boris's 6-step compounding loop`, tag: `Compounding`, open: true,
        rules: [
          { color: `teal`, title: `The loop: Plan → Execute → Review → Correct → Write rule → Import into CLAUDE.md`, desc: `Each correction you encode makes every future session better. This is compounding engineering — the kind that builds a real competitive moat over time. After 6 months of consistent looping, your CLAUDE.md knows your codebase better than most new hires.`, tip: `After any correction: "Write a rule in tasks/lessons.md that prevents this mistake."` },
          { color: `gold`, title: `The 3 principles at the bottom of Boris's file`, desc: `1. Make every change as simple as possible. Delete lines, don't add them. 2. Fix root causes — no band-aids, no temporary fixes. 3. Only touch what's necessary — no side effects, no scope creep. These 3 lines prevent more bugs than any linter.` },
          { color: `purple`, title: `Use "IMPORTANT" and "YOU MUST" for critical rules`, desc: `Emphasis works. If Claude keeps violating a rule despite it being in CLAUDE.md, the file is either too long (rule gets lost) or the phrasing is ambiguous. Add emphasis or move the rule to the top. Don't tolerate repeated violations — encode them away.` },
        ],
      },
    ],
  },

  // ── 07: SLASH COMMANDS ────────────────────
  {
    id: `commands`,
    sectionNum: `07`,
    title: `Custom Slash Commands`,
    subtitle: `Automation · Your personal CLI for recurring workflows`,
    type: `pillars`,
    pillars: [
      {
        id: `SC-01`, title: `Build commands for every recurring workflow`, tag: `Automation`, open: true,
        rules: [
          { color: `teal`, title: `Teams with 5+ documented workflows onboard 25% faster`, desc: `A documented workflow is a workflow that improves. Each custom command pays for itself from the second use. Build commands for: code review, PR prep, test generation, refactoring, documentation, and dependency audits.` },
          { color: `gold`, title: `Use /loop and /schedule for recurring tasks`, desc: `/loop runs monitoring tasks locally for up to 3 days. /schedule runs cloud-based recurring tasks even when your machine is off. Use these for background quality checks, automated testing sweeps, and dependency audits.` },
          { color: `purple`, title: `Permission levels per environment`, desc: `Local dev = permissive. CI/CD = restricted to read + test + lint only. Code review = read-only. Configure once in global CLAUDE.md, adjust per project.`, tip: `/sandbox reduces permission prompts by 84% — use it for all exploratory work` },
        ],
        code: {
          label: `.claude/commands/review.md → /project:review`,
          content: `Review the modified code in the current branch:
1. Check TypeScript strict compliance
2. Identify performance issues
3. Suggest missing tests
4. Check for unused imports and dead code
5. Verify no secrets or credentials in diff

→ Available as /project:review`,
        },
      },
    ],
  },

  // ── 08: MULTI-AGENT ───────────────────────
  {
    id: `multiagent`,
    sectionNum: `08`,
    title: `Multi-Agent Systems`,
    subtitle: `Architecture · The mental model shift from conductor to orchestrator`,
    type: `pillars`,
    callout: {
      label: `The Paradigm Shift`,
      text: `You are no longer the lead engineer. You talk to a lead agent. In 2026, top engineers stop talking to individual agents and start talking to an orchestrator that conducts the fleet. You design the system and verify the output.`,
    },
    pillars: [
      {
        id: `MA-01`, title: `Old model vs new model`, tag: `Core concept`, open: true,
        tiers: [
          { badge: `coral`, label: `Old Model`, text: `You → Single agent → Output (sequential, context-capped, all-or-nothing)` },
          { badge: `teal`, label: `New Model`, text: `You → Orchestrator → [Frontend agent | Backend agent | Security agent | Test agent] → Parallel output → Synthesis → Verified PR`, bold: true },
        ],
        rules: [
          { color: `teal`, title: `Strong engineers get MORE leverage, not less`, desc: `A vague spec multiplies errors across dozens of parallel runs. A precise spec — with clear architecture, integration boundaries, edge cases, and invariants — multiplies into precise implementations everywhere. Your value shifts from typing speed to specification quality.` },
        ],
      },
    ],
  },

  // ── 09: PATTERNS ──────────────────────────
  {
    id: `patterns`,
    sectionNum: `09`,
    title: `The 4 Production Orchestration Patterns`,
    subtitle: `Architecture · Choose the right topology for the task`,
    type: `pillars`,
    pillars: [
      {
        id: `OP-01`, title: `All 4 patterns explained`, tag: `Architecture`, open: true,
        rules: [
          { color: `teal`, title: `1. Pipeline — sequential stages, highest accuracy`, desc: `Research agent → Draft agent → Review agent. Each output becomes the next input. Use for content generation, document processing, multi-step transformations. Best when correctness matters more than speed.` },
          { color: `gold`, title: `2. Orchestrator-Worker — parallel execution, 90.2% higher success`, desc: `One orchestrator decomposes the task and delegates to specialist workers in parallel, then synthesizes results. Best for codebases with clear module boundaries.`, tip: `Start small: 1 orchestrator + 1 worker. Add agents only with evidence, not intuition.` },
          { color: `purple`, title: `3. Router — classify and dispatch`, desc: `A triage agent classifies the request type and routes to the specialist: Bug → Debug agent, Feature → Architecture agent, Refactor → Refactoring agent. Keeps each specialist's context clean and focused.` },
          { color: `coral`, title: `4. Plan-and-Execute — 90% cost reduction`, desc: `Frontier model (Claude Opus) creates the strategy. Cheaper model (Claude Haiku) executes the steps. Reduces cost by 90% vs running Opus for everything. Model tiering is now a standard architectural decision.` },
          { color: `none`, title: `The merge rule`, desc: `If two agents spend more than 80% of their time on similar tasks → merge them. If one agent's context is consistently polluted by unrelated responsibilities → split it.` },
        ],
      },
    ],
  },

  // ── 10: 3-TIER STACK ──────────────────────
  {
    id: `tier3`,
    sectionNum: `10`,
    title: `The 3-Tier Orchestration Stack`,
    subtitle: `Addy Osmani's framework · Use all three tiers`,
    type: `pillars`,
    pillars: [
      {
        id: `TS-01`, title: `Which tier for which work`, tag: `Strategy`, open: true,
        tiers: [
          { badge: `purple`, label: `Tier 1`, text: `Single terminal, interactive. Claude Code subagents, Claude Squad. Best for exploratory work and 3–5 agent teams on known codebases. You're in control and watching in real-time.` },
          { badge: `teal`, label: `Tier 2`, text: `Local multi-session, dashboard-driven. Conductor, Vibe Kanban, Gastown. Your machine, multiple worktrees, diff review + merge control. Best for 3–10 agent parallel sprints.` },
          { badge: `gold`, label: `Tier 3`, text: `Cloud agents, fire and forget. Claude Code Web, GitHub Copilot Coding Agent, Jules (Google), Codex Web. Assign a task, close your laptop, return to a PR. Best for draining backlogs overnight.` },
        ],
        rules: [
          { color: `teal`, title: `Most top developers in 2026 use all three tiers`, desc: `Tier 1 for interactive work, Tier 2 for parallel feature sprints, Tier 3 for background tasks and tech debt. Don't outsource your mastery of agents to tools — understanding the coordination patterns matters more than any specific tool.` },
        ],
      },
    ],
  },

  // ── 11: MCP + A2A ─────────────────────────
  {
    id: `mcp`,
    sectionNum: `11`,
    title: `MCP + A2A: The New HTTP for Agents`,
    subtitle: `Protocols · The connectivity layer that makes agent fleets possible`,
    type: `pillars`,
    pillars: [
      {
        id: `MP-01`, title: `MCP and A2A explained`, tag: `Protocols`, open: true,
        rules: [
          { color: `teal`, title: `MCP is the plug-and-play layer for tool connectivity`, desc: `Model Context Protocol standardizes how agents connect to external tools, databases, and APIs. Use lazy loading — tools activate only when context triggers them. 78% startup cost savings with lazy MCP loading.` },
          { color: `gold`, title: `A2A enables cross-agent collaboration at scale`, desc: `Google's Agent-to-Agent Protocol lets agents from different vendors communicate peer-to-peer. You can now compose agents from standardized components rather than building monolithic proprietary systems.` },
          { color: `purple`, title: `Production MCP config: always apply these 3 safety settings`, desc: `Set read_only: true for all production data MCP servers. Use lazy_load with triggers. Block sensitive path patterns (*.env, *.key, */secrets/*) at the config level — not as a prompt-time reminder.`, tip: `The circuit breaker rule: error rate > 1% = automatic halt. No exceptions.` },
        ],
        code: {
          label: `.claude/settings.json — production MCP config`,
          content: `{
  "mcpServers": {
    "postgres": {
      "command": "mcp-server-postgres",
      "args": ["--connection-string", "${DATABASE_URL}"],
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

  // ── 12: TOOLS ─────────────────────────────
  {
    id: `tools`,
    sectionNum: `12`,
    title: `Tools & Stack`,
    subtitle: `Decision matrix · Right tool for the right job`,
    type: `tools`,
    callout: {
      label: `The Golden Rule`,
      text: `Don't outsource your mastery of agents to tools. Understand the coordination patterns first, then pick the tool. A well-designed 2-agent system beats a poorly designed 10-agent one every time.`,
    },
    toolGroups: [
      {
        id: `TL-01`, title: `When to use which tool`, tag: `Decision Matrix`, open: true,
        tools: [
          { name: `Claude Code`, desc: `Long autonomous tasks, multi-agent orchestration, codebase-wide refactors, MCP integration. Your primary agentic terminal. Start here.` },
          { name: `GitHub Copilot`, desc: `Inline autocomplete, quick single-function generation, IDE-native flow, pair programming feel. Complementary to Claude Code — they compound.` },
          { name: `Cursor`, desc: `Interactive in-editor agent mode, fast iteration on focused files, visual diff review. Best for synchronous work where you want changes in context.` },
          { name: `Codex / Jules`, desc: `Cloud agents for background task execution. Fire-and-forget: assign a PR-ready task, return to a diff. Best for draining backlog overnight.` },
        ],
        rule: { color: `teal`, title: `The two-tool stack that works best`, desc: `Copilot handles inline autocomplete in the IDE. Claude Code handles everything agentic in the terminal. They don't overlap — they complement. This is the most common high-productivity setup in 2026. Start here before adding complexity.` },
      },
      {
        id: `TL-02`, title: `Multi-agent frameworks`, tag: `When You Need More`,
        tools: [
          { name: `LangGraph`, desc: `Graph-based workflows with typed state. Best for complex branching, loops, and visual monitoring of agent transitions. Most searched framework in 2026.` },
          { name: `CrewAI`, desc: `Role-based agents with distinct responsibilities. Best when you need agents that mirror how a human team works. Great for content and research workflows.` },
          { name: `AutoGen / Semantic Kernel`, desc: `Enterprise-grade orchestration with OpenTelemetry tracing and self-healing properties. Use when you need full observability and compliance-grade audit trails.` },
          { name: `Claude SDK`, desc: `Native Anthropic agent framework. Tightest integration with Claude models, MCP, and A2A. Best if you're building Claude-native products from the ground up.` },
        ],
        rule: { color: `gold`, title: `Model tiering for 40–60% cost reduction`, desc: `Claude Haiku for triage/routing, Claude Sonnet for standard tasks, Claude Opus for complex reasoning. Mixing models reduces costs 40–60% vs running one premium model everywhere.` },
      },
    ],
  },

  // ── 13: SECURITY ──────────────────────────
  {
    id: `security`,
    sectionNum: `13`,
    title: `Security & Safety in Agentic Systems`,
    subtitle: `Non-negotiable · The blast radius you don't see is the one that hurts`,
    type: `pillars`,
    callout: {
      label: `Critical 2026 Finding`,
      text: `Agentic systems operate with broad permissions and can take irreversible actions. The #1 cause of agentic incidents in 2026 is under-scoped permission boundaries — not model errors. Security must be designed in, not bolted on.`,
      variant: `warning`,
    },
    pillars: [
      {
        id: `SS-01`, title: `The 5 security primitives every agentic system needs`, tag: `Non-Negotiable`, open: true,
        rules: [
          { color: `coral`, title: `Principle of Least Privilege — always`, desc: `Every agent gets only the permissions required for its current task. Read-only for research agents. Write access scoped only to sandboxed directories. Never grant production database write access unless the task explicitly requires it and a human approves it.`, tip: `MCP read_only: true for all production data sources. Block *.env, *.key at config level.` },
          { color: `teal`, title: `Blast Radius Minimization`, desc: `Design every agent workflow so the worst-case failure affects the smallest possible surface area. Use isolated git branches, sandboxed environments, and ephemeral containers. Never allow an agent's error to cascade into production.` },
          { color: `gold`, title: `Human-in-the-Loop Checkpoints`, desc: `Hardcode approval gates before any irreversible action: file deletion, production database writes, external API calls with cost implications, or any code pushed to main.`, tip: `Rule: any action that cannot be undone in <60 seconds requires human confirmation before execution.` },
          { color: `purple`, title: `Prompt Injection Protection`, desc: `When agents read from external sources — web pages, files, APIs, user input — malicious content can inject instructions into the agent's context. Always sanitize external data. Use typed schemas for agent-to-agent communication, not freeform text.` },
          { color: `coral`, title: `Secret Management — never in the context window`, desc: `API keys and credentials must never appear in the context window. Use environment variables and dedicated secret managers (AWS Secrets Manager, HashiCorp Vault). Block sensitive patterns at the MCP config layer.`, tip: `Use a secrets manager CLI, not .env files in the project root. Never mention a secret value in a prompt.` },
        ],
      },
      {
        id: `SS-02`, title: `Audit trails and circuit breakers for production agents`, tag: `Production`,
        rules: [
          { color: `gold`, title: `Log every agent action with its justification`, desc: `Every file touched, command run, and API call made should be logged with the agent's stated reasoning. This is your post-mortem trail. Without it, debugging a multi-agent failure is archaeology. Use structured JSON logging.` },
          { color: `teal`, title: `The circuit breaker pattern`, desc: `If an agent exceeds a defined error rate (>1% of operations fail) — halt the entire workflow automatically. Circuit breakers belong in the orchestrator as a first-class architectural feature, not as an emergency afterthought.`, tip: `Circuit breaker threshold: error rate >1% = automatic halt + alert + rollback. No exceptions.` },
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

  // ── 14: MINDSET ───────────────────────────
  {
    id: `mindset`,
    sectionNum: `14`,
    title: `Mindset Shifts That Unlock 100X`,
    subtitle: `Mental models · The questions that change everything`,
    type: `mindset`,
    cards: [
      { q: `"Am I writing code or designing systems?"`, a: `The most valuable engineers in 2026 aren't those who type the fastest. They're those who design coordination systems. Your leverage is in what you architect, not what you type.` },
      { q: `"Is this task verifiable quickly?"`, a: `If yes → delegate fully and aggressively. If not → work collaboratively with Claude. The delegation intuition is a skill you build over time. Start by delegating anything with clear acceptance criteria.` },
      { q: `"Am I treating agents as leverage or magic?"`, a: `Treat agents as leverage, not magic. Use them aggressively where speed is cheap. Be conservative where mistakes are expensive. The 80% problem — AI solutions that are almost right — comes from skipping verification.` },
      { q: `"Is my codebase agent-ready?"`, a: `Agents struggle with disorganized codebases, unclear conventions, and missing documentation. A well-structured project enables dramatically better agent performance. Investment in code organization compounds as you scale agents.` },
      { q: `"What would a staff engineer say is wrong here?"`, a: `The single best quality-gate prompt. Ask it after every significant agent output. Build it into your slash commands. This is Boris Cherny's verification standard — never mark a task complete without passing it.` },
      { q: `"Am I compounding or just consuming?"`, a: `The self-improvement loop is the difference between linear and exponential productivity. Every session where you don't encode a lesson is a session that didn't compound. After 6 months, your CLAUDE.md is a serious competitive moat.` },
    ],
  },

  // ── 15: ANTI-PATTERNS ─────────────────────
  {
    id: `antipatterns`,
    sectionNum: `15`,
    title: `10 Anti-Patterns That Kill Agentic Velocity`,
    subtitle: `Failure modes · Recognise them before they compound into real damage`,
    type: `antipatterns`,
    callout: {
      label: `The Hidden Tax`,
      text: `Most developers unknowingly sacrifice 40–60% of their agentic productivity to just 3 of these patterns: not encoding lessons, skipping planning, and over-trusting output.`,
    },
    cards: [
      { num: `01`, title: `Context Window Hoarding`, desc: `Running the same session for hours, accumulating irrelevant context. Each distinct task deserves a fresh, focused window. Use /clear aggressively — treat sessions like git branches.` },
      { num: `02`, title: `Over-trusting Agent Output`, desc: `"It compiled, ship it." Every PR requires human review. Build pattern recognition for agent failure modes: silent scope creep, confident hallucination, over-engineering of simple problems.` },
      { num: `03`, title: `Building Monolithic Agents`, desc: `One agent that handles frontend + backend + tests + docs. It fails at all of them. Specialist agents with isolated contexts dramatically outperform single-context generalists on every measurable metric.` },
      { num: `04`, title: `Skipping the Planning Phase`, desc: `Jumping straight to execution on a 3+ file task. A bad spec costs 10× more to fix post-execution than pre-execution. Plan Mode is non-negotiable. The spec is the product, not the overhead.` },
      { num: `05`, title: `Not Encoding Corrections`, desc: `Correcting Claude verbally in the session, then repeating the same correction the next day. Every correction not written to CLAUDE.md is a correction that doesn't compound into your permanent advantage.` },
      { num: `06`, title: `Agents Working on Main`, desc: `Letting Claude work directly on main or staging. One branch per task, one worktree per session — always. Worktrees are free to create. Rollbacks from production incidents are not.` },
      { num: `07`, title: `Opus for Everything`, desc: `Using your most powerful and expensive model for routing, triage, and formatting. Model tiering saves 40–60% in cost with zero accuracy loss on appropriate tasks.` },
      { num: `08`, title: `No Feedback Loops in CLAUDE.md`, desc: `A CLAUDE.md that doesn't tell Claude to run tests after changes. Without this loop, Claude assumes changes work and moves on. A single "run pytest after every Python edit" line can 2–3× output quality.` },
      { num: `09`, title: `Fuzzy Agent Boundaries`, desc: `Agents with vague responsibilities like "handle the backend." Without crisp integration contracts — types, schemas, API boundaries — agents generate code that conflicts with each other's silent assumptions.` },
      { num: `10`, title: `Premature Orchestration Complexity`, desc: `Building 10-agent systems before validating that a 2-agent solution doesn't solve the problem. Every agent you add multiplies coordination overhead and failure surface. Start minimal. Expand only with evidence.` },
    ],
  },

  // ── 16: HIERARCHY ─────────────────────────
  {
    id: `hierarchy`,
    sectionNum: `16`,
    title: `The Engineering Hierarchy`,
    subtitle: `Where are you? Where are you going?`,
    type: `hierarchy`,
    levels: [
      { level: `L1`, colorClass: `l1`, title: `Tool Operator`, desc: `Uses AI for autocomplete and basic generation. Reactive, session-bound, no persistence. Commodity tier — being automated away by L3+ engineers.`, fill: 25, fillColor: `var(--coral)` },
      { level: `L2`, colorClass: `l2`, title: `Context Engineer`, desc: `Masters SELECT/WRITE/COMPRESS/ISOLATE. Designs persistent context architectures. CLAUDE.md as infrastructure. Professional tier — increasing leverage week over week.`, fill: 50, fillColor: `var(--amber)` },
      { level: `L3`, colorClass: `l3`, title: `Agent Architect`, desc: `Designs multi-agent systems with safety constraints. Orchestrates autonomous workflows. Expert tier — top 10%. Talks to orchestrators, not individual agents.`, fill: 75, fillColor: `var(--teal)` },
      { level: `L4`, colorClass: `l4`, title: `Autonomous Systems Engineer`, desc: `Builds self-improving, self-healing software systems. AI manages AI. Elite tier — top 1–2%. The system designs itself. The engineer designs the system that does this.`, fill: 100, fillColor: `var(--purple)` },
    ],
    callout: {
      label: `Final Principle`,
      text: `Your competitive advantage isn't using AI. It's designing systems where AI operates at peak effectiveness through superior context engineering and safety architecture.`,
    },
  },

  // ── 17: ACTION PLAN ───────────────────────
  {
    id: `action`,
    sectionNum: `17`,
    title: `Week 1 Action Plan`,
    subtitle: `Start here · One concrete task per day`,
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
        items: [`Activate the lessons.md loop permanently`, `Every correction from today → a rule`, `Review and prune your CLAUDE.md`, `Build your first /project:review command`],
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
