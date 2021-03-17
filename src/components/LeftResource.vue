<!--左侧菜单区域-->
<template>
    <el-col :span = "24" class="left-menu">
        <el-scrollbar class="default-scrollbar"
                      wrap-class="default-scrollbar__wrap"
                      view-class="default-scrollbar__view">
            <el-menu
                    ref="menu"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#969696"
                    text-color="#000000"
                    active-text-color="#ffffff"
                    :default-active="defaultActive"

                    class="menu-container">

                <el-submenu index="1">
                        <template slot="title">
                                <span>系统管理</span>
                        </template>
                    <el-menu-item index="1-1" @click="openNewMenu">用户管理</el-menu-item>
                    <el-menu-item index="1-2">角色管理</el-menu-item>
                    <el-menu-item index="1-3">资源菜单管理</el-menu-item>
                    <el-submenu index="1-4">
                        <template slot="title">
                            <span>开发者选项</span>
                        </template>
                        <el-menu-item index="1-4-1">错误日志</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                    <span slot="title">员工安全报告</span>
                </el-menu-item>
            </el-menu>
        </el-scrollbar>
    </el-col>


</template>






<script>

    export default {
        data(){
            return {
                defaultActive:'1-4'
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.info(key+keyPath);
            },
            handleClose(key, keyPath) {
                console.info(key+keyPath);
            },
            openNewMenu(){
                /*调用父组件的openNewMenu方法*/
                /*子组件调用父组件方法，需要在父组件引用子组件时，绑定方法，即app.vue中@openNewMenu，同时这个@后面的方法名
                就是这里调用的openNewMenu*/
                this.$emit('openNewMenu');
            },
            openTabOfMenu(menuIndex){
                console.log(menuIndex);
                //打开菜单
                // this.$refs.menu.open('1-4');
                this.defaultActive = '1-4';
            }
        }
    }




</script>

<style>

    .el-menu{
        border-right: 1px solid #969696 !important;
    }

    /*导航菜单高度，字体行高*/
    .el-menu-item, .el-submenu__title {
        height: 40px !important;
        line-height: 40px !important;
    }

    /*导航底部border*/
    .el-submenu__title, .el-menu-item{
        border-bottom: 1px solid #333333;
    }


    /*选中底部border*/
    .el-submenu.is-active .el-submenu__title {
        border-bottom: 1px solid #333333 !important;
    }

    /*控制子导航的宽度，elementui会index.css会设置宽度，导致样式不好看*/
    .el-submenu .el-menu-item{
        min-width: 1px !important;
    }

    .el-submenu__title i {
        color: #fafafa !important;
    }

    .el-submenu__title{
        padding-left: 0px !important;
    }

    .left-menu{
        height: 100%;
        min-height: 100px;
    }


    /*鼠标移动到滚动条上时，滚动条的颜色*/
    .el-scrollbar__thumb:hover{
        background-color: #333333 !important;
    }

    /*滚动条的颜色*/
    .el-scrollbar__thumb{
        background-color: #5e5e5e !important;
    }

    /*去掉横向滚动条*/
    .el-scrollbar__wrap.default-scrollbar__wrap {
        overflow-x: auto;
    }


    .el-submenu__title,.el-menu-item{
        padding-left:30px !important;
        text-align: left;
    }

    .el-submenu .is-active,.el-menu .is-active{
        /*color: black !important;*/
        background-color: #8a9bae !important;
    }








</style>

