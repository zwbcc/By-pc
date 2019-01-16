$(function () {
    browserRedirect()
    var type = navigator.appName;
    if (type == "Netscape"){
        var lang = navigator.language;//获取浏览器配置语言，支持非IE浏览器
    }else{
        var lang = navigator.userLanguage;//获取浏览器配置语言，支持IE5+ == navigator.systemLanguage
    };
    if (!localStorage.currentLang) {
        //本地存储当前选中语言
        localStorage.currentLang = lang.substr(0, 2)
    } else {
        //定义当前语言
        var currLang = localStorage.currentLang;
        $("#select_name option[value=" + currLang + "]").attr("selected", true);
        $("#select_name").on('change', function () {
            localStorage.currentLang = $(this).children('option:selected').val();
            location.reload();
        });
    }
    loadProperties(localStorage.currentLang)
})
    
var renderNav = function(callback){
    $.get(By.apiPath + '/getTitle',function(data){
        callback && callback(data)
    })
}

var renderPic = function(callback){
    $.get(By.apiPath + '/getRotationChart',function(data){
        callback && callback(data)
    })
}

var getLan =  function(callback){
    $.get(By.apiPath + '/changeType', {
        lang: localStorage.currentLang 
    }, function (data) {
        renderNav(function(data){
            var list = data.object
            $('#nav_list').html(template('nav_lists',{list:list}))
        })
        renderPic(function(data){
            var pic = data.object
            $('.pics').html(template('pics_list',{model:pic}))
            $(".slideBox").slide({
            mainCell: ".bd ul",
            effect: "left",
            autoPlay: true
            }); 
        })
        callback && callback(data)
    })
}


var loadProperties = function (currentLang) {
    switch (currentLang) {
        case 'en':
            langi18n = 'en';
            break;
        case 'zh':
            langi18n = 'zh';
            break;
        default:
            langi18n = 'zh';
    }
}
var loadProperties = function(langi18n){
    jQuery.i18n.properties({ //加载资浏览器语言对应的资源文件
        name: 'message', //属性文件名     命名格式： 文件名_国家代号.properties  
        path: './statics/i18n/', //注意这里路径是你属性文件的所在文件夹  
        mode: 'map', //用Map的方式使用资源文件中的值   
        language: langi18n, //国家代号 name+language刚好组成属性文件名：strings+zh -> strings_zh.properties 
        //删除则自动选择浏览器语言
        callback: function () {
            $("[data-locale]").each(function () {
                $(this).html($.i18n.prop($(this).data("locale")));
            });
        }
    });
}

if (!By) var By = {};
By.ajax = function (options) {
    if (!options.url) return false;
    $.ajax({
        url: options.url,
        type: options.type || 'get',
        data: options.data || '',
        dataType: options.dataType || 'json',
        success: function (data) {
            if (data && data.error == '400') {
                return false;
            }
        },
        error: function (xhr, type, errorThrown) {
            options.error && options.error({
                xhr: xhr,
                type: type,
                errorThrown: errorThrown
            });
        }
    });
};
By.getUrlParam = function (key) {
    var strings = location.search.substr(1).split("&");
    var value = null;
    for (var i = 0; i < strings.length; i++) {
        var arr = strings[i].split("=");
        if (arr[0] == key) {
            /*urlcode 转码*/
            value = decodeURI(arr[1]);
            break;
        }
    }
    return value;
};
By.apiPath = '/by'


var browserRedirect =  function () {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        //跳转移动端页面
        window.location.href="http://mb.china-refrigeration.net";
    }
}
