// 工具方法
const utilTip = {
    // 定义定时器
    timmer: "",

    // 获取时间-有秒
    getTimeMed(flag) {
        // 获取当前时间
        let date = new Date();

        // 获取小时
        let hour = date.getHours();

        // 获取分钟
        let minute = date.getMinutes();

        // 获取秒
        let second = date.getSeconds();

        // 自动补零
        hour = hour < 10 ? ('0' + hour) : hour;
        minute = (minute< 10) ? '0' + minute: minute = minute;
        second = (second< 10) ? '0' + second: second= second;

        if(flag) {
            return `${hour}:${minute}:${second}`;
        } else {
            return `${hour}:${minute}`;
        }
    },

    // 获取年月
    getDates() {
        // 获取当前时间
        let date = new Date();

        // 获取当前年
        let year = date.getFullYear();

        // 获取当前月
        let month = date.getMonth() + 1;

        // 获取当前日
        let day = date.getDate();

        // 自动补零
        month = (month< 10) ? '0' + month : month= month;
        day = (day< 10) ? '0' + day : day = day;

        return `${year}-${month}-${day}`;
    },

    getHour() {
        // 获取当前时间
        let date = new Date();

        // 获取小时
        return date.getHours();
    },

    // 获取经纬度信息
    getPosition(getpos) {
        // console.log("获取经纬度信息");

        let geolocation = new BMap.Geolocation();    
        let gc = new BMap.Geocoder();     
  
        // 定位结果对象会传递给r变量
        geolocation.getCurrentPosition(function(r) {     
            // 通过Geolocation类的getStatus()可以判断是否成功定位。
            if(this.getStatus() == BMAP_STATUS_SUCCESS) {    
                let pt = r.point; 

                let poslat = {
                    lng: pt.lng,
                    lat: pt.lat
                };

                // 获取位置信息
                gc.getLocation(pt, function(rs){
                    let addComp = rs.addressComponents; 
    
                    let strAdd = addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber;

                    getpos(strAdd, poslat);  // 获取坐标信息

                    /* if(strAdd) {
                        debugger
                        getpos(strAdd);  // 获取坐标信息
                    } else if(poslat) {
                        debugger
                        getpos(poslat);  // 获取坐标信息
                    } else {
                        debugger
                        getpos(strAdd, poslat);  // 获取坐标信息
                    } */
                });  
            }  
        }, {enableHighAccuracy: true})  
    },

    // 判断经纬度距离
    geoDistance(lat1, lng1, lat2, lng2) {
        //经纬度转换成三角函数中度分表形式。
        function rad(d) {
            return d * Math.PI / 180.0;
        }

        let radLat1 = rad(lat1);
        let radLat2 = rad(lat2);
        let a = radLat1 - radLat2;
        let b = rad(lng1) - rad(lng2);
        let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
        s = s * 6378.137;// EARTH_RADIUS;
        s = Math.round(s * 10000) / 10000; // 输出为公里
        return (s*1000).toFixed(2);
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

    // 封装ajax方法
    ajaxMed(pam, url, suc) {
        // console.log("封装ajax方法", odom);
        $.ajax({
            type: "POST",//方法类型
            dataType: "json",//预期服务器返回的数据类型
            data: pam,
            url: url,
            headers: {
                "X-Token":sessionStorage.getItem("token"),  //此处放置请求到的用户token
                "Content-Type": "application/json"
            },
            success: res => {
                // console.log("请求数据", res);

                suc(res);
            },
            error: err => {
                // console.log("获取数据信息异常！", err);

                alert("获取数据信息异常, 请重新登陆!!!");
            }
        });
    },
}

let setData = {
    // 上班打卡数据
    sbdkParams: {
        "clockAddressIn": "",  // 上班打卡地点
        "clockStatusIn": 0,  // 上班 打卡状态  0正常
        "clockIn": utilTip.getDates() + " " + utilTip.getTimeMed(true), // 上班打卡时间
        "deptId": Number(sessionStorage.getItem("deptId")),  // 部门id
        "userId": Number(sessionStorage.getItem("userId")),  // 用户id
    },

    // 下班打卡数据
    xbdkParams: {
        "clockAddressOut": "",  // 下班打卡地点
        "clockStatusOut": 0,  // 下班 打卡状态  0正常
        "clockOut": utilTip.getDates() + " " + utilTip.getTimeMed(true), // 下班打卡时间
        "recordId": "",
    }
}

// 判断方法
const judgMed = {
    // 判断是否迟到 true 迟到
    isChidao(cdJudges) {
        // 获取地理信息数据
        getData.getGeoInfo(getdata => {
            // console.log("判断是否迟到", getdata.clockInTime);

            let seTime = Number(getdata.clockInTime.split(":")[0].split(" ")[1].split("")[1]);  // 设定上班时间(小时)
            // let seTime = 15;  // 当前时间

            let curTime = Number(utilTip.getHour());  // 当前时间

            // console.log(curTime > seTime);

            // 如果超过设定上班时间
            if(curTime > seTime || curTime === seTime) {
                // console.log("迟到");

                cdJudges(true);
            } else {
                // console.log("没迟到");

                cdJudges(false);
            }
        })
    },

    // 判断是否早退---判断是否已经超过下班时间  true 早退
    isZaoTui(ztJudges) {
        // 获取地理信息数据
        getData.getGeoInfo(getdata => {
            // console.log("判断是否早退", getdata.clockOutTime);

            let seTime = Number(getdata.clockOutTime.split(":")[0].split(" ")[1]);  // 设定上班时间(小时)
            // let seTime = 10;

            let curTime = Number(utilTip.getHour());  // 当前时间

            // 如果当前时间大于设定下班时间
            if(curTime > seTime || curTime === seTime) {
                ztJudges(false);
            } else {
                ztJudges(true);
            }
        })
    },

    // 判断是否在打卡区域  false 不在区域-不能打卡
    isArea(judges) {
        // 获取地理信息数据
        getData.getGeoInfo(getdata => {
            // console.log("获取地理信息数据", getdata);

            // 获取当前位置信息
            utilTip.getPosition(getpos = (strAdd, poslat)=> {
                // console.log("获取当前位置信息", strAdd, poslat);

                // 设定位置，当前位置
                let setPosition = {}, currentPosition = {};

                // 接口获取设定打卡位置
                setPosition = {
                    lng: getdata.punchAddress.split(",")[0],
                    lat: getdata.punchAddress.split(",")[1]
                };
                // 萧山商会大厦A座
                /* setPosition = {
                    lng: 120.252812,
                    lat: 30.189189
                }; */
                // 杭州南站
                /* setPosition = {
                    lng: 120.300366,
                    lat: 30.177844
                }; */
                // 萧山商会大厦
                /* setPosition = {
                    lng: 120.252623,
                    lat: 30.189365
                }; */

                // 获取当前位置信息
                // currentPosition = poslat;  // 当前位置信息
                // 萧山商会大厦
                currentPosition = {
                    lng: 120.252623,
                    lat: 30.189365
                };

                /* console.log("设定打卡位置", setPosition);
                console.log("当前位置信息", currentPosition); */

                // 距离
                let s = utilTip.geoDistance(setPosition.lat, setPosition.lng, currentPosition.lat, currentPosition.lng);
                // console.log("距离" + s);
                // alert("距离" + s);

                // 距离大于150m，不在打卡区域 false
                if(s > 150) {
                    // console.log("不在打卡区域");
                    judges(false);
                } else {
                    // console.log("在打卡区域");
                    judges(true);
                }
            });
        });  
    }
}

// 设置时间
const setTime = ()=> {
    $('#dkTime').html(utilTip.getTimeMed(true));

    utilTip.timmer = setInterval(() => {
        $('#dkTime').html(utilTip.getTimeMed(true));
    }, 1000)
}

// dom操作
const setDom = {
    // 打卡相关
    daka() {
        localStorage.clear();

        utilTip.getPosition(getpos = (strAdd, poslat)=> {
            // console.log(strAdd, poslat);

            localStorage.setItem("cxdwtxt", strAdd);

            $('#cxdwtxt').html(strAdd);
        });

        // 重新定位
        $('#cxdw').click(()=> {
            // console.log("重新定位");

            judgMed.isArea(judges = flag=> {
                // console.log("判断是否在打卡区域", flag);
    
                // 不在打卡区域
                if(!flag) {
                    $('#cxdwtxt').html("不在打卡区域-" + localStorage.getItem("cxdwtxt"));

                } else {
                    $('#cxdwtxt').html("您已进入打卡区域-" + localStorage.getItem("cxdwtxt"));
                }
            });
        });

        // 判断是否在打卡区域
        judgMed.isArea(judges = flag=> {
            // console.log("判断是否在打卡区域", flag);

            // 不在打卡区域
            if(!flag) {
                // console.log("不在打卡区域");
                $('.kbtn_wrap').addClass('bndk');  // 按钮置灰

                // 判断是否迟到
                judgMed.isChidao(cdJudges = cdFlag=> {
                    if(cdFlag) {
                        $('#dkstu').html('迟到打卡');
                    }
                });
            } else {  // 如果在打卡区域内，判断是否迟到
                // 判断是否迟到
                judgMed.isChidao(cdJudges = cdFlag=> {
                    // console.log(cdFlag);

                    // 如果迟到
                    if(cdFlag) {
                        // console.log("打卡异常，迟到");
                        $('.kbtn_wrap').addClass('ycdk cddk');  // 添加迟到按钮
                        $('#dkstu').html('迟到打卡');
                    }
                });
            }
        });
        
        // 点击打卡
        $('#bigBtn').click(()=> {
            // 判断是否不能打卡
            if($('.kbtn_wrap').hasClass('bndk')) {
                // console.log("未在打卡区域");
                alert("未在打卡区域，不能打卡");

                return;
            }

            // 判断是否打卡异常  迟到
            if($('.kbtn_wrap').hasClass('cddk')) {
                // console.log("迟到打卡");
                alert("迟到打卡");

                $('#stautxtsb').html("迟到");
                $('#stautxtsb').addClass('dktxtyc');
            }

            // 判断是否下班
            if(!$('#bigBtn').hasClass('xiaban')) {
                // console.log("上班打卡");

                // 上班打卡dom操作
                $('.kbtn_wrap').removeClass('ycdk cddk');  // 清除打卡异常
                $('.daka_stau.sbdk').show();  // 显示上班打卡状态
                $('.kq_main_bot').addClass('kqdkfinl');  // 添加打卡完成样式
                utilTip.getPosition(getpos = (strAdd, poslat)=> {
                    $('#sbdkwz').html(strAdd);
                    
                    // 如果迟到
                    judgMed.isChidao(cdJudges = cdFlag=> {
                        // console.log(cdFlag);

                        setData.sbdkParams.clockAddressIn = strAdd;  // 上班打卡地点
                        setData.sbdkParams.clockStatusIn = cdFlag === true ? 1 : 0;  // 上班打卡状态(0正常)

                        getData.sbdk(setData.sbdkParams);
                    });
                });

                $('#bigBtn').addClass('xiaban');  // 按钮样式切换到下班
                $('#dkstu').html('下班打卡');
                $('#sbdksj').html(`打卡时间：${utilTip.getTimeMed(false)}`);  // 设置上班打卡时间

                // getData.sbdk();  // 上班打卡
                // console.log(judgMed.isZaoTui());

                judgMed.isArea(judges = flag=> {
                    // console.log("判断是否在打卡区域", flag);
        
                    if(!flag) {
                        // console.log("不在打卡区域");
                        $('.kbtn_wrap').addClass('bndk');
            
                        /* if(judgMed.isZaoTui()) {
                            $('#dkstu').html('早退打卡');
                        } */
                        judgMed.isZaoTui(ztJudges = ztFlag=> {
                            // console.log("早退", ztFlag);

                            if(ztFlag) {
                                $('#dkstu').html('早退打卡');
                            }
                        });
                    } else {
                        // 如果早退
                        judgMed.isZaoTui(ztJudges = ztFlag=> {
                            // console.log("早退", ztFlag);

                            if(ztFlag) {
                                $('.kbtn_wrap').addClass('ycdk ztdk');
                                $('#dkstu').html('早退打卡');
                            }
                        });
                    }
                });
            } else {
                // 下班打卡
                // console.log("下班打卡");

                utilTip.getPosition(getpos = (strAdd, poslat)=> {
                    $('#xbdkwz').html(strAdd);

                    // 如果早退
                    judgMed.isZaoTui(ztJudges = ztFlag=> {
                        // console.log("早退", ztFlag);

                        if(ztFlag) {
                            setData.xbdkParams.clockAddressOut = strAdd;  // 下班打卡地点
                            setData.xbdkParams.clockStatusOut = ztFlag === true ? 1 : 0;  // 下班打卡状态(0正常)

                            getData.xbdk(setData.xbdkParams);
                        }
                    });
                });

                let xbdk = ()=> {
                    // 下班打卡dom操作
                    $('.daka_stau.xbdk').show();  // 显示上班打卡状态
                    $('.kbtn_wrap').hide();  // 隐藏打卡按钮
                    $('.daka_stau').show();  // 显示打卡状态
                    
                    $('#xbdksj').html(`打卡时间：${utilTip.getTimeMed(false)}`);  // 设置下班打卡时间

                    $('.time_box').css({  // 改变时间盒子
                        'width': '90%'
                    });

                    // 清除定时器
                    window.clearInterval(utilTip.timmer);
                }

                if($('.kbtn_wrap').hasClass('ztdk')) {
                    if (window.confirm("早退打卡吗?")) {
                        xbdk();

                        $('#stautxtxb').html("早退");
                        $('#stautxtxb').addClass('dktxtyc');
                    } else {
                        return;
                    }
                } else {
                    xbdk();
                }
            }
        });
    },
}

// 获取数据
const getData = {
    // 获取地理信息数据
    getGeoInfo(getdata) {
        // console.log("获取地理信息数据");

        utilTip.ajaxMed("", URL + "/api/punch/settingsInfo", suc = res=> {
            // console.log(res);

            getdata(res.data);
        });
    },

    // 上班打卡
    sbdk(parm) {
        // console.log("上班打卡接口参数", parm);

        utilTip.ajaxMed(JSON.stringify(parm), URL + "/api/punch/addPunchCard", suc = res=> {
            let { code } = res;
            let { msg } = res;
            let { data } = res;

            if(code === 200) {
                utilTip.showTag(msg);

                setData.xbdkParams.recordId = data;

                // console.log(setData.xbdkParams.recordId);
            }
        });
    },

    // 下班打卡
    xbdk(parm) {
        // console.log("下班打卡接口参数", parm);

        utilTip.ajaxMed(JSON.stringify(parm), URL + "/api/punch/addClockOut", suc = res=> {
            let { code } = res;
            let { msg } = res;
            
            if(code === 200) {
                utilTip.showTag(msg);
            }
        });
    }
}

// 页面加载时执行
$(()=> {
    // 工具方法
    setTime();  // 设置时间

    // dom操作
    setDom.daka();  // 打卡相关

    // getData.getGeoInfo();  // 获取地理信息数据

    // $('#bigBtn').click();
});