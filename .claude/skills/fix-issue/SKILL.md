---
description: Fix a GitHub issue by number, test-first
argument-hint: [issue-number]
disable-model-invocation: true
allowed-tools: Bash(gh issue view *)
---

Fix GitHub issue #$0 in this repository.

1. Run `gh issue view $0 --comments` and read the issue and its comments.
   Restate the problem in one or two sentences. If the issue is unclear,
   ask me before changing code.
2. Find the code involved. Read it before editing.
3. Write a test that reproduces the bug and confirm it fails.
4. Make the smallest change that fixes it.
5. Run the full test suite and make sure everything passes.
6. Summarise what you changed and why, ending with `Fixes #$0` so I can
   paste it into the commit or PR.

Do not commit or push. I will run `/commit` myself.
