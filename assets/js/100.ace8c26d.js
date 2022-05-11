(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{781:function(s,t,a){"use strict";a.r(t);var e=a(25),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"npm相关命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm相关命令"}},[s._v("#")]),s._v(" npm相关命令")]),s._v(" "),a("ClientOnly",[a("Valine")],1),s._v(" "),a("h2",{attrs:{id:"_1-查看全局下载根目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看全局下载根目录"}},[s._v("#")]),s._v(" 1. 查看全局下载根目录")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("npm root -g")])])]),s._v(" "),a("h2",{attrs:{id:"_2-快速删除node-modules包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-快速删除node-modules包"}},[s._v("#")]),s._v(" 2. 快速删除node_modules包")]),s._v(" "),a("ol",[a("li",[s._v("全局安装依赖rimraf\n"),a("ul",[a("li",[a("code",[s._v("npm install rimraf -g")])])])]),s._v(" "),a("li",[s._v("删除node_modules包\n"),a("ul",[a("li",[a("code",[s._v("rimraf node_modules")])])])])]),s._v(" "),a("h2",{attrs:{id:"_3-清除npm缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-清除npm缓存"}},[s._v("#")]),s._v(" 3. 清除npm缓存")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("npm cache clean -f")])])]),s._v(" "),a("h2",{attrs:{id:"_4-解决node内存溢出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-解决node内存溢出"}},[s._v("#")]),s._v(" 4. 解决Node内存溢出")]),s._v(" "),a("ol",[a("li",[s._v("安装两个插件\n"),a("ul",[a("li",[a("code",[s._v("npm install increase-memory-limit")])]),s._v(" "),a("li",[a("code",[s._v("npm install cross-env")])])])]),s._v(" "),a("li",[s._v("在package.json里的scripts里进行配置\n"),a("ul",[a("li",[s._v("LIMIT是你想分配的内存大小，这里的8192单位是M也就是8G（具体的大小根据实际情况而定）;")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"fix-memory-limit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cross-env LIMIT=8192 increase-memory-limit"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("li",[s._v("执行命令")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("npm run fix-memory-limit")])])]),s._v(" "),a("h2",{attrs:{id:"_5-直接以服务的方式运行网页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-直接以服务的方式运行网页"}},[s._v("#")]),s._v(" 5. 直接以服务的方式运行网页")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("npm install -g http-server")])]),s._v(" "),a("li",[s._v("cd到某个目录")]),s._v(" "),a("li",[a("code",[s._v("http-server -p 8881")])])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);