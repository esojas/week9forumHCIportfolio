$(function(){
    $("button".on("click", function(){
        var text = $(this).text();
        alert(text)
    }))
})
$("#submit").click(function(){
    var name = $("#name").val();
    var name = $("#email").val();
    var name = $("#message").val();
    
    if (name == "" || email == "" || message == "") {
        swal({
            title: "Message Failed",
            text: "Fill in the blanks",
            icon: "error",
            button: "Continue",
          });


    }else{
        swal({
            title: "Message Sent",
            icon: "success",
            button: "Continue",
          });

    }

})