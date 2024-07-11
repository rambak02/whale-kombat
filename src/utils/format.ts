export function formatNumber(number: number = 0) {
    if (number >= 1000000000) {
        return (number / 1000000000).toFixed(1) + 'B';
    } else if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'м';
    } else if (number >= 1000) {
        return (number / 1000).toFixed(1) + 'к';
    } else {
        return number;
    }
}