// Write your JavaScript c

// var button1 = document.getElementById("button1");
// var testButton = document.getElementsByClassName("test");
// alert(button1.innerHTML)
// console.log(button1)

$(document).ready(function(){
   $button1 = $("#button1")
   $test = $(".test")
    $pName = $("#productName")
    
   $button1.on('click',function(){
        $(pName).val("Hello")
   })

   $test.on('click',()=>{
        alert($(pName).val())
   })
})
