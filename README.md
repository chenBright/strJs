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

## API




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
