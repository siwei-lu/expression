import { Operation } from './types'
import { toFixed, isFloat } from './common'

export function _make(id: string, op: Function) {
  return Object.defineProperties(op, {
    id: { value: id },
    toString: { value: () => id }
  })
}

export const _round = (num: number) => isFloat(num) ? toFixed(num) : num

const _add = (a: number, b: number) => a + b
const _sub = (a: number, b: number) => a - b
const _mul = (a: number, b: number) => _round(a * b)
const _div = (a: number, b: number) => _round(a / b)

export const add = _make('+', _add)
export const sub = _make('-', _sub)
export const mul = _make('×', _mul)
export const div = _make('÷', _div)

const _ops: {[key: string]: Operation} = [add, sub, mul, div]
  .reduce((sum, cur) => ({...sum, [cur.id]: cur}), {})

export function isGreat(a: Operation, b: Operation) {
  if (['×', '÷'].some(o => o === b.id)) {
    return false
  }

  if (['+', '-'].some(o => o === a.id)) {
    return false
  }

  return true
}

export default function operation(id: string) {
  return _ops[id]
}