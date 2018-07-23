
// var button1 = document.getElementById("button1");
// var testButton = document.getElementsByClassName("test");
// alert(button1.innerHTML)
// console.log(button1)


$(document).ready(function(){
    $button1=$("#button1")
    $test=  $(".test")
    $productName= $("#proudctName")
    $button1.on('click',function(){
        $(productName).val("hello world")
    })
     $test.on('click',()=>{
         alert($(productName).val())
     })
})
