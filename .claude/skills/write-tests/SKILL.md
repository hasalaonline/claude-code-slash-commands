---
description: Write tests for a file, matching the project's existing test style
argument-hint: [path/to/file]
disable-model-invocation: true
---

Write tests for `$0`.

1. Read `$0` and list the behaviours it promises (inputs, outputs, errors).
2. Find the existing tests and copy their framework, file naming, folder
   layout and style. Do not add a new test library.
3. Cover, for each exported function:
   - the normal case,
   - edge cases (empty input, boundaries, unusual characters),
   - error cases (what should throw or return an error).
4. Run the tests.
5. If a test fails because the code is wrong, do not change the code.
   Keep the test, mark it as skipped with a short note, and tell me
   about the bug.

Finish with a short table: behaviour, test name, pass/fail/skipped.
