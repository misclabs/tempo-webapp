# tempo

A timer for focus and daily practice.

## Dev Notes

### Linting and Format

Defaults are used for Prettier and ESLint (including plugins for TypeScript and React). You can check that everything is golden by running:

```BASH
npm run pre-commit
```

This is done in CI and will fail the build if it doesn't pass. The following pre-commit hook (`.git/hooks/pre-commit`) can be added locally to prevent commits that will break CI:

```BASH
#!/bin/sh

export FORCE_COLOR=1

echo "Checking code..."
output=$(npm run whinge 2>&1)
status=$?

if [ $status -ne 0 ]; then
	echo "$output"
	exit $status;
fi
```

To skip the check in a commit (for a commit the will be squashed before being pushed for instance) use:

```BASH
git commit --no-verify
```
