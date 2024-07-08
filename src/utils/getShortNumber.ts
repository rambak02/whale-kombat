export const getShortNumber = (num: number) => {
  if (!num) return 0

  if (num < 1000) return num;
  if (num < 1000000) return `${Math.round(num / 1000)}К`;
  if (num < 1000000000) return `${Math.round(num / 1000000)}М`;
}