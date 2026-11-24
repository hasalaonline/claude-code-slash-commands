---
description: Check my uncommitted changes for bugs, leftover debug code and missing tests before I commit
disable-model-invocation: true
allowed-tools: Bash(git status *) Bash(git diff *)
---

## What changed

!`git status --short`

```!
git diff HEAD
```

## Your task

Review only the changes above, the way a careful teammate would before I commit.
Do not edit any files.

Check for:

1. Bugs: wrong conditions, off-by-one errors, unhandled null or empty input,
   promises that are never awaited.
2. Leftovers: `console.log`, `debugger`, commented-out code, stray TODOs.
3. Secrets: API keys, tokens, passwords or `.env` values in the diff.
4. Tests: changed behaviour with no matching test change.
5. Anything that contradicts the rules in CLAUDE.md.

Report findings as a list, most serious first, each with `file:line` and a
one-line fix. If there is nothing to report, say so.

End with exactly one line: **Ready to commit** or **Fix first**.
