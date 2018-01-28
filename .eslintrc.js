const SPACE_NUMBER = 2
const PARAMS_NUMBER = 4

module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true
  },
  // 使用官方推荐配置
  //'extends': 'eslint:recommended',
  // 使用当前较流行的airbnb配置
  //"extends": "airbnb-base",
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 2017,
    'sourceType': 'module',
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
  },
  'plugins': [
    'react',
    'async-await',
    'html'
  ],
  'settings': {
    'html/html-extensions': [
      '.html',
      '.wpy'
    ]
  },
  'rules': {
    // 使用严格模式
    'strict': 2,
    // 禁用width
    'no-with': 2,
    // 禁用 caller 或 callee (no-caller)
    'no-caller': 2,
    // 禁用 eval()
    'no-eval': 2,
    // 禁止使用隐式eval
    'no-implied-eval': 2,

    /* 自定义风格 */

    /* 注释  */
    // 强制使用jsdoc注释
    'valid-jsdoc': 2,

    /* 类型 */
    // 禁止对null使用==或!=运算符
    'no-eq-null': 2,
    // 变量初始化时不能直接给它赋值为undefined
    'no-undef-init': 2,
    // 不能使用undefined
    'no-undefined': 2,

    /* 字符 */
    // 缩进为2个空格
    'indent': [
      'error',
      SPACE_NUMBER 
    ],
    // 引号仅使用单引号和反引号
    'quotes': [
      'error',
      'single'
    ],
    // 模版优先
    'prefer-template': 1,
    // 不在语句末尾使用分号
    'semi': [
      'warn',
      'never'
    ],
    // 限制魔术字符
    'no-magic-numbers': [
      'warn',
      {
        'ignoreArrayIndexes': true, // 忽略索引
        'ignore': [ 0, 1 ], // 忽略0和1
        'enforceConst': true // 用常量声明
      }
    ],

    /* 变量  */
    // 禁止使用var申明变量
    'no-var': 2,
    // 驼峰式的命名规则
    'camelcase': [
      'error',
      { 'properties': 'never' }
    ],
    // 外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
    'no-shadow': 2,
    // 严格模式中规定的限制标识符不能作为声明时的变量名使用
    'no-shadow-restricted-names': 2,

    /* 函数 */
    // 函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
    'new-cap': 2,
    // new时必须加小括号
    'new-parens': 2,
    // 函数最大参数个数
    'max-params': [
      'error',
      PARAMS_NUMBER
    ],
    // 箭头函数优先
    'prefer-arrow-callback': 1,
    // 立即执行函数表达式的小括号风格
    'wrap-iife': [
      'error', 
      'inside'
    ],
    // 函数调用时 函数名与()之间不能有空格
    'no-spaced-func': 2,

    /* 数组 */
    // 禁止使用数组构造器
    'no-array-constructor': 2,
    // 强制数组方括号中使用一致的空格
    'array-bracket-spacing': [
      'warn',
      'always'
    ],

    /* 对象  */
    // 禁止使用new Object()
    'no-new-object': 2,
    // 禁止使用new创建包装实例，new String new Boolean new Number
    'no-new-wrappers': 2,
    // 声明对象属性时加引号, 对引擎友好
    'quote-props': [
      'warn',
      'always'
    ],
    // 禁止无效的this，只能用在构造器，类，对象字面量
    'no-invalid-this': 1,

    /* 表达式、语句、代码块 */
    // 禁止不必要的嵌套块
    'no-lone-blocks': 2,
    // 禁止Yoda条件 (yoda)
    'yoda': [
      'error',
      'never'
    ],
    // 禁止无用的表达式
    'no-unused-expressions': 1,
    // 必须使用 if(){} 中的{}
    'curly': [
      'error',
      'all'
    ],
    // switch语句最后必须有default
    'default-case': 2,

    /* 官方推荐规则 */
    /* 这些规则与 JavaScript 代码中可能的错误或逻辑错误有关 */
    // 禁止在条件语句中出现赋值操作符
    'no-cond-assign': 2,
    // 禁用 console
    'no-console': 1,
    // 禁止在条件中使用常量表达式
    'no-constant-condition': 2,
    // 禁止在正则表达式中使用控制字符
    'no-control-regex': 2,
    // 禁用 debugger
    'no-debugger': 2,
    // 禁止 function 定义中出现重名参数
    'no-dupe-args': 2,
    // 禁止对象字面量中出现重复的 key
    'no-dupe-keys': 2,
    // 禁止出现重复的 case 标签
    'no-duplicate-case': 2,
    // 禁止出现空语句块
    'no-empty': 2,
    // 禁止在正则表达式中使用空字符集
    'no-empty-character-class': 2,
    // 禁止对 catch 子句的参数重新赋值
    'no-ex-assign': 2,
    // 禁止不必要的布尔转换
    'no-extra-boolean-cast': 2,
    // 禁止不必要的分号
    'no-extra-semi': 2,
    // 禁止对 function 声明重新赋值
    'no-func-assign': 2,
    // 禁止在嵌套的块中出现变量声明或 function 声明
    'no-inner-declarations': 2,
    // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    'no-invalid-regexp': 2,
    // 禁止在字符串和注释之外不规则的空白
    'no-irregular-whitespace': 2,
    // 禁止把全局对象作为函数调用
    'no-obj-calls': 2,
    // 禁止正则表达式字面量中出现多个空格
    'no-regex-spaces': 2,
    // 禁用稀疏数组 [1,,2]
    'no-sparse-arrays': 2,
    // 禁止出现令人困惑的多行表达式
    'no-unexpected-multiline': 2,
    // 禁止在return、throw、continue 和 break 语句之后出现不可达代码
    'no-unreachable': 2,
    // 禁止在 finally 语句块中出现控制流语句
    'no-unsafe-finally': 2,
    // 禁止关系运算符in, instanceOf 的左操作数为非
    'no-unsafe-negation': 2,
    // 要求使用 isNaN() 检查 NaN
    'use-isnan': 2,
    // 强制 typeof 表达式与有效的字符串进行比较
    'valid-typeof': 2,

    /* 这些规则是关于最佳实践的，帮助你避免一些问题 */
    // 不允许在 case 子句中使用词法声明
    'no-case-declarations': 2,
    // 禁止使用空解构模式
    'no-empty-pattern': 2,
    // 禁止 case 语句落空
    'no-fallthrough': 2,
    // 禁止给原生或只读的全局变量赋值
    'no-global-assign': 2,
    // 禁用八进制字面量
    'no-octal': 2,
    // 禁止多次声明同一变量
    'no-redeclare': 2,
    // 禁止自我赋值
    'no-self-assign': 2,
    // 禁用出现未使用过的标
    'no-unused-labels': 2,
    // 禁用不必要的转义字符
    'no-useless-escape': 2,

    /* 变量 */
    // 禁止删除变量
    'no-delete-var': 2,
    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef': 2,
    // 禁止出现未使用过的变量
    'no-unused-vars': 1,

    /* 编码风格  */
    // 禁止空格和 tab 的混合缩进
    'no-mixed-spaces-and-tabs': 2,

    /* ES2015规则  */
    // 要求在构造函数中有 super() 的调用
    'constructor-super': 2,
    // 禁止修改类声明的变量
    'no-class-assign': 2,
    // 禁止修改 const 声明的变量
    'no-const-assign': 2,
    // 禁止类成员中出现重复的名称
    'no-dupe-class-members': 2,
    // 禁止Symbol对象前使用运算符new
    'no-new-symbol': 2,
    // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    'no-this-before-super': 2,
    // 要求 generator 函数内有 yield
    'require-yield': 2,

    /* 需要安装插件的规则 */
    /* es2017 */
    // disallow async()=>{}, fixing to async ()=>{}
    'async-await/space-after-async': 2,
    // disallow await(foo), fixing to await (foo)
    'async-await/space-after-await': 2
  }
}

