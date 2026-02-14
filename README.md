# Typed SIGTERM's ESLint Config ![Latest version](https://img.shields.io/github/v/release/typed-sigterm/eslint-config) ![License](https://img.shields.io/github/license/typed-sigterm/eslint-config) ![OSS Lifecycle](https://img.shields.io/osslifecycle?file_url=https%3A%2F%2Fraw.githubusercontent.com%2Ftyped-sigterm%2Feslint-config%2Fmain%2FOSSMETADATA) [![GitHub Stars](https://img.shields.io/github/stars/typed-sigterm/eslint-config)](https://github.com/typed-sigterm/eslint-config)

Anything from [`@antfu/eslint-config`](https://github.com/antfu/eslint-config) except:

- [1tbs-style](https://eslint.style/rules/js/brace-style#_1tbs) braces
- Requires semi
- Allows declaring multiple variables in a single statement
- Allows type and value identifiers to share the same name
- Allows JSDoc `@property` `@returns` to be without description
- [AutoCorrect](https://github.com/huacnlee/autocorrect) - improve copywriting, correct spaces, words, and punctuations between CJK (Chinese, Japanese, Korean)

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
