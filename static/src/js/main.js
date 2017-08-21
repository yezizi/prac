/**
 * Created by hezcs04 on 2017/5/16.
 */
//缩放比例
if(/Android (\d+\.\d+)/.test(navigator.userAgent)){
    var version = parseFloat(RegExp.$1);
    if(version>2.3){
        var phoneScale = parseInt(window.screen.width)/640;
        document.write('<meta name="viewport" content="width=640, minimum-scale = '+ phoneScale +', maximum-scale = '+ phoneScale +'">');
    }else{
        document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
    }
}else{
    document.write('<meta name="viewport" content="width=640, user-scalable=no">');
}

$(function(){
    $.fn.fullpage({
        anchors:['page1', 'page2', 'page3', 'page4', 'page5'],
        loopBottom:true,
        afterLoad:function(anchorLink,index){
            if(index == 2){
                $('.section2').find('.title-english').delay(500).animate({

                    left: '200px'
                }, 1500, 'easeOutBounce');

                $('.section2').find('.img2').delay(2500).fadeIn(1500);
            }
        },
        onLeave: function(index, direction){
            if(index == '2'){
                $('.section2').find('.title-english').delay(500).animate({
                    left: '-150%'
                },0, 'easeOutBounce');
                $('.section2').find('.img2').fadeOut();
            }
        }
    })
})