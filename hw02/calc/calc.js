(function() {
    "use strict";

    // Input field.
    var input_field = document.getElementById("input_field");

    function init() {
        var input = "";
        var first_input = "0";
        var operation_selected = "";

        // Numbers.
        var zero = document.getElementById("zero");
        var one = document.getElementById("one");
        var two = document.getElementById("two");
        var three = document.getElementById("three");
        var four = document.getElementById("four");
        var five = document.getElementById("five");
        var six = document.getElementById("six");
        var seven = document.getElementById("seven");
        var eight = document.getElementById("eight");
        var nine = document.getElementById("nine");


        // Operations.
        var add_equal = document.getElementById("add_equal");
        var sub = document.getElementById("sub");
        var mult = document.getElementById("mult");
        var divide = document.getElementById("divide");
        var decimal = document.getElementById("decimal");
        var clear = document.getElementById("clear");

        // Events listeners.
        zero.addEventListener("click", function() {
            input += zero.value;
            input_field.innerHTML = input;
        })

        one.addEventListener("click", function() {
            input += one.value;
            input_field.innerHTML = input;

        })

        two.addEventListener("click", function() {
            input += two.value;
            input_field.innerHTML = input;

        })

        three.addEventListener("click", function() {
            input += three.value;
            input_field.innerHTML = input;
        })

        four.addEventListener("click", function() {
            input += four.value;
            input_field.innerHTML = input;
        })

        five.addEventListener("click", function() {
            input += five.value;
            input_field.innerHTML = input;
        })

        six.addEventListener("click", function() {
            input += six.value;
            input_field.innerHTML = input;
        })

        seven.addEventListener("click", function() {
            input += seven.value;
            input_field.innerHTML = input;
        })

        eight.addEventListener("click", function() {
            input += eight.value;
            input_field.innerHTML = input;
        })

        nine.addEventListener("click", function() {
            input += nine.value;
            input_field.innerHTML = input;
        })

        decimal.addEventListener("click", function() {
            if (input_field.innerHTML.indexOf(".") == -1) {
                input += decimal.value;
                input_field.innerHTML = input;
            }
        })

        clear.addEventListener("click", function() {
            input = "";
            first_input = "";
            input_field.innerHTML = "0";
        });

        sub.addEventListener("click", function() {
            first_input = input_field.innerHTML;
            operation_selected = "sub";
            input = "";
        });

        mult.addEventListener("click", function() {
            first_input = input_field.innerHTML;
            operation_selected = "mult";
            input = "";
        })

        divide.addEventListener("click", function() {
            first_input = input_field.innerHTML;
            operation_selected = "divid";
            input = "";
        })

        add_equal.addEventListener("click", function() {
            switch (operation_selected) {
                case "sub":
                    input_field.innerHTML = Number(first_input) - Number(input_field.innerHTML);
                    operation_selected = "";
                    break;
                case "mult":
                    input_field.innerHTML = Number(first_input) * Number(input_field.innerHTML);
                    operation_selected = "";
                    break;
                case "divid":
                    input_field.innerHTML = Number(first_input) / Number(input_field.innerHTML);
                    operation_selected = "";
                    break;
                default:
                    first_input = Number(input_field.innerHTML) + Number(first_input);
                    input = "";
                    input_field.innerHTML = Number(first_input);
                    break
            }
        })


    }

    window.addEventListener('load', init, false);
})();