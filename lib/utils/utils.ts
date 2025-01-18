export const formatDate = (dateString: string, options?: Intl.DateTimeFormatOptions): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', options).format(date);
};
