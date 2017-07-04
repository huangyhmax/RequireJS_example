define(['jquery','gotop','carousel', 'layzeRender'], function($, GoTop, Carousel, layzeRender) {
	var gotop=new GoTop();
    gotop.createNode();
    gotop.bindEvent();

    Carousel.init($('.container'));

    function loadimg($img){
        if($img.attr('src')==$img.attr('data-src')){
            return;
        }else{
            return $img.attr('src',$img.attr('data-src'))
        }
    }
    layzeRender.init($('.pic-item img'),function($node){
        // console.log(1111);
        loadimg($node);
    })
});