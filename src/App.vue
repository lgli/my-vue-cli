<template>
  <div id="app">
      <el-row>
          <el-col :span="24">
              <topTab></topTab>
          </el-col>
      </el-row>
      <el-row :style="autoHeightNavigationAndContent">
          <el-col :span="3" class="left-menu">
              <div class="grid-content bg-purple">
                  <left-resource @openNewMenu="openNewMenu" ref="callLeftResource"/>
              </div>
          </el-col>
          <el-col :span="21" class="right-content">
              <div class="grid-content bg-purple-light">
                  <el-scrollbar class="default-scrollbar"
                                wrap-class="default-scrollbar__wrap"
                                view-class="default-scrollbar__view">
                        <RightContent ref="callRightContentToOpenTab"
                            @toUnfold="toCallUnfoldMenu"/>
                  </el-scrollbar>
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
                autoHeightNavigationAndContent:{
                    height:''
                }
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
                this.autoHeightNavigationAndContent.height = window.innerHeight-64 + 'px';
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
                alert(unique);
                alert("展开菜单");
                //展开对应的菜单



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

    body{
        margin: 0px;
        overflow: hidden;
        background-color: #F5F5F5;
    }

    .el-popup-parent--hidden{
        padding-right: 0px !important;
    }

    .left-menu,.right-content,.bg-purple{
        height: 100%;
    }
    .left-menu{
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





</style>
