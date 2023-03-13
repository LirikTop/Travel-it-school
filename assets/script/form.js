var modal = document.getElementById('id01');
var body = document.getElementsByTagName('body');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}