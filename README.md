# Tempo

A timer for focus and daily practice.

[![Check formating, lint rules, and types](https://github.com/misclabs/tempo-webapp/actions/workflows/check.yml/badge.svg)](https://github.com/misclabs/tempo-webapp/actions/workflows/check.yml)

## Dev Notes

### Checks run in CI

The following checks are run in CI:

- Format with Prettier defaults (run locally with: `npm run format`)
- Linting rules that are mostly default ESLint with TypeScript and React additions (run locally with: `npm run format`)
- Type checks (run locally with: `npm run typecheck`)
- Unit tests (run locally with: `npm run test`)

### Pre-commit

The following pre-commit hook (`.git/hooks/pre-commit`) can be added locally to prevent commits that will break CI:

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
