// 获取表单数据
const getFormData = ()=> {
    // 获取表单字段值
    return formData = [{
        company: $(" #company").val(),  // 单位名称
        address: $(" #address").val(),  // 地址
        phone: $(" #phone").val(),  // 电话
        paytaxes: $(" #paytaxes").val(),  // 纳税识别号
        openAccount: $(" #openAccount").val(),  // 开户行
        bankAccount: $(" #bankAccount").val(),  // 银行账号
        proName: $(" #proName").val(),  // 项目名称
        workload: $(" #workload").val(),  // 工作量
        money: $(" #money").val(),  // 金额
        invoice: $('input:radio[name="invoice"]:checked').val(), // 发票性质
        remarks: $(" #remarks").val(),  // 备注
        mailInfo: $(" #mailInfo").val(),  // 寄件信息
        // fileName: $("#fUpload")[0].files.length,  // 上传文件名称
        expenseType: 5,
        userId: Number(sessionStorage.getItem("userId")),
        approverId: Number($('#approverS').val()),
        voucher: localStorage.getItem("msg")
    }]
}

// 点击提交表单
const submitForm = ()=> {
    // 点击按钮事件
    $('#submitForm').click(()=> {
        let formData = getFormData();  // 获取表单数据

         console.log(formData);

        $.ajax({
            //几个参数需要注意一下
            type: "POST",//方法类型
            dataType: "json",//预期服务器返回的数据类型
            url: URL+"/api/expense/addExpenseList",
            data: JSON.stringify(formData),
            headers: {
                "X-Token":sessionStorage.getItem("token"),  //此处放置请求到的用户token
                "Content-Type": "application/json"
            },
            success: function (res) {
                // console.log(res);

                let { code } = res;

                if(code === 200) {
                    window.location.href="../web/expends.html";
                }

            },
            error : function() {
                alert("异常！");
            }
        });
    });
}

// 上传图片
const uploadImg = ()=> {
    let formData = new FormData();

    $("#fUpload").change(()=> {
        let file = $("#fUpload")[0].files[0];

        formData.append('multipartFile', file);

        // console.log(formData.get("multipartFile"));  // 获取formData对象

        $.ajax({
           url: URL + "/api/upload/file",
           type: "POST",
           data:formData,
           processData: false,  // 如果想发送不想转换的的信息的时候需要手动将其设置为false
           contentType:false,
           cache:false,
           headers: {
                "X-Token":sessionStorage.getItem("token")//此处放置请求到的用户token
           },
           success: res=> {
               let { msg } = res;

               localStorage.clear();
               localStorage.setItem('msg', msg);

               // console.log(localStorage.getItem("msg"));
           },
           error: ()=> {
               console.log("error");
           }
        });
    });
}

// 审批人
const spr = ()=> {
    $.ajax({
        //几个参数需要注意一下
        type: "POST",//方法类型
        dataType: "json",//预期服务器返回的数据类型
        url: URL+"/api/approver/list",
        headers: {
            "X-Token":sessionStorage.getItem("token")//此处放置请求到的用户token
        },
        success: function (res) {
             // console.log(res)

            if (res.code == 200) {
                $("#approverS").empty();    //清空
                for(var i=0;i<res.data.length;i++){
                    $("#approverS").append($("<option/>").text(res.data[i].approverName).attr("value",res.data[i].approverId)); //动态添加标签
                }
            };
        },
        error : function() {
            alert("异常！");
        }
    });
}

// 页面加载时执行
$(()=> {
    spr();  // 审批人
    uploadImg();  // 上传图片
    submitForm();  // 点击提交表单
});