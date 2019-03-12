export type Operation = Function & { id: string }
export type ExprItem = Operation | number
export type Expr = ExprItem[]
