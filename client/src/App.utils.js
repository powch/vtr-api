export const stringToTitleCase = (string) =>
  `${string.charAt(0)}${string.slice(1).toLowerCase()}`;

export const truncateString = (string, maxLength) =>
  string.length > maxLength ? `${string.slice(0, maxLength - 3)}...` : string;
