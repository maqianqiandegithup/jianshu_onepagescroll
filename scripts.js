/**
 * 为了统一管理，主要的由自己写的js代码全都放在这一个js文件中
 */

/**
 * 采用ddfullscreenslider对象来完成上下滑动的功能，同时页面内容动态加载
 */
var fss;
$(function() {
	fss = new ddfullscreenslider({
		sliderid: 'dowebok',
        /**
         * index 指示当前slide的，从1开始，但是所有的img和title以及intro指针从0开始，需要减1
         * if条件语句，使得加载当前页时，隐藏其他slide中的内容，确保滑动过程中一直都有图片和文字的滑动动画。
        */
        onslide: function($slide, index) {
           
			 $(".img").eq(index-1). slideDown("slow",intro(index));
              $(".title").eq(index-1). slideDown("slow");
             
              
              if(index!=1){ $(".img").eq(0).hide("slow");$(".title").eq(0).hide("slow"); }
              
              if(index!=2){ $(".img").eq(1).hide("slow");$(".title").eq(1).hide("slow");}
              if(index!=3){ $(".img").eq(2).hide("slow");$(".title").eq(2).hide("slow");}
              if(index!=4){ $(".img").eq(3).hide("slow");$(".title").eq(3).hide("slow");}
		}

	});
});
/**
 * 写下面的函数是为了实现先图片和大标题后以后再出现副标题
 */
function intro(index){

     $(".intro").eq(index-1). slideDown(2000);
      if(index!=1){ $(".intro").eq(0).hide("slow");}
     if(index!=2){ $(".intro").eq(1).hide("slow");}
    if(index!=3){ $(".intro").eq(2).hide("slow");}
    if(index!=4){ $(".intro").eq(3).hide("slow");}
}


/**
 * Createliuxing函数用来生成我们所需要的流星
*slideId不同的页面id
 * liuId表示新生成的流星的id
 
 */


function Createliuxing2(slideId,liuId){
   var liuxing= document.createElement("div");

   var l1=Math.random();
  

   if(l1>0.3&&l1<0.5){
       l1=l1-0.2;
   }
   if(l1>0.5&&l1<0.7){
       l1=l1+0.2;
   }
   
   liuxing.style.top="-5%";
   liuxing.style.left=l1*100+'%';
   liuxing.className="liuxing";

   liuxing.id=liuId;
 
        $(document).ready(function(){$("#"+slideId).append(liuxing); 
            $("#"+liuId).animate({
        width:'4px',
        height:'4px',
        top:'90%',
      
       borderRadius:'2px',
       opacity:'0.7',
   },2000,function(){$("#"+liuId).animate({ opacity:'0'},100,function(){
    
     $("#"+liuId).remove();
     
})});
 
});
   
}

/**
 * 用构造函数的方式生成星星对象
 * claName表示流星的class名
 */
function Star1(claName){
    var  star= document.createElement("div");
     
    var t2=0.7+Math.random()*0.1;
   var l2=Math.random()
   if(l2>0.2&&l2<0.5){
       l2=l2-0.25;
   }
   if(l2>0.5&&l2<0.8){
       l2=l2+0.2;
   }
  
    star.className=claName;
   star.style.position='absolute';
   star.style.top=t2*100+'%';
   star.style.left=l2*100+'%';
   star.style.width='4px';
   star.style.height='4px';
   star.style.borderRadius='2px';
   star.style.backgroundColor='white';
   star.opacity='1';
    return star;
}




/*下面的这个动作函数用来控制第一屏的动画 ，第一屏的动画和其他屏的不同，一次加载出来以后一直都在，所以需要单独设置*/
$(document).ready(function(){
  
    $("#biaoti").slideDown("slow");
    $("#pc").slideDown("slow");
      $("#mt").slideDown("slow");
					
});

/**下面调用星星闪烁的语句 通过不同的类名和setInterval时间间隔的不同来使得星星交替闪烁。
setInterval(xing1,500);
*/
  setInterval("$('.'+'xing0').fadeToggle('slow');",300);
 setInterval("$('.'+'xing1').fadeToggle('slow');",500);
 setInterval("$('.'+'xing2').fadeToggle('slow');",700);
 

