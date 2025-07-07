# Typed SIGTERM's ESLint Config

[![npm](https://img.shields.io/npm/v/@typed-sigterm/eslint-config?color=444&logo=npm&label=)](https://npmjs.com/package/@typed-sigterm/eslint-config) [![code style](https://img.shields.io/badge/Code_Style-Typed_SIGTERM-blue?color=3178C6&labelColor=252525)](https://github.com/typed-sigterm/eslint-config)

- [1tbs-style](https://eslint.style/rules/js/brace-style#_1tbs) braces
- Requies semi
- Allows declaring multiple variables in a single statement
- [AutoCorrect](https://github.com/huacnlee/autocorrect) - improve copywriting, correct spaces, words, and punctuations between CJK (Chinese, Japanese, Korean)
- ... and anything else from [`@antfu/eslint-config`](https://github.com/antfu/eslint-config)!

Correct example:

```ts
import process from 'node:process';

// Oh it's 叶文洁
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

You can view all details at [Config Inspector](https://eslint-config.by-ts.top).

## Usage

1. Install `@typed-sigterm/eslint-config` with your package manager
2. Install `@antfu/eslint-config` with your package manager
3. Create `eslint.config.mjs` in your project root:
    ```js
    import ts from '@typed-sigterm/eslint-config';

    export default ts();
    ```
4. Add script for `package.json`:
    ```json
    {
      "scripts": {
        "lint": "eslint ."
      }
    }
    ```

Now you can run `npm run lint` to lint your code.

## VS Code support (auto fix on save)

See [documentation of `@antfu/eslint-config`](https://github.com/antfu/eslint-config/blob/main/README.md#vs-code-support-auto-fix-on-save).

## Credits

The project is a wrapper of `@antfu/eslint-config`. Thanks to [Anthony Fu](https://antfu.me/) for the great work!
