export const paginate = <T>(items: T[], size: number, page: number) => {
  const startIndex = (page - 1) * size;
  return items.slice(startIndex, startIndex + size);
};
