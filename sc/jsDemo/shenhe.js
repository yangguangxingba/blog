// tip工具集
const utilTip = {
    // 没有数据的时候显示提示信息
    nodDta(odom) {
        // console.log("没有数据的时候显示提示信息", odom);

        odom.find('span').css({
            "display": "block"
        });
    },

    // 有数据的时候隐藏提示信息
    haveData(odom) {
        // console.log("有数据的时候隐藏提示信息");

        odom.find('span').css({
            "display": "none"
        });
    },

    /**
     * 直接加载
     */
    // 切换选项卡
    navTab(odom) {
        $('.sh_nav li').click(function () {
            $(this).addClass('active').siblings().removeClass('active');
            $('.sh_cont .sh_list').eq($(this).index()).show().siblings().hide();
        });
    },

    // 默认点击某个标签
    clickTabDefault() {
        $('#dcl').click();
    },

    // 响应页面小事件
    pagTools() {
        // 点击弹框取消
        $('#mark_cle').click(() => {
            // console.log("点击弹框取消");

            $('.mask_wrap').fadeOut();
        });
    },

    // 显示提示框
    showTag(str) {
        if(str) {
            $('#tagbox span').html(str);
        }

        $('#tagbox').fadeIn();

        setTimeout(()=> {
            $('#tagbox').fadeOut();
        }, 1000);
    },

    // 点击通过和拒绝
    clksq(e) {
       // console.log("点击通过和拒绝");

       getData.spr();  // 审批人

       /*console.log("审核按钮dom结构", e.currentTarget)
       console.log("审核编号", e.currentTarget.dataset.ckid);*/

       // 清除表单数据
       $('#approverS').val(1);  // 审批人
       $('#remark').val("");  // 审批意见

        // 显示弹出框
       $('.mask_wrap').fadeIn();
    },

   // 点击确定审核按钮
    chkqdBtn(qdmed) {
        $('#mark_qd').click(() => {
            // console.log("点击弹框确定");

            $('.mask_wrap').fadeOut();

            // 审核按钮接口
            qdmed();
        });
    },
}

// 获取请求数据
const getParmData = {
    /**
     * 数据
     */
    // 请求通过参数
    params: {
        approverId: sessionStorage.getItem("approverId"),  // 审批人id
        auditStatus: 0,  // 审批状态 （0：通过 -1：拒绝）
    },

    // 待审核参数
    dshParm: {
        auditStatus: sessionStorage.getItem("approverCode")  // 审批代码
    },

    // 待审批按钮参数
    dspBtnParm: {
        // applyId: "",  // 审批id
        // approverId: "",  // 报销id
        auditStatus: "",  // 审批状态 （0：通过 -1：拒绝）
        remark: ""  // 审批意见
    },
}

