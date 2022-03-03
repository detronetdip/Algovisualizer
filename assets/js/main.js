"use strict";

createGraphBar();

function mains() {
  selectionSort(180);
}

function maini() {
  insertionSort(180);
}

function mainQ() {
  quickSort(180);
}
function getname() {
  let n = document.getElementById("algon").value;
  if (n == "ss") {
    mains();
  } else if (n == "is") {
    maini();
  } else if (n == "qs") {
    mainQ();
  }else if (n == "bs") {
    Bs(180);
  }
}