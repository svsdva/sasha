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

var row2 = document.getElementById('row2');
var row2_t = document.getElementById('row2_text');

row2.addEventListener("click", function () {
    if (getComputedStyle(row2_t).display == "none") {
        row2_t.style.display = "inherit";
    } else {
        row2_t.style.display = "none";
    }
});

var row3 = document.getElementById('row3');
var row3_t = document.getElementById('row3_text');

row3.addEventListener("click", function () {
    if (getComputedStyle(row3_t).display == "none") {
        row3_t.style.display = "inherit";
    } else {
        row3_t.style.display = "none";
    }
});
