import antfu from '@antfu/eslint-config';

/**
 * Construct an array of ESLint flat config items.
 *
 * @param options
 *  The options for generating the ESLint configurations.
 * @param userConfigs
 *  The user configurations to be merged with the generated configurations.
 * @returns
 *  The merged ESLint configurations.
 *
 * @see https://github.com/antfu/eslint-config#customization
 */
const factory: typeof antfu = (options, ...userConfigs) => {
  return antfu(options, {
    name: 'typed-sigterm/stylistic/rules',
    rules: {
      'style/brace-style': ['error', '1tbs'],
      'style/semi': ['error', 'always'],
    },
  }, ...userConfigs);
};

export default factory;
