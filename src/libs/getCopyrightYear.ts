export const getCopyrightYear = (): string => {
  const today = new Date();
  return today.getFullYear().toString();
};
