/**
 * 全局定义的一些公共方法
 * @author lgli
 * @param {Object} Vue
 */
import Vue from 'vue'
(function(Vue){

    /**
     * 时间操作工具
     */
    var DateOperateUtils = {

        /**
         * 定义一些常量数据
         */
        CONSTANT : {
            YEAR : 'y', QUARTER : 'q', MONTH : 'm',DAY : 'd', HOURS : 'h', MINUTE : 'mi', SECOND : 's',
            WEEK : 'w', ZERO_MONTH : 'zm', ZERO_DAY : 'zd',	ZERO_HOURS : 'zh', APM_HOURS : 'H',
            ZERO_APM_HOURS : 'zH', ZERO_MINUTE : 'zmi' , ZERO_SECOND : 'zs'
        },
        /**
         * 时间格式
         */
        DATE_FORMAT : {
            STANDARD_YMD : 'y-zm-zd',
            STANDARD_YMDHMISS : 'y-zm-zd zH:zmi:zs',
        },
        /**
         * 时间加减工具
         * @param {Object} intervalType 加减类型
         * 可选类型：
         * 		y:年份;q:季度;m:月;w:周;d:日;h:小时;mi:分钟;s:秒
         * @param {Object} number 加减数量，对应加减类型计算
         * @param {Object} date 需要被计算的日期，如果为空，则默认当前日期
         * @return {String} yyyy-MM-dd HH:mi:ss，返回年月日时分秒格式的时间
         */
        dateChange : function(intervalType,number,date){
            if(date == null){
                date = new Date();
            }
            try{
                switch(intervalType){
                    case  this.CONSTANT.YEAR  :  {
                        date.setFullYear(date.getFullYear()+number);
                        break;
                    }
                    case  this.CONSTANT.QUARTER  :  {
                        date.setMonth(date.getMonth()+number*3);
                        break;
                    }
                    case  this.CONSTANT.MONTH  :  {
                        date.setMonth(date.getMonth()+number);
                        break;
                    }
                    case  this.CONSTANT.WEEK  :  {
                        date.setDate(date.getDate()+number*7);
                        break;
                    }
                    case  this.CONSTANT.DAY  :  {
                        date.setDate(date.getDate()+number);
                        break;
                    }
                    case  this.CONSTANT.HOURS  :  {
                        date.setHours(date.getHours()+number);
                        break;
                    }
                    case  this.CONSTANT.MINUTE  :  {
                        date.setMinutes(date.getMinutes()+number);
                        break;
                    }
                    case  this.CONSTANT.SECOND  :  {
                        date.setSeconds(date.getSeconds()+number);
                        break;
                    }
                    default  :  {
                        date.setDate(date.getDate()+number);
                        break;
                    }
                }
                return date.getFullYear() +
                    '-' + ((date.getMonth() + 1)<10?'0'+(date.getMonth() + 1):((date.getMonth() + 1)+'')) +
                    '-' + (date.getDate()<10?('0'+date.getDate()):date.getDate())+' '+date.getHours() +
                    ':' + date.getMinutes() + ':' + (date.getSeconds()<10?('0'+date.getSeconds()):date.getSeconds());
            }catch(exception){
                console.error(exception);
                console.error("输入的不是时间!!!");
            }
            return null;
        },

        /**
         * 时间格式转化工具
         * @param {Object} date 需要转化的时间
         * 		如果传入的时间为空，则转化当前时间
         * @param {String} timeFormart 希望转化的格式
         * 		直接按照根据y(年)m(月)d(日)h(时)mi(分)s(秒)转化
         * 		自己传入自定义的转化格式
         * 		规则：
         * 			1.年份只返回yyyy格式的
         * 			2.月份如果不需要补充各位数前面的0，则传入m,否则传入zm,同理时分秒
         * 			3.小时，如果需要12小时制的，则传入h，否则传入H
         * 		例，如果传入y-zm-zd zH:zmi:zs 则返回2021-03-10 16:06:02
         * @return {String}
         */
        dateConvertToString : function(date,timeFormart){
            if(date == null){
                date = new Date();
            }
            if(timeFormart == null){
                timeFormart = this.DATE_FORMAT.STANDARD_YMD;
            }
            try{
                var year = date.getFullYear();
                var month = date.getMonth()+1;
                var zMonth = date.getMonth()+1;
                if(month<10){
                    zMonth = '0'+ month;
                }
                var day = date.getDate();
                var zday = date.getDate();
                if(day<10){
                    zday = '0'+ day;
                }
                var hours = date.getHours();
                var zhours = date.getHours();
                if(hours<10){
                    zhours = '0'+ hours;
                }
                var troditionHours = date.getHours();
                var ztroditionHours;
                if(troditionHours>12){
                    troditionHours = troditionHours - 12;
                }
                if(troditionHours < 10){
                    ztroditionHours = '0'+troditionHours;
                }else{
                    ztroditionHours = troditionHours;
                }
                var minute = date.getMinutes();
                var zminute = date.getMinutes();
                if(minute<10){
                    zminute = '0'+ minute;
                }
                var second = date.getSeconds();
                var zsecond = date.getSeconds();
                if(second<10){
                    zsecond = '0'+ second;
                }
                //替换年
                timeFormart = timeFormart.replace(this.CONSTANT.YEAR,year);
                //替换分钟，因为分钟会有和月份的替换冲突，所以先替换分钟
                timeFormart = timeFormart.replace(this.CONSTANT.ZERO_MINUTE,zminute);
                timeFormart = timeFormart.replace(this.CONSTANT.MINUTE,minute);
                //替换月，先判断是否需要加0
                timeFormart = timeFormart.replace(this.CONSTANT.ZERO_MONTH,zMonth);
                timeFormart = timeFormart.replace(this.CONSTANT.MONTH,month);
                //替换日，先判断是否需要加0
                timeFormart = timeFormart.replace(this.CONSTANT.ZERO_DAY,zday);
                timeFormart = timeFormart.replace(this.CONSTANT.DAY,day);
                //替换小时
                timeFormart = timeFormart.replace(this.CONSTANT.ZERO_APM_HOURS,ztroditionHours);
                timeFormart = timeFormart.replace(this.CONSTANT.APM_HOURS,troditionHours);
                timeFormart = timeFormart.replace(this.CONSTANT.ZERO_HOURS,zhours);
                timeFormart = timeFormart.replace(this.CONSTANT.HOURS,hours);
                //替换秒
                timeFormart = timeFormart.replace(this.CONSTANT.ZERO_SECOND,zsecond);
                timeFormart = timeFormart.replace(this.CONSTANT.SECOND,second);
            }catch(exception){
                console.error(exception);
                console.error("输入的不是时间!!!");
            }
            return timeFormart;
        },


        /**
         * 比较两个时间的大小
         * @param {Object} firstDate 前一个时间
         * @param {Object} secondDate 后一个时间
         * @return {boolean} true:前一个时间大;false:前一个时间小于等于后一个时间
         */
        compareDateOfTwo : function(firstDate,secondDate){
            try{
                var oDate1 = new Date(firstDate);
                var oDate2 = new Date(secondDate);
                if(oDate1.getTime() > oDate2.getTime()){
                    return true;
                }
            }catch(exception){
                console.error(exception);
                console.error("输入的不是时间!!!");
            }

            return false;
        },

        /**
         * 字符串转时间
         * @param {Object} str 字符串
         */
        stringConvertToDate : function(str){
            return new Date(str);
        }
    };
    Vue.prototype.DateOperateUtils = DateOperateUtils;
})(Vue);
