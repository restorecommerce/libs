
export const decomposeError = (error: any) => {
  const { code, message, details, stack } = error;
  return { code, message, details, stack };
}