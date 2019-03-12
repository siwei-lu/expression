export const isFloat = (num: number) => String(num).includes('.')

export const toFixed = (num: number, fixed = 2) =>
  parseFloat(num.toFixed(fixed))

export const range = (from: number, to: number) =>
  Array<number>(to - from).fill(0).map((_, i) => from + i)