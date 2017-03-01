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

    
    // console.log(buzzer1.addEventListener('change', emitValue.bind(null, 100)));
    // buzzer2.addEventListener('change', emitValue.bind(null, 100));

    //testing with sockets below

    // function emitValue(buzzValue, e) {
    //     socket.emit('eventName', {
    //         buzzValue: buzzValue,
    //         value: e.target.value
    //     });
    // }

    // buzzer1.addEventListener('change', emitValue.bind(null, 100));
    // buzzer2.addEventListener('change', emitValue.bind(null, 100));
    //
    // socket.on('connect', function(data) {
    //     socket.emit('join', 'Client is connected!');
    // });

    // socket.on('eventName', function(data) {
    //     var buzzValue = data.buzzValue;
    //     document.getElementById(buzzValue).value = data.value;
    // });
}());
