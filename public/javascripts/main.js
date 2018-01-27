var animateObj = $(".animations");
var step = 0;


setInterval(function(){
  if(step>=3){
    step = 0;
  }
  animateObj.eq(step).css('color','#f8bf4b');
  animateObj.eq(step).siblings().css('color','#000');
  $('.mainComputer').attr('src','images/computer'+(step+1)+'.gif');
  step++;
},2000)


$(".lesson_tip").hover(function(){
    $(".lesson_tip span").css('color','#f8bf4b');
},function(){
    $(".lesson_tip span").css('color','#9f9e9d');
});


$(".tool_tip").hover(function(){
    $(".tool_tip span").css('color','#f8bf4b');
},function(){
    $(".tool_tip span").css('color','#9f9e9d');
});


$(".logo").hover(function(){
    $(".logo").attr('src','./images/logo1.png');
},function(){
    $(".logo").attr('src','./images/logo.png');
});
