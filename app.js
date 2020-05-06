$(document).ready(function () {
    // localStorage.setItem("data1", { task: "Do some things" });
    // localStorage.setItem("data", JSON.stringify({ task1: "Do some things" }));
    var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    //text will assign the text value to the id of currentDate to the currentDate object
    $("#currentDate").text(currentDate);
    $("#btnSubmit").on("click", function () {
        var textInput = $("#textInput6").val();
        localStorage.setItem("data6", JSON.stringify({ task: textInput }));
        // console.log(typeof localStorage.getItem("data").task);
        // console.log(JSON.parse(localStorage.getItem("data")).task);
        render6Data();
    });
    function render6Data() {
        var item = JSON.parse(localStorage.getItem("data6"));
        // console.log(item.task);
        if (item != null) {
            $("#textInput6").val(item.task);
        }
    }
    render6Data();
    render7Data();
    $("#btnSubmit2").on("click", function () {
        var textInput = $("#textInput7").val();
        localStorage.setItem("data7", JSON.stringify({ task: textInput }));
        // console.log(typeof localStorage.getItem("data").task);
        // console.log(JSON.parse(localStorage.getItem("data")).task);
        render7Data();
    });
    function render7Data() {
        var item = JSON.parse(localStorage.getItem("data7"));
        // console.log(item.task);
        if (item != null) {
            $("#textInput7").val(item.task);
        }
    }
});