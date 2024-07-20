import antfu from '@antfu/eslint-config';

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
