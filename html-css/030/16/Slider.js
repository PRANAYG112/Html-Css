var range = document.getElementById("range");

var output = document.getElementById("op");

output.innerHTML = range.value;

range.oninput = function() {
    output.innerHTML = this.value;
};