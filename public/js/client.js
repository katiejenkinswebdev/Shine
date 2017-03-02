'use strict';

(function() {
  console.log("document ready!");
    // var socket = io.connect(window.location.hostname + ':' + 3000);
    var on = document.getElementById("on");
    console.log(on);
    var off = document.getElementById("off");
    console.log(off);

    on.addEventListener("click" , function() {
      console.log("You clicked on!");
    });

    off.addEventListener("click" , function() {
      console.log("You clicked off!");
    });

}());
