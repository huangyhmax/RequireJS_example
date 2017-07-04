/*入口 配置文件*/
console.log("sss");
require.config({
    baseUrl:'src/js/app',
    paths:{
        'jquery':'../lib/js/jquery-3.2.1' /*不需要写js后缀*/
    }
})

 require(['index']);


//  RequireJS/src/js/lib/js/jquery-3.2.1