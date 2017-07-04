/*
 *layzeRander图片懒加载的JS实现
 *@author huangyh
 *@data 2017-07-03
*/
define(function(require) {
    var $=require('jquery');
    var layzeRender=(function(){
        function Exposure($target,callback){
            this.$target=$target;
            this.callback=callback;
            this.check();
            this.bind();

        }
        Exposure.prototype.bind=function(){
            var _this=this;
            var close;
            $(window).on('scroll',function(){
                if(close){
                    clearTimeout(close);
                }
                close=setTimeout(function() {
                    _this.check();
                }, 100);
            })
        }
        Exposure.prototype.check=function(){
            var _this=this;
            if(this.isShow(this.$target)){
                _this.callback(this.$target);//callback是个函数名
            }
        }
        Exposure.prototype.isShow=function(){
            var windowHeight=$(window).height();
            var scrollHeight=$(window).scrollTop();
            var offsetheight=this.$target.offset().top;
            var nodeheight=this.$target.height();
            if((offsetheight<scrollHeight+windowHeight) && (offsetheight+nodeheight>scrollHeight)){
                return true
            }else{
                return false
            }
        }
        return{
            init:function($target,callback){
                $target.each(function(idx,target){
                    new Exposure($(target),callback);
                })
            },
        }
    })()
    return layzeRender;
})


// layzeRender.init($('.pic-item img'),function($node){
//     console.log("执行一次");
//     loadimg($node);
// })