(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{492:function(s,n,a){"use strict";a.r(n);var e=a(22),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"webpack5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack5"}},[s._v("#")]),s._v(" "),a("strong",[s._v("webpack5")])]),s._v(" "),a("p",[a("strong",[s._v("此版本重点关注以下内容:")])]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("通过持久缓存提高构建性能.")])]),s._v(" "),a("li",[a("strong",[s._v("使用更好的算法和默认值来改善长期缓存.")])]),s._v(" "),a("li",[a("strong",[s._v("通过更好的树摇和代码生成来改善捆绑包大小.")])]),s._v(" "),a("li",[a("strong",[s._v("清除处于怪异状态的内部结构，同时在 v4 中实现功能而不引入任何重大更改.")])]),s._v(" "),a("li",[a("strong",[s._v("通过引入重大更改来为将来的功能做准备，以使我们能够尽可能长时间地使用 v5.")])])]),s._v(" "),a("h2",{attrs:{id:"下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[s._v("#")]),s._v(" "),a("strong",[s._v("下载")])]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("npm i webpack@next webpack-cli -D")])])]),s._v(" "),a("h2",{attrs:{id:"自动删除-node-js-polyfills"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动删除-node-js-polyfills"}},[s._v("#")]),s._v(" "),a("strong",[s._v("自动删除 Node.js Polyfills")])]),s._v(" "),a("p",[a("strong",[s._v("早期，webpack 的目标是允许在浏览器中运行大多数 node.js 模块，但是模块格局发生了变化，许多模块用途现在主要是为前端目的而编写的。webpack <= 4 附带了许多 node.js 核心模块的 polyfill，一旦模块使用任何核心模块（即 crypto 模块），这些模块就会自动应用。")])]),s._v(" "),a("p",[a("strong",[s._v("尽管这使使用为 node.js 编写的模块变得容易，但它会将这些巨大的 polyfill 添加到包中。在许多情况下，这些 polyfill 是不必要的。")])]),s._v(" "),a("p",[a("strong",[s._v("webpack 5 会自动停止填充这些核心模块，并专注于与前端兼容的模块。")])]),s._v(" "),a("p",[a("strong",[s._v("迁移：")])]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("尽可能尝试使用与前端兼容的模块。")])]),s._v(" "),a("li",[a("strong",[s._v("可以为 node.js 核心模块手动添加一个 polyfill。错误消息将提示如何实现该目标。")])])]),s._v(" "),a("h2",{attrs:{id:"chunk-和模块-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chunk-和模块-id"}},[s._v("#")]),s._v(" "),a("strong",[s._v("Chunk 和模块 ID")])]),s._v(" "),a("p",[a("strong",[s._v("添加了用于长期缓存的新算法。在生产模式下默认情况下启用这些功能。")])]),s._v(" "),a("p",[a("code",[s._v('chunkIds: "deterministic", moduleIds: "deterministic"')])]),s._v(" "),a("h2",{attrs:{id:"chunk-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chunk-id"}},[s._v("#")]),s._v(" "),a("strong",[s._v("Chunk ID")])]),s._v(" "),a("p",[a("strong",[s._v("你可以不用使用 "),a("strong",[a("code",[s._v('import(/* webpackChunkName: "name" */ "module")')])]),s._v(" 在开发环境来为 chunk 命名，生产环境还是有必要的")])]),s._v(" "),a("p",[a("strong",[s._v("webpack 内部有 chunk 命名规则，不再是以 id(0, 1, 2)命名了")])]),s._v(" "),a("h2",{attrs:{id:"tree-shaking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking"}},[s._v("#")]),s._v(" "),a("strong",[s._v("Tree Shaking")])]),s._v(" "),a("ol",[a("li",[a("strong",[s._v("webpack 现在能够处理对嵌套模块的 tree shaking")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// inner.js\nexport const a = 1;\nexport const b = 2;\n\n// module.js\nimport * as inner from './inner';\nexport { inner };\n\n// user.js\nimport * as module from './module';\nconsole.log(module.inner.a);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[a("strong",[s._v("在生产环境中, inner 模块暴露的 "),a("strong",[a("code",[s._v("b")])]),s._v(" 会被删除")])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("strong",[s._v("webpack 现在能够多个模块之前的关系")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import { something } from './something';\n\nfunction usingSomething() {\n  return something;\n}\n\nexport function test() {\n  return usingSomething();\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("strong",[s._v("当设置了")]),s._v(" "),a("code",[s._v('"sideEffects": false')]),a("strong",[s._v("时，一旦发现")]),s._v(" "),a("code",[s._v("test")]),a("strong",[s._v("方法没有使用，不但删除")]),s._v(" "),a("code",[s._v("test")]),a("strong",[s._v("，还会删除")]),s._v(" "),a("code",[s._v('"./something"')])]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("strong",[s._v("webpack 现在能处理对 Commonjs 的 tree shaking")])])]),s._v(" "),a("h2",{attrs:{id:"output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[s._v("#")]),s._v(" "),a("strong",[s._v("Output")])]),s._v(" "),a("p",[a("strong",[s._v("webpack 4 默认只能输出 ES5 代码")])]),s._v(" "),a("p",[a("strong",[s._v("webpack 5 开始新增一个属性 output.ecmaVersion, 可以生成 ES5 和 ES6 / ES2015 代码.")])]),s._v(" "),a("p",[a("strong",[s._v("如：")]),a("code",[s._v("output.ecmaVersion: 2015")])]),s._v(" "),a("h2",{attrs:{id:"splitchunk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#splitchunk"}},[s._v("#")]),s._v(" "),a("strong",[s._v("SplitChunk")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// webpack4\nminSize: 30000;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// webpack5\nminSize: {\n  javascript: 30000,\n  style: 50000,\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"caching"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#caching"}},[s._v("#")]),s._v(" "),a("strong",[s._v("Caching")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// 配置缓存\ncache: {\n  // 磁盘存储\n  type: "filesystem",\n  buildDependencies: {\n    // 当配置修改时，缓存失效\n    config: [__filename]\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("**缓存将存储到 **"),a("code",[s._v("node_modules/.cache/webpack")])]),s._v(" "),a("h2",{attrs:{id:"监视输出文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监视输出文件"}},[s._v("#")]),s._v(" "),a("strong",[s._v("监视输出文件")])]),s._v(" "),a("p",[a("strong",[s._v("之前 webpack 总是在第一次构建时输出全部文件，但是监视重新构建时会只更新修改的文件。")])]),s._v(" "),a("p",[a("strong",[s._v("此次更新在第一次构建时会找到输出文件看是否有变化，从而决定要不要输出全部文件。")])]),s._v(" "),a("h2",{attrs:{id:"默认值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认值"}},[s._v("#")]),s._v(" "),a("strong",[s._v("默认值")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v('entry: "./src/index.js')])]),s._v(" "),a("li",[a("code",[s._v('output.path: path.resolve(__dirname, "dist")')])]),s._v(" "),a("li",[a("code",[s._v('output.filename: "[name].js"')])])]),s._v(" "),a("h1",{attrs:{id:"报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#报错"}},[s._v("#")]),s._v(" "),a("strong",[s._v("报错")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SyntaxError: Cannot use import statement outside a module\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("js的es6浏览器不能识别")])]),s._v(" "),a("p",[a("strong",[s._v("css预处理器也不能识别需要")])]),s._v(" "),a("p",[a("strong",[s._v("Entry  webpack的入口")])]),s._v(" "),a("p",[a("strong",[s._v("Oupput 输出打包资源输出在那")])]),s._v(" "),a("p",[a("strong",[s._v("Loader")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    开发环境 webpack ./src/index.js -o ./build/build.js --mode=development\n    webpack会以 ./src/index.js为入口文件开始打包，打包后输出到 ./build\n    整体打包环境，就是开发环境\n    生产环境 webpack ./src/index.js -o ./build --mode=production\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("webpack5只需要写打包输出的目录文件夹他会自己生成main.js用来存放打包后内容")])]),s._v(" "),a("p",[a("strong",[s._v("html-loader设置如下即可实现img图片引入打包")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("            {\n                test:/\\.html$/,\n                // 处理html文件的img图片，（负责引入img，从而能被url-loader进行处理）\n                loader:'html-loader',\n                options: {\n                    // Disables attributes processing\n                    // sources: false,\n                    esModule: false,\n                },\n            }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[a("strong",[s._v("在处理其他文件没有排除js文件会报错")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ is not a function\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("兼容浏览器配置")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('  \n"browserslist": {\n    "development": [\n      "last 1 chrome version",\n      "last 1 firefox version",\n      "last 1 safari version"\n    ],\n    "production": [\n      ">0.2%",\n      "not dead",\n      "not op_mini all"\n    ]\n  }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h1",{attrs:{id:"webpack5-0-使用webpack-dev-server时-无法自动刷新页面。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack5-0-使用webpack-dev-server时-无法自动刷新页面。"}},[s._v("#")]),s._v(" "),a("strong",[s._v("webpack5.0 使用webpack-dev-server时，无法自动刷新页面。")])]),s._v(" "),a("p",[a("strong",[s._v("在module.exprots中添加配置：target: ‘web’")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("module.exports={\n    entry:'./src/js/index.js',\n    output:{\n        filename:'js/build.js',\n        path:resolve(__dirname,'build')\n    },\n    target: 'web',\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);