
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

// $(document).ready(function(){
//   $button1=$("#button1")
//   $button1.on('click'),()=>{
//     $(".testmodal").modal('show')
//   }
// })


$(() => {
    $button1 = $("#button1")
    $noButton = $("#btnNo")
    $yesButton = $("#btnYes")


        $button1.on('click', (e) => {
            var eventSource = e.target;
            console.log($(eventSource).html())

            var productName = $(eventSource).data('product-name')
            console.log(productName);

        //$(".testmodal").modal('show')
        // $(button1).hide()
    })

    $noButton.on('click', () => {
        console.log("no clicked")
    })

    $yesButton.on('click', (e) => {

        
        
    
    
        //$(".testmodal").modal("hide")
       // console.log("yes clicked")
    })


})