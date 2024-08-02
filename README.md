# Typed SIGTERM's ESLint Config

[![npm](https://img.shields.io/npm/v/@typed-sigterm/eslint-config?color=444&label=)](https://npmjs.com/package/@typed-sigterm/eslint-config) [![code style](https://img.shields.io/badge/Code_Style-Typed_SIGTERM-blue?color=3178C6&labelColor=252525)](https://github.com/typed-sigterm/eslint-config)

- Requies semi
- [1tbs-style](https://eslint.style/rules/js/brace-style#_1tbs) braces
- Max 80 characters per line (some [exceptions](https://eslint.style/rules/default/max-len#options))
- ... and anything else from [`@antfu/eslint-config`](https://github.com/antfu/eslint-config)!

Correct example:

```ts
import process from 'node:process';

class YeWenjie {
  public think() {
    return new Promise<unknown>((resolve) => {
      if (globalThis.world)
        console.error('Why the world is defined?');
      else
        console.error('Why the world is undefined?');
      setTimeout(() => resolve(41), 114514);
    });
  }
}

const yeWenjie = new YeWenjie();

if (await yeWenjie.think() === 41) {
  console.error('Physics no longer exists!');
  process.exit(1);
} else {
  process.exit(0);
}
```

## Usage

Install the dependency in your project:

```bash
# @antfu/eslint-config is a peer dependency, so manually installing is required
pnpm add -D @typed-sigterm/eslint-config @antfu/eslint-config
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
