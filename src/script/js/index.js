define(['config'], function() {
	require(['jquery'], function() {
		    var $main=$('#main');
			var $box=$('#box');
			var $btn=$('#box ol li');
			var $oLi=$('#box ul li');
			var timer=null;
			var $num=0;
			var arr=['#ff0000','#fff','#92CDDC','#E5E9E7'];
			$box.hover(function(){
				clearInterval(timer);
			},function(){
			      timer=setInterval(function(){
			 	$num++;
				if($num>$btn.length-1){
					$num=0;
				}
				fn();
			 },3000)
			})
			
			
			$btn.on('click',function(){
				$num=$(this).index();
				fn();	
			})
			
			 timer=setInterval(function(){
			 	$num++;
				if($num>$btn.length-1){
					$num=0;
				}
				fn();
			 },3000)
			 
			 
			function fn(){
				$btn.eq($num).addClass('active').siblings('li').removeClass('active');
				$oLi.eq($num).animate({'opacity':1}).siblings('li').animate({'opacity':0});
				$main.css({background:arr[$num]});
			}
			
			var $btn=$('.floor_1-top ul li a');
			var $item=$('.floor_1-bottom-right .item');
			var $timer=null;
			$btn.on('mouseover',function(){
			 $(this).addClass('active1').parent().siblings('.floor_1-top ul li').children().removeClass('active1');
			 $item.eq($(this).parent().index()).addClass('show').siblings().removeClass('show');
			})
	});
});