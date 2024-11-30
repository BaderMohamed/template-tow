let imgList = $(".img-card img");
let imgArray=[];
let lightBoxContainer = document.getElementById("lightBoxContainer");
let lightBoxItem = document.getElementById("lightBoxItem");
let prevBtn =document.getElementById("prev");
let nextBtn =document.getElementById("next");
let closeBtn =document.getElementById("close");
let currentSlideIndex = 0;


for (var i=0;i<imgList.length; i++)
{
    imgArray.push(imgList[i]);
    
}
$(".back-gry i").click(function(eventInfo){

    currentSlideIndex = ((eventInfo).currentTarget.classList[3]);
    lightBoxContainer.style.display ="flex";
    lightBoxItem.style.backgroundImage =`url(${imgArray[currentSlideIndex].getAttribute("src")})`;
    

    document.body.addEventListener("keydown",function(e){
            if(e.keyCode == 39)
            {
                nextSlide();
            }
            else if(e.keyCode == 37)
            {
                prevSlide();
            }
            else if(e.keyCode == 27)
            {
                closeSlide();
            }
        })
})
    
       






function nextSlide(){
    currentSlideIndex++;
  if(currentSlideIndex==imgArray.length)
  {
    currentSlideIndex=0;
  }
    lightBoxItem.style.backgroundImage =`url(${imgArray[currentSlideIndex].getAttribute("src")})`;

}
function prevSlide(){
    currentSlideIndex--;
  if(currentSlideIndex<0)
  {
    currentSlideIndex=imgArray.length -1;
  }
    lightBoxItem.style.backgroundImage =`url(${imgArray[currentSlideIndex].getAttribute("src")})`;

}
function closeSlide(){
    lightBoxContainer.style.display ="none";
}
lightBoxContainer.addEventListener("click",function(e){
    if(e.target.id != "lightBoxItem" && e.target.id != "prev" && e.target.id != "next")
    {
        closeSlide();
    }
})

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
closeBtn.addEventListener("click", closeSlide);



let aboutOffset = $("#about").offset().top;
$(window).scroll(function(){
    let wScroll = $(window).scrollTop();

    if(wScroll > aboutOffset-30){
        $("#navbar").css("backgroundColor","rgba(0,0,0,0.5)");
        $("#btnUp").fadeIn(500);
    }
    else 
    {
        $("#navbar").css("backgroundColor","rgba(0,0,0,0)");
        $("#btnUp").fadeOut(500);
    }
});

$("#btnUp").click(function(){
    $("html,body").animate({scrollTop :"0"},1000)
});

$("a").click(function(){
    let href = $(this).attr("href");
    let hrefOffset =  $(href).offset().top;
    $("body ,html").animate({scrollTop:hrefOffset},1000);
    });




$("#graphic").click(function (e) { 
    $("#all").removeClass("active-li");
    $("#web-design").removeClass("active-li");
    $("#branding").removeClass("active-li");
    $("#graphic").addClass("active-li");
    
    
    if(document.getElementById("all").classList.contains("show-li")){
        $("#all").removeClass("show-li");
        $("#graphic").addClass("show-li");
        $(".web-design").hide(1000,function(){ $(".web-design-col").addClass("d-none");});
        $(".branding").hide(1000,function(){  $(".branding-col").addClass("d-none");});
    
    }
    else if(document.getElementById("web-design").classList.contains("show-li"))
    {
        $("#web-design").removeClass("show-li");
        $("#graphic").addClass("show-li");
        $(".web-design").hide(1000,function(){$(".web-design-col").addClass("d-none")});
        $(".graphic-col").removeClass("d-none");
        $(".graphic").show(1000);
    }
    else if (document.getElementById("branding").classList.contains("show-li"))
    {
        $("#branding").removeClass("show-li");
        $("#graphic").addClass("show-li");
        $(".branding").hide(1000,function(){$(".branding-col").addClass("d-none")});
        $(".graphic-col").removeClass("d-none");
        $(".graphic").show(1000);
    }
});

