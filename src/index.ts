import antfu from '@antfu/eslint-config';
import autocorrect from 'eslint-plugin-autocorrect';

type AntfuOptions = NonNullable<Parameters<typeof antfu>[0]>;
type AntfuUserConfig = Parameters<typeof antfu> extends [options?: infer _Options, ...userConfigs: infer UserConfigs]
  ? UserConfigs[number]
  : never;

type Factory = (
  options?: AntfuOptions & {
    /**
     * Enable AutoCorrect support.
     *
     * @default true
     */
    autocorrect?: boolean
  },
  ...userConfigs: AntfuUserConfig[]
) => ReturnType<typeof antfu>;

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
  const configs: AntfuUserConfig[] = [];

  configs.push({
    name: 'typed-sigterm/jsdoc/rules',
    rules: {
      'jsdoc/require-property-description': [0],
      'jsdoc/require-returns-description': [0],
    },
  }, {
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

  return antfu(options ?? {}, ...configs, ...userConfigs);
};

export default factory;
