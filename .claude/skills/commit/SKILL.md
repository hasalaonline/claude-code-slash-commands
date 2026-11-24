---
description: Write a Conventional Commit message for the staged changes and commit them
argument-hint: [optional context, e.g. "closes #42"]
disable-model-invocation: true
allowed-tools: Bash(git diff *) Bash(git log *) Bash(git commit *)
---

## Staged changes

!`git diff --staged --stat`

```!
git diff --staged
```

## Recent commits (match this style)

!`git log --oneline -10`

## Your task

1. If nothing is staged, say "Nothing staged" and stop. Do not stage files yourself.
2. Write one commit message in Conventional Commits format:
   - Subject: `type(scope): summary`, imperative mood, 72 characters or fewer.
     Types: feat, fix, refactor, test, docs, chore, perf, build, ci.
   - Body: why the change was made, not a list of files. Wrap at 72 characters.
     Skip the body for trivial changes.
3. Extra context from me (may be empty): $ARGUMENTS
4. Run `git commit` with that message, then show the result of the commit.
