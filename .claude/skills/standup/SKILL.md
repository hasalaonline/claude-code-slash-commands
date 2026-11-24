---
description: Turn my recent commits into a short standup update
argument-hint: [days, default 1]
disable-model-invocation: true
allowed-tools: Bash(git config *) Bash(git log *) Bash(git status *)
---

## Who I am

!`git config user.name`

## Commits from the last few days (all authors)

!`git log --since="3 days ago" --pretty=format:"%h | %an | %ad | %s" --date=short`

## Work not committed yet

!`git status --short`

## Your task

Write my standup update. Use only my own commits (match the author name
above) from the last $ARGUMENTS day(s); if no number was given, use 1 day.

Format:

**Yesterday**
- 2 to 4 bullets in plain language, grouped by feature, not one per commit.

**Today**
- 1 to 3 bullets, based on uncommitted work and unfinished threads.

**Blockers**
- "None" unless the commits or changes clearly show one.

Keep it under 80 words. No commit hashes.
