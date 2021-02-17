/*By Quinn0823*/

function copy() {
    var copy = document.getElementById("copy");
    copy.select();
    document.execCommand("Copy");
    alert("OK");
}