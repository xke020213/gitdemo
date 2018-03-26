// 从url取值
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}


function GetRequest() { 
    var url = decodeURI(decodeURI(location.search)); 
    var theRequest = new Object(); 
    if (url.indexOf("?") != -1) { 
        var str = url.substr(1); 
        strs = str.split("&"); 
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]); 
        }
        return theRequest;
    }
}
var postData = GetRequest();


// 时间格式化
Date.prototype.Format = function(fmt)  
{ 
 var o = {  
  "M+" : this.getMonth()+1,         //月份  
  "d+" : this.getDate(),          //日  
  "h+" : this.getHours(),          //小时  
  "m+" : this.getMinutes(),         //分  
  "s+" : this.getSeconds(),         //秒  
  "q+" : Math.floor((this.getMonth()+3)/3), //季度  
  "S" : this.getMilliseconds()       //毫秒  
 };  
 if(/(y+)/.test(fmt))  
  fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   //$1第一个组
 for(var k in o)  
  if(new RegExp("("+ k +")").test(fmt))  
 fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));  
 return fmt;  
} 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423  
// (new Date()).Format("yyyy-M-d h:m:s.S")   ==> 2006-7-2 8:9:4.18  