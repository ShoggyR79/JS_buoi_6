function findN() {
    var count = 0;
    var sum = 0;

    while (sum < 10000) {
        sum += count;
        count++;
    }
    document.getElementById("outputProb1").innerHTML = count;
}

function exponentSum(event) {
    event.preventDefault();
    var x = parseInt(document.getElementById("prob2x").value);
    var n = parseInt(document.getElementById("prob2n").value);

    var count2 = 1;
    var sum = 0;

    while (count2 < n) {
        sum += Math.pow(x, count2);
        count2++;
    }

    document.getElementById("footerProb2").className = "card-footer d-block";
    document.getElementById("prob2Output").innerHTML = sum;


}

function factorialFind(event) {
    event.preventDefault();
    var num = parseInt(document.getElementById("factNum").value);

    var total = num;
    var count = num;

    while (count > 1) {
        count--;
        total *= count;
    }

    document.getElementById("footerFactorial").className = "card-footer d-block";
    document.getElementById("factorialOutput").innerHTML = total;


}

function createDiv() {
    output = "";
    for (var i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            output += i + '<div class= "row bg-danger"><p></p></div>';
        } else {
            output += i + "<div class='row bg-success'><p></p></div>";
        }
    }
    document.getElementById("outputProb4").innerHTML = output;
}