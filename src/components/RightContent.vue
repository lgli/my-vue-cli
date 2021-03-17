<!--右侧内容区域-->
<template>
    <el-col :span = "24" class="right-content">
        <el-tabs v-model="editableTabsValue" type="card" @tab-remove="removeTab" @tab-click="optThisTab">
            <!--v-bind:closeable="index != 0"表示第一个tab不显示关闭按钮。-->
            <el-tab-pane
                    v-for="(item, index) in editableTabs"
                    :key="item.name"
                    :label="item.title"
                    :name="item.name"
                    v-bind:closable="index!=0" >

              {{item.content}}+{{index}}


            </el-tab-pane>
        </el-tabs>



    </el-col>
</template>


<script>
    export default {
        data() {
            return {
                editableTabsValue: 'home_page',
                editableTabs: [{
                    title: '首页',
                    name: 'home_page',
                    content: '首页'
                }],
            }
        },
        methods: {
            addTab(uniqueId,tabName) {
                let isCanAdd = true;
                for(let index in this.editableTabs){
                    if(this.editableTabs[index].name === uniqueId.toString()){
                        isCanAdd = false;
                    }
                }
                if(!isCanAdd){
                    this.$alert('', '已经存在的tab标签，请重新输入标签名称', {
                        center: true,
                        confirmButtonText: '确定'
                    });
                    return;
                }
                let newTabName = uniqueId + '';
                this.editableTabs.push({
                    title: tabName,
                    name: newTabName,
                    content: 'New Tab content'
                });
                this.editableTabsValue = newTabName;
            },
            removeTab(targetName) {
                let tabs = this.editableTabs;
                let activeName = this.editableTabsValue;
                if (activeName === targetName) {
                    tabs.forEach((tab, index) => {
                        if (tab.name === targetName) {
                            let nextTab = tabs[index + 1] || tabs[index - 1];
                            if (nextTab) {
                                activeName = nextTab.name;
                            }
                        }
                    });
                }
                this.editableTabsValue = activeName;
                this.editableTabs = tabs.filter(tab => tab.name !== targetName);
            },
            optThisTab(){
                /*选中某个标签，对应的菜单导航栏需要选中到对应的菜单*/
                this.$emit("toUnfold",this.editableTabsValue);
            }
        }
    }




</script>

<style>
    .right-content{
        height: 100%;
        min-height: 100px;
    }

    .el-tabs{
        border-top:0px !important;
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

    .el-tabs__nav-scroll{
        height: 40px !important;
    }


</style>

