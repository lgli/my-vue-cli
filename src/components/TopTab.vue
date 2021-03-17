<!--主页顶部横条-->
<template>
    <el-row class="top-bg">
        <el-col :span="3">
            <img src="./img/index/logo.png"/>
        </el-col>
        <el-col :span="5" style="color:#69b2fb">
                1
        </el-col>
        <el-col :span="6" style="color:#69b2fb">
                2
        </el-col>
        <el-col :span="6" style="color:#69b2fb">
                3
        </el-col>
        <el-col :span="4">
            <!--右侧快速按钮块儿-->
            <el-row>
                <el-col :span="2">
                    <el-tooltip content="我的任务" placement="top">
                        <el-badge :value="12" class="item">
                            <i class="el-icon-message-solid point-cursor font-size-28"></i>
                        </el-badge>

                    </el-tooltip>
                </el-col>
                <el-col :span="2" class="mr-l20">
                    <el-tooltip content="个人信息" placement="top">
                        <i class="el-icon-user point-cursor font-size-28"></i>
                    </el-tooltip>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>


<script>




</script>

<style>
    .top-bg{
        background-color: #69b2fb;
        border-bottom: 1px solid #333333;
        border-top: 1px solid #333333;
        /*控制div中内容垂直居中*/
        display:flex;
        justify-content:center;
        align-items:center;
    }

    .font-size-28{
        font-size: 28px;
    }


    /*调整任务待办提示信息*/
    .el-badge__content.is-fixed{
        top:2px !important;
    }

    .el-badge__content{
        font-size: 10px !important;
        height:16px !important;
        line-height: 16px !important;
        padding: 0 3px !important;
    }




</style>
