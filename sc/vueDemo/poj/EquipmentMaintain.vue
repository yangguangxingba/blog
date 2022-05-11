<template>
    <section class="equipment_maintain">
        <div class="left_home">
            <div class='home_community'>
                <div class='community_title'>
                    <div class="span1">
                        <span>设备管理</span>
                    </div>
                </div>

                <!-- 设备管理选项卡 -->
                <div class='community_body'>
                    <div class="body_block_wrap" v-for='(val,index) in equipmentData' :key='index'>
                        <div class='body_block' @click='lightblock ==index ? lightblock=null : lightblock=index, equipSelect(val)' :class="{body_block1:lightblock == index}">
                            <span class='block_font'>{{ val.device_name }}</span>
                            <div class='block_bottom'>
                                <div class='block_width'>
                                    <img :src=" require('../../assets/images/equipmentmaintain/icon' + (index+1) + '.png') " alt="">
                                </div>
                                <div class='block_width1'>
                                    <div class='radius_n'>
                                        <div class="block_radius"></div>
                                        <div class="block_name">在线：{{ val.isonline }}</div>
                                    </div>
                                    <div class='radius_n1'>
                                        <div class="block_radius"></div>
                                        <div class="block_name">离线：{{ val.notonline }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 设备列表树 -->
            <div class='home_provinces'>
                <div class='provinces_title'>
                    <span>{{ treeTitle }}设备列表</span>
                </div>
                <div class='provinces_body'>
                    <div class='provinces_tree'>
                        <!-- <el-tree :data="treeDataList.monitorTreeData" accordion @node-click="handleNodeClick" ref="provincesTree"> -->
                        <el-tree :data="treeDatas" accordion @node-click="handleNodeClick" ref="provincesTree">
                            <span class="custom-tree-node" slot-scope="{ node, data }">
                                    <span class="icon_lt">
                                        <!-- 一级菜单 - 文件图标 -->
                                        <img v-if="node.level == 1 && data.type!='消防栓'" src="../../assets/images/equipmentmaintain/wenjian.png" alt="">

                                        <!-- 消防栓图标 0:在线 1:离线 -->
                                        <img v-if="node.level == 1 && data.type=='消防栓' && data.status==0" src="../../assets/images/equipmentmaintain/xfs_on.png" alt="">
                                        <img v-if="node.level == 1 && data.type=='消防栓' && data.status==1" src="../../assets/images/equipmentmaintain/xfs_off.png" alt="">

                                        <!-- 二级菜单 - 摄像头图标 - 类型为监控设备 -->  
                                        <img v-if="node.level == 2 && data.type=='监控设备' && data.status==0" src="../../assets/images/equipmentmaintain/sxt_on.png" alt="">
                                        <img v-if="node.level == 2 && data.type=='监控设备' && data.status==1" src="../../assets/images/equipmentmaintain/sxt_off.png" alt="">

                                        <!-- 二级菜单 - 摄像头图标 - 类型为监控设备 -->  
                                        <img v-if="node.level == 2 && data.type=='电动车进入电梯监控' && data.status==0" src="../../assets/images/equipmentmaintain/sxt_on.png" alt="">
                                        <img v-if="node.level == 2 && data.type=='电动车进入电梯监控' && data.status==1" src="../../assets/images/equipmentmaintain/sxt_off.png" alt="">
                                        
                                        <!-- 二级菜单 - 防攀爬 -->  
                                        <img v-if="node.level == 2 && data.type=='防攀爬' && data.status==0" src="../../assets/images/equipmentmaintain/fpp_on.png" alt="">
                                        <img v-if="node.level == 2 && data.type=='防攀爬' && data.status==1" src="../../assets/images/equipmentmaintain/fpp_off.png" alt="">

                                        <!-- 二级菜单 - 窨井盖 -->  
                                        <img v-if="node.level == 2 && data.type=='窨井盖' && data.status==0" src="../../assets/images/equipmentmaintain/yjg_on.png" alt="">
                                        <img v-if="node.level == 2 && data.type=='窨井盖' && data.status==1" src="../../assets/images/equipmentmaintain/yjg_off.png" alt="">
                                        
                                        <!-- 二级菜单 - 河道检测 -->  
                                        <img v-if="node.level == 2 && data.type=='河道检测' && data.status==0" src="../../assets/images/equipmentmaintain/hdjc_on.png" alt="">
                                        <img v-if="node.level == 2 && data.type=='河道检测' && data.status==1" src="../../assets/images/equipmentmaintain/hdjc_off.png" alt="">
                                    </span>  
                                <span>{{ node.label }}</span>
                                <span class="tree_eye">
                                    <!-- 
                                        1. 点击眼睛切换睁眼闭眼
                                        2. 一级菜单和二级菜单执行不同事件
                                        3. 默认一级菜单和二级菜单显示闭眼
                                        4. 点击一级菜单，当前二级菜单眼睛睁开
                                     -->
                                    <el-button v-if='eyeStatus != data.id+10000'
                                        type="text"
                                        size="mini"
                                        @click="() => eyedis(data)">
                                        <img src="../../assets/images/equipmentmaintain/biyan.png" alt="" style='position: relative;left: 20px;'>
                                    </el-button>
                                    <el-button v-if='eyeStatus == data.id+10000'
                                        type="text"
                                        size="mini"
                                        @click="() => eyeshow(node, data)">
                                        <img src="../../assets/images/equipmentmaintain/yanjing.png" alt="" style='position: relative;left: 20px;'>
                                    </el-button>
                                </span>
                            </span>
                        </el-tree>
                    </div>
                </div>
            </div>
        </div>

        <!-- 报警列表 -->
        <div class="right_home" v-show='alarmShow'>
            <div class='home_police' >
                <Alarm ref='event'/>
            </div>
        </div> 

        <!-- 消防栓设备信息 -->
        <div class='firehydrants' v-show='firehydrantsShow'>
            <div class='firehydrants_title'>
                <div class='title_move'>
                    <span>消防栓设备信息</span>
                </div>
                <img src="../../assets/images/housing/close1.png" alt="" class='close_' @click='firehydrantsShow = false,lightblock=null'>
            </div>
            <div class='firehydrants_body'>
                <div class='body_top'>
                    <div class="video1"> 
                        <video id="myvideo_xfs" class="video-js vjs-default-skin" controls preload="auto" muted style="width:100%; height:100%;overflow: hidden;">
                            <source type="application/x-mpegURL">
                        </video>
                    </div> 
                </div>
                <div class='body_bottom'>
                    <div class='bottom_left'>
                        <div class='font_c'>设备信息</div>
                        <div class='font_ dev_no' :title="'设备编号：'+ equipmentDetail.fireDetailData.device_no">设备编号：{{ equipmentDetail.fireDetailData.device_no }}</div>
                        <div class='font_'>安装位置：{{ equipmentDetail.fireDetailData.building_no }}</div>
                        <div class='font_'>设备状态：{{ equipmentDetail.fireDetailData.status==0 ? "正常": "异常" }}</div>
                    </div>
                    <div class='bottom_right'>
                        <div class='font_c'>消防水压情况</div>
                        <div class='font_'>当前水压：{{ equipmentDetail.fireDetailData.supply_value }}</div>
                        <div class='font_'>当前电压：{{ equipmentDetail.fireDetailData.power }}</div>
                        <div class='font_'>通讯状态：{{ equipmentDetail.fireDetailData.tongxin }}</div>
                        <div class='font_'>使用情况：{{ equipmentDetail.fireDetailData.use }}</div>
                        <div class='font_'>倾斜状况：{{ equipmentDetail.fireDetailData.vertical }}</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 电动车进入电梯设备信息 -->
        <div class='general_panel' v-show='eBikeShow'>
            <div class='general_panel_title'>
                <div class='title_move'>
                    <span>{{ treeTitle }}</span>
                </div>
                <img src="../../assets/images/housing/close1.png" alt="" class='close_' @click='eBikeShow = false ,lightblock=null'>
            </div>
            <div class='general_panel_body'>
                <div class="body_left">
                    <div class="video1"> 
                        <video id="myvideo_ddc" class="video-js vjs-default-skin" controls preload="auto" muted style="width:100%; height:100%;overflow: hidden;">
                            <source type="application/x-mpegURL">
                        </video>
                    </div> 
                </div>
                <div class="body_right">
                    <div class='right_info1'>
                        <div class='info_span1'>设备编号：<div class='info_span2'>{{ equipmentDetail.eBikeData.device_no }}</div></div> 
                        <div class='info_span1'>设备位置：<div class='info_span2'>{{ equipmentDetail.eBikeData.position }}</div></div>

                        <div class='info_span1' v-if="equipmentDetail.eBikeData.status==0 ">设备状态：<div class='info_span2'>正常</div> </div>
                        <div class='info_span1' v-else-if="equipmentDetail.eBikeData.status==1 ">设备状态：<div class='info_span2'>异常</div> </div>
                        <div class='info_span1' v-else></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 防攀爬面板 -->
        <div class='general_panel' v-show='climbingShow'>
            <div class='general_panel_title'>
                <div class='title_move'>
                    <span>{{ treeTitle }}-{{ equipmentDetail.climbingDetailData.label }}</span>
                </div>
                <img src="../../assets/images/housing/close1.png" alt="" class='close_' @click='climbingShow = false ,lightblock=null'>
            </div>
            <div class='general_panel_body'>
                <div class="body_left">
                    <div class="video1"> 
                        <video id="myvideo_fpp" class="video-js vjs-default-skin" controls preload="auto" muted style="width:100%; height:100%;overflow: hidden;">
                            <source type="application/x-mpegURL">
                        </video>
                    </div> 
                </div>
                <div class="body_right">
                    <div class='right_info1'>
                        <div class='info_span1'>设备编号：<div class='info_span2'>{{ equipmentDetail.climbingDetailData.device_no }}</div></div> 
                        <div class='info_span1'>设备位置：<div class='info_span2'>{{ equipmentDetail.climbingDetailData.building_no }}</div></div>

                        <div class='info_span1' v-if="equipmentDetail.climbingDetailData.status==0 ">设备状态：<div class='info_span2'>正常</div> </div>
                        <div class='info_span1' v-else-if="equipmentDetail.climbingDetailData.status==1 ">设备状态：<div class='info_span2'>异常</div> </div>
                        <div class='info_span1' v-else></div>
                        <div class='info_span1' v-if="isClimbingData">探测器方向：<div class='info_span2'>左防区</div></div> 
                    </div>
                </div>
            </div>
        </div>

        <!-- 设备信息框--与报警面板相关 -->
        <div class='equipment_info' v-show='equipmentInfoShow'>
            <div class='title'>
                <img src="../../assets/images/housing/close1.png" alt="" class='close_' @click='equipmentInfoShow=false'>
            </div>
            <div class='body'>
                <div>设备编号：{{ equipmentDetail.monitoringDetailData.monitorNo }}</div>
                <div>安装位置：{{ equipmentDetail.monitoringDetailData.desc }}</div>
                <div>设备状态：{{ equipmentDetail.monitoringDetailData.status==0?"正常":"异常" }}</div>
            </div>
        </div>

        <!-- 设备监控 monitoringShow-->
        <div class="right_home1" v-show='monitoringShow'>
           <div class='home_block'>
                <div class='block_title'>
                    <div class="span1">
                        <span>视频监控信息</span>
                    </div>
                </div>
                <!-- 视频面板 -->
                <div class='video_wrap'>
                    <div class="video_cont"> 
                        <video id="myvideo_monitor" class="video-js vjs-default-skin" controls preload="auto" muted style="width:100%; height:100%;overflow: hidden;">
                            <source type="application/x-mpegURL">
                        </video>
                    </div> 
                </div>

                <!-- 信息面板 在车辆抓拍时显示 -->
                <div class="monitor_info" v-if="equipmentDetail.monitoringDetailData.labelTitle == '车辆抓拍' ">
                    <div class='home_block'>
                        <div class='block_title'>
                            <div class="span1">
                                <span>实时识别</span>
                            </div>
                        </div>
                        <div class='block_body'>
                            <div class='body_block' v-for='(val,index) in monitoringPanelData.trackDetailData' :key='index'>
                                <div class='block_top'>
                                    <div class='top_img'>
                                        <img :src=" 'http://121.229.24.146:9090' + val.pic " alt="">
                                    </div>
                                </div>
                                <div class='block_bottom'>
                                    <div>姓名：{{ val.resident_name }}</div>
                                    <div>出行位置：{{ val.address }}<img src="../../assets/images/person/jiantou.png" alt=""></div>
                                    <div>时间：{{ val.time }}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class='home_block1'>
                        <div class='block_title'>
                            <div class="span1">
                                <span>历史识别</span>
                            </div>
                        </div>
                        <div class='block_body'>
                            <div class='body_'>
                                <div class='body_title_'>
                                    <span style="position: relative;top:8px;">时间选择:</span>
                                    <el-form
                                        :model="filterData"
                                        status-icon
                                        ref="filterRiderForm"
                                        label-width="100px"
                                        style="height:35px;position: relative;left: -30px;top:5px;"
                                        size="mini">
                                    <el-form-item prop="date" class="intxt">
                                        <el-date-picker
                                            v-model="filterData.timeArray"
                                            type="datetimerange"
                                            :picker-options="pickerOptions"
                                            :default-time="['00:00:00', '00:00:00']"
                                            range-separator="至"
                                            start-placeholder="开始日期"
                                            end-placeholder="结束日期"
                                            format="yyyy-MM-dd HH:mm:ss"
                                            value-format="yyyy-MM-dd HH:mm:ss"
                                            @change="getSTime"
                                            align="right">
                                        </el-date-picker>
                                    </el-form-item>
                                    </el-form>
                                    <div class='titles1' @click="getTrackList(equipmentDetail.monitoringDetailData)">查询</div>
                                    <div class='titles2' @click="getTrackList(equipmentDetail.monitoringDetailData)">清空</div>
                                </div>
                                <div class='body_body'>
                                    <div class='body_block' v-for='(val,index) in monitoringPanelData.trackDetailData' :key='index'>
                                        <div class='block_top'>
                                            <div class='top_img'>
                                                <img :src=" 'http://121.229.24.146:9090' + val.pic " alt="">
                                            </div>
                                        </div>
                                        <div class='block_bottom'>
                                            <div>姓名：{{ val.resident_name }}</div>
                                            <div>出行位置：{{ val.address }}<img src="../../assets/images/person/jiantou.png" alt=""></div>
                                            <div>时间：{{ val.time }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 信息面板 在人脸抓拍时显示 -->
                <div class="monitor_info" v-if="equipmentDetail.monitoringDetailData.labelTitle == '人脸抓拍' ">
                    <div class='home_block'>
                        <div class='block_title'>
                            <div class="span1">
                                <span>实时识别</span>
                            </div>
                        </div>
                        <div class='block_body'>
                            <div class='body_block' v-for='(val,index) in monitoringPanelData.faceDetailData' :key='index'>
                                <div class='block_top'>
                                    <div class='top_img'>
                                        <img :src="val.imageUrl" alt="">
                                    </div>
                                </div>
                                <div class='block_bottom'>
                                    <div>姓名：{{ val.name }}</div>
                                    <div>出行位置：{{ val.address }}<img src="../../assets/images/person/jiantou.png" alt=""></div>
                                    <div>时间：{{ val.time }}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class='home_block1'>
                        <div class='block_title'>
                            <div class="span1">
                                <span>历史识别</span>
                            </div>
                        </div>
                        <div class='block_body'>
                            <div class='body_'>
                                <div class='body_title_'>
                                    <span style="position: relative;top:8px;">时间选择:</span>
                                    <el-form
                                        :model="filterData"
                                        status-icon
                                        ref="filterRiderForm"
                                        label-width="100px"
                                        style="height:35px;position: relative;left: -30px;top:5px;"
                                        size="mini">
                                    <el-form-item prop="date" class="intxt">
                                        <el-date-picker
                                            v-model="filterData.timeArray"
                                            type="datetimerange"
                                            :picker-options="pickerOptions"
                                            :default-time="['00:00:00', '00:00:00']"
                                            range-separator="至"
                                            start-placeholder="开始日期"
                                            end-placeholder="结束日期"
                                            format="yyyy-MM-dd HH:mm:ss"
                                            value-format="yyyy-MM-dd HH:mm:ss"
                                            @change="getSTime"
                                            align="right">
                                        </el-date-picker>
                                    </el-form-item>
                                    </el-form>
                                    <div class='titles1' @click="getTrackList(equipmentDetail.monitoringDetailData)">查询</div>
                                    <div class='titles2' @click="getTrackList(equipmentDetail.monitoringDetailData)">清空</div>
                                </div>
                                <div class='body_body'>
                                    <div class='body_block' v-for='(val,index) in monitoringPanelData.faceDetailData' :key='index'>
                                        <div class='block_top'>
                                            <div class='top_img'>
                                                <img :src="val.imageUrl" alt="">
                                            </div>
                                        </div>
                                        <div class='block_bottom'>
                                            <div>姓名：{{ val.name }}</div>
                                            <div>出行位置：{{ val.address }}<img src="../../assets/images/person/jiantou.png" alt=""></div>
                                            <div>时间：{{ val.time }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Alarm from '@/components/tools/Alarm'

// api
import {
    getEquipments,  // 获取设备列表

    getFires,  // 获取消防栓树形列表
    geteBikes,  // 获取电动车进入电梯树形列表
    getClimbings,  // 获取防攀爬树形列表
    getMonitors,  // 获取监控树形列表

    getFireDetails,  // 获取消防栓详情
    geteBikeDetails,  // 获取电动车进入电梯详情
    getClimbingDetails,  // 获取防攀爬详情
    
    getTracks,  // 获取车辆通行记录详情列表
    getFaces,  // 获取人脸抓拍详情列表

    getMarkInfos,  // 获取标注点位信息
} from '@/api/EquipmentMaintain'

export default {
    name: "equipment_maintain",

    components: {
        Alarm
    },

    data() {
        return {
            pickerOptions: {
                shortcuts: [
                {
                    text: "最近一周",
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit("pick", [start, end]);
                    }
                },
                {
                    text: "最近一个月",
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                    picker.$emit("pick", [start, end]);
                    }
                },
                {
                    text: "最近三个月",
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                    picker.$emit("pick", [start, end]);
                    }
                }
                ]
            },
            // 筛选器
            filterData: {
                timeArray: "", // 起止时间集合
                startTime: "", // 开始时间
                endTime: "", // 结束时间
                mobile: "" // 手机号
            },

            /**
             * 业务相关工具数据
             */
            // 生成随机数
            randomNum: this.getRandomNumber(1, 100),

            eyeStatus:'',  // 眼睛状态

            isClimbingData: false,  // 判断是否显示防攀爬字段

            labelTitle: "",  // 获取父级标题

            /**
             * 点击一级眼睛所有标注出来，下面眼睛全睁开
             * 点击二级眼睛弹出面板框
             * 
             * 点击一级节点 无操作
             * 点击二级节点 视点和弹框标注
             */

            // 设备面板管理
            /**
             * 报警面板
             * 
             * 消防栓  --  消防栓面板
             * 窨井盖  --  没有面板
             * 河道检测  --  统一面板
             * 电动车进入电梯  -- 电动车进入电梯面板
             * 防攀爬  --  防攀爬面板（报警有探测器方向）
             * 监控设备  --  二级菜单（监控设备面板）
             */
            alarmShow: true,  // 报警
            firehydrantsShow: false,  // 消防栓
            eBikeShow: false,  // 电动车进入电梯面板
            climbingShow: false,  // 防攀爬面板
            equipmentInfoShow: false,  // 设备信息框
            monitoringShow: false,  // 设备监控

            /**
             * 设备详情数据
             */
            equipmentDetail: {
                fireDetailData: {},  // 消防栓详情
                eBikeData: {},  // 电动车进入电梯面板
                // climbingFatherData: {},  // 防攀爬父级数据  // 需求变更，不需要了
                climbingDetailData: {},  // 防攀爬详情
                monitoringDetailData: {},  // 报警设备详情数据
            },

            // 报警信息面板数据
            monitoringPanelData: {
                trackDetailData: [],  // 车辆信息
                faceDetailData: [],  // 人脸信息
            },
            
            // 设备选项卡
            lightblock: 0,  // 选项卡高亮

            // 防攀爬video开关
            climbingVideoJs: true,

            /**
             * api data
             */
            equipmentData: [],  // 设备列表

            markInfo: {},  // 存储点位信息，并传至首页进行模型方法

            /**
             * 树结构数据
             * 监控树形列表
             */
            // 树标题数据
            treeTitle: "监控设备",

            // 树形结构数据
            treeDatas: [],
        }
    },

    // 渲染虚拟dom时执行
    created() {
        this.$store.commit("changeTitle", "物联网智慧社区设备运维系统");  // 标题

        this.getEquipmentList();  // 获取设备列表
        // this.getFireList();  // 获取消防栓树形列表
        this.getMonitorList();  // 获取监控设备树形列表
    },

    methods: {
        /**
         * 工具方法
         */
        // 根据索引删除数组元素
        delArrEleByIndex(arr, indexsArr) {
            indexsArr.sort(function(a, b) { return b - a});
            
            indexsArr.forEach(function(indexsArr) { arr.splice(indexsArr, 1) })

            return arr;
        },

        // 生成随机数
        getRandomNumber (m,n){
            return Math.floor(Math.random()*(m - n) + n);
        },

        /**
         * 业务相关工具方法
         */
        // 关闭所有面板 
        allClose(){
            if(isDebug) {
                // console.log("关闭所有面板");
            }

            this.alarmShow = false;

            this.firehydrantsShow = false;
            this.eBikeShow = false;
            this.climbingShow = false;
            this.equipmentInfoShow = false;
            this.monitoringShow = false;
        },
        // 关闭除报警面板
        closeUnlessAlarm() {
            if(isDebug) {
                // console.log("关闭除报警面板");
            }

            this.alarmShow = true;

            this.firehydrantsShow = false;
            this.eBikeShow = false;
            this.climbingShow = false;
            this.equipmentInfoShow = false;
            this.monitoringShow = false;
        },
        // 只显示报警面板
        onlyAlarm(){
            if(isDebug) {
                // console.log("只显示报警面板");
            }

            this.closeUnlessAlarm();  // 关闭除报警面板
            this.alarmShow = true;  // 显示报警面板
        },
        // 注册videojs配置
        registerVideoJsConfig() {
            return {
                bigPlayButton: false,
                textTrackDisplay: false,
                posterImage: true,
                errorDisplay: false,
                controlBar: true,
            }
        },
        // 注册videoJs
        registerVideoJS() {
            // 注册消防栓videojs
            this.myvideo_xfs = this.$video('myvideo_xfs', this.registerVideoJsConfig(), function () {
                this.play();
            });

            // 注册电动车进入电梯videojs
            this.myvideo_ddc = this.$video('myvideo_ddc', this.registerVideoJsConfig(), function () {
                this.play();
            });
            
            // 注册防攀爬videojs
            this.myvideo_fpp = this.$video('myvideo_fpp', this.registerVideoJsConfig(), function () {
                this.play();
            });

            // 注册监控设备videojs
            this.myvideo_monitor = this.$video('myvideo_monitor', this.registerVideoJsConfig(), function () {
                this.play();
            });
        },
        // 接口中播放videojs
        playVideoJS(videoName, urlList) {
            if(isDebug) {
                console.log("接口中播放videojs", videoName, urlList);
            }

            // 如果视频地址不为空
            if(urlList != "") {
                videoName.reset(); //重置 video
                videoName.src([
                    {
                        type: 'application/x-mpegURL',
                        src: urlList
                    },
                ]);
                videoName.load();
                videoName.play();
            } else {
                this.$message.warning("未找到视频链接");
            }
        },
        // 销毁videojs
        disposeVideojs() {
            if(isDebug) {
                console.log("销毁videojs");
            }

            this.myvideo_xfs.dispose();  // 销毁消防栓videojs
            this.myvideo_ddc.dispose();  // 销毁电动车进入电梯videojs
            this.myvideo_fpp.dispose();  // 销毁防攀爬videojs
            this.myvideo_monitor.dispose();  // 销毁监控设备videojs
        },
        // 获取时间参数
        getSTime(val) {
            if (val) {
                // 为起止时间赋值
                this.filterData.startTime = val[0];
                this.filterData.endTime = val[1];

                if(isDebug) {
                    console.log("获取时间参数", val);
                }
            }

            return false;
        },
        // 车辆实时推送数据
        trackSocket(val) {
            if(isDebug) {
                console.log(val);
            }

            // 获取车辆通行记录列表
            this.getTrackList(this.equipmentDetail.monitoringDetailData);
        },
        // 人脸实时推送数据
        faceSocket(val) {
            if(isDebug) {
                console.log(val);
            }

            // 获取人脸抓拍列表
            this.getFaceList(this.equipmentDetail.monitoringDetailData);
        },

        /**
         * 获取设备列表
         * api getEquipmentList
         */
        // 获取设备列表
        getEquipmentList() {
            getEquipments().then(res=> {
                let equipmentList = res.data.data.data;  // 获取所有设备并赋值
                
                // 数组倒叙
                equipmentList.reverse();

                let tempArr = [];  // 需要被删除的数组索引

                for(let item in equipmentList) {
                    if(typeof equipmentList[item] !== 'function') {
                        // console.log(equipmentList[item]);
                    
                        // 判断设备名称是否为空，如果为空，则需要被删除
                        // if(equipmentList[item].device_name=="" || equipmentList[item].device_name == undefined) {
                        if(equipmentList[item].device_name=="") {
                            tempArr.push(item)
                        }
                    }
                }

                // 赋值设备数据
                this.equipmentData = this.delArrEleByIndex(equipmentList, tempArr);
                
                // console.log(this.equipmentData);
            }).catch({});
        },
        // 点击设备列表项
        equipSelect(val) {
            // console.log(val);

            this.treeDatas = [];  // 清空树列表

            switch(val.device_name) {
                case '消防栓':
                    this.getFireHydrantTree(val);
                    break;
                case '窨井盖':
                    this.getManholeCoverTree(val);
                    break;
                case '河道检测':
                    this.getRiverDetectionTree(val);
                    break;
                case '电动车进入电梯监控':
                    this.getElectricVehicleTree(val);
                    break;
                case '防攀爬':
                    this.getAntiClimbingTree(val);
                    break;
                case '监控设备':
                    this.getMonitoringTree(val);
                    break;
                default:
                    return;
            } 
        },
        // 点击消防栓触发事件
        getFireHydrantTree(val) {
            if(isDebug) {
                console.log("点击设备列表项", val.device_name);
            }

            this.treeTitle = val.device_name;  // 树结构标题

            this.onlyAlarm();  // 只显示报警面板

            this.getFireList();  // 获取监控树形列表
        },
        // 点击窨井盖触发事件
        getManholeCoverTree(val) {
            if(isDebug) {
                console.log("点击设备列表项", val.device_name);
            }
            
            this.treeTitle = val.device_name;  // 树结构标题

            this.onlyAlarm();  // 只显示报警面板

            this.treeDatas = [];  // 无请求接口，数据为空
        },
        // 点击河道检测触发事件
        getRiverDetectionTree(val) {
            if(isDebug) {
                console.log("点击设备列表项", val.device_name);
            }

            this.treeTitle = val.device_name;  // 树结构标题

            this.onlyAlarm();  // 只显示报警面板

            this.treeDatas = [];  // 无请求接口，数据为空
        },
        // 点击电动车进入电梯监控触发事件
        getElectricVehicleTree(val) {
            if(isDebug) {
                console.log("点击设备列表项", val.device_name);
            }
            this.treeTitle = val.device_name;  // 树结构标题

            this.onlyAlarm();  // 只显示报警面板

            this.geteBikeList();  // 获取电动车进入电梯树形列表
        },
        // 点击防攀爬触发事件
        getAntiClimbingTree(val) {
            if(isDebug) {
                console.log("点击设备列表项", val.device_name);
            }

            this.treeTitle = val.device_name;  // 树结构标题

            this.onlyAlarm();  // 只显示报警面板

            this.getClimbingList();  // 获取防攀爬树形列表
        },
        // 点击监控设备触发事件
        getMonitoringTree(val) {
            if(isDebug) {
                console.log("点击设备列表项", val.device_name);
            }

            this.treeTitle = val.device_name;  // 树结构标题

            this.onlyAlarm();  // 只显示报警面板

            this.getMonitorList();  // 获取监控树形列表
        },

        /**
         * 获取树形列表-api
         */
        // 获取树形列表-公共方法
        getTreeList(treeDataList) {
            let tempTreeArr = [];  // 存储树结构数据
            let tempTreeChildrenArr = [];  // 存储树结构数据子节点

            // 处理数据使其符合树形数据结构
            for(let item in treeDataList) {
                // 判断是否为函数，去除接口里错误的字段
                if (typeof treeDataList[item] !== 'function') {
                    // 监控设备
                    if (treeDataList[item].deviceMonitorData != undefined) {
                        // 子节点数据列表
                        tempTreeChildrenArr = treeDataList[item].deviceMonitorData;

                        // 父级定义数据
                        tempTreeArr.push({
                            level: 1,
                            type: this.treeTitle,  // 标题
                            id: this.getRandomNumber(1, 100),  // id控制眼睛
                            status: treeDataList[item].status == undefined ? "" : treeDataList[item].status,  // 设备状态-0正常 1-异常
                            label: treeDataList[item].value,  // 名称
                            children: []
                        });

                        // 子节点
                        for(let childItem in tempTreeChildrenArr) {
                            // 如果存在子节点
                            if(tempTreeChildrenArr.length != 0 || tempTreeChildrenArr.length != "") {
                                // 判断是否为函数，去除接口里错误的字段
                                if (typeof tempTreeChildrenArr[childItem] !== 'function') {
                                    tempTreeArr[item].children.push({
                                        level: 2,
                                        type: this.treeTitle,
                                        id: this.getRandomNumber(1, 100) + childItem,
                                        label: tempTreeChildrenArr[childItem].name,
                                        desc: tempTreeChildrenArr[childItem].desc,
                                        status: tempTreeChildrenArr[childItem].status,
                                        url: tempTreeChildrenArr[childItem].url,
                                        monitorNo: tempTreeChildrenArr[childItem].monitorNo,
                                    });
                                }
                            }
                        }
                    }

                    // 判断是否存在name字段
                    if(treeDataList[item].name != undefined) {  
                        // 如果名称(字符串)中有消防栓/电动车则执行
                        // 消防栓设备/电动车 - 无子列表
                        if(treeDataList[item].name.indexOf("消防栓")!=-1 || treeDataList[item].name.indexOf("电动车")!=-1){
                            // 父级定义数据
                            tempTreeArr.push({
                                level: 1,
                                type: this.treeTitle,  // 标题
                                id: this.getRandomNumber(1, 100),  // id控制眼睛
                                device_no: treeDataList[item].device_no,  // 设备编号
                                status: treeDataList[item].status,  // 设备状态-0正常 1-异常
                                label: treeDataList[item].name,  // 设备名称
                            });
                        }

                        // 如果名称(字符串)中有防攀爬则执行
                        if(treeDataList[item].name.indexOf("防攀爬")!=-1){
                            // 子节点数据列表
                            tempTreeChildrenArr = treeDataList[item].sensorVoList;

                            // 父级定义数据
                            tempTreeArr.push({
                                level: 1,
                                type: this.treeTitle,  // 标题
                                id: this.getRandomNumber(1, 100),  // id控制眼睛
                                label: treeDataList[item].name,  // 设备名称
                                building_name: treeDataList[item].building_name,  // 楼宇名称
                                building_no: treeDataList[item].building_no,  // 楼栋编号
                                community_no: treeDataList[item].community_no,  // 社区编号
                                device_no: treeDataList[item].device_no,  // 设备编号
                                children: []
                            });

                            // 子节点
                            for(let childItem in tempTreeChildrenArr) {
                                // 如果存在子节点
                                if(tempTreeChildrenArr.length != 0 || tempTreeChildrenArr.length != "") {
                                    // 判断是否为函数，去除接口里错误的字段
                                    if (typeof tempTreeChildrenArr[childItem] !== 'function') {
                                        tempTreeArr[item].children.push({
                                            level: 2,
                                            type: this.treeTitle,
                                            id: this.getRandomNumber(1, 100) + childItem,
                                            label: "探测器 " + Number(Number(tempTreeChildrenArr[childItem].sensor_no) + 1),
                                            sensor_no: tempTreeChildrenArr[childItem].sensor_no,
                                            status: tempTreeChildrenArr[childItem].status,
                                            device_no: tempTreeChildrenArr[childItem].device_no,
                                        });
                                    }
                                }
                            }
                        }
                    }
                }
            }

            // console.log(tempTreeArr);

            return tempTreeArr;  // 树列表最终数据
        },

        // 获取消防栓树形列表-api
        getFireList() {
            getFires().then(res=> {
                let fireList = res.data.data.data;  // 获取监控树形列表并赋值

                // 赋值监控列表树状数据
                this.treeDatas = this.getTreeList(fireList);
            }).catch({});
        },

        // 获取电动车进入电梯树形列表-api
        geteBikeList() {
            geteBikes().then(res=> {
                let eBikesList = res.data.data.data;  // 获取监控树形列表并赋值

                // 赋值电动车进入电梯列表树状数据
                this.treeDatas = this.getTreeList(eBikesList);
            }).catch({});
        },

        // 获取防攀爬树形列表-api
        getClimbingList() {
            getClimbings().then(res=> {
                let climbingList = res.data.data.data;  // 获取监控树形列表并赋值

                // 赋值防攀爬列表树状数据
                this.treeDatas = this.getTreeList(climbingList);
            }).catch({});
        },

        // 获取监控树形列表-api
        getMonitorList() {
            getMonitors().then(res=> {
                let monitorsList = res.data.data.data;  // 获取监控树形列表并赋值

                // 赋值监控列表树状数据
                this.treeDatas = this.getTreeList(monitorsList);
            }).catch({});
        },

        /**
         * 获取设备详情-api
         */
        // 获取消防栓详情-api
        getFireDetailList(val) {
            // console.log("获取消防栓详情", val);

            let params = {
                device_no: val.device_no,
            }

            getFireDetails(params).then(res=> {
                let fireDetailList = res.data.data.data;

                // 赋值消防栓详情
                this.equipmentDetail.fireDetailData = fireDetailList;

                // 播放消防栓videojs 
                this.playVideoJS(this.myvideo_xfs, this.equipmentDetail.fireDetailData.url);

                if(isDebug) {
                    console.log("获取消防栓详情", fireDetailList);
                }
            }).catch({});
        },

        // 获取电动车进入电梯详情-api
        geteBikesDetailList(val) {
            if(isDebug) {
                console.log("获取电动车进入电梯详情-接口参数", val);
            }

            let params = {
                device_no: val.device_no
            }

            geteBikeDetails(params).then(res=> {
                let eBikeList = res.data.data.data;

                // 根据需求更改字段值
                eBikeList.position = eBikeList.desc.replace("电动车预警设备", "");  // 新增位置字段，截取字符串指定字符并返回新字符串

                // 赋值电动车进入电梯详情
                this.equipmentDetail.eBikeData = eBikeList;

                // 播放电动车进入电梯videojs 
                this.playVideoJS(this.myvideo_ddc, this.equipmentDetail.eBikeData.url);

                if(isDebug) {
                    console.log("获取电动车进入电梯详情-api", eBikeList);
                }
            }).catch({});
        },

        // 获取防攀爬详情-api
        getClimbingDetailList(val) {
            if(isDebug) {
                console.log("获取防攀爬详情-接口参数", val);
            }

            // 状态默认时
            this.equipmentDetail.climbingDetailData.status = 0;

            // 请求参数
            let params = {
                device_no: val.device_no,
            }

            // console.log(params);

            // 请求防攀爬接口
            getClimbingDetails(params).then(res=> {
                let climbingDetailList = res.data.data.data;

                // console.log("请求防攀爬接口", climbingDetailList);

                this.equipmentDetail.climbingDetailData = climbingDetailList;  // 赋值防攀爬详情
                this.equipmentDetail.climbingDetailData.label = val.label;  // 赋值标题
                this.equipmentDetail.climbingDetailData.device_no = val.device_no;  // 设备编号

                // 如果视频存在
                if(this.climbingVideoJs) {
                    if(isDebug) {
                        console.log("防攀爬videoJs", this.myvideo_fpp, this.equipmentDetail.climbingDetailData.url);
                    }

                    // 播放防攀爬videojs
                    this.playVideoJS(this.myvideo_fpp, this.equipmentDetail.climbingDetailData.url);

                    this.climbingVideoJs = false;
                }

                if(isDebug) {
                    console.log("防攀爬详情-api", this.equipmentDetail.climbingDetailData);
                }
            }).catch({});
        },

        // 获取车辆通行记录详情列表-api
        getTrackList(val) {
            if(isDebug) {
                console.log("获取车辆通行记录列表-赋值接口参数", val);
            }

            let params = {
                // 截取字符串
                brake_no: val.monitorNo.replace("_monitor", ""),
                size: 3,  // 获取三条数据
                /* this.filterData.startTime = val[0];
                this.filterData.endTime = val[1]; */
            }

            getTracks(params).then(res=> {
                let trackList = res.data.data.data;

                // 根据需求只截取数组前三个
                // trackList = trackList.slice(0, 3);

                // 根据需求更改字段值
                for(let item in trackList) {
                    // 判断是否为函数，去除接口里错误的字段
                    if (typeof trackList[item] !== 'function') {
                        trackList[item].time = trackList[item].time.substring(5);  // 时间字段截取字符串前5位并返回新数组
                        trackList[item].address = trackList[item].address.substring(6);  // 地址字段截取字符串前5位并返回新数组
                    }
                }

                // 赋值车辆通信记录
                this.monitoringPanelData.trackDetailData = trackList;

                if(isDebug) {
                    console.log("获取车辆通行记录列表-api", trackList);
                }
            }).catch({});
        },

        // 获取人脸抓拍详情列表-api
        getFaceList(val) {
            if(isDebug) {
                console.log("获取人脸抓拍列表-赋值接口参数", val);
            }

            let params = {
                device_no: val.monitorNo,
                size: 3
            }

            getFaces(params).then(res=> {
                let faceList = res.data.data.data

                // 根据需求更改字段值
                for(let item in faceList) {
                    // 判断是否为函数，去除接口里错误的字段
                    if (typeof faceList[item] !== 'function') {
                        faceList[item].time = faceList[item].time.substring(5);  // 时间字段截取字符串前5位并返回新字符串
                        faceList[item].address = faceList[item].address.substring(6);  // 地址字段截取字符串前5位并返回新字符串
                    }
                }

                // 赋值车辆通信记录
                this.monitoringPanelData.faceDetailData = faceList;

                if(isDebug) {
                    console.log("获取人脸抓拍列表-api", faceList);
                }
            }).catch({});
        },

        // 获取标注点位信息-api
        getMarkInfoList(val, promIcoEmit) {
            if(isDebug) {
                console.log("获取标注点位信息-赋值接口参数", val);
            }

            // 用来存放接口请求参数
            let params = {};

            // 监控设备的设备编号和其他设备设备编号不一致
            if(val.type !== "监控设备") {
                params = {
                    device_no: val.device_no == undefined ? 0 : val.device_no,
                }
            } else {
                params = {
                    device_no: val.monitorNo == undefined ? 0 : val.monitorNo,
                }
            }

            if(isDebug) {
                console.log(`设备类型：${val.type} -- 设备编号：${params.device_no}`);
            }
            
            // 请求数据
            getMarkInfos(params).then(res=> {
                let markInfoList = res.data.data;

                console.log(markInfoList);

                // 只允许出现一组数值
                if(markInfoList.length === 1) {
                    this.markInfo = {};  // 清空点位对象

                    // 如果坐标值中任意字段为null
                    if(markInfoList[0].heading == null || markInfoList[0].pitch == null ||
                        markInfoList[0].roll == null || markInfoList[0].viewX == null ||
                        markInfoList[0].viewY == null || markInfoList[0].viewZ == null
                    ) {
                        this.markInfo.nodata = true;
                    } else {
                        // 如果有值，存储当前点位信息
                        this.markInfo.heading = markInfoList[0].heading.toString();  // 偏航角
                        this.markInfo.pitch = markInfoList[0].pitch.toString();  // 俯仰角
                        this.markInfo.roll = markInfoList[0].roll.toString();  // 翻滚角
                        this.markInfo.x = markInfoList[0].viewX.toString();  // 视角x轴坐标
                        this.markInfo.y = markInfoList[0].viewY.toString();  // 视角y轴坐标
                        this.markInfo.z = markInfoList[0].viewZ.toString();  // 视角z轴坐标
                    }
                } else {
                    // 如果没有值，则定义某个值（防止崩溃）
                    this.markInfo.nodata = true;
                }

                if(isDebug) {
                    // 如果不符合标准，则只有nodata，如果符合，显示坐标点位
                    console.log("如果不符合标准，则只有nodata，如果符合，显示坐标点位", this.markInfo);
                }

                // 如果存在nodata值，则跳出方法，否则执行
                if(!this.markInfo.nodata) {
                    // 自定义事件 - 回调函数，执行完本方法之后再执行
                    promIcoEmit();
                } else {
                    return;
                }

                if(isDebug) {
                    console.log("获取标注点位信息-api", markInfoList);
                }
            }).catch({});
        },

        /**
         * 树结构节点
         */
        // 点击树结构节点
        handleNodeClick(val) {
            // 点击第一层级
            if(val.level == 1) {
                switch(val.type) {
                    case '消防栓':
                        this.fireHydrantTreeFatherNode(val);
                        break;
                    case '窨井盖':
                        this.manholeCoverTreeFatherNode(val);
                        break;
                    case '河道检测':
                        this.riverDetectionTreeFatherNode(val);
                        break;
                    case '电动车进入电梯监控':
                        this.electricVehicleTreeFatherNode(val);
                        break;
                    case '防攀爬':
                        this.antiClimbingTreeFatherNode(val);
                        break;
                    case '监控设备':
                        this.monitoringTreeFatherNode(val);
                        break;
                    default:
                        return;
                } 
            }

            // 点击第二层级
            if(val.level == 2) {
                this.onlyAlarm();  // 只显示报警

                switch(val.type) {
                    case '消防栓':
                        this.fireHydrantTreeNode(val);
                        break;
                    case '窨井盖':
                        this.manholeCoverTreeNode(val);
                        break;
                    case '河道检测':
                        this.riverDetectionTreeNode(val);
                        break;
                    case '电动车进入电梯监控':
                        this.electricVehicleTreeNode(val);
                        break;
                    case '防攀爬':
                        this.antiClimbingTreeNode(val);
                        break;
                    case '监控设备':
                        this.monitoringTreeNode(val);
                        break;
                    default:
                        return;
                } 
            }
        },

        // 点击消防栓树结构节点 - 一级
        fireHydrantTreeFatherNode(val) {
            if(isDebug) {
                console.log("点击消防栓树结构节点-一级", val);
            }

            this.getFireDetailList(val);  // 获取消防栓详情

            this.closeUnlessAlarm();  // 关闭除报警面板
            this.firehydrantsShow = true;  // 打开消防栓面板

            // 点击触发自定义事件-模型事件
            this.$emit('equipFireTreeFatherNode', val);
        },
        // 点击窨井盖树结构节点 - 一级
        manholeCoverTreeFatherNode(val) {
            if(isDebug) {
                console.log("点击窨井盖树结构节点-一级", val);
            }

            // 点击触发自定义事件-模型事件
            this.$emit('equipCoverTreeFatherNode', val);
        },
        // 点击河道检测树结构节点 - 一级
        riverDetectionTreeFatherNode(val) {
            if(isDebug) {
                console.log("点击河道检测树结构节点-一级", val);
            }

            // 点击触发自定义事件-模型事件
            this.$emit('equipRiverTreeFatherNode', val);
        },
        // 点击电动车进入电梯监控树结构节点 - 一级
        electricVehicleTreeFatherNode(val) {
            if(isDebug) {
                console.log("点击电动车进入电梯监控树结构节点-一级", val);
            }

            // 获取父级列表标题
            this.labelTitle = val.label;

            this.geteBikesDetailList(val);  // 获取电动车进入电梯监控详情

            this.closeUnlessAlarm();  // 关闭除报警面板
            this.eBikeShow = true;  // 打开动车进入电梯面板

            // 点击触发自定义事件-模型事件
            this.$emit('equipelEctricTreeFatherNode', val);
        },
        // 点击防攀爬树结构节点 - 一级
        antiClimbingTreeFatherNode(val) {
            if(isDebug) {
                console.log("点击防攀爬树结构节点-一级", val);
            }

            // 往防攀爬数据中添加父级参数
            // this.equipmentDetail.climbingFatherData.device_no = val.device_no;

            // 点击触发自定义事件-模型事件
            this.$emit('equipClimbingTreeFatherNode', val);
        },
        // 点击监控设备树结构节点 - 一级
        monitoringTreeFatherNode(val) {
            if(isDebug) {
                console.log("点击监控设备树结构节点-一级", val);
            }

            // 获取父级列表标题
            this.labelTitle = val.label;

            // 需求变更
            // this.equipmentDetail.generalPanelData.type = val.type;

            /* // 在无二级菜单时，显示通用面板
            if(val.children.length === 0) {
                this.equipmentDetail.generalPanelData.type = val.type;
                this.equipmentDetail.generalPanelData.label = val.label;

                console.log(this.equipmentDetail.generalPanelData.type);

                this.generalPanelShow = true;  // 显示监控设备列表

                this.equipmentDetail.generalPanelData = val;
                console.log("无二级菜单监控", this.equipmentDetail.generalPanelData);
            } else {
                this.onlyAlarm();  // 只显示报警面板
            } */

            // 点击触发自定义事件-模型事件
            this.$emit('equipMonitoringTreeFatherNode', val);
        },

        // 点击消防栓树结构节点 - 二级
        fireHydrantTreeNode(val) {
            if(isDebug) {
                console.log("点击消防栓树结构节点-二级", val);
            }

            // 点击触发自定义事件-模型事件
            this.$emit('equipFireTreeNode', val);
        },
        // 点击窨井盖树结构节点 - 二级
        manholeCoverTreeNode(val) {
            if(isDebug) {
                console.log("点击窨井盖树结构节点-二级", val);
            }

            // 点击触发自定义事件-模型事件
            this.$emit('equipCoverTreeNode', val);
        },
        // 点击河道检测树结构节点 - 二级
        riverDetectionTreeNode(val) {
            if(isDebug) {
                console.log("点击河道检测树结构节点-二级", val);
            }

            // 点击触发自定义事件-模型事件
            this.$emit('equipRiverTreeNode', val);
        },
        // 点击电动车进入电梯监控树结构节点 - 二级
        electricVehicleTreeNode(val) {
            if(isDebug) {
                console.log("点击电动车进入电梯监控树结构节点-二级", val);
            }

            // 点击监控设备树结构节点
            this.monitoringTreeNode(val);

            // 点击触发自定义事件-模型事件
            this.$emit('equipElectricTreeNode', val);
        },
        // 点击防攀爬树结构节点 - 二级
        antiClimbingTreeNode(val) {
            if(isDebug) {
                console.log("点击防攀爬树结构节点-二级", val);
            }

            this.closeUnlessAlarm();  // 关闭所有面板

            this.climbingShow = true;  // 打开防攀爬面板

            // 如果为报警状态
            if(val.status == 1) {
                this.isClimbingData = true;  // 显示防攀爬字段
            } else {
                this.isClimbingData = false;  // 非报警状态隐藏
            }

            // 获取防攀爬详情
            this.getClimbingDetailList(val);

            // 点击触发自定义事件-模型事件
            this.$emit('equipClimbingTreeNode', val);
        },
        // 点击监控设备树结构节点 - 二级
        monitoringTreeNode(val) {
            if(isDebug) {
                console.log("点击监控设备树结构节点-二级", val);
            }

            // 显示面板
            this.alarmShow = false;  // 隐藏报警面板
            this.monitoringShow = true;
            this.equipmentInfoShow = true;

            // 赋值监控设备列表详情
            this.equipmentDetail.monitoringDetailData = val;

            // 获取父级列表标题
            this.equipmentDetail.monitoringDetailData.labelTitle = this.labelTitle;

            // 播放监控设备videojs
            this.playVideoJS(this.myvideo_monitor, this.equipmentDetail.monitoringDetailData.url);

            // 如果当前列表选项在车辆抓拍上
            if(val.labelTitle == "车辆抓拍") {
                // 获取车辆通行记录
                this.getTrackList(val);
            }

            // 如果当前列表选项在人脸抓拍上
            if(val.labelTitle == "人脸抓拍") {
                // 获取人脸抓拍列表
                this.getFaceList(val);
            }

            // 点击触发自定义事件-模型事件
            this.$emit('equipMonitoringTreeNode', val);
        },

        /**
         * 树结构列表点击眼睛
         */
        // 树结构列表点击眼睛-睁眼
        eyedis(data) {
            event.stopPropagation();  // 阻止冒泡-使点击眼睛只触发当前事件

            this.eyeStatus = data.id  + 10000

            // 一级菜单
            if(data.level == 1) {
                switch(data.type) {
                    case '消防栓':
                        this.fireHydrantFatherOpenEye(data);
                        break;
                    case '窨井盖':
                        this.manholeCoverFatherOpenEye(data);
                        break;
                    case '河道检测':
                        this.riverDetectionFatherOpenEye(data);
                        break;
                    case '电动车进入电梯监控':
                        this.electricVehicleFatherOpenEye(data);
                        break;
                    case '防攀爬':
                        this.antiClimbingFatherOpenEye(data);
                        break;
                    case '监控设备':
                        this.monitoringFatherOpenEye(data);
                        break;
                    default:
                        return;
                }
            }

            // 二级菜单
            if(data.level == 2) {
                switch(data.type) {
                    case '消防栓':
                        this.fireHydrantOpenEye(data);
                        break;
                    case '窨井盖':
                        this.manholeCoverOpenEye(data);
                        break;
                    case '河道检测':
                        this.riverDetectionOpenEye(data);
                        break;
                    case '电动车进入电梯监控':
                        this.electricVehicleOpenEye(data);
                        break;
                    case '防攀爬':
                        this.antiClimbingOpenEye(data);
                        break;
                    case '监控设备':
                        this.monitoringOpenEye(data);
                        break;
                    default:
                        return;
                }
            }
        },

        // 树结构消防栓列表点击眼睛-睁眼-一级
        fireHydrantFatherOpenEye(val) {
            if(isDebug) {
                console.log("树结构消防栓列表点击眼睛-睁眼-一级", val);
            }

            // 自定义事件
            let promIcoEmit = ()=> {
                this.$emit('equipFireFatherOpenEye', this.markInfo)
            }

            // 请求接口数据，并执行回调 --- 先获取标注点位信息，再进行自定义事件
            this.getMarkInfoList(val, promIcoEmit);

            // 调用树节点方法
            this.fireHydrantTreeFatherNode(val);
        },
        // 树结构窨井盖列表点击眼睛-睁眼-一级
        manholeCoverFatherOpenEye(val) {
            if(isDebug) {
                console.log("树结构窨井盖列表点击眼睛-睁眼-一级", val);
            }

            // 点击触发自定义事件-模型事件
            this.$emit('equipCoverFatherOpenEye', val);
        },
        // 树结构河道检测列表点击眼睛-睁眼-一级
        riverDetectionFatherOpenEye(val) {
            if(isDebug) {
                console.log("树结构河道检测列表点击眼睛-睁眼-一级", val);
            }

            // 点击触发自定义事件-模型事件
            this.$emit('equipRiverFatherOpenEye', val);
        },
        // 树结构电动车进入电梯列表点击眼睛-睁眼-一级
        electricVehicleFatherOpenEye(val) {
            if(isDebug) {
                console.log("树结构电动车进入电梯列表点击眼睛-睁眼-一级", val);
            }

             // 自定义事件
            let promIcoEmit = ()=> {
                this.$emit('equipElectricFatherOpenEye', this.markInfo)
            }

            // 请求接口数据，并执行回调 --- 先获取标注点位信息，再进行自定义事件
            this.getMarkInfoList(val, promIcoEmit);

            // 调用树节点方法
            this.electricVehicleTreeFatherNode(val);
        },
        // 树结构防攀爬列表点击眼睛-睁眼-一级
        antiClimbingFatherOpenEye(val) {
            if(isDebug) {
                console.log("树结构防攀爬列表点击眼睛-睁眼-一级", val);
            }

            // 点击触发自定义事件-模型事件
            this.$emit('equipClimbingFatherOpenEye', val);
        },
        // 树结构监控设备列表点击眼睛-睁眼-一级
        monitoringFatherOpenEye(val) {
            if(isDebug) {
                console.log("树结构监控设备列表点击眼睛-睁眼-一级", val);
            }

            // 点击触发自定义事件-模型事件
            this.$emit('equipMonitoringFatherOpenEye', val);
        },

        // 树结构消防栓列表点击眼睛-睁眼-二级
        fireHydrantOpenEye(val) {
            if(isDebug) {
                console.log("树结构消防栓列表点击眼睛-睁眼-二级", val);
            }

            // 点击触发自定义事件-模型事件
            this.$emit('equipFireOpenEye', val);
        },
        // 树结构窨井盖列表点击眼睛-睁眼-二级
        manholeCoverOpenEye(val) {
            if(isDebug) {
                console.log("树结构窨井盖列表点击眼睛-睁眼-二级", val);
            }

            // 点击触发自定义事件-模型事件
            this.$emit('equipCoverOpenEye', val);
        },
        // 树结构河道检测列表点击眼睛-睁眼-二级
        riverDetectionOpenEye(val) {
            if(isDebug) {
                console.log("树结构河道检测列表点击眼睛-睁眼-二级", val);
            }

            // 点击触发自定义事件-模型事件
            this.$emit('equipRiverOpenEye', val);
        },
        // 树结构电动车进入电梯列表点击眼睛-睁眼-二级
        electricVehicleOpenEye(val) {
            if(isDebug) {
                console.log("树结构电动车进入电梯列表点击眼睛-睁眼-二级", val);
            }

            // 点击触发自定义事件-模型事件
            this.$emit('equipElectricOpenEye', val);
        },
        // 树结构防攀爬列表点击眼睛-睁眼-二级
        antiClimbingOpenEye(val) {
            if(isDebug) {
                console.log("树结构防攀爬列表点击眼睛-睁眼-二级", val);
            }

            // 自定义事件
            let promIcoEmit = ()=> {
                this.$emit('equipClimbingOpenEye', this.markInfo)
            }

            // 请求接口数据，并执行回调 --- 先获取标注点位信息，再进行自定义事件
            this.getMarkInfoList(val, promIcoEmit);

            // 调用树节点方法
            this.antiClimbingTreeNode(val);
        },
        // 树结构监控设备列表点击眼睛-睁眼-二级
        monitoringOpenEye(val) {
            if(isDebug) {
                console.log("树结构监控设备列表点击眼睛-睁眼-二级", val);
            }

            // 自定义事件
            let promIcoEmit = ()=> {
                this.$emit('equipMonitoringOpenEye', this.markInfo);
            }

            // 请求接口数据，并执行回调 --- 先获取标注点位信息，再进行自定义事件
            this.getMarkInfoList(val, promIcoEmit)

            // 调用树节点方法
            this.monitoringTreeNode(val);
        },

        /**
         * 树结构列表点击眼睛
         */
        // 树结构列表点击眼睛-闭眼
        eyeshow(node, data) {
            this.onlyAlarm();  // 只显示报警面板

            event.stopPropagation();  // 阻止冒泡-使点击眼睛只触发当前事件

            this.eyeStatus = '';

            // 一级菜单
            if(data.level == 1) {
                switch(data.type) {
                    case '消防栓':
                        this.fireHydrantFatherCloseEye(data);
                        break;
                    case '窨井盖':
                        this.manholeCoverFatherCloseEye(data);
                        break;
                    case '河道检测':
                        this.riverDetectionFatherCloseEye(data);
                        break;
                    case '电动车进入电梯监控':
                        this.electricVehicleFatherCloseEye(data);
                        break;
                    case '防攀爬':
                        this.antiClimbingFatherCloseEye(data);
                        break;
                    case '监控设备':
                        this.monitoringFatherCloseEye(data);
                        break;
                    default:
                        return;
                }
            }
            
            // 二级菜单
            if(data.level == 2) {
                switch(data.type) {
                    case '消防栓':
                        this.fireHydrantCloseEye(data);
                        break;
                    case '窨井盖':
                        this.manholeCoverCloseEye(data);
                        break;
                    case '河道检测':
                        this.riverDetectionCloseEye(data);
                        break;
                    case '电动车进入电梯监控':
                        this.electricVehicleCloseEye(data);
                        break;
                    case '防攀爬':
                        this.antiClimbingCloseEye(data);
                        break;
                    case '监控设备':
                        this.monitoringCloseEye(data);
                        break;
                    default:
                        return;
                }
            }
        },

        // 树结构消防栓列表点击眼睛-闭眼-一级
        fireHydrantFatherCloseEye(val) {
            if(isDebug) {
                console.log("树结构消防栓列表点击眼睛-闭眼-一级", val);
            }
        },
        // 树结构窨井盖列表点击眼睛-闭眼-一级
        manholeCoverFatherCloseEye(val) {
            if(isDebug) {
                console.log("树结构窨井盖列表点击眼睛-闭眼-一级", val);
            }
        },
        // 树结构河道检测列表点击眼睛-闭眼-一级
        riverDetectionFatherCloseEye(val) {
            if(isDebug) {
                console.log("树结构河道检测列表点击眼睛-闭眼-一级", val);
            }
        },
        // 树结构电动车进入电梯列表点击眼睛-闭眼-一级
        electricVehicleFatherCloseEye(val) {
            if(isDebug) {
                console.log("树结构电动车进入电梯列表点击眼睛-闭眼-一级", val);
            }
        },
        // 树结构防攀爬列表点击眼睛-闭眼-一级
        antiClimbingFatherCloseEye(val) {
            if(isDebug) {
                console.log("树结构防攀爬列表点击眼睛-闭眼-一级", val);
            }
        },
        // 树结构监控设备列表点击眼睛-闭眼-一级
        monitoringFatherCloseEye(val) {
            if(isDebug) {
                console.log("树结构监控设备列表点击眼睛-闭眼-一级", val);
            }
        },

        // 树结构消防栓列表点击眼睛-闭眼-二级
        fireHydrantCloseEye(val) {
            if(isDebug) {
                console.log("树结构消防栓列表点击眼睛-闭眼-二级", val);
            }
        },
        // 树结构窨井盖列表点击眼睛-闭眼-二级
        manholeCoverCloseEye(val) {
            if(isDebug) {
                console.log("树结构窨井盖列表点击眼睛-闭眼-二级", val);
            }
        },
        // 树结构河道检测列表点击眼睛-闭眼-二级
        riverDetectionCloseEye(val) {
            if(isDebug) {
                console.log("树结构河道检测列表点击眼睛-闭眼-二级", val);
            }
        },
        // 树结构电动车进入电梯列表点击眼睛-闭眼-二级
        electricVehicleCloseEye(val) {
            if(isDebug) {
                console.log("树结构电动车进入电梯列表点击眼睛-闭眼-二级", val);
            }
        },
        // 树结构防攀爬列表点击眼睛-闭眼-二级
        antiClimbingCloseEye(val) {
            if(isDebug) {
                console.log("树结构防攀爬列表点击眼睛-闭眼-二级", val);
            }

            // this.isClimbingData = false;  // 隐藏防攀爬字段
        },
        // 树结构监控设备列表点击眼睛-闭眼-二级
        monitoringCloseEye(val) {
            if(isDebug) {
                console.log("树结构监控设备列表点击眼睛-闭眼-二级", val);
            }
        },

        /**
         * 
         * 其他
         */
        testeqn() {
            this.$emit("eqump_eye", "设备列表眼睛方法");
            // console.log("123");
        },

        buttonmethod2(){
            viewer.gsp.centerAt({ "x":116.388651, "y":39.905126, "z": 30.3, "heading": 111, "pitch":  -21.5, "roll": 0.2 });
            this.allClose()
            this.alarmShow = true
            // this.generalPanelShow = true

            this.myvideo4.reset(); //重置 video
            this.myvideo4.src([
                {
                    type: 'application/x-mpegURL',
                    src: ''
                },
            ]);
            this.myvideo4.load();
            this.myvideo4.play();
        },
        buttonmethod3(){
            this.allClose()
            this.alarmShow = true
            this.firehydrantsShow = true

            this.myvideo3.reset(); //重置 video
            this.myvideo3.src([
                {
                    type: 'application/x-mpegURL',
                    src: ''
                },
            ]);
            this.myvideo3.load();
            this.myvideo3.play();
        },
        renderContent(h, { node, data, store }) {
            return (
                // <span class="custom-tree-node">
                //     <i class={data.className} class='eye1' on-click={ () => this.eye1(data) }></i>
                //     <i class={data.className} class='eye2' on-click={ () => this.eye2(node,store)}></i>
                //     <span style="margin-left:5px;">{node.label}</span>
                // </span>
                <span class="custom-tree-node">
                    <span style="margin-left:5px;">{node.label}</span>
                </span>
            );
        },
        handleCheckChange(data, checked, indeterminate) {
                console.log("xxxx", data, checked, indeterminate);
                console.log(typeof checked, checked);
                if(checked == true) {
                    let floor = data.floor;
                    this.getCompanyList(floor);
    
                    if(data.level == '1'){
                        let params = {
                            building_no: 3205821,
                            floor_no: data.floor
                        }
                        getFloordevice(qs.stringify(params)).then(res=>{
                            console.log(res)
                            this.$emit('backPoint', res.data);
                        })
                    }
                    else if(data.level == '2'){
                        this.$emit('backPoint1', data.data,data.floor);
                    }else if(data.level == '3'){
                       this.$emit('getBack', data.floor,data.deviceNo);
                    }
                }else if(checked == false) {
                    console.log(data)
                    if(indeterminate == false){
                        if(data.level == 1){
                            this.$emit('Allno','');
                        }
                        else if(data.level == 2){
                            let floor = data.floor;
                            let type = data.type
                            let params = {
                                building_no: 3205821,
                                type: type,
                                floor_no: floor
                            }
                            getFloordevice(qs.stringify(params)).then(res=>{
                                for(var i=0;i<res.data.length;i++){
                                    console.log(res.data[i].id)
                                    this.$emit('Pointno',res.data[i].id);
                                }
                            })
                        }else if(data.level == 3){
                            console.log(data.id)
                            this.$emit('Pointno',data.id);
                        }
                    }
                }
        },
    },

    // dom展现在页面时执行
    mounted(){
        this.$store.commit('titleShow','EquipmentMaintain');  // 定义标题

        // 注册videoJs
        this.registerVideoJS();
    },

    // 销毁
    beforeDestroy() {
        // 销毁vuex
        this.$store.commit('titleShow', '');

        // 销毁videojs
        this.disposeVideojs();
    }
}
</script>

