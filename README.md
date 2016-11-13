# strJs

String manipulation functions for javascript（javascript字符串操作函数集合）

[github][4]

[![npm](https://img.shields.io/badge/node-6.9.1-brightgreen.svg)]() [![Scrutinizer Build](https://img.shields.io/scrutinizer/build/g/filp/whoops.svg?maxAge=2592000)]() [![npm](https://img.shields.io/badge/release-1.0.0-brightgreen.svg)]()  [![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)]()

## 特性

- 常规字符串操作
- 可对HTML代码进行编码
- 可链式调用

## 使用

传统用法和UMD都需要使用构建后的在dist / str.js文件，构建方法：

```bash
// 第一次使用，需要先安装依赖
npm install

// 构建
npm run build

// 如果你想跑一下测试
npm test

// 对代码质量和书写风格有要求的话，还可以对代码进行审查
npm run lint
```

### 传统用法

```javascript
<script src="str.js"></script>
```

### UMD

>  支持RequireJS、CommonJs等

### ES6

如果你使用ES6的话，使用src / str.js，然后使用import引入模块。

```javascript
import str from 'str'
```

### 详细使用

str是一个包含了很多操作字符串的静态方法的对象，可以直接调用，例如：

```javascript
str.trim('   abc   ')   // 'abc'
str.succ('a')           // 'b'
```

同时，str也是一个构造函数，既可以通过new操作得到实例，也可以通过直接调用得到实例。实例化的对象包含的方法与str的静态方法的作用一样。

```javascript
var s1 = str('   foo  ')
var s2 = new str('   foo  ')
```
通过构造函数实例化的对象的方法可以进行链式调用，但只能在当前调用方法返回的值的类型为String时，才能链式调用下一个方法。此时，你不能直接得到该String值，需要通过链式调用val方法才能得到该String值。

```javascript
var s1 = str('   foo  ')
s1.trim().capitalize().val()    // 'Foo'
```
 当前调用方法返回的值的类型为非String，如Array、Boolean、Number时，会立即返回该非String值，不需要也不能链式调用val方法，否则，会抛出错误。

```javascript
str(" foobar ").trim().startsWith("foo")   // true
str(" foobar ").trim().chars()             // ['f', 'o', 'o', 'b', 'a', 'r']
``` 

## API

详细API请见

## 贡献者

- [chenBright][1]

## 报告问题

- [Issues][2]

## 更新日志

- [更新日志][3]



[1]: https://github.com/chenBright
[2]: https://github.com/chenBright/strJS/issues
[3]: https://github.com/chenBright/strJS/blob/master/CHANGELOG.md
[4]: https://github.com/chenBright/strJS#typeiserrvariable
