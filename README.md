# expression

基于后缀表达式的表达式生成，计算库

## 使用方法

### 从 `npm` 下载

```sh
npm i --save expression
```

### 在代码中引入

```javascript
import Expression from 'expression'

// 随机获得一个表达式
const expr = Expression.make()
// 格式化为中缀表达式
console.log(expr.infix)
// 格式化为后缀表达式
console.log(expr.postfix)
// 计算结果
console.log(expr.result)
```

## 更新记录

### v0.1.0

#### Feats:

- 实现功能