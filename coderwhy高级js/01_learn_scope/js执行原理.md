+ 浏览器渲染过程
>  首先将下载的html转成DOM树，css parser解析css规则（style rules）跟DOM树结合，生成
render tree,通过布局引擎根据渲染树计算元素布局，然后输出后进行页面绘制。

> 构建DOM树的过程中,blink内核解析html时遇到js下载下来，将js代码以流的方式传递给v8引擎。
+ 加载js阻塞渲染的原因
> JS会对DOM节点进行操作，浏览器无法预测未来的DOM节点的具体内容，为了防止无效操作，节省资源，只能阻塞DOM树的构建。
+ V8引擎执行js
>  首先将js源码(经过词法分析和语法分析)解析成抽象语法树（AST）[https://astexplorer.net/]，通过ignition库（解释器）转成字节码，v8将字节码转成不同平台(不同cpu架构执行的机器指令不同)的机器指令运行（过程：先转成汇编代码，再由汇编代码执行cpu的相关机器指令）。如果一个函数被过次调用，就会被通过ignition标记为热点函数，就会经过turbofun(编译器)转换成优化的机器码，提高代码执行性能。如果后续执行函数类型发生了变化，机器码会被还原为字节码。

> 1: js引擎会在执行代码前， 解析阶段在堆内存会创建全局对象GlobalObject，所有作用域可访问，里面包含Date\Array\String\Number\SetTimeout\window(指向自己)，会将全局定义的变量、函数加入到GO，但并不会赋值，这个过程称为变量的作用域提升

> 2：js在代码执行中对变量赋值、或执行其他函数
```
var name="wt"
var age=18

var GlobalObject={
    String:'类'，
    Date:'类'，
    serTimeout:'函数'，
    window:globalObject,
    name:undefined,
    age:undefined
}
```

> 2.1: v8为了执行代码，内部会有一个执行上下文栈ECStack（函数调用栈）

> 2.2: 为了执行全局代码，需要创建全局执行上下文（global exection context）
+ preParser/Lazy Parsing(延迟解析)
> 将不必要的函数进行预解析，只解析暂时需要的内容，而对函数调用进行全量解析

+ 如何执行函数
> 执行函数时会根据函数体创建一个函数执行上下文（FEC），并且压入到EC Stack中
+ 函数执行上下文包含：
  + 解析函数称为AST树结构时创建的Actioation Object(AO:形参、arguments、函数定义、变量)
  + 作用域链
  + this绑定的值
  
 > vscode画图插件：drawio    截图工具：snipaste