import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://localhost:4000/graphql',
  documents: ['src/**/*.tsx'],
  generates: {
    'src/generated/graphql.ts': {
      preset: 'client',
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
      },
    },
    'src/generated/graphql-possible-types.ts': {
      plugins: ['typescript'],
    },
  },
};
export default config;