$("#web-design").click(function (e) { 
    $("#all").removeClass("active-li");
    $("#graphic").removeClass("active-li");
    $("#branding").removeClass("active-li");
    $("#web-design").addClass("active-li");
    
    if(document.getElementById("all").classList.contains("show-li")){
        $("#all").removeClass("show-li");
        $("#web-design").addClass("show-li");
        $(".graphic").hide(1000 ,function(){$(".graphic-col").addClass("d-none")});
        $(".branding").hide(1000,function(){$(".branding-col").addClass("d-none")});
    }
    else if(document.getElementById("graphic").classList.contains("show-li"))
    {
        $("#graphic").removeClass("show-li");
        $("#web-design").addClass("show-li");
        $(".graphic").hide(1000 ,function(){$(".graphic-col").addClass("d-none")});
        $(".web-design-col").removeClass("d-none");
        $(".web-design").show(1000);
    }
    else if (document.getElementById("branding").classList.contains("show-li"))
    {
        $("#branding").removeClass("show-li");
        $("#web-design").addClass("show-li");
        $(".branding").hide(1000 ,function(){$(".branding-col").addClass("d-none")});
        $(".web-design-col").removeClass("d-none");
        $(".web-design").show(1000);
    }
});

$("#branding").click(function (e) { 
    $("#all").removeClass("active-li");
    $("#web-design").removeClass("active-li");
    $("#graphic").removeClass("active-li");
    $("#branding").addClass("active-li");
    
    if(document.getElementById("all").classList.contains("show-li")){
        $("#all").removeClass("show-li");
        $("#branding").addClass("show-li");
        $(".web-design").hide(1000, function(){$(".web-design-col").addClass("d-none")});
        $(".graphic").hide(1000 ,function(){$(".graphic-col").addClass("d-none")});
    }
    else if(document.getElementById("web-design").classList.contains("show-li"))
    {
        $("#web-design").removeClass("show-li");
        $("#branding").addClass("show-li");
        $(".web-design").hide(1000, function(){$(".web-design-col").addClass("d-none")});
        $(".branding-col").removeClass("d-none");
        $(".branding").show(1000);
    }
    else if (document.getElementById("graphic").classList.contains("show-li"))
    {
        $("#graphic").removeClass("show-li");
        $("#branding").addClass("show-li");
        $(".graphic").hide(1000,function(){$(".graphic-col").addClass("d-none")});
        $(".branding-col").removeClass("d-none");
        $(".branding").show(1000);
    }
});

$("#all").click(function (e) { 
    $("#graphic").removeClass("active-li");
    $("#web-design").removeClass("active-li");
    $("#branding").removeClass("active-li");
    $("#all").addClass("active-li");
    
    if(document.getElementById("graphic").classList.contains("show-li")){
        $("#graphic").removeClass("show-li");
        $("#all").addClass("show-li");
        $(".web-design-col").removeClass("d-none");
        $(".branding-col").removeClass("d-none");
        $(".web-design").show(1000);
        $(".branding").show(1000);
    }
    else if(document.getElementById("web-design").classList.contains("show-li"))
    {
        $("#web-design").removeClass("show-li");
        $("#all").addClass("show-li");
        $(".graphic-col").removeClass("d-none");
        $(".branding-col").removeClass("d-none");
        $(".graphic").show(1000);
        $(".branding").show(1000);
    }
    else if (document.getElementById("branding").classList.contains("show-li"))
    {
        $("#branding").removeClass("show-li");
        $("#all").addClass("show-li");
        $(".web-design-col").removeClass("d-none");
        $(".graphic-col").removeClass("d-none");
        $(".web-design").show(1000);
        $(".graphic").show(1000);
    }
});



var typed = new Typed('.element',{
    strings: ["Professional Web Designer", "Professional Front End Developer"],
    typeSpeed: 80,
    backSpeed: 100,
    smartBackspace: false,
    showCursor: false,
    
})
