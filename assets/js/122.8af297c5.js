(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{801:function(a,t,s){"use strict";s.r(t);var e=s(25),i=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"git相关笔记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git相关笔记"}},[a._v("#")]),a._v(" git相关笔记")]),a._v(" "),s("ClientOnly",[s("Valine")],1),a._v(" "),s("h2",{attrs:{id:"_1-上传下载代码常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-上传下载代码常用命令"}},[a._v("#")]),a._v(" 1. 上传下载代码常用命令")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("git clone url")]),a._v(" 复制的地址")]),a._v(" "),s("li",[s("code",[a._v("git pull")]),a._v(" 拉取别人的代码")]),a._v(" "),s("li",[s("code",[a._v("git status")]),a._v(" 查看仓库状态")]),a._v(" "),s("li",[s("code",[a._v("git add .")]),a._v(" 除了gitignore里面的东西，其余添加到缓存区")]),a._v(" "),s("li",[s("code",[a._v("git commit -m 'deploy'")]),a._v(" 将被添加到缓存区的东西提交到缓存区  加文字说明")]),a._v(" "),s("li",[s("code",[a._v("git push")]),a._v(" 将缓存区的的文件提交到仓库")])]),a._v(" "),s("h2",{attrs:{id:"_2-其他常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-其他常用命令"}},[a._v("#")]),a._v(" 2. 其他常用命令")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("git config --global credential.helper store")]),a._v(" git不输入密码")]),a._v(" "),s("li",[a._v("卸载重装git credentials manager\n"),s("ul",[s("li",[s("code",[a._v("git credential-manager uninstall")]),a._v("  卸载")]),a._v(" "),s("li",[s("code",[a._v("git credential-manager install")]),a._v("  重装")])])])]),a._v(" "),s("h2",{attrs:{id:"_3-查询是否使用了代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-查询是否使用了代理"}},[a._v("#")]),a._v(" 3. 查询是否使用了代理")]),a._v(" "),s("ul",[s("li",[a._v("git config --global http.proxy")])]),a._v(" "),s("h2",{attrs:{id:"_4-取消代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-取消代理"}},[a._v("#")]),a._v(" 4. 取消代理")]),a._v(" "),s("ul",[s("li",[a._v("git config --global --unset http.proxy")])]),a._v(" "),s("h2",{attrs:{id:"_5-避免重复输入密码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-避免重复输入密码"}},[a._v("#")]),a._v(" 5. 避免重复输入密码")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("git config --global credential.helper store")])]),a._v(" "),s("li",[s("code",[a._v("cat ~/.git-credentials")]),a._v(" => 查看账号")])]),a._v(" "),s("h2",{attrs:{id:"_6-git分支相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-git分支相关"}},[a._v("#")]),a._v(" 6. git分支相关")]),a._v(" "),s("h3",{attrs:{id:"_6-1-分支命令简述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-分支命令简述"}},[a._v("#")]),a._v(" 6.1. 分支命令简述")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("git branch branchName")]),a._v("(在本地创建一个命名为branchName的分支)")]),a._v(" "),s("li",[s("code",[a._v("git branch")]),a._v(" 查看当前自己所在的分支\n"),s("ul",[s("li",[a._v("查看本地分支")])])]),a._v(" "),s("li",[s("code",[a._v("git branch -a")]),a._v(" 查看服务器的所有分支以及自己当前所在的分支\n"),s("ul",[s("li",[a._v("查看远程分支 (其中，remotes开头的代表是远程分支)")])])]),a._v(" "),s("li",[s("code",[a._v("git push origin branchName")]),a._v("(把命名为branchName的本地分支推送到服务器)")]),a._v(" "),s("li",[s("code",[a._v("git checkout --track origin/branchName")]),a._v(" (切换为远程服务器上的命名为branchName的远程分支)")]),a._v(" "),s("li",[a._v("如果你的搭档要把他本地的分支给关联到服务器上命名为branchName的远程分支，请执行以下操作\n"),s("ul",[s("li",[s("code",[a._v("git branch --set-upstream localBranchName origin/branchName")]),a._v("  （为本地分支添加一个对应的远程分支 与之相对应）->这行命令用来关联本地的分支与服务器上的分支")])])]),a._v(" "),s("li",[a._v("完成以上操作之后，就可以进行提交代码了，但是在提交代码之前，你要确定你当前所在的分支")]),a._v(" "),s("li",[s("code",[a._v("git push origin branchName")]),a._v("（提交代码到远程服务器上命名为branchName的分支上）")]),a._v(" "),s("li",[s("code",[a._v("git pull origin branchName")]),a._v(" （从远程分支上拉取代码）")])]),a._v(" "),s("h3",{attrs:{id:"_6-2-创建并使用一个新的分支流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-创建并使用一个新的分支流程"}},[a._v("#")]),a._v(" 6.2. 创建并使用一个新的分支流程")]),a._v(" "),s("ol",[s("li",[a._v("创建一个分支")])]),a._v(" "),s("ul",[s("li",[s("code",[a._v("git branch 分支名")])])]),a._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[a._v("切换到分支\n"),s("ul",[s("li",[s("code",[a._v("git checkout 分支名")])])])]),a._v(" "),s("li",[a._v("提交代码到远程服务器的分支上")])]),a._v(" "),s("ul",[s("li",[s("code",[a._v("git push origin 分支名")])])]),a._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[a._v("拉取远程分支内容")])]),a._v(" "),s("ul",[s("li",[s("code",[a._v("git pull origin 分支名")])])]),a._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[a._v("关联本地的分支与服务器上的分支")])]),a._v(" "),s("ul",[s("li",[s("code",[a._v("git branch --set-upstream localBranchName origin/branchName")])])]),a._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[a._v("这时候就可以直接pull和push代码了")])]),a._v(" "),s("ul",[s("li",[s("code",[a._v("git pull")])])]),a._v(" "),s("h3",{attrs:{id:"_6-3-分支相关复杂指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-分支相关复杂指令"}},[a._v("#")]),a._v(" 6.3. 分支相关复杂指令")]),a._v(" "),s("ul",[s("li",[a._v("本地分支关联远程分支\n"),s("ul",[s("li",[a._v("在本地test分支上修改了代码后，需要提交到远程，这时就需要关联远程的某个远程分支")])]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * 本地提交\n * git gui \n * push到远程\n * git push origin test:test\n * 第一次无法pull，只能push\n * 如果不写远程分支名称，则默认和本地分支同名，这时命令为：$ git push origin test\n * 从远程pull\n * git pull origin test:test  \n */")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("ul",[s("li",[a._v("从远程分支上下代码\n"),s("ul",[s("li",[s("code",[a._v("git clone -b 分支名 http://xxx/xxx.git")])])])]),a._v(" "),s("li",[a._v("clone远程仓库到指定目录\n"),s("ul",[s("li",[s("code",[a._v('git clone xxx.git "指定目录"')])])])])])])]),a._v(" "),s("h2",{attrs:{id:"_8-删除分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-删除分支"}},[a._v("#")]),a._v(" 8. 删除分支")]),a._v(" "),s("ol",[s("li",[a._v("删除本地分支")])]),a._v(" "),s("ul",[s("li",[s("code",[a._v("git branch --delete 分支名")]),a._v(" "),s("ul",[s("li",[a._v("等同于"),s("code",[a._v("git branch -d 分支名")])]),a._v(" "),s("li",[a._v("该分支必须完全和它的上游分支merge完成，如果没有上游分支,必须要和HEAD完全merge")])])]),a._v(" "),s("li",[s("code",[a._v("git branch -D dev")]),a._v(" "),s("ul",[s("li",[a._v("-D是--delete --force的缩写,这样写可以在不检查merge状态的情况下删除分支")])])])]),a._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[a._v("删除远程分支")])]),a._v(" "),s("ul",[s("li",[s("code",[a._v("git push origin --delete 分支名")])])]),a._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[a._v("删除追踪分支")])]),a._v(" "),s("ul",[s("li",[s("code",[a._v("git branch --delete --remotes <remote>/<branch>")]),a._v(" "),s("ul",[s("li",[a._v("该操作并没有真正删除远程分支,而是删除的本地分支和远程分支的关联关系")])])])]),a._v(" "),s("h2",{attrs:{id:"_9-使用git-config-global设置用户名和邮件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-使用git-config-global设置用户名和邮件"}},[a._v("#")]),a._v(" 9. 使用git config --global设置用户名和邮件")]),a._v(" "),s("ul",[s("li",[a._v("安装好git后，在命令行或终端中使用下面的命令可以设置git自己的名字和电子邮件")]),a._v(" "),s("li",[a._v("这是因为Git是分布式版本控制系统，所以，每个机器都必须自报家门：你的名字和Email地址")])]),a._v(" "),s("div",{staticClass:"language-git line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[a._v("git config --global user.name "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"zmx2321"')]),a._v("\ngit config --global user.email "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"zmx2321@163.com"')]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("ul",[s("li",[a._v("注意git config命令的–global参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址")]),a._v(" "),s("li",[a._v("配置好之后可以查看\n"),s("ul",[s("li",[s("code",[a._v("git config -l")])])])]),a._v(" "),s("li",[a._v("查看全局用户名密码")])]),a._v(" "),s("div",{staticClass:"language-git line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[a._v("git config --global user.name\ngit config --global user.email\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("ul",[s("li",[a._v("为单一的仓库配置用户名和邮箱")])]),a._v(" "),s("div",{staticClass:"language-git line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[a._v("git config user.name "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"username"')]),a._v("\ngit config user.email "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"email"')]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("ul",[s("li",[a._v("查看单一仓库的配置")])]),a._v(" "),s("div",{staticClass:"language-git line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[a._v("git config user.name\ngit config user.email \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h2",{attrs:{id:"_9-git-下拉警告"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-git-下拉警告"}},[a._v("#")]),a._v(" 9. git 下拉警告")]),a._v(" "),s("ul",[s("li",[a._v("当使用git版本为2.27.0以上时，使用git pull命令出现以下的警告："),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('warning: Pulling without specifying how to reconcile divergent branches is\ndiscouraged. You can squelch this message by running one of the following\ncommands sometime before your next pull:\n\n  git config pull.rebase false  # merge (the default strategy)\n  git config pull.rebase true   # rebase\n  git config pull.ff only       # fast-forward only\n\nYou can replace "git config" with "git config --global" to set a default\npreference for all repositories. You can also pass --rebase, --no-rebase,\nor --ff-only on the command line to override the configured default per\ninvocation.\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])])]),a._v(" "),s("li",[a._v("翻译如下"),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('warning: 不建议在没有为偏离分支指定合并策略时执行pull操作。 \n您可以在执行下一次pull操作之前执行下面一条命令来抑制本消息：\n\ngit config pull.rebase false  # 合并（默认缺省策略）\ngit config pull.rebase true   # 变基\ngit config pull.ff only       # 仅快进\n\n您可以将 "git config" 替换为 "git config --global" 以便为所有仓库设置\n缺省的配置项。您也可以在每次执行 pull 命令时添加 --rebase、--no-rebase，\n或者 --ff-only 参数覆盖缺省设置。\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])])]),a._v(" "),s("li",[a._v("解决方法\n"),s("ul",[s("li",[a._v("执行 "),s("code",[a._v("git config pull.rebase false")])])])])]),a._v(" "),s("h2",{attrs:{id:"_10-push文件过大"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-push文件过大"}},[a._v("#")]),a._v(" 10. push文件过大")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("git config --global http.postBuffer 157286400")]),a._v(" "),s("ul",[s("li",[a._v("当推送大量数据时（初始推送大型存储库，使用非常大的文件进行更改）可能需要 http.postBuffer 在 git 客户端 （而不是服务器）上设置更高的 设置 ；将 Git 缓冲区大小增加到 repo 的最大单个文件大小")])])])])],1)}),[],!1,null,null,null);t.default=i.exports}}]);