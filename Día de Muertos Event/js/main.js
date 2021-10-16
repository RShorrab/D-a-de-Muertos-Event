function countdownTimeStart(){

    var countDownDate = new Date("Nov 1, 2021 00:00:00").getTime(); 
    
    var x = setInterval(function() 
    {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $(".dateDiv").html(
            `<div class="text-center">
                <h4>${days}</h4>
                <span>Days</span>
            </div>
            <div class="text-center">
                <h4>${hours}</h4>
                <span>Hours</span>
            </div>
            <div class="text-center">
                <h4>${minutes}</h4>
                <span>Minutes</span>
            </div>
            <div class="text-center">
                <h4>${seconds}</h4>
                <span>Seconds</span>
            </div>`)

        
        if (distance < 0) {
            clearInterval(x);
            $(".dateDiv").html(`<h4>Expired!</h4>`);
        }

    });
}
countdownTimeStart();


$(".activityDiv").click(function()
{
    $(this).siblings().slideToggle(1000)
})

$("textarea").keyup(function()
{
    var charCount = $(this).val().length;
    $("#charCounter").html(100-charCount);
})

let msgBtn = document.querySelector(".msgBtn");
let inputs = document.getElementsByClassName("form-control");
msgBtn.onclick = function()
{
    for(var i=0; i<inputs.length; i++)
    {
        inputs[i].value="";
    }
    $("#charCounter").html(100);
}