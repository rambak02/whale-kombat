export const getShortNumber = (num: number) => {
  if (!num) return 0

  if (num < 1000) return num;
  if (num < 1000000) return `${(num / 1000).toFixed(2)}К`;
  if (num < 1000000000) return `${(num / 1000000).toFixed(2)}М`;
  if (num < 1000000000000) return `${(num / 1000000000).toFixed(2)}B`;
}