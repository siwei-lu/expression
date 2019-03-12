import * as config from '../config'
import operation from './operation'
import { Operation, Expr } from './types'

const ops = ['+', '-', '×', '÷']

export const _randomOne = <T>(arr: T[]): T => arr[_integer(arr.length - 1)]

export const _integer = (max = config.MAX_VALUE, min = 0) =>
  Math.ceil(Math.random() * (max - min) + min)

export const _operation = () => operation(_randomOne(ops))

export const _gen = <T>(generator: () => T, count: number): T[] =>
  Array(count).fill(0).map(() => generator())

export function _concat(numbers: number[], ops: Operation[]) {
  const result: Expr = [numbers.shift()]
  numbers.forEach((n, i) => {
    result.push(ops[i], n)
  })
  return result
}

export default function generate() {
  const numberCount = _integer(1, 4)
  const opCount = numberCount - 1

  const numbers = _gen(_integer, numberCount)
  const ops = _gen(_operation, opCount)

  return _concat(numbers, ops)
}
