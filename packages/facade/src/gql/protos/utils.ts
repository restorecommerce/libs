export const capitalizeProtoName = (name: string): string => {
  return name.replace(/(?:\.|^|_)(\w)/g, v => v.toUpperCase()).replace(/[._]/g, '');
}

// converts camelcase entity name to snake case
export const convertyCamelToSnakeCase = (entity: string): string => {
  return entity.replace(/(?:^|\.?)([A-Z])/g, (x, y) => { return '_' + y.toLowerCase(); }).replace(/^_/, '');
}