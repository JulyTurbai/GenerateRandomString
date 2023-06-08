'use strict'

const randomNum = ['1', '2', '3', '4', '5','6', '7', '8', '9'];

const randomUp = ['A','B', 'C', 'D', 'E', 'F' ,'G' ,'H' ,'I' ,'J' ,'K' ,'L',
 'M', 'N', 'O' ,'P', 'Q' ,'R', 'S', 'T' ,'U', 'V' ,'W', 'X' ,'Y' ,'Z'];

 const randomLow = ['a', 'b', 'c', 'd', 'e' ,'f', 'g','h' ,'i', 'j', 'k' ,'l' ,'m',
 'n', 'o', 'p' ,'q', 'r' ,'s' ,'t', 'u' ,'v', 'w' ,'x', 'y', 'z'];
 
let num1 = 0;



$(document).ready(function() {
    $("#number").change(function () {
        num1 = Number($("#number").val());
    });

    $("button").click(function() {
        let result = "";
        let arr = [];

        if(num1 == 0) {
            alert('Enter string length!');
        } else {
            if($("#check1").is(":checked")) {
                arr = arr.concat(randomNum);
            }
            if($("#check2").is(":checked")) {
                arr = arr.concat(randomUp);
            }
            if($("#check3").is(":checked")) {
                arr = arr.concat(randomLow);
            }

            if(arr.length == 0) {
                alert('Choose characters for your string')
            }
            for (let i = 0; i < num1; i++) {
                result += arr[Math.floor(Math.random() * arr.length)];
            }
            $("#result").val(result)
        }
    });
});














































 
















































