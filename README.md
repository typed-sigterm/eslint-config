# Typed SIGTERM's ESLint Config

[![npm](https://img.shields.io/npm/v/@typed-sigterm/eslint-config?color=444&label=)](https://npmjs.com/package/@typed-sigterm/eslint-config) [![code style](https://img.shields.io/badge/Code_Style-Typed_SIGTERM-blue?color=3178C6&labelColor=252525)](https://github.com/typed-sigterm/eslint-config)

- Semi always required
- [1tbs-style](https://eslint.style/rules/js/brace-style#_1tbs) braces
- ... And anything else from [`@antfu/eslint-config`](https://github.com/antfu/eslint-config)!

Correct example:

```ts
import process from 'node:process';

function hmm(): number {
  if (world)
    console.error('Why the world is defined?');
  else
    console.error('Why the world is not defined?');
  return 41;
}

if (hmm() === 41) {
  process.exit(0);
} else {
  console.error('Physics no longer exists!');
  process.exit(1);
}
```

## Usage

Install the dependency in your project:

```bash
pnpm add -D @typed-sigterm/eslint-config
```

And create `eslint.config.mjs` in your project root:

```js
import ts from '@typed-sigterm/eslint-config';

export default ts();
```

Add script for `package.json`:

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

Now you can run `pnpm lint` to lint your code.

## VS Code support (auto fix on save)

See [documentation of `@antfu/eslint-config`](https://github.com/antfu/eslint-config/blob/main/README.md#vs-code-support-auto-fix-on-save).

## Credits

The project is only a wrapper/modifier of `@antfu/eslint-config`. Thanks to [Anthony Fu](https://antfu.me/) for the great work!
