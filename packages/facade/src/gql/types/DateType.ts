import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

export const DateType = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  parseValue: (value) => {
    if (value === 0) {
      return null;
    }
    return new Date(value);
  },
  serialize: (value) => {
    // This is the object received back from the DB
    if (value === 0) {
      return null;
    }
    let dateObj = new Date(value);
    return dateObj;
  },
  parseLiteral: (ast) => {
    if (ast.kind === Kind.STRING) {
      if (ast.value === '0') {
        return null;
      }
      return (new Date(ast.value)).getTime();
    }
    return null;
  },
});
