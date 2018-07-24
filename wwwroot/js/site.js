
// var button1 = document.getElementById("button1");
// var testButton = document.getElementsByClassName("test");
// alert(button1.innerHTML)
// console.log(button1)


// $(document).ready(function(){
//     $button1=$("#button1")
//     $test=  $(".test")
//     $productName= $("#proudctName")
//     $button1.on('click',function(){
//         $(productName).val("hello world")
//     })
//      $test.on('click',()=>{
//          alert($(productName).val())
//      })
// })


$(()=>{
    $button1=$("#button1")
    $noButton=$("#btnNo")
    $yesButton=$("#btnYes")



    $button1.on('click',()=>{
        $(".testmodal").modal('show')
        $(button1).hide()
    })

    $noButton.on('click',()=>{
        console.log("no clicked")
    })

    $yesButton.on('click',()=>{
        console.log("yes clicked")
    })


})