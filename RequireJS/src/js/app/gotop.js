/*
 *gotop回到顶部的JS实现
 *@author huangyh
 *@data 2017-07-03
*/

define(['jquery'], function($) {
    
    function GoTop(){
        console.log($)
        console.log('hahah')
        this.target='<div class="ct gotop"><div class="triangle"></div>回到顶部</div>' /**/
    }
    GoTop.prototype.createNode=function(){
        $('.session').append(this.target);
    }
    GoTop.prototype.bindEvent=function(){
        $('.gotop').click(function(){
            $(window).scrollTop(0)
            return; 
        })
    }
    return GoTop;
});

// var gotop=new GoTop();
// gotop.createNode();
// gotop.bindEvent();