<template>
  <div id="app">
      <el-row>
          <el-col :span="24">
              <topTab></topTab>
          </el-col>
      </el-row>
      <el-row :style="autoHeightNavigationAndContent">
          <!--左侧导航区域-->
          <el-col :span="3" class="left-menu-all">
              <div :class="{'index-page':true,'home-page-menu-is-active':homePageIsActive}" @click="openCloseIndexPage($event)">
                  <span class="index-page-span">首页</span>
              </div>
              <div class="grid-content bg-purple" :style="autoMeunHeight">
                  <left-resource @openNewMenu="openNewMenu" ref="callLeftResource"/>
              </div>
          </el-col>

          <!--右侧内容区域-->
          <el-col :span="21" class="right-content">
              <div class="grid-content bg-purple-light">
                  <RightContent ref="callRightContentToOpenTab" @toUnfold="toCallUnfoldMenu"/>
              </div>
          </el-col>
      </el-row>
  </div>
</template>

<script>

    import "./components/css/common.css"
    import TopTab from './components/TopTab'
    import LeftResource from './components/LeftResource'
    import RightContent from './components/RightContent'




    export default {
        data() {
            return {
                /*首页+菜单导航的高度*/
                autoHeightNavigationAndContent:{
                    height:''
                },
                /*菜单导航的高度*/
                autoMeunHeight:{
                    height:''
                },
                homePageIsActive:false


            }
        },
        name: 'App',
        components: {
            LeftResource,TopTab,RightContent
        },
        created(){
            /*vue实例被初始化后，添加监听页面变化事件*/
            window.addEventListener('resize',this.getScreenHeightTakeOutTop);
            this.getScreenHeightTakeOutTop();
        },
        methods:{
            getScreenHeightTakeOutTop(){
                /*设置菜单和内容的高度等于页面高度减去页面头部高度*/
                this.autoHeightNavigationAndContent.height = window.innerHeight-54 + 'px';
                this.autoMeunHeight.height = window.innerHeight-54-45 + 'px';
            },
            openNewMenu(){
                /*父组件调用子组件方法，需要在调用子组件的地方，写上ref，即这里的ref="callRightContentToOpenTab"，
                就可以调用子组件的方法及其属性了*/
                /*打开新的tab窗口*/
                /*判断已经打开了多少个窗口了，现在仅仅支持最多打开10个*/
                let existTab = this.$refs.callRightContentToOpenTab.editableTabs;
                if(existTab.length >= 15){
                    /*超过10个则不在打开，*/
                    this.$alert('', '最大支持15个标签，请先删除多余的标签', {
                        center: true,
                        confirmButtonText: '确定'
                    });
                    return;
                }
                this.$refs.callRightContentToOpenTab.addTab('555',"用户管理");
            },
            toCallUnfoldMenu(unique){
                //展开对应的菜单
                this.$refs.callLeftResource.openTabOfMenu(unique);
            },
            /*点击首页*/
            openCloseIndexPage(obj){
                //样式切换
                this.homePageIsActive = !this.homePageIsActive;
                console.log(obj)
                //其他所有菜单都不能被选中

                //tab切换到首页tab







            }


        }
    }
</script>

<style>
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }

    .home-page-menu-is-active{
        /*首页菜单被选中时样式*/
        background-color: #8a9bae;
        color:rgb(255, 255, 255) !important;
    }

    .home-page-menu-is-active:hover{
        background-color: #8a9bae !important;
    }



    body{
        margin: 0px;
        overflow: hidden;
        background-color: #F5F5F5;
    }

    .el-popup-parent--hidden{
        padding-right: 0px !important;
    }

    .left-menu-all,.right-content,.bg-purple{
        height: 100%;
    }
    .left-menu-all{
        background-color: #969696;
    }

    .default-scrollbar {
        width: 100%;
        height: 100%;
    }
    .flex-scrollbar {
        width: auto;
        height: auto;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }

    .index-page{
        height: 39px;
        border-bottom: 1px solid #333333;
        line-height: 39px;
        text-align: left;
        padding-left: 30px;
        color:rgb(0, 0, 0);
        font-size: 14px;
        cursor: pointer;
    }

    .index-page:hover{
        background-color: rgb(120, 120, 120);
    }
    .index-page:focus{
        background-color: red;
    }






</style>
