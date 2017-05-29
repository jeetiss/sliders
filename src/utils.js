export const range = value => Array.from({ length: value }).map((_, i) => i + 1)
const maxmin = (max, min, value) => Math.min(max, Math.max(min, value))
export const format = value => maxmin(100, 0, +Number(value).toFixed(2))
