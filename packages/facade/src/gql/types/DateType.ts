import { GraphQLScalarType, Kind } from 'graphql';

export const DateType = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  parseValue: (value: any) => {
    if (value === 0) {
      return null;
    }
    return new Date(value);
  },
  serialize: (value: any) => {
    // This is the object received back from the DB
    if (value === 0) {
      return null;
    }
    let dateObj = new Date(value);
    return dateObj;
  },
  parseLiteral: (ast): any => {
    if (ast.kind === Kind.STRING) {
      if (ast.value === '0') {
        return null;
      }
      return (new Date(ast.value)).getTime();
    }
    return null;
  },
});
