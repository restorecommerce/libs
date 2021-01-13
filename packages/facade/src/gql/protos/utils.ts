export const capitalizeProtoName = (name: string): string => {
  return name.replace(/(?:\.|^|_)(\w)/g, v => v.toUpperCase()).replace(/[._]/g, '');
}
