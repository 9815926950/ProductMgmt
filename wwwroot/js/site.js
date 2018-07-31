
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
    $modalBody = $("#m-body")


    
    $numberOne=$("#numberOne")
    $numberTwo=$("#numberTwo")
    $btnCalculate=$("#calculate")

    $btnCalculate.on('click',()=>{
        $.ajax({
            url:'/Product/Calculate',
            method:'Get',
            data:{ numberOne:$($numberOne).val(),numberTwo:$($numberTwo).val()},
            success:function(result){
                console.log(result)

            },
            error:()=>{
                console.log(error)
            }
        })
    })


    $button1.on('click', (e) => {
        var eventSource = e.target;
        // console.log($(eventSource).html())

        //  var productName = $(eventSource).data('product-name')
        //console.log(productName);

        $.ajax({
            url: "/Product/SayHello",
            method: "Get",
            data: { message: "hello my name is ramu ale" },
            success: function (result) {
                $($modalBody).html(result)
                // console.log(result)
            },
            error: function (errr) {
                console.log(err)
            }
        });

        $(".testmodal").modal('show')
        //$($modalBody).html(productName)
        // $(button1).hide()
    })

    $noButton.on('click', () => {
        console.log("no clicked")
    })

    $yesButton.on('click', (e) => {

        $(".testmodal").modal("hide")
        // console.log("yes clicked")
    })


})