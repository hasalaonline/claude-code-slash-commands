# Five custom slash commands for Claude Code

Demo repo for the Medium article *5 Custom Slash Commands Every Claude Code Project Needs*.

Copy the `.claude/skills/` folder into your own project, commit it, and every teammate gets the same commands:

| Command | What it does |
|---|---|
| `/commit [context]` | Writes a Conventional Commit message for staged changes and commits |
| `/self-check` | Reviews your uncommitted diff for bugs, leftovers, secrets and missing tests |
| `/fix-issue <number>` | Reads a GitHub issue and fixes it test-first (needs the `gh` CLI) |
| `/write-tests <file>` | Writes tests for a file in your project's existing test style |
| `/standup [days]` | Turns your recent commits into a short standup update |

Each command is a skill: `.claude/skills/<name>/SKILL.md`. They all set
`disable-model-invocation: true`, so they only run when you type them.

The rest of the repo (`src/slugify.js`, `test/`) is a tiny Node project to try the commands on:

```bash
npm test
claude
> /write-tests src/slugify.js
```

Check the files are valid with:

```bash
claude plugin validate .claude/skills
```

License: MIT