<style lang="less" scoped>
.equipment_maintain {
    width:100%;
    height:100%;
    
    .left_home{
        width:22%;
        min-width: 432px;
        height:100%;
        position: absolute;
        left: 0;
        z-index:5000;
        

        .home_community{
            width: 100%;
            height: 180px; 

            .community_title{
                width:100%;
                height:17%;
                
                .span1{
                    font-size:14px;
                    position: relative;
                    height: 43px;
                    padding-left: 15px;
                    padding-top: 6px;
                    width: 60%;
                    color: #FFF;
                    background: url(../../assets/images/housing/title.png) top no-repeat;
                    background-size: 100% 75%;
                    z-index: 100;
                }
                
               
            }

            .community_body{
                width: 100%;
                height: 153px;
                overflow: hidden;
                z-index: 1;
                display: flex;
                flex-wrap: wrap;
                -webkit-box-align: center;
                align-items: center;
                margin-top: 5px;

                .body_block_wrap:nth-child(4) {
                    .body_block {
                        .block_bottom {
                            top: 4px;

                            .block_width {
                                img{
                                    top: 3px;
                                }
                            }

                            .block_width1 {
                                margin-top: -11px;
                            }
                        }
                    }
                    
                }

                .body_block_wrap {
                    .body_block{
                        position: relative;
                        width: 106px;
                        height: 65px;
                        background: url(../../assets/images/equipmentmaintain/block.png) top no-repeat;  
                        background-size: 100% 100%;
                        cursor: pointer;
                        margin-left: 10px;
                        border-top: solid 1px transparent;

                        .block_font{
                            display: block;
                            width: 84%;
                            height: 20px;
                            margin: 5px auto 7px;
                            color: white;
                            font-size: 12px;
                            border-top: solid 1px transparent;
                        }

                        .block_bottom{
                            display: flex;
                            position: relative;
                            top: -8px;
                            left: 6px;

                            .block_width{
                                width:25%;

                                img{
                                    position: relative;
                                    left: 5px;
                                    top: 9px;
                                }
                            }
                            .block_width1{
                                // width:75%;

                                .radius_n{
                                    display: flex;

                                    .block_radius{
                                        border-radius: 50%;
                                        background: green;
                                        width: 5px;
                                        height: 5px;
                                        position: relative;
                                        top: 6px;
                                        margin-left: 6px;
                                    }

                                    .block_name{
                                        color: white;
                                        margin-left: 2px;
                                    }
                                }

                                .radius_n1{
                                    display: flex;

                                    .block_radius{
                                        border-radius: 50%;
                                        background: #9D1257;
                                        width: 5px;
                                        height: 5px;
                                        position: relative;
                                        top: 6px;
                                        margin-left: 6px;
                                    }

                                    .block_name{
                                        color: white;
                                        margin-left: 2px;
                                    }
                                }
                            }
                        }
                        
                    }
                }

                .body_block1{
                    background: url(../../assets/images/equipmentmaintain/lblock.png) top no-repeat !important;  
                    background-size: 100% 100% !important;
                }
            }
        }

        .home_provinces{
            width: 100%;
            height: 75%; 
            margin-top: 14px;

            .provinces_title{
                width:100%;
                height:5%;
                background: url(../../assets/images/housing/title.png) top no-repeat;
                background-position-x: 0px;
                background-size: 61% 90%;
                position: relative;
                span{
                    font-size: 14px;
                    color: #FFF;
                    margin-left: 18px;
                }
            }

            .provinces_body{
                width:100%;
                height: 95%;
                margin-top: 8px;

                // 树
                .provinces_tree{
                    width: 71%;
                    height: 92%;
                    background: #08133F;
                    border-radius: 20px;
                    overflow: auto;
                    padding-top: 13px;
                    padding-left: 10px;

                    // 树状列表选项
                    /deep/ .el-tree-node {
                        .el-tree-node__content {
                            // position: relative;
                            width: 95%;
                            background: #0A1D5A;
                            margin-bottom: 7px;
                            border: solid 1px #0c2a69;
                            border-radius: 6px;
                            overflow: hidden;
                            line-height: 28px;
                        }
                    }

                    // 左边图标
                    /deep/ .el-tree-node__content {
                        .el-icon-caret-right {
                            position: relative;
                            margin-right: 12px;

                            &::before {
                                content: ' ';
                                position: absolute;
                                width: 12px;
                                height: 12px;
                                top: 0;
                                background: url(../../assets/images/equipmentmaintain/jiahao.png) left top no-repeat;
                            }

                            /* .el-tree-node__expand-icon {
                                &::before {
                                    display: none;
                                }
                            } */
                        }

                        .el-tree-node__expand-icon.expanded.el-icon-caret-right:before {
                            background: url(../../assets/images/equipmentmaintain/jianhao.png) left top no-repeat;
                        }

                        .el-tree-node__expand-icon.expanded {
                            // -webkit-transform: rotate(0deg);
                            transform: rotate(0deg);
                        }

                        /deep/ .custom-tree-node {
                            // 树结构左边图标
                            .icon_lt {
                                margin-right: 12px;
                                img {
                                    margin-top: -4px;
                                }
                            }

                            // 树结构眼睛
                            .tree_eye {
                                position: absolute;
                                right: 50px;
                            }
                        }
                    }

                    // 去除第二层级图标
                    /deep/ .el-tree-node__children {
                        .el-tree-node {
                            .el-tree-node__content {
                                background: #091D4A;

                                .el-icon-caret-right:before {
                                    display: none;
                                }
                            }
                        }
                    }
                    
                    /deep/ .el-tree{
                        background: none;
                        position: relative;
                        top: 0px;

                        .el-tree-node {
                            .el-tree-node__children {
                                .is-current {
                                    .el-tree-node__content {
                                        /* background: #0b3388;
                                        border: #91E3F7 0.5px solid; */
                                    }
                                }
                                
                            }
                            
                        }
                    }
                    /deep/ .el-tree-node:focus > .el-tree-node__content {
                        background-color: #0A1D5A !important;
                        border: #91E3F7 0.5px solid;
                    }
                    /deep/ .el-tree-node__content:hover {
                        background: #0b3388;
                        transform: 0.3s linear;
                        border: #91E3F7 0.5px solid;
                    }

                    /deep/ .el-tree-node__content {
                        background: #08133F;
                        top: 0;
                        transform: 0.2s linear;

                        /deep/ .custom-tree-node {
                            span {
                                color: #fff;
                            }
                        }
                    }

                    /deep/ .el-checkbox__inner {
                        background: #628cf5;
                        border: solid 1px transparent;
                        outline: none;
                    }

                    .is-checked {
                        /deep/ .el-checkbox__inner {
                            background: #2145e8;
                        }
                    }

                    .is-indeterminate {
                        /deep/ .el-checkbox__inner {
                            background: #014a7f;
                        }
                    }
                    
                }
            }
        }
    }

    .right_home{
        
        width:20%;
        height:100%;
        position: absolute;
        z-index:5000;
        right: 0;
         
        .home_police{
            width: 100%;
            height: 25%;
            background: url(../../assets/images/person/righttopbg.png) top no-repeat;
            margin-bottom: 20px;
            background-position-y: 42px;
            
            .police_title{
                width:100%;
                height:14%;
                background: url(../../assets/images/housing/title.png) top no-repeat;
                background-position-x: 0px;


                span{
                    font-size:14px;
                    position: relative;
                    left:20px;
                    top:5px;
                    color:white;
                    font-size:14px;
                }
            }

            .police_body{
                width:100%;
                height:79%;
                background: #081B50;

                .alarm_table_block{
                    width:100%;
                    background: #0F2264;
                    opacity: 0.8;
                    z-index:200;
                }
                .alarm_table{
                    width:100%;
                    // height:100%;
                }
                .cbackground{
                    background: url(../../assets/images/housing/yinying.png) top no-repeat;
                    background-size:100% 100%;
                    color:yellow !important;
                    border-top:1px solid rgba(255,255, 255,0.9);
                    border-bottom:1px solid rgba(255,255, 255,0.9);
                }
                .alarm_table>tr{
                    // height:30px;
                }
                .alarm_table>tr>th{
                    // padding:7px;
                    height:30px;
                    text-align:center;
                    vertical-align:middle;
                    border-bottom:0;
                    color:white;
                    font-size:12px;
                    background: url(../../assets/images/housing/yinying.png) top no-repeat;

                }
                .alarm_table>tr>td{
                    padding:8px;
                    text-align:center;
                    vertical-align:middle;
                    cursor: pointer;
                    color:white;
                    font-size:12px;
                    background: url(../../assets/images/housing/line1.png) top no-repeat;
                }
                .lights{
                    background: url(../../assets/images/home/yinying.png) top no-repeat;
                    transform: 0.3s linear;
                }
                .io{
                    width:100%;
                    height:90%;
                    margin:4px auto;
                    overflow:auto;
                }
            }
        }
    }

    .right_home1{
        width:28%;
        min-height: 100px;
        position: absolute;
        z-index:5000;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: url(../../assets/images/equipmentmaintain/renlian.png) top no-repeat ;

        .block_title{
            width:100%;
            height:17%;

            .close_{
                position: absolute;
                cursor: pointer;
                left: 500px;
                top: 8px;
            }
            
            .span1{
                font-size:14px;
                position: relative;
                height: 43px;
                padding-left: 15px;
                padding-top: 10px;
                width: 60%;
                color: #FFF;
                background: url(../../assets/images/housing/title.png) top no-repeat;
                background-size: 100% 75%;
                z-index: 100;
                line-height: 10px;
            }
        }

        .home_block{
            width: 100%;
            height: 100%;

            .video_wrap{
                width: 90%;
                height: 217px;
                margin: 0px auto 20px;
                padding: 1px auto 0;

                .video_cont{
                    width: 100%;
                    height: 100%;
                }
            }

            .monitor_info {
                .home_block, .home_block1 {
                    .block_title{
                        width:100%;
                        height:10%;

                        .close_{
                            position: absolute;
                            cursor: pointer;
                            left: 500px;
                            top: 8px;
                        }
                        
                        .span1{
                            font-size:14px;
                            position: relative;
                            height: 43px;
                            padding-left: 15px;
                            padding-top: 10px;
                            width: 60%;
                            color: #FFF;
                            background: url(../../assets/images/housing/title.png) top no-repeat;
                            background-size: 100% 75%;
                            z-index: 100;
                        }
                    }

                    .body_block {
                        display: inline-block;
                        min-height: 150px;
                        margin: 15px 0 0 18px;
                        overflow: hidden;

                        .block_top {
                            margin-bottom: 10px;
                        }
                        
                        .block_bottom {
                            width: 100%;
                            height: 30%;
                            margin-bottom: 8px;

                            div {
                                color: white;
                                position: relative;
                                left: 6px;
                                margin-bottom: 3px;
                                font-size: 12px;
                                width: 95%;
                                overflow: hidden;

                                img {
                                    margin-left: 10px;
                                }
                            }
                        }
                    }
                }

                .home_block {
                    .block_body {
                        margin-bottom: 14px;
                    }

                    .body_block{
                        width: 28%;
                        height: 85%;
                        background: url(../../assets/images/equipmentmaintain/small_block.png) top no-repeat ;
                        background-size:100% 100%; 
                        margin-top: 4px;
                        
                        
                        .block_top{
                            width: 100%;
                            height: 85px;
                            margin-bottom: 10px;

                            .top_img{
                                width: 87%;
                                height: 95%;
                                position: relative;
                                top: 3px;
                                margin: 0 auto;

                                img{
                                    width: 100%;
                                    height: 100%;
                                }

                                div{
                                    z-index: 6;
                                    position: absolute;
                                    width: 100%;
                                    bottom: 0px;
                                    text-align: center;
                                    background: #6995B8;
                                    color: white;
                                    height: 20px;
                                    line-height: 20px;
                                }
                            }
                        }

                        /* .block_bottom{
                            width: 100%;
                            height: 30%;

                            div{
                                color:white;
                                position: relative;
                                left: 6px;
                            }
                        } */
                    }
                }

                .home_block1{
                    width: 100%;
                    height: 40%;

                    .block_body{
                        width:100%;
                        height:100%;
                        
                        .body_{
                            width:100%;
                            height:auto;
                            margin: 0 auto;
                            
                            .body_title_{
                                width: 100%;
                                height: 32px;
                                position: relative;
                                top: -7px;

                                /deep/ .el-input__inner{
                                    width: 80%;
                                    background: transparent;
                                    border:none;
                                    position: relative;
                                    top: -21px !important;
                                    top: -5px;
                                }
                                /deep/ .el-range-separator{
                                    color:white;
                                }
                                /deep/ .el-range-input{
                                    width: 100% !important;
                                    background: #368CD2;
                                    height: 24px;
                                    color: white;
                                    font-size: 12px;
                                    margin-left: 12px;
                                }
                                span{
                                    line-height: 22px;
                                    margin-left: 10px;
                                    width: 11%;
                                    color:white;
                                    position: relative;
                                    top: 3px;
                                }

                                .titles1{
                                    position: absolute;
                                    right: 72px;
                                    top: 12px;
                                    background: url(../../assets/images/equipmentmaintain/bk.png) top no-repeat ;
                                    width: 50px;
                                    height: 20px;
                                    color:white;
                                    text-align: center;
                                    line-height: 20px;
                                    cursor: pointer;

                                }
                                .titles2{
                                    position: absolute;
                                    right: 20px;
                                    top: 12px;
                                    background: url(../../assets/images/equipmentmaintain/bk.png) top no-repeat ;
                                    width: 50px;
                                    height: 20px;
                                    color:white;
                                    text-align: center;
                                    line-height: 20px;
                                    cursor: pointer;

                                }
                            }

                            .body_body{
                                padding-bottom: 26px;

                                .body_block{
                                    width: 28%;
                                    height: 85%;
                                    background: url(../../assets/images/equipmentmaintain/small_block.png) top no-repeat ;
                                    background-size:100% 100%; 
                                    margin-top: 15px;
                                    
                                    .block_top{
                                        width: 100%;
                                        height: 70%;

                                        .top_img{
                                            width: 87%;
                                            // height: 95%;
                                            height: 76px;
                                            position: relative;
                                            top: 3px;
                                            margin: 0 auto;

                                            img{
                                                width: 100%;
                                                height: 100%;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .right_home2{
        width:28%;
        height:100%;
        position: absolute;
        z-index:5000;
        right: 0;
        display: flex;
        flex-direction: column;
        background: url(../../assets/images/equipmentmaintain/renlian.png) top no-repeat ;

        .home_block{
            width: 100%;
            height: 39%;

            .block_title{
                width:100%;
                height:17%;

                .close_{
                    position: absolute;
                    cursor: pointer;
                    left: 500px;
                    top: 8px;
                }
                
                .span1{
                    font-size:14px;
                    position: relative;
                    height: 43px;
                    padding-left: 15px;
                    padding-top: 10px;
                    width: 60%;
                    color: #FFF;
                    background: url(../../assets/images/housing/title.png) top no-repeat;
                    background-size: 100% 75%;
                    z-index: 100;
                }
                
               
            }

            .block_body{
                width:100%;
                height:10%;
                display: flex;
                justify-content: space-around;
                overflow: auto;
                flex-wrap: wrap;

                div{
                    color: white;
                    font-size: 16px;
                    line-height: 33px;
                }
            }

            .block_bottom{
                width:100%;
                height:73%;

                .bottom_video{
                    width:90%;
                    height:89%;
                    margin: 0 auto;
                    position: relative;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }

        .home_block1{
            width: 100%;
            height: 40%;
            margin-top: 40px;

            .block_title{
                width:100%;
                height:10%;

                .close_{
                    position: absolute;
                    cursor: pointer;
                    left: 500px;
                    top: 8px;
                }
                
                .span1{
                    font-size:14px;
                    position: relative;
                    height: 43px;
                    padding-left: 15px;
                    padding-top: 10px;
                    width: 60%;
                    color: #FFF;
                    background: url(../../assets/images/housing/title.png) top no-repeat;
                    background-size: 100% 75%;
                    z-index: 100;
                }
                
               
            }

            .block_body{
                width:100%;
                height:100%;
                
                .body_{
                    width:100%;
                    height:90%;
                    margin: 0 auto;
                    
                    .body_title_{
                        width:100%;
                        height:15%;
                        position: relative;

                        /deep/ .el-input__inner{
                            width: 80%;
                            background: transparent;
                            border:none;
                            position: relative;
                            top: -21px !important;
                            top: -5px;
                        }
                        /deep/ .el-range-separator{
                            color:white;
                        }
                        /deep/ .el-range-input{
                            width: 100% !important;
                            background: #368CD2;
                            height: 24px;
                            color: white;
                            font-size: 12px;
                            margin-left: 12px;
                        }
                        span{
                            line-height: 22px;
                            margin-left: 10px;
                            width: 11%;
                            color:white;
                            position: relative;
                            top: 3px;
                        }

                        .titles1{
                            position: absolute;
                            right: 72px;
                            top: 12px;
                            background: url(../../assets/images/equipmentmaintain/bk.png) top no-repeat ;
                            width: 50px;
                            height: 20px;
                            color:white;
                            text-align: center;
                            line-height: 20px;
                            cursor: pointer;

                        }
                        .titles2{
                            position: absolute;
                            right: 20px;
                            top: 12px;
                            background: url(../../assets/images/equipmentmaintain/bk.png) top no-repeat ;
                            width: 50px;
                            height: 20px;
                            color:white;
                            text-align: center;
                            line-height: 20px;
                            cursor: pointer;

                        }
                    }

                    .body_body{
                        width:100%;
                        height:70%;
                        display: flex;
                        justify-content: space-around;
                        overflow: auto;
                        flex-wrap: wrap;

                        .body_block{
                            width: 28%;
                            height: 85%;
                            background: url(../../assets/images/equipmentmaintain/small_block.png) top no-repeat ;
                            background-size:100% 100%; 
                            margin-top: 15px;
                            
                            .block_top{
                                width: 100%;
                                height: 70%;

                                .top_img{
                                    width: 87%;
                                    height: 95%;
                                    position: relative;
                                    top: 3px;
                                    margin: 0 auto;

                                    img{
                                        width: 100%;
                                        height: 100%;
                                    }
                                }
                            }

                            .block_bottom{
                                width: 100%;
                                height: 30%;

                                div{
                                    color:white;
                                    position: relative;
                                    left: 10px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .general_panel{
        width: 500px;
        height: 240px;
        position: absolute;
        left: 600px;
        top: 200px;
        z-index: 5000;
        background: url(../../assets/images/common/mianban.png) top no-repeat;
        background-size:100% 100%; 

        .general_panel_title{
            width: 60%;
            height: 20%;
            position: relative;
            

            .title_move{
                line-height: 32px;
                position: relative;
                left: 30px;

                span{
                    color:white;
                    font-size:16px;
                    margin-left: 5px;
                    position: relative;
                    top: 5px;
                }
            }

            .close_{
                position: absolute;
                cursor: pointer;
                left: 462px;
                top: 8px;
            }
        }

        .general_panel_body{
            width: 100%;
            height: 70%;
            display: flex;
            
            .body_left{
                width: 45%;
                height: 100%;
                margin: 0 auto;

                .video1{
                    width: 100%;
                    height: 100%;
                }
            }

            .body_right{
                width: 50%;
                height: 100%;
                display: flex;

                .right_info1, .right_info2 {
                    .info_span1, .info_span2 {
                        margin-bottom: 20px;
                    }
                }

                .right_info1{
                    // width: 50%;
                    // display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    position: relative;
                    left: 20px;
                    .info_span1{
                        color: #6C95DD;
                        font-size: 16px;

                        .info_span2{
                            display: inline;
                            color: white;
                            font-size: 16px;
                        }
                    }
                }

                /* .right_info2{
                    width: 50%;
                    // display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    position: relative;
                    left: 20px;
                    .info_span2{
                        color: white;
                        font-size: 16px;
                    }
                } */
            }
        }
    }

    .bracelet{
        width: 350px;
        height: 290px;
        position: absolute;
        left: 600px;
        top: 200px;
        z-index: 5000;
        background: url(../../assets/images/equipmentmaintain/shouhuan.png) top no-repeat ;
        background-size:100% 100%; 

        .bracelet_title{
            width: 60%;
            height: 15%;
            position: relative;
            

            .title_move{
                line-height: 32px;
                position: relative;
                left: 30px;

                span{
                    color:white;
                    font-size:16px;
                    margin-left: 5px;
                    position: relative;
                    top: 5px;
                }
            }

            .close_{
                position: absolute;
                cursor: pointer;
                left: 312px;
                top: 8px;
            }
        }

        .bracelet_body{
            width: 100%;
            height: 80%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            .body_font{
                position: relative;
                left: 20px;
                color:white;
                font-size: 16px;
            }
        }
    }

    .firehydrants{
        width: 430px;
        height: 430px;
        position: absolute;
        left: 600px;
        top: 200px;
        z-index: 5000;
        background: url(../../assets/images/common/mianban.png) top no-repeat ;
        background-size:100% 100%; 
        overflow: hidden;

        .firehydrants_title{
                width: 100%;
                height: 40px;
                overflow: hidden;
                // background: rgba(20, 46, 118, 0.69);
            

            .title_move{
                line-height: 32px;
                position: relative;
                left: 30px;

                span{
                    color:white;
                    font-size:16px;
                    margin-left: 5px;
                    position: relative;
                    top: 5px;
                }
            }

            .close_{
                position: absolute;
                cursor: pointer;
                left: 392px;
                top: 8px;
            }
        }

        .firehydrants_body{
            width: 100%;
            height: 90%;
            position: relative;

            .body_top{
                width: 85%;
                height: 40%;
                margin: 10px auto;

                .video1{
                    width: 100%;
                    height: 100%;
                }
            }

            .body_bottom{
                width: 85%;
                height: 50%;
                margin: 0 auto;
                display: flex;

                .bottom_left, .bottom_right {
                    overflow: hidden;

                    .font_c{
                        font-size: 16px;
                        color: #47C8FC;
                        margin-bottom: 12px;
                    }

                    .font_{
                        color: white;
                        font-size: 14px;
                        margin-bottom: 10px;
                    }
                }

                .bottom_left {
                    width: 60%;
                    margin-right: 10px;
                }

                .bottom_right {

                }
            }
        }
    }

    .equipment_info{
        width: 270px;
        height: 155px;
        background: url(../../assets/images/equipmentmaintain/info.png) top no-repeat;
        background-size:100% 100%;
        position: absolute;
        left: 800px;
        top: 300px; 
        z-index: 5000;

        .title{
            height: 20%;
            width: 100%;

                .close_{
                    position: absolute;
                    cursor: pointer;
                    right: 10px;
                    top: 8px;
                }
        }

        .body{
            height: 70%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            div{
                width: 85%;
                color: white;
                position: relative;
                left: 23px;
                font-weight: initial;
                font-size: 12px;
                top: -2px;
            }
        }
    }
}
</style>