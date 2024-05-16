export function formatToDollor(worth: number) {
    return worth.toLocaleString("en-US");
}

export function formatToBillion(worth: number) {
    return (Math.abs(Number(worth)) / 1.0e+3).toFixed(0);
}