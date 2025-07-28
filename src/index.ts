import type { SetParameterType } from 'type-fest';
import antfu from '@antfu/eslint-config';
import autocorrect from 'eslint-plugin-autocorrect';

type Factory = SetParameterType<typeof antfu, {
  0: Parameters<typeof antfu>[0] & {
    /**
     * Enable AutoCorrect support.
     *
     * @default true
     */
    autocorrect?: boolean
  }
}>;

/**
 * Construct an array of ESLint flat config items.
 *
 * Besides options from [antfu's](https://github.com/antfu/eslint-config#customization), the first parameter also contains `autocorrect` option to control `eslint-plugin-autocorrect` plugin.
 *
 * @param options The options for generating the ESLint configurations.
 * @param userConfigs The user configurations to be merged with the generated configurations.
 * @returns The merged ESLint configurations.
 */
const factory: Factory = (options, ...userConfigs) => {
  const configs: Array<Parameters<typeof antfu>[1]> = [];

  configs.push({ {
    name: 'typed-sigterm/stylistic/rules',
    rules: {
      'one-var': [0],
      'style/brace-style': [2, '1tbs'],
      'style/semi': [2, 'always'],
    },
  });

  if (options?.autocorrect ?? true) {
    configs.push({
      name: 'typed-sigterm/autocorrect/setup',
      plugins: {
        autocorrect,
      },
    }, {
      name: 'typed-sigterm/autocorrect/rules',
      rules: {
        'autocorrect/issue': [2],
      },
    });
  }

  return antfu(options, ...configs, ...userConfigs);
};

export default factory;
