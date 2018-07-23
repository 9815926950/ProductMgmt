$(function () {
    alert("hello iam jquery")

    $newbutton1 = $("#newbutton1")

    $newtest = $("#newproductName")
    $newbutton1.on('click', () => {
        console.log("button 1 click")
        $testboxvalue = $($newtest).val()
        console.log($testboxvalue)
        $(newbutton1).toggleClass("btn btn-danger") // to change the color of the button
    })


})