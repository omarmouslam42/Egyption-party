

let navWidth = $(".nav-side").innerWidth();

$(".nav-side").animate({ left: -navWidth } ,0);

function checkOpenOrClose() {
    if ($(".nav-side").css("left")== "0px") {

        $(".nav-side").animate({ left: -navWidth } ,500);
    }
    else{
        $(".nav-side").animate({ left: 0 } ,500);
    }
}

if ($(document).ready()) {
    $(".reloadlayer").fadeOut(500)
    $(document.body).css("overflow" , "visible")
}

$(document).ready(function(){
    $(".openclick").click(function (){checkOpenOrClose()})
    $(".closeIcon").click(function (){checkOpenOrClose()})
    $(".innerdiv").click(function (){
        $(this).find(".details-caption").slideToggle(800 )
        $(this).siblings().children().next().slideUp(800)
        
    })



    let countDownDate =new Date("dec 31, 2022 23:59:59").getTime();
    let counter = setInterval(() => {
        let dateNow = new Date().getTime();
        let orderDate = countDownDate - dateNow
        let seconds = Math.floor( orderDate % (1000 * 60 )/ 1000)
        let minutes = Math.floor(orderDate % (1000 * 60 * 60) / (1000 * 60))
        let hours = Math.floor(orderDate % (1000 * 60 * 60 * 24)/(1000 * 60 * 60))
        let days = Math.floor(orderDate / (1000 * 60 * 60 * 24))
        
        $(".days").html(days +" D") 
        $(".hours").html(hours +" h") 
        $(".minutes").html(minutes +" m") 
        $(".seconds").html(seconds +" s") 
        if (orderDate < 0) {
            clearInterval(counter)
        }
    }, 1000);

    $("textarea").keyup(function (){
        let words = 100;
        let textareaLeanth = $("textarea").val().length;
        let orderLength = words -textareaLeanth
        console.log(orderLength);
        if (orderLength < 0) {
            $(".length").html("your available character finished")
        }
        else{
        $(".length").html(orderLength)
        }
    })

    $(".nav-links a").click(function () {
        let anchorHref = $(this).attr("href");
        let sextionOffsetTop = $(anchorHref).offest().top;
        $("body , html").animate({ scrollTop : sextionOffsetTop } , 5000)
    })






})


