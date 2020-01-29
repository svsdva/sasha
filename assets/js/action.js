"use strict";
var row1 = document.getElementById('row1');
var row1_t = document.getElementById('row1_text');

row1.addEventListener("click", function () {
    if (getComputedStyle(row1_t).display == "none") {
        row1_t.style.display = "inherit";
    } else {
        row1_t.style.display = "none";
    }
});
