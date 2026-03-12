# tempo

A timer for focus and daily practice.

## Dev Notes

### Linting and Format

Defaults are used for Prettier and ESLint (including plugins for TypeScript and React). You can check that everything is golden by running:

```BASH
npm run whinge
```

### CI Checks

Linting/formatting and tests are checked in CI and will fail the build if they don't pass. The following pre-commit hook (`.git/hooks/pre-commit`) can be added locally to prevent commits that will break CI:

```BASH
#!/bin/sh

export FORCE_COLOR=1

echo "format check..."
output=$(npm run format:check 2>&1)
status=$?
if [ $status -ne 0 ]; then
	echo "$output"
	exit $status;
fi

echo "linting..."
output=$(npm run lint 2>&1)
status=$?
if [ $status -ne 0 ]; then
	echo "$output"
	exit $status;
fi

echo "typechecking..."
output=$(npm run typecheck 2>&1)
status=$?
if [ $status -ne 0 ]; then
	echo "$output"
	exit $status;
fi

echo "running unit tests..."
output=$(npm run test 2>&1)
status=$?
if [ $status -ne 0 ]; then
	echo "$output"
	exit $status;
fi
```

To skip the pre-commit checks (for a commit the will be squashed before being pushed for instance) use:

```BASH
git commit --no-verify
```
