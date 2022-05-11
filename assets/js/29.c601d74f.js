(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{704:function(_,l,s){"use strict";s.r(l);var t=s(25),e=Object(t.a)({},(function(){var _=this,l=_.$createElement,s=_._self._c||l;return s("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[s("h1",{attrs:{id:"mysql升级5-7-sql语句报错解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql升级5-7-sql语句报错解决"}},[_._v("#")]),_._v(" MySQL升级5.7,sql语句报错解决")]),_._v(" "),s("ClientOnly",[s("Valine")],1),_._v(" "),s("blockquote",[s("p",[_._v("MySQL升级5.7之后经常会出现这种错误：[Err] 1055 - Expression #1 of ORDER BY clause is not in GROUP BY clause and contains nonaggregated column 'information_schema.PROFILING.SEQ',虽然不影响SQL执行，但感觉不好")])]),_._v(" "),s("ol",[s("li",[_._v("查询一下配置看看具体的情况")])]),_._v(" "),s("ul",[s("li",[s("code",[_._v("select @@sql_mode;")])]),_._v(" "),s("li",[_._v("ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION\n"),s("ul",[s("li",[_._v("其中ONLY_FULL_GROUP_BY就是造成这个错误的罪魁祸首")]),_._v(" "),s("li",[_._v("对于group by聚合操作,如果在select中的列没有在group by中出现,那么这个SQL是不合法的,因为列不在group by从句中,所以设置了sql_mode=only_full_group_by的数据库,在使用group by时就会报错")])])])]),_._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[_._v("找到MySQL的配置文件")])]),_._v(" "),s("ul",[s("li",[_._v("Windows系统配置文件为安装MySQL目录下的my.ini文件，linux系统是/etc/my.cnf文件，查询sql_mode字段，我并没有在配置文件中找到这个关键字,所以我手动添加进去\n"),s("ul",[s("li",[s("code",[_._v("sql_mode = STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION")]),_._v(" "),s("ul",[s("li",[_._v("一定要添加在[mysqld]配置内，这样添加完后重启mysql才会生效")])])])])])]),_._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[_._v("重启mysql")])]),_._v(" "),s("ul",[s("li",[s("code",[_._v("service mysqld restart;")])])]),_._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[_._v("刷新页面报错信息消失成功解决，再次连接上数据库查看sql_mode配置")])]),_._v(" "),s("ul",[s("li",[s("code",[_._v("select @@sql_mode;")]),_._v(" "),s("ul",[s("li",[_._v("STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION")])])])])],1)}),[],!1,null,null,null);l.default=e.exports}}]);