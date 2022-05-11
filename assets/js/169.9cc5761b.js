(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{849:function(_,v,l){"use strict";l.r(v);var i=l(25),t=Object(i.a)({},(function(){var _=this,v=_.$createElement,l=_._self._c||v;return l("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[l("h1",{attrs:{id:"http-前端的生命线"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#http-前端的生命线"}},[_._v("#")]),_._v(" http (前端的生命线)")]),_._v(" "),l("ClientOnly",[l("Valine")],1),_._v(" "),l("h2",{attrs:{id:"_1-简述"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1-简述"}},[_._v("#")]),_._v(" 1. 简述")]),_._v(" "),l("ul",[l("li",[_._v("前端工程师开发界面")]),_._v(" "),l("li",[_._v("需要调用后端接口，提交/获取数据 => 需要用到http协议")]),_._v(" "),l("li",[_._v("要求事先掌握好ajax")])]),_._v(" "),l("h2",{attrs:{id:"_2-题目"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2-题目"}},[_._v("#")]),_._v(" 2. 题目")]),_._v(" "),l("ul",[l("li",[_._v("http常见状态码有哪些")]),_._v(" "),l("li",[_._v("http常用的header(响应头、请求头)有哪些")]),_._v(" "),l("li",[_._v("什么是Restful API")]),_._v(" "),l("li",[_._v("描述一下http的缓存机制(重点)")])]),_._v(" "),l("h2",{attrs:{id:"_3-知识点"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-知识点"}},[_._v("#")]),_._v(" 3. 知识点")]),_._v(" "),l("h3",{attrs:{id:"_3-1-http状态码"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-http状态码"}},[_._v("#")]),_._v(" 3.1. http状态码")]),_._v(" "),l("ul",[l("li",[_._v("状态码分类\n"),l("ul",[l("li",[_._v("1xx => 服务器收到请求")]),_._v(" "),l("li",[_._v("2xx => 请求成功")]),_._v(" "),l("li",[_._v("3xx => 重定向")]),_._v(" "),l("li",[_._v("4xx => 客户端错误")]),_._v(" "),l("li",[_._v("5xx => 服务端错误")])])]),_._v(" "),l("li",[_._v("常见的状态码\n"),l("ul",[l("li",[_._v("200 => 成功")]),_._v(" "),l("li",[_._v("301 => 永久重定向(配合localtion，浏览器自动处理)\n"),l("ul",[l("li",[_._v("浏览器会记住，遇到直接跳转新的地址")]),_._v(" "),l("li",[_._v("网站域名到期")])])]),_._v(" "),l("li",[_._v("302 => 临时重定向(配合localtion，浏览器自动处理)\n"),l("ul",[l("li",[_._v("浏览器访问一个地址，只有第一次会跳转到新的地址")]),_._v(" "),l("li",[_._v("百度知乎邮箱等搜索引擎里面点击链接或者一些短连接，他会先跳转到自己的地址，再跳转到目标网址\n"),l("ul",[l("li",[_._v("如果是第一次访问，状态码是302\n"),l("ul",[l("li",[_._v("有时候也会有307,307和302差不多")])])]),_._v(" "),l("li",[_._v("第一次访问之后，浏览器有了缓存，再访问，状态码是200")]),_._v(" "),l("li",[_._v("如果是短连接，他会先跳转到长连接")])])])])]),_._v(" "),l("li",[_._v("304 => 资源未被修改 - 重点\n"),l("ul",[l("li",[_._v("资源如果已经请求过了，服务端有可能会返回一个304，表示已经被存储到本地缓存")])])]),_._v(" "),l("li",[_._v("404 => 资源未找到")]),_._v(" "),l("li",[_._v("403 => 没有权限\n"),l("ul",[l("li",[_._v("比如登陆")])])]),_._v(" "),l("li",[_._v("500 => 服务器错误 - 最常见")]),_._v(" "),l("li",[_._v("504 => 网关超时\n"),l("ul",[l("li",[_._v("服务器内部在做一些操作的时候，比如链接其他服务器的时候超时了")])])])])]),_._v(" "),l("li",[_._v("关于协议和规范\n"),l("ul",[l("li",[_._v("就是一个约定")]),_._v(" "),l("li",[_._v("要求大家都跟着执行")]),_._v(" "),l("li",[_._v("不要违反规定，例如IE浏览器，比如把200当做错误等")])])])]),_._v(" "),l("h3",{attrs:{id:"_3-2-http-methods"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-http-methods"}},[_._v("#")]),_._v(" 3.2. http methods")]),_._v(" "),l("ul",[l("li",[_._v("传统的methods\n"),l("ul",[l("li",[_._v("http刚刚开始的时候(大约十年前)")]),_._v(" "),l("li",[_._v("简单的网页功能，就这两个操作\n"),l("ul",[l("li",[_._v("get => 获取服务器的数据")]),_._v(" "),l("li",[_._v("post => 向服务器提交数据")])])])])]),_._v(" "),l("li",[_._v("现在的methods\n"),l("ul",[l("li",[_._v("get => 获取数据")]),_._v(" "),l("li",[_._v("post => 新建数据")]),_._v(" "),l("li",[_._v("patch/put => 更新数据")]),_._v(" "),l("li",[_._v("delete => 删除数据")])])]),_._v(" "),l("li",[_._v("Restful API\n"),l("ul",[l("li",[_._v("一种新的API设计方法(早已推广使用) => 常考")]),_._v(" "),l("li",[_._v("重点概念\n"),l("ul",[l("li",[_._v("传统的API设计：把每个url当作一个功能")]),_._v(" "),l("li",[_._v("Restful API设计：把每个url当作一个唯一的资源(标识)")])])]),_._v(" "),l("li",[_._v("如何设计成一个资源\n"),l("ul",[l("li",[_._v("尽量不用url参数\n"),l("ul",[l("li",[_._v("传统的API设计：/api/list?pageIndex=2\n"),l("ul",[l("li",[_._v("相当于一个函数(?相当于函数的参数)")])])]),_._v(" "),l("li",[_._v("现在的API设计：/api/list/2\n"),l("ul",[l("li",[_._v("就是list第二页资源的标识(或者说id)")]),_._v(" "),l("li",[_._v("不会和其他资源冲突，如果说获取详情页，就不叫list，应该是：/api/detail/2")]),_._v(" "),l("li",[_._v("即一个完整的地址加上一个唯一标识(id)，这就是restful api设计的目的")])])])])]),_._v(" "),l("li",[_._v("用method表示操作类型 - 即上面的4个方法\n"),l("ul",[l("li",[_._v("传统api设计\n"),l("ul",[l("li",[_._v("post请求：/api/create-blog => 创建博客")]),_._v(" "),l("li",[_._v("post请求：/api/update-blog?id=100 => 更新博客")]),_._v(" "),l("li",[_._v("get请求：/api/get-blog?id=100 => 获取博客")]),_._v(" "),l("li",[_._v("相当于把一个api当作一个功能进行设计")])])]),_._v(" "),l("li",[_._v("Restful API设计\n"),l("ul",[l("li",[_._v("post请求：/api/blog => 创建博客\n"),l("ul",[l("li",[_._v("表示整个blog资源的标识")])])]),_._v(" "),l("li",[_._v("patch请求：/api/blog/100 => 更新博客\n"),l("ul",[l("li",[_._v("id为100的blog的标识")])])]),_._v(" "),l("li",[_._v("get请求：/api/blog/100 => 获取博客\n"),l("ul",[l("li",[_._v("id为100的blog的标识")])])]),_._v(" "),l("li",[_._v("用method标识操作类型")])])])])])])])])])]),_._v(" "),l("h3",{attrs:{id:"_3-3-http常用的header"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-http常用的header"}},[_._v("#")]),_._v(" 3.3. http常用的header")]),_._v(" "),l("ul",[l("li",[_._v("简述\n"),l("ul",[l("li",[_._v("常见的Request Headers => 请求头\n"),l("ul",[l("li",[_._v("请求的时候，客户端往服务端发送的Headers")])])]),_._v(" "),l("li",[_._v("常见的Response Headers => 响应头\n"),l("ul",[l("li",[_._v("服务端向客户端返回的Headers")])])]),_._v(" "),l("li",[_._v("headers在http请求中是一件非常重要的事情")])])]),_._v(" "),l("li",[_._v("流程\n"),l("ul",[l("li",[_._v("我们访问一个url地址实际上就是发送请求")]),_._v(" "),l("li",[_._v("我们发送请求实际上要做以下步骤\n"),l("ul",[l("li",[_._v("使用某个方法(get、post)去发送一个url")]),_._v(" "),l("li",[_._v("我们发送的请求还包括request headers")])])]),_._v(" "),l("li",[_._v("服务端接收到请求会进行返回\n"),l("ul",[l("li",[_._v("服务端不止返回结果(json、页面、图片等)")]),_._v(" "),l("li",[_._v("服务端还会返回response headers")])])])])]),_._v(" "),l("li",[_._v("常见的Request Headers(请求头)\n"),l("ul",[l("li",[_._v("客户端向服务端发请求")]),_._v(" "),l("li",[_._v("Accept => 浏览器可接收的数据格式\n"),l("ul",[l("li",[_._v("text/html、application/json等")])])]),_._v(" "),l("li",[_._v("Accept-Encoding => 浏览器可接收的压缩算法，如gzip\n"),l("ul",[l("li",[_._v("我们可以根据gzip算法把资源进行压缩(100kb大概可以压缩至30kb左右)")]),_._v(" "),l("li",[_._v("浏览器可以识别压缩的内容，也可以解压")]),_._v(" "),l("li",[_._v("浏览器告诉服务器，我能接收什么样的压缩算法，服务器就会根据Accept-Encoding的压缩算法进行压缩")]),_._v(" "),l("li",[_._v("前后端通用")]),_._v(" "),l("li",[_._v("为了保证资源更小，传输地更快一些，前端也可以正常地解压出来")]),_._v(" "),l("li",[_._v("表示客户端可以支持什么样的压缩算法")])])]),_._v(" "),l("li",[_._v("Accept-Language => 浏览器可接收的语言，如zh-CN")]),_._v(" "),l("li",[_._v("Connection：keep-alive一次TCP连接重复使用\n"),l("ul",[l("li",[_._v("每次请求重新建立TCP连接会很消耗资源")]),_._v(" "),l("li",[_._v("现在的浏览器版本基本上都是支持keep-alive的\n"),l("ul",[l("li",[_._v("即我们和服务端建立了连接之后，就可以重复地使用这个连接，没必要断开之后重连")]),_._v(" "),l("li",[_._v("重复地使用一次连接，把资源一次性请求完成")])])])])]),_._v(" "),l("li",[_._v("cookie\n"),l("ul",[l("li",[_._v("同域，每次请求资源的时候都会把cookie带上")]),_._v(" "),l("li",[_._v("浏览器自己带的")])])]),_._v(" "),l("li",[_._v("Host\n"),l("ul",[l("li",[_._v("请求的域名是什么")])])]),_._v(" "),l("li",[_._v("User-Agent(简称UA) => 浏览器信息 => 重点\n"),l("ul",[l("li",[_._v("能标识你的浏览器信息(类型等)")]),_._v(" "),l("li",[_._v("服务端能够接收ua信息，可以判断用户使用的浏览器类型")])])]),_._v(" "),l("li",[_._v("Content-type\n"),l("ul",[l("li",[_._v("发送数据的格式，如 application/json")]),_._v(" "),l("li",[_._v("客户端向服务端请求，要发送一些数据的时候(post)，告诉服务端，我们这个数据是什么格式的，一般get请求是没有的，get请求主要是向服务端获取数据")])])])])]),_._v(" "),l("li",[_._v("常见的Response Headers(响应头)\n"),l("ul",[l("li",[_._v("Content-type => 返回的数据格式\n"),l("ul",[l("li",[_._v("如 application/json")])])]),_._v(" "),l("li",[_._v("Content-length 返回数据的大小，多少字节")]),_._v(" "),l("li",[_._v("Content-Encoding => 返回数据的压缩算法，如gzip\n"),l("ul",[l("li",[_._v("客户端告诉服务端支持的压缩算法之后")]),_._v(" "),l("li",[_._v("服务端根据压缩算法进行压缩")]),_._v(" "),l("li",[_._v("服务端压缩之后会通过Content-Encoding告诉客户端我是用什么算法压缩的")]),_._v(" "),l("li",[_._v("浏览器会自动根据这个压缩算法解压")])])]),_._v(" "),l("li",[_._v("Set-Cookie\n"),l("ul",[l("li",[_._v("服务端改cookie的时候，通过Set-Cookie修改")])])])])]),_._v(" "),l("li",[_._v("自定义header\n"),l("ul",[l("li",[_._v("以上的请求头和响应头是浏览器自带的，或者服务端和浏览器配合加的")]),_._v(" "),l("li",[_._v("请求头和响应头实际上可以自定义header")]),_._v(" "),l("li",[_._v("自定义请求头的时候，需要前端访问服务的时候加上header")]),_._v(" "),l("li",[_._v("自定义响应头的时候，需要服务端向客户端返回之前加上header")]),_._v(" "),l("li",[_._v("使用axios做请求，其实我们可以自定义header\n"),l("ul",[l("li",[_._v("headers: {'X-Requested-With': 'XMLHttpRequest'}")]),_._v(" "),l("li",[_._v("在浏览器上的request headers里面就会多一个请求头，名字和值都可以自己定义，但不要和浏览器自带的键值冲突")])])]),_._v(" "),l("li",[_._v("使用场景\n"),l("ul",[l("li",[_._v("有些接口要求在请求头中加一个特定的秘钥，请求才能通过，否则就是非法请求 => 权限验证")])])])])]),_._v(" "),l("li",[_._v("缓存相关的headers\n"),l("ul",[l("li",[_._v("Cache-Control")]),_._v(" "),l("li",[_._v("Expires")]),_._v(" "),l("li",[_._v("Last-Modified")]),_._v(" "),l("li",[_._v("IF-Modified-Since")]),_._v(" "),l("li",[_._v("Etag")]),_._v(" "),l("li",[_._v("If-None-Match")])])]),_._v(" "),l("li",[_._v("总结\n"),l("ul",[l("li",[_._v("如果提问有哪些headers，需要分两步来讲\n"),l("ol",[l("li",[_._v("浏览器自带的请求头和响应头")]),_._v(" "),l("li",[_._v("缓存的headers")])])])])])]),_._v(" "),l("h3",{attrs:{id:"_3-4-http的缓存-重点"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-http的缓存-重点"}},[_._v("#")]),_._v(" 3.4. http的缓存(重点)")]),_._v(" "),l("h4",{attrs:{id:"_3-4-1-关于缓存的介绍"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-1-关于缓存的介绍"}},[_._v("#")]),_._v(" 3.4.1. 关于缓存的介绍")]),_._v(" "),l("ul",[l("li",[_._v("什么是缓存\n"),l("ul",[l("li",[_._v("浏览器访问一个新的网站(本地没有任何信息)，服务端会返回所有的资源，并且浏览器或者服务器会将一些不必要重新获取的资源存到缓存区，第二次访问的时候，就不需要全部重新获取一遍资源，有一部分资源会从缓存中获取")]),_._v(" "),l("li",[_._v("即我们可以把一些没有必要重新获取的资源不再重新获取，这就是缓存")])])]),_._v(" "),l("li",[_._v("为什么需要缓存\n"),l("ul",[l("li",[_._v("为了减少请求的数量和体积，让页面加载和渲染的过程更快一些\n"),l("ul",[l("li",[_._v("从键盘输入地址到页面返回，几乎所有操作(cpu计算，页面渲染)都是毫秒级别的，速度非常快，相比较于cup计算而言，唯一慢的就是网络请求")])])]),_._v(" "),l("li",[_._v("如果要做性能优化，让页面显示的更快，我们需要从最大的瓶颈，即网络请求下手")]),_._v(" "),l("li",[_._v("我们需要尽量减少网络请求的体积和数量")])])]),_._v(" "),l("li",[_._v("哪些资源可以被缓存\n"),l("ul",[l("li",[_._v("一些静态资源 => js css img\n"),l("ul",[l("li",[_._v("webpack打包的时候，我们会加一个hash，hash是通过资源内容来算的")]),_._v(" "),l("li",[_._v("打包之后的静态资源文件，加上hash后缀之后，资源是不会被修改的")]),_._v(" "),l("li",[_._v("如果内容改了之后，会生成一个新的hash的名称")])])]),_._v(" "),l("li",[_._v("html不能被缓存，因为html可能随时会更新")]),_._v(" "),l("li",[_._v("业务数据不能被缓存，数据会变")])])])]),_._v(" "),l("h4",{attrs:{id:"_3-4-2-http缓存策略-强制缓存-协商缓存-常考"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-2-http缓存策略-强制缓存-协商缓存-常考"}},[_._v("#")]),_._v(" 3.4.2. http缓存策略(强制缓存+协商缓存)(常考)")]),_._v(" "),l("h5",{attrs:{id:"_3-4-2-1-强制缓存"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-2-1-强制缓存"}},[_._v("#")]),_._v(" 3.4.2.1. 强制缓存")]),_._v(" "),l("ul",[l("li",[_._v("图示 => 第一次请求(静态资源)\n"),l("img",{attrs:{src:"/blog/images/interview/interview-one-side/cache1.png",alt:"cache1"}})]),_._v(" "),l("li",[_._v("根据图示梳理缓存流程\n"),l("ol",[l("li",[_._v("浏览器初次请求到服务器")])]),_._v(" "),l("ul",[l("li",[_._v("会经过本地缓存(设备) => 浏览器的机制")]),_._v(" "),l("li",[_._v("浏览器到服务器是通过网络连接起来的")])]),_._v(" "),l("ol",{attrs:{start:"2"}},[l("li",[_._v("服务端会返回资源")])]),_._v(" "),l("ul",[l("li",[_._v("服务端不止返回资源(结果集)，还会返回一个Cache-Control\n"),l("ul",[l("li",[_._v("Cache-Control是一个响应头(response headers),和缓存相关")]),_._v(" "),l("li",[_._v("初次请求之后，如果服务端感觉这个资源可以被缓存，就会加上Cache-Control，如果服务端感觉这个资源不适合被缓存，就不会加上这个Cache-Control")]),_._v(" "),l("li",[_._v("一些静态资源(js、css、img)都会被加上Cache-Control")]),_._v(" "),l("li",[_._v("如果有Cache-Control，浏览器会将资源缓存下来 => 浏览器的机制")])])])]),_._v(" "),l("ol",{attrs:{start:"3"}},[l("li",[_._v("浏览器有了资源之后就会开始继续工作")])])]),_._v(" "),l("li",[_._v("Cache-Control简介\n"),l("ul",[l("li",[_._v("在response headers中\n"),l("ul",[l("li",[_._v("服务端控制哪些资源可以加Cache-Control，客户端控制不了")])])]),_._v(" "),l("li",[_._v("控制强制缓存的逻辑\n"),l("ul",[l("li",[_._v("强制缓存本质还是服务端控制的")])])]),_._v(" "),l("li",[_._v("例如\n"),l("ul",[l("li",[_._v("Cache-Control: max-age=31536000 (单位是秒 - 1年)\n"),l("ul",[l("li",[_._v("即我们需要将某个资源文件在客户端缓存一年的时间")]),_._v(" "),l("li",[_._v("max-age表示最大的时间\n"),l("img",{attrs:{src:"/blog/images/interview/interview-one-side/cache-control.png",alt:"cache-control"}})])])])])])])]),_._v(" "),l("li",[_._v("图示 => 第二次请求(静态资源)\n"),l("img",{attrs:{src:"/blog/images/interview/interview-one-side/cache2.png",alt:"cache2"}})]),_._v(" "),l("li",[_._v("根据图示梳理缓存流程\n"),l("ol",[l("li",[_._v("初次请求说明见上")]),_._v(" "),l("li",[_._v("浏览器再次请求")])]),_._v(" "),l("ul",[l("li",[_._v("再次请求的时候，他会判断Cache-Control时间是否过期")]),_._v(" "),l("li",[_._v("如果时间没有过期，浏览器就会在本地缓存中获取资源")]),_._v(" "),l("li",[_._v("即不会去服务端获取资源，直接返回")]),_._v(" "),l("li",[_._v("浏览器会根据之前请求的Cache-Control来判断是否可以被缓存，存下来")]),_._v(" "),l("li",[_._v("再次请求的时候就会在本地去找，然后去返回")]),_._v(" "),l("li",[_._v("没有经过网络")])]),_._v(" "),l("ol",{attrs:{start:"3"}},[l("li",[_._v("浏览器有了资源之后就会开始继续工作")])])]),_._v(" "),l("li",[_._v("从缓存获取资源示例\n"),l("img",{attrs:{src:"/blog/images/interview/interview-one-side/disk-cache.png",alt:"disk-cache"}})]),_._v(" "),l("li",[_._v("缓存过期了\n"),l("ul",[l("li",[_._v("缓存过期，浏览器会再次从服务端请求资源\n"),l("ul",[l("li",[_._v("服务端会重新返回资源和Cache-Control\n"),l("img",{attrs:{src:"/blog/images/interview/interview-one-side/cache3.png",alt:"cache3"}})])])])])]),_._v(" "),l("li",[_._v("Cache-Control的值介绍\n"),l("ul",[l("li",[_._v("max-age => 缓存最大过期时间(秒)")]),_._v(" "),l("li",[_._v("no-cache => 不用强制缓存，正常从服务端请求，服务端怎么做不管\n"),l("ul",[l("li",[_._v("不想用缓存，一般用这个")])])]),_._v(" "),l("li",[_._v("no-store => 不用强制缓存，也不让服务端做缓存，让服务端直接返回资源\n"),l("ul",[l("li",[_._v("不常用")])])]),_._v(" "),l("li",[_._v("private => 只能允许最终用户做缓存(设备)")]),_._v(" "),l("li",[_._v("public => 中间的代理也可以做缓存")])])]),_._v(" "),l("li",[_._v("关于Expires\n"),l("ul",[l("li",[_._v("经常会和Cache-Control并列在一起")]),_._v(" "),l("li",[_._v("同样在响应头(response headers)中")]),_._v(" "),l("li",[_._v("同为控制缓存过期")]),_._v(" "),l("li",[_._v("已经被Cache-Control代替")]),_._v(" "),l("li",[_._v("现在的浏览器兼容这两种写法，如果同时存在，以Cache-Control为主")])])])]),_._v(" "),l("h5",{attrs:{id:"_3-4-2-2-协商缓存-对比缓存"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-2-2-协商缓存-对比缓存"}},[_._v("#")]),_._v(" 3.4.2.2. 协商缓存(对比缓存)")]),_._v(" "),l("ul",[l("li",[_._v("简述\n"),l("ul",[l("li",[_._v("类似一个商量或者沟通的意思")]),_._v(" "),l("li",[_._v("服务端缓存策略\n"),l("ul",[l("li",[_._v("服务端来判断这个资源是否可以被缓存")]),_._v(" "),l("li",[_._v("不是指这个文件缓存在服务端")]),_._v(" "),l("li",[_._v("服务端缓存策略的意思是，我们这个资源到了服务端之后，服务端可以告诉浏览器这个资源没有动，可以直接用本地的缓存就可以了，就不用再让我给你一份了，这次请求就效率很高，体积很小")]),_._v(" "),l("li",[_._v("即服务端判断这次请求能不能用缓存的内容")])])]),_._v(" "),l("li",[_._v("服务端判断客户端资源，是否和服务端资源一样")]),_._v(" "),l("li",[_._v("如果判断一致就返回304，否则返回200和最新的资源\n"),l("ul",[l("li",[_._v("客户端资源和服务端资源是一样的，没有被修改")])])])])]),_._v(" "),l("li",[_._v("服务端如何判断是否和缓存资源一致\n"),l("ul",[l("li",[_._v("图示 => 协商缓存\n"),l("img",{attrs:{src:"/blog/images/interview/interview-one-side/negotiation-cache1.png",alt:"negotiation-cache1"}})]),_._v(" "),l("li",[_._v("浏览器本身是自带一个缓存机制的，不过上图没有表现出来\n"),l("ul",[l("li",[_._v("存储服务器的缓存资源")])])]),_._v(" "),l("li",[_._v("根据图示梳理缓存流程\n"),l("ul",[l("li",[_._v("浏览器初次请求服务器")]),_._v(" "),l("li",[_._v("服务器返回资源和资源标识\n"),l("ul",[l("li",[_._v("标识资源的一个符号(字符串或者时间等)")]),_._v(" "),l("li",[_._v("资源标识比较短，体积小")])])]),_._v(" "),l("li",[_._v("浏览器再次请求，会带着资源标识")]),_._v(" "),l("li",[_._v("服务端根据资源标识判断当前资源是否是服务端最新的资源\n"),l("ul",[l("li",[_._v("返回304，或者返回200、新的资源和新的资源标识")])])])])])])]),_._v(" "),l("li",[_._v("资源标识简介\n"),l("ul",[l("li",[_._v("在response headers中，有两种\n"),l("ul",[l("li",[_._v("Last-Modified => 资源的最后修改时间\n"),l("img",{attrs:{src:"/blog/images/interview/interview-one-side/last-modified.png",alt:"last-modified"}}),_._v(" "),l("ul",[l("li",[_._v("服务端返回资源和Last-modified\n"),l("ul",[l("li",[_._v("值是最后修改时间")])])]),_._v(" "),l("li",[_._v("浏览器再次请求的时候，请求头会带着If-Modified-Since\n"),l("ul",[l("li",[_._v("If-Modified-Since是Last-Modified的key")]),_._v(" "),l("li",[_._v("值是最后修改时间")]),_._v(" "),l("li",[_._v("前端请求的和后端返回的资源标识名字不一样，但值是一样的")]),_._v(" "),l("li",[_._v("url就可以代表这个资源，判断这个资源的最后修改时间是不是和带来的这个If-Modified-Since值是一样的")]),_._v(" "),l("li",[_._v("服务端会判断If-Modified-Since和Last-modified是否相等")]),_._v(" "),l("li",[_._v("这两个值相等，就返回304")]),_._v(" "),l("li",[_._v("服务端修改的话，会改变Last-Modified的值")]),_._v(" "),l("li",[_._v("服务端每返回一个Last-Modified，If-Modified-Since的值就会修改，服务端根据带来的时间和资源的最后修改时间做一个协商，做一个对比，看看能不能返回304")]),_._v(" "),l("li",[_._v("新的Last-Modified力求下次能命中缓存")])])])])]),_._v(" "),l("li",[_._v("Etag => 资源的唯一标识(一个字符串，类似人类的指纹)\n"),l("img",{attrs:{src:"/blog/images/interview/interview-one-side/etag.png",alt:"etag"}}),_._v(" "),l("ul",[l("li",[_._v("服务端返回资源和Etag(就是一个字符串)，但是要保证唯一性\n"),l("ul",[l("li",[_._v("浏览器发现有Etag之后，就会把资源缓存下来，把Etag也记下来")])])]),_._v(" "),l("li",[_._v("浏览器再次请求，请求头带着If-None-Match\n"),l("ul",[l("li",[_._v("再次请求的时候请求头会带上If-None-Match，他的值实际上就是Etag")]),_._v(" "),l("li",[_._v("服务端发现有If-None-Match之后，服务端就会根据当前资源重新计算一个Etag，再和If-None-Match的值进行对比")]),_._v(" "),l("li",[_._v("如果这个资源没有变过，算出来的Etag应该和If-None-Match的值是一样的")]),_._v(" "),l("li",[_._v("如果对比值不一样，就会返回一个新的Etag和新的资源")])])]),_._v(" "),l("li",[_._v("返回304，或返回资源和新的Etag")])])])])]),_._v(" "),l("li",[_._v("协商缓存图示\n"),l("img",{attrs:{src:"/blog/images/interview/interview-one-side/negotiation-cache2.png",alt:"negotiation-cache2"}}),_._v(" "),l("img",{attrs:{src:"/blog/images/interview/interview-one-side/negotiation-cache3.png",alt:"negotiation-cache3"}})])])]),_._v(" "),l("li",[_._v("Last-Modified和Etag注意事项\n"),l("ul",[l("li",[_._v("会优先使用Etag\n"),l("ul",[l("li",[_._v("因为Last-Modified只能精确到秒级")]),_._v(" "),l("li",[_._v("秒对计算机而言，是一个比较大的单位，以程序而言，一般是以毫秒为单位")])])]),_._v(" "),l("li",[_._v("如果资源被重复生成，而内容不变，则Etag更精确\n"),l("ul",[l("li",[_._v("如果资源1s生成一次，内容不变，Last-Modified每次都会过期，重新返回新资源")]),_._v(" "),l("li",[_._v("Etag他是根据内容计算的(类似webpack的hash)\n"),l("ul",[l("li",[_._v("内容不变，就算1s重新生成一次，他的Etag值也不会变化")])])])])])])])]),_._v(" "),l("h5",{attrs:{id:"_3-4-2-3-缓存总结-重点"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-2-3-缓存总结-重点"}},[_._v("#")]),_._v(" 3.4.2.3. 缓存总结(重点)")]),_._v(" "),l("ul",[l("li",[_._v("如图所示\n"),l("img",{attrs:{src:"/blog/images/interview/interview-one-side/cache-all.png",alt:"cache-all"}})]),_._v(" "),l("li",[_._v("根据图示梳理缓存流程\n"),l("ul",[l("li",[_._v("第一种情况\n"),l("ol",[l("li",[_._v("发送http请求")]),_._v(" "),l("li",[_._v("如果有缓存")]),_._v(" "),l("li",[_._v("判断缓存是否过期\n"),l("ul",[l("li",[_._v("Cache-Control里面有个max-age，即最大缓存时间")])])]),_._v(" "),l("li",[_._v("如果没有过期")]),_._v(" "),l("li",[_._v("读取缓存 => 强缓存")]),_._v(" "),l("li",[_._v("页面呈现")])])]),_._v(" "),l("li",[_._v("第二种情况\n"),l("ol",[l("li",[_._v("发送http请求")]),_._v(" "),l("li",[_._v("如果有缓存")]),_._v(" "),l("li",[_._v("如果缓存过期")]),_._v(" "),l("li",[_._v("判断有没有Etag或Last-Modified\n"),l("ul",[l("li",[_._v("可以同时存在")])])]),_._v(" "),l("li",[_._v("如果没有，就直接向服务器发起http请求")]),_._v(" "),l("li",[_._v("服务器返回请求资源")]),_._v(" "),l("li",[_._v("页面呈现")])])]),_._v(" "),l("li",[_._v("第三种情况\n"),l("ol",[l("li",[_._v("发送http请求")]),_._v(" "),l("li",[_._v("如果有缓存")]),_._v(" "),l("li",[_._v("如果缓存过期")]),_._v(" "),l("li",[_._v("判断有没有Etag或Last-Modified")]),_._v(" "),l("li",[_._v("如果有则向服务器发起http请求，并且带上If-None-Match或If-Modified-Since字段\n"),l("ul",[l("li",[_._v("可以同时存在")])])]),_._v(" "),l("li",[_._v("服务器判断缓存是否可用")]),_._v(" "),l("li",[_._v("如果不可用，直接请求服务器资源，返回200")]),_._v(" "),l("li",[_._v("页面呈现")])])]),_._v(" "),l("li",[_._v("第四种情况\n"),l("ol",[l("li",[_._v("发送http请求")]),_._v(" "),l("li",[_._v("如果有缓存")]),_._v(" "),l("li",[_._v("如果缓存过期")]),_._v(" "),l("li",[_._v("判断有没有Etag或Last-Modified")]),_._v(" "),l("li",[_._v("如果有则向服务器发起http请求，并且带上If-None-Match或If-Modified-Since字段")]),_._v(" "),l("li",[_._v("服务器判断缓存是否可用")]),_._v(" "),l("li",[_._v("如果缓存可用，返回状态码304")]),_._v(" "),l("li",[_._v("读取缓存(协商缓存)")]),_._v(" "),l("li",[_._v("页面呈现")])])])])]),_._v(" "),l("li",[_._v("注意事项\n"),l("ul",[l("li",[_._v("强制缓存判断在客户端")]),_._v(" "),l("li",[_._v("协商缓存判断在服务端")])])])]),_._v(" "),l("h4",{attrs:{id:"_3-4-3-三种刷新操作方式-对缓存的影响"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-3-三种刷新操作方式-对缓存的影响"}},[_._v("#")]),_._v(" 3.4.3. 三种刷新操作方式，对缓存的影响")]),_._v(" "),l("ul",[l("li",[_._v("三种刷新操作\n"),l("ul",[l("li",[_._v("正常操作：地址栏输入url，跳转链接，前进后退等")]),_._v(" "),l("li",[_._v("手动刷新：F5(mac使用commond+r)，点击刷新按钮，右击菜单刷新")]),_._v(" "),l("li",[_._v("强制刷新：ctrl+F5(mac使用shift+commond+r)\n"),l("ul",[l("li",[_._v("刚上线可能有一些缓存")])])])])]),_._v(" "),l("li",[_._v("不同刷新操作，不同的缓存策略\n"),l("ul",[l("li",[_._v("正常操作：强制缓存有效，协商缓存有效\n"),l("ul",[l("li",[_._v("对大部分用户都有效")])])]),_._v(" "),l("li",[_._v("手动刷新：强制缓存失效，协商缓存有效\n"),l("ul",[l("li",[_._v("如果所用的操作都可以命中强制缓存，协商缓存就没有用了")]),_._v(" "),l("li",[_._v("强制缓存判断在客户端")]),_._v(" "),l("li",[_._v("协商缓存判断在服务端")]),_._v(" "),l("li",[_._v("只有协商缓存也会让页面加载地更快一些")])])]),_._v(" "),l("li",[_._v("强制刷新，强制缓存失效，协商缓存失效\n"),l("ul",[l("li",[_._v("不管多慢，都要全部返回最新的资源")])])])])])]),_._v(" "),l("h4",{attrs:{id:"_3-4-4-http的缓存小结"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-4-http的缓存小结"}},[_._v("#")]),_._v(" 3.4.4. http的缓存小结")]),_._v(" "),l("ul",[l("li",[_._v("强制缓存 => Cache-Control")]),_._v(" "),l("li",[_._v("协商缓存 => Last-Modified和Etag，304状态码")]),_._v(" "),l("li",[_._v("完整的流程图(要求会自己画)")])]),_._v(" "),l("h2",{attrs:{id:"_4-面试题解答-总结"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_4-面试题解答-总结"}},[_._v("#")]),_._v(" 4. 面试题解答(总结)")]),_._v(" "),l("ul",[l("li",[_._v("http最基本的知识体系\n"),l("ul",[l("li",[_._v("状态码")]),_._v(" "),l("li",[_._v("http method")]),_._v(" "),l("li",[_._v("restful api")]),_._v(" "),l("li",[_._v("http headers")]),_._v(" "),l("li",[_._v("http缓存策略")])])]),_._v(" "),l("li",[_._v("知识点\n"),l("ul",[l("li",[_._v("http常见的状态码有哪些\n"),l("ul",[l("li",[_._v("先从状态码范围开始")]),_._v(" "),l("li",[_._v("讲一些常用的状态码(200、301、302、304、404、403、500、504)\n"),l("ul",[l("li",[_._v("504 => 网关超时")]),_._v(" "),l("li",[_._v("304 => 资源未被修改、和缓存策略有关")]),_._v(" "),l("li",[_._v("301 => 永久重定向")]),_._v(" "),l("li",[_._v("302 => 临时重定向")])])])])]),_._v(" "),l("li",[_._v("http常见的header有哪些\n"),l("ul",[l("li",[_._v("请求头\n"),l("ul",[l("li",[_._v("Accept\n"),l("ul",[l("li",[_._v("浏览器可接收的数据格式")])])]),_._v(" "),l("li",[_._v("Accept-Encoding\n"),l("ul",[l("li",[_._v("浏览器可接收的压缩算法")])])]),_._v(" "),l("li",[_._v("Connection\n"),l("ul",[l("li",[_._v("keep-alive一次TCP连接重复使用")])])]),_._v(" "),l("li",[_._v("cookie")]),_._v(" "),l("li",[_._v("Host\n"),l("ul",[l("li",[_._v("请求的域名")])])]),_._v(" "),l("li",[_._v("User-Agent\n"),l("ul",[l("li",[_._v("浏览器信息")])])]),_._v(" "),l("li",[_._v("Content-type\n"),l("ul",[l("li",[_._v("发送数据的格式")])])])])]),_._v(" "),l("li",[_._v("响应头\n"),l("ul",[l("li",[_._v("Content-type\n"),l("ul",[l("li",[_._v("返回的数据格式")])])]),_._v(" "),l("li",[_._v("Content-length\n"),l("ul",[l("li",[_._v("返回数据的大小(字节)")])])]),_._v(" "),l("li",[_._v("Content-Encoding\n"),l("ul",[l("li",[_._v("返回数据的压缩算法(gzip)")])])]),_._v(" "),l("li",[_._v("Set-Cookie\n"),l("ul",[l("li",[_._v("服务端改cookie的时候，通过Set-Cookie修改")])])])])]),_._v(" "),l("li",[_._v("缓存相关的headers\n"),l("ul",[l("li",[_._v("Cache-Control\n"),l("ul",[l("li",[_._v("强制缓存")]),_._v(" "),l("li",[_._v("max-age(最大缓存时间)、no-cache(不用强制缓存)")])])]),_._v(" "),l("li",[_._v("Expires\n"),l("ul",[l("li",[_._v("强制缓存(旧版本)")])])]),_._v(" "),l("li",[_._v("Last-Modified\n"),l("ul",[l("li",[_._v("协商缓存，服务端返回，时间，单位秒")])])]),_._v(" "),l("li",[_._v("IF-Modified-Since\n"),l("ul",[l("li",[_._v("协商缓存，客户端请求，时间，单位秒")])])]),_._v(" "),l("li",[_._v("Etag\n"),l("ul",[l("li",[_._v("协商缓存，服务端返回，唯一字符串，根据资源内容计算")])])]),_._v(" "),l("li",[_._v("If-None-Match\n"),l("ul",[l("li",[_._v("协商缓存，客户端请求，唯一字符串，根据资源内容计算")])])])])]),_._v(" "),l("li",[_._v("自定义头信息\n"),l("ul",[l("li",[_._v("应用于登陆等场景")])])])])]),_._v(" "),l("li",[_._v("什么是restful api\n"),l("ul",[l("li",[_._v("4个method说明白\n"),l("ul",[l("li",[_._v("post、get、patch(修改)、delete")])])]),_._v(" "),l("li",[_._v("设计理念\n"),l("ul",[l("li",[_._v("传统的API设计：把每个url当作一个功能")]),_._v(" "),l("li",[_._v("Restful API设计：把每个url当作一个唯一的资源(标识)")])])])])])])]),_._v(" "),l("li",[_._v("面试题\n"),l("ul",[l("li",[_._v("描述一下http的缓存机制\n"),l("ul",[l("li",[_._v("缓存包括强制缓存和协商缓存")]),_._v(" "),l("li",[_._v("强制缓存主要需要理解Cache-Control")]),_._v(" "),l("li",[_._v("协商缓存主要理解Last-Modified和Etag，以及304的概念")]),_._v(" "),l("li",[_._v("具体见上文 => 缓存总结(图文)")])])])])])]),_._v(" "),l("hr"),_._v(" "),l("br"),_._v(" "),l("p",[l("font",{attrs:{color:"#666",size:"5"}},[_._v("~End~")])],1)],1)}),[],!1,null,null,null);v.default=t.exports}}]);