// 渲染dom
const setDom = {
    // 审批dom渲染
    shenpiDom(spList, condition) {
        // dom操作
        // 出差申请 dom渲染
        let chsq = () => {
            // console.log("出差申请");
            return `
                <li><span>出差事由：</span>${spList.remark}</li>
                <li><span>开始时间：</span>${spList.applyStartTime}</li>
                <li><span>结束时间：</span>${spList.applyEndTime}</li>
           `;
        };

        // 加班申请 dom渲染
        let jbsq = () => {
            // console.log("加班申请");
            return `
                <li><span>加班事由：</span>${spList.askCause}</li>
                <li><span>开始时间：</span>${spList.applyStartTime}</li>
                <li><span>结束时间：</span>${spList.applyEndTime}</li>
           `;
        };

        // 调休申请 dom渲染
        let txsq = () => {
            // console.log("调休申请");
            return `
                <li><span>开始时间：</span>${spList.applyStartTime}</li>
                <li><span>结束时间：</span>${spList.applyEndTime}</li>
           `;
        };

        // 请假申请 dom渲染
        let qjsq = () => {
            // console.log("请假申请");

            let askTypeList = ['事假', '病假', '产假', '婚嫁', '丧假', '哺乳假', '例假', '年假'];
            // console.log(askTypeList[spList.askType]);

            return `
                <li><span>请假类型：</span>${askTypeList[spList.askType]}</li>
                <li><span>开始时间：</span>${spList.applyStartTime}</li>
                <li><span>结束时间：</span>${spList.applyEndTime}</li>
           `;
        };

        // 用车申请 dom渲染
        let ycsq = () => {
            // console.log("用车申请");
            return `
                <li><span>用车事由：</span>${spList.remark}</li>
                <li><span>开始时间：</span>${spList.applyStartTime}</li>
                <li><span>结束时间：</span>${spList.applyEndTime}</li>
           `;
        };

        // 印章申请 dom渲染
        let yzsq = () => {
            // console.log("印章申请");
            return `
                <li><span>印章名称：</span>${spList.applyName}</li>
                <li><span>印章用途：</span>${spList.applyPurpose}</li>
           `;
        };

        // 成果报告 dom渲染
        let cgbg = () => {
            // console.log("成果报告");
            return `
                <li><span>委托单位：</span>${spList.corporateFiduciary}</li>
                <li><span>生产单位：</span>${spList.productionUnit}</li>
           `;
        };

        // 工作日志 dom渲染
        /*let gzrz = () => {
            console.log("工作日志");
            return `
                <li><span>委托单位：</span>申请表</li>
                <li><span>生产单位：</span>浙江xx有限公司</li>
           `;
        };*/

        // 根据applyType判断类型分别渲染dom
        switch (condition) {
            case 0:
                // 出差申请
                spList.applyTypeTxt = "出差申请";
                return chsq();  // 出差申请 dom渲染
                break;
            case 1:
                // 加班申请;
                spList.applyTypeTxt = "加班申请";
                return jbsq();  // 加班申请 dom渲染
                break;
            case 2:
                // 调休申请;
                spList.applyTypeTxt = "调休申请";
                return txsq();  // 调休申请 dom渲染
                break;
            case 3:
                // 请假申请;
                spList.applyTypeTxt = "请假申请";
                return qjsq();  // 请假申请 dom渲染
                break;
            case 4:
                // 用车申请;
                spList.applyTypeTxt = "用车申请";
                return ycsq();  // 用车申请 dom渲染
                break;
            case 5:
                // 印章申请;
                spList.applyTypeTxt = "印章申请";
                return yzsq();  // 印章申请 dom渲染
                break;
            case 6:
                // 成果报告;
                spList.applyTypeTxt = "成果报告";
                return cgbg();  // 成果报告 dom渲染
                break;
                /*case 7:
                    // 工作日志;
                    spList.applyTypeTxt = "工作日志";
                    gzrz();  // 工作日志 dom渲染
                    break;*/
            dafault:
                spList.applyTypeTxt = " ";
        }
    },

    // 报销dom渲染
    baoxiaoDom(bxList, condition) {
        // dom操作
        // 费用报销 dom渲染
        let fybx = () => {
            // console.log("费用报销");
            return `
                <li><span>项目名称：</span>${bxList.projectName}</li>
                <li><span>合计金额：</span>${bxList.amountOfReimbursement}</li>
           `;
        };

        // 差旅费报销 dom渲染
        let clfbx = () => {
            // console.log("差旅费报销");
            return `
                <li><span>项目名称：</span>${bxList.projectName}</li>
                <li><span>报销金额：</span>${bxList.amountOfReimbursement}</li>
           `;
        };

        // 大额资金使用申请
        let dezjsy = () => {
            // console.log("大额资金使用申请");
            return `
                <li><span>申请部门：</span>${bxList.deptName}</li>
                <li><span>申请事由：</span>${bxList.reimbursementInfo}</li>
                <li><span>申请金额：</span>${bxList.amountOfReimbursement}</li>
            `;
        }

        // 借款申请
        let jksq = () => {
            // console.log("借款申请");
            return `
                <li><span>项目名称：</span>${bxList.projectName}</li>
                <li><span>借款事由：</span>${bxList.reimbursementInfo}</li>
                <li><span>借款金额：</span>${bxList.amountOfReimbursement}</li>
                <li><span>收款方：</span>${bxList.payee}</li>
                <li><span>开户银行：</span>${bxList.depositBank}</li>
                <li><span>银行账号：</span>${bxList.bankAccount}</li>
            `;
        }

        // 开票申请
        let kpsq = () => {
            // console.log("开票申请");
            return `
                <li><span>单位名称：</span>${bxList.companyName}</li>
                <li><span>地址：</span>${bxList.companyAddress}</li>
                <li><span>电话：</span>${bxList.companyPhone}</li>
                <li><span>纳税识别号：</span>${bxList.taxIdentificationNumber}</li>
                <li><span>开户行：</span>${bxList.depositBank}</li>
                <li><span>银行账号：</span>${bxList.bankAccount}</li>
                <li><span>项目名称：</span>${bxList.projectName}</li>
                <li><span>工作量：</span>${bxList.projectNameWorkload}</li>
                <li><span>发票性质：</span>${bxList.invoice}</li>
                <li><span>备注：</span>${bxList.remarks}</li>
                <li><span>寄送信息：</span>${bxList.sendInfo}</li>
            `;
        }

        // 资金用款申请
        let zjyksq = () => {
            // console.log("资金用款申请");
            return `
                <li><span>项目名称：</span>${bxList.projectName}</li>
                <li><span>合计金额：</span>${bxList.amountOfReimbursement}</li>
            `;
        }

        // 根据expenseType判断类型分别渲染dom
        switch (condition) {
            case 0:
                // 费用报销
                bxList.expenseTypeTxt = "费用报销";
                return fybx();  // 费用报销 dom渲染
                break;
            case 1:
                // 差旅费报销
                bxList.expenseTypeTxt = "差旅费报销";
                return clfbx();  // 差旅费报销 dom渲染
                break;
            case 2:
                // 大额资金使用申请
                bxList.expenseTypeTxt = "大额资金使用申请";
                return dezjsy();  // 大额资金使用申请 dom渲染
                break;
            case 3:
                // 借款申请
                bxList.expenseTypeTxt = "借款申请";
                return jksq();  // 借款申请 dom渲染
                break;
            case 4:
                // 资金用款申请
                bxList.expenseTypeTxt = "资金用款申请";
                return zjyksq();  // 资金用款申请 dom渲染
                break;
            case 5:
                // 开票申请
                bxList.expenseTypeTxt = "开票申请";
                return kpsq();  // 开票申请 dom渲染
                break;
            dafault:
                bxList.expenseTypeTxt = " ";
        }
    },
}

// ajax相关方法封装
const ajaxMedEnca = {
    // 封装ajax方法
    ajaxMed(pam, url, suc, odom) {
        // console.log("封装ajax方法", odom);
        if (odom) {
            utilTip.nodDta(odom);  // 没有数据的时候显示提示信息
        }

        $.ajax({
            type: "POST",//方法类型
            dataType: "json",//预期服务器返回的数据类型
            data: pam,
            url: url,
            headers: {
                "X-Token": sessionStorage.getItem("token")//此处放置请求到的用户token
            },
            success: res => {
                  // console.log("请求数据", res);

                 if(res.data) {
                    // 判断第一个数组中是否为数组(只有一个数组)
                      if(!$.isArray(res.data[0])) {
                         // console.log("请求数据，只有一个数组", res.data);

                         if(res.data.length !== 0) {
                            if (odom) {
                                utilTip.haveData(odom);  // 有数据的时候隐藏提示信息
                            }

                            suc(res);
                         }
                      }

                     // 判断第一个数组中是否为数组(有多个数组)
                     if($.isArray(res.data[0])) {
                        // console.log("请求数据，有多个数组", res.data);

                        // 如果说数组中有一个数组有值，则进行渲染
                        if(res.data[0].length !== 0 || res.data[1].length !== 0) {
                            if (odom) {
                                utilTip.haveData(odom);  // 有数据的时候隐藏提示信息
                            }

                            suc(res);
                        }
                     }
                 } else {
                    suc(res);
                 }
            },
            error: err => {
                // console.log("获取数据信息异常！", err);

                alert("获取数据信息异常, 请重新登陆!!!");
                window.location.href = "../web/login.html";
            }
        });
    },

    // 请求已完成状态的记录
    ajaxMedReady(params, sDom) {
        // console.log("请求已完成状态的记录", params);

        ajaxMedEnca.ajaxMed(params, URL + "/api/record/list", suc = (res) => {
            // console.log("调用通过时数据", res.data);

            let str = "",  // 公共dom
                detStr = "",  // 不同类别dom
                timStr = "",   // 申请姓名
                personName = "";  // 申请人名称

            let shList = res.data;  // 获取接口数据

            // 遍历dom
            for (let item in shList) {
                // console.log(shList[item]);

                /**
                 * 首先判断是否有approvalManage数组或expenseManage数组
                 * approvalManage 申请表  根据applyType判断
                 *【0：出差申请，1：加班申请，2：调休，3：请假,4：用车，5：印章，6：成果报告，7：工作日志】
                 * expenseManage 报销表  根据expenseType判断
                 *【0：费用报销，1：差旅费报销，2：大额资金使用申请，3：借款申请，4：资金用款申请，5：开票申请】
                 */
                // console.log(shList[item].approvalManage);
                // console.log(shList[item].expenseManage);

                /**
                 * 根据逻辑判断筛选渲染dom
                 */
                // 如果存在申请表数组
                if (shList[item].approvalManage) {
                    // console.log("申请表数组", shList[item].approvalManage);

                    // 审批dom渲染
                    detStr = setDom.shenpiDom(shList[item].approvalManage, shList[item].approvalManage.applyType);

                    // 申请时间
                    timStr = shList[item].approvalManage.applyTime;

                    // 申请类型
                    typeTxt = shList[item].approvalManage.applyTypeTxt;

                    // 申请人名称(如果存在user字段)
                    if (shList[item].approvalManage.user) {
                        personName = shList[item].approvalManage.user.personName;
                    } else {
                        personName = "null";
                    }

                    // console.log("申请", shList[item].approvalManage.user);
                }

                // 如果存在报销表数组
                if (shList[item].expenseManage) {
                    // console.log("报销表数组", shList[item].expenseManage);

                    // 报销dom渲染
                    detStr = setDom.baoxiaoDom(shList[item].expenseManage, shList[item].expenseManage.expenseType);

                    // 提交时间
                    timStr = shList[item].expenseManage.applyTime;

                    // 报销类型
                    typeTxt = shList[item].expenseManage.expenseTypeTxt;

                    // 报销人名称
                    if (shList[item].expenseManage.user) {
                        personName = shList[item].expenseManage.user.personName;
                    } else {
                        personName = "null";
                    }
                }

                // 已通过or已拒绝
                let getStatusText = () => {
                    switch (params.auditStatus) {
                        case 0:
                            return "已通过";
                            break;
                        case -1:
                            return "已拒绝";
                            break;
                        default:
                            return "";
                    }
                }

                // 最终渲染dom列表
                str += `
                    <div class="main_div">
                         <a class="top" href="">
                            <div class="title f-cb">
                                <img src="../imgs/log.png">
                                <span>${personName}提交${typeTxt}</span>
                            </div>
                            <div class="detail">
                                ${detStr}
                            </div>
                        </a>
                        <div class="bot f-cb">
                            <div class="bot_l">
                                <span>${timStr} 提交</span>
                            </div>
                            <div class="bot_r stau">
                                <span>${getStatusText()}</span>
                            </div>
                        </div>
                    </div>
                `
            }

            sDom.html(str);  // 渲染dom
        }, sDom);
    },
}

// 请求数据集合
const getData = {
    // 待处理请求数据
    ajaxMedDcl() {
        // console.log("点击待处理请求数据", odom);

        // 请求接口数据
        let getDclData = () => {
            ajaxMedEnca.ajaxMed(getParmData.dshParm, URL + "/api/audit/list", suc = res => {
                // console.log("调用待处理时数据", res.data[0]);

                let sqStr = "",  // 用于存储申请dom
                    bxStr = "",  // 用于存储报销dom
                    finStr = ""; // 最终的存储

                let str = "",  // 公共dom
                    detStr = "",  // 不同类别dom
                    btnStr = "",  // 不同按钮
                    timStr = "",   // 申请姓名
                    personName = "";  // 申请人名称

                let comStr = (personName, typeTxt, detStr, timStr) => {
                    // console.log(personName);

                    return `
                       <div class="main_div">
                             <a class="top" href="">
                                <div class="title f-cb">
                                    <img src="../imgs/log.png">
                                    <span>${personName}提交${typeTxt}</span>
                                </div>
                                <div class="detail">
                                    ${detStr}
                                </div>
                            </a>
                            <div class="bot f-cb">
                                <div class="bot_l">
                                    <span>${timStr} 提交</span>
                                </div>
                                <div class="bot_r">
                                    ${btnStr}
                                </div>
                            </div>
                        </div>
                   `;
                }

                // 申请审批待处理
                let sqspdcl = res.data[0];
                for (let item in sqspdcl) {
                    // console.log(sqspdcl[item]);

                    // 审批dom渲染
                    detStr = setDom.shenpiDom(sqspdcl[item], sqspdcl[item].applyType);

                    // 申请时间
                    timStr = sqspdcl[item].applyTime;

                    // 申请类型
                    typeTxt = sqspdcl[item].applyTypeTxt;

                    // 渲染按钮
                    btnStr = `
                        <ul>
                            <li>
                                <button class="ac_btn sp_jj" data-ckid=${sqspdcl[item].applyId}>拒绝</button>
                            </li>
                            <li>
                                <button class="ac_btn sp_ty" data-ckid=${sqspdcl[item].applyId}>同意</button>
                            </li>
                        </ul>
                    `;

                    // 申请人名称(如果存在user字段)
                    if (sqspdcl[item].user) {
                        personName = sqspdcl[item].user.personName;
                    } else {
                        personName = "null";
                    }
                    // console.log("shenqing", sqspdcl[item].user);

                    // 渲染审批待处理列表
                    sqStr += comStr(personName, typeTxt, detStr, timStr);
                }

                // 报销审批待处理
                let bxspdcl = res.data[1];
                for (let item in bxspdcl) {
                    // console.log(bxspdcl[item]);

                    // 报销dom渲染
                    detStr = setDom.baoxiaoDom(bxspdcl[item], bxspdcl[item].expenseType);

                    // 提交时间
                    timStr = bxspdcl[item].applyTime;

                    // 报销类型
                    typeTxt = bxspdcl[item].expenseTypeTxt;

                    // 渲染按钮
                    btnStr = `
                        <ul>
                            <li>
                                <button class="ac_btn bx_jj" data-ckid=${bxspdcl[item].expenseId}>拒绝</button>
                            </li>
                            <li>
                                <button class="ac_btn bx_ty" data-ckid=${bxspdcl[item].expenseId}>同意</button>
                            </li>
                        </ul>
                    `;

                    // 报销人名称
                    if (bxspdcl[item].user) {
                        personName = bxspdcl[item].user.personName;
                    } else {
                        personName = "null";
                    }
                    // console.log("baoxiao", bxspdcl[item].user);

                    bxStr += comStr(personName, typeTxt, detStr, timStr);
                };

                finStr = sqStr + bxStr;  // 整合两个dom

                $('#dcl_wrap').html(finStr);  // 渲染

                // ssBtn();  // 审核按钮事件
            }, $('#dcl_wrap'));
        }

        if (getParmData.dshParm.auditStatus === "-2") {
            alert("无权限，请使用管理员进行登陆");
            window.location.href = "../web/login.html";
        } else {
            getDclData();  // 请求接口数据
        }
    },

    // 审核按钮接口
    chkBtn() {
        // console.log("审核按钮接口");

        // 审批人意见
        getParmData.dspBtnParm.remark = $("#remark").val();
        getParmData.dspBtnParm.approverId = Number($('#approverS').val());
    },

    // 审核按钮接口-审批
    ajaxChkBtnSp() {
        // console.log("审核按钮接口-审批");

        // 审核按钮接口
        this.chkBtn();

        // 拒绝或者同意需要的参数
        // console.log(getParmData.dspBtnParm);

        ajaxMedEnca.ajaxMed(getParmData.dspBtnParm, URL + "/api/approval/updateApproval", suc = res => {
            let { code } = res,
                { msg } = res;

            if(code === 200) {
                // console.log(msg);

                // 显示提示框
                utilTip.showTag(msg);
            }

            // 默认点击某个标签
            utilTip.clickTabDefault();
        });
    },

    // 审核按钮接口-报销
    ajaxChkBtnBx() {
        // console.log("审核按钮接口-报销");

        // 审核按钮接口
        this.chkBtn();

        // 拒绝或者同意需要的参数
        // console.log(getParmData.dspBtnParm);

        ajaxMedEnca.ajaxMed(getParmData.dspBtnParm, URL + "/api/expense/updateState", suc = res => {
            // console.log(res);

            let { code } = res,
                { msg } = res;

            if(code === 200) {
                // console.log(msg);

                // 显示提示框
                utilTip.showTag(msg);
            }

            // 默认点击某个标签
            utilTip.clickTabDefault();
        });
    },

    // 已通过请求数据
    ajaxMedYtg() {
        // console.log("点击已通过请求数据");

        // 调用通过时数据
        getParmData.params.auditStatus = 0;  // 设置通过时的状态

        // 请求已完成状态的记录
        ajaxMedEnca.ajaxMedReady(getParmData.params, $('#ytg_wrap'));
    },

    // 已拒绝请求数据
    ajaxMedYjj() {
        // console.log("已拒绝请求数据");

        // 调用拒绝时数据
        getParmData.params.auditStatus = -1;  // 设置拒绝时的状态

        // 请求已完成状态的记录
        ajaxMedEnca.ajaxMedReady(getParmData.params, $('#yjj_wrap'));
    },

    // 审批人
    spr() {
        ajaxMedEnca.ajaxMed("", URL + "/api/approver/list", suc = res => {
            // console.log(JSON.stringify(res))

            if (res.code == 200) {
                $("#approverS").empty();    //清空
                for (var i = 0; i < res.data.length; i++) {
                    $("#approverS").append($("<option/>").text(res.data[i].approverName).attr("value", res.data[i].approverId)); //动态添加标签
                }
            };
        });
    }
}

// 审核按钮
const ssBtn = () => {
    // 审批-拒绝
    $('body').on('click', '.sp_jj', e=> {
        // console.log("审批-拒绝");

        utilTip.clksq(e);  // 点击通过和拒绝

        // 设置请求接口参数
        getParmData.dspBtnParm.auditStatus = -1;  // 审批状态
        getParmData.dspBtnParm.applyId = e.currentTarget.dataset.ckid;  // 审批id
        // console.log(getParmData.dspBtnParm);

        // 点击确定审核按钮
        utilTip.chkqdBtn(() => {
            // 审核按钮接口-审批
            getData.ajaxChkBtnSp()
        });
    });

    // 审批-同意
    $('body').on('click', '.sp_ty', e=> {
        // console.log("审批-同意");

        utilTip.clksq(e);  // 点击通过和拒绝

        // 设置请求接口参数
        getParmData.dspBtnParm.auditStatus = 0;  // 审批状态
        getParmData.dspBtnParm.applyId = e.currentTarget.dataset.ckid;  // 审批id
        // console.log(getParmData.dspBtnParm);

        // 点击确定审核按钮
        utilTip.chkqdBtn(() => {
            // 审核按钮接口-审批
            getData.ajaxChkBtnSp()
        });
    });

    // 报销-拒绝
    $('body').on('click', '.bx_jj', e=> {
        // console.log("报销-拒绝");

        utilTip.clksq(e);  // 点击通过和拒绝

        // 设置请求接口参数
        getParmData.dspBtnParm.reportState = -1;  // 审批状态
        getParmData.dspBtnParm.expenseId = e.currentTarget.dataset.ckid;  // 报销id
        // console.log(getParmData.dspBtnParm);

        // 点击确定审核按钮
        utilTip.chkqdBtn(() => {
            // 审核按钮接口-报销
            getData.ajaxChkBtnBx()
        });
    });

    // 报销-同意
    $('body').on('click', '.bx_ty', e=> {
        // console.log("报销-同意");

        utilTip.clksq(e);  // 点击通过和拒绝

        // 设置请求接口参数
        getParmData.dspBtnParm.reportState = 0;  // 审批状态
        getParmData.dspBtnParm.expenseId = e.currentTarget.dataset.ckid;  // 报销id
        // console.log(getParmData.dspBtnParm);

        // 点击确定审核按钮
        utilTip.chkqdBtn(() => {
            // 审核按钮接口-报销
            getData.ajaxChkBtnBx()
        });
    });
}

// 点击待处理
const clickDcl = () => {
    $('#dcl').click(() => {
        // console.log("点击待处理");

        // 调用待处理的数据
        getData.ajaxMedDcl();
    });
}

// 点击已通过
const clickYtg = () => {
    $('#ytg').click(() => {
        // console.log("点击已通过");

        // 调用通过后的数据
        getData.ajaxMedYtg();
    });
}

// 点击已拒绝
const clickYjj = () => {
    $('#yjj').click(() => {
        // console.log("点击已拒绝");

        // 调用拒绝后的数据
        getData.ajaxMedYjj($(yjj_wrap));
    });
}

// 页面加载时执行
$(() => {
    // tip工具集
    utilTip.navTab();  // 切换选项卡

    // 加载数据
    clickDcl();  // 点击待处理
    clickYtg();  // 点击已通过
    clickYjj();  // 点击已拒绝

    ssBtn();  // 审核按钮

    // tip工具集
    utilTip.clickTabDefault();  // 默认点击某个标签

    // 响应页面小事件
    utilTip.pagTools();
});