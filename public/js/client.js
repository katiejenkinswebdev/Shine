'use strict';

(function() {
  console.log("document ready!");
    var on = document.getElementById("on");
    console.log(on);
    
    var off = document.getElementById("off");
    console.log(off);

    on.addEventListener("click" , function() {
      console.log("You clicked on!");
      $.ajax({
        url: '/app.js',
        type: 'GET',
        success: function(res){
          console.log(res);
          // alert(res);
        }
      });
    });

    off.addEventListener("click" , function() {
      console.log("You clicked off!");
    });

}());
