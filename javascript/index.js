function respond() {
    alert("As you are giving Test,Its highly recommended to give test on desktop or laptop, If you give test on mobile or device which has small screen size as compared to Desktop Your Page may get wobble up and you will not be able to have real experience of Exam. Click 'OK' to continue or cancel this Test.");
}





var fullCorrectAnswers1 = 0;
var fullCorrectAnswers2 = 0;
var fullCorrectAnswers3 = 0;
var partiallyCorrectAnswers = 0;
var incorrectAnswers1 = 0;
var incorrectAnswers2 = 0;
var incorrectAnswers3 = 0;
var notAnswered = 0;
var notVisited = 0;
var totalPositiveMarks = 0;
var totalNegativeMarks = 0;
var finalScore = 0;
var acurracy = 0;



// time code start from here
let totalTime = 10800;
let min = 0;
let sec = 0;
let counter = 0;
let timer = setInterval(function() {
    counter++;
    min = Math.floor((totalTime - counter) / 60); //calculating min
    sec = totalTime - (min * 60) - counter;
    $('.timerBox p span').text(min + ":" +
        sec);
    if (counter == (totalTime + 1)) {

        alert("Time's Up. press OK to show result.");
        // result();
        clearInterval(timer);
    }

}, 1000); //timer set for 1 second
// time code end form here








// code for selection of question Starts

let sequenceQuestion = 1;
if (sequenceQuestion >= 1 && sequenceQuestion <= 6) {
    $("#sectionPattern").attr("src", "images/section_1_1.JPG");
    for (var x = 1; x <= 6; x++) {
        var y = "." + x;
        $(y).removeClass("opacity");
    }

}

function nextQuestion() {
    console.log(sequenceQuestion + "hello");


    // Answer to Options Starts

    if (sequenceQuestion >= 1 && sequenceQuestion <= 13) {
        for (var x = 1; x <= 4; x++) {
            var y = "#option" + x;
            if ($(y).is(':checked')) {
                answerList.push("" + x);
                var y = "." + (sequenceQuestion - 1);
                $(y).addClass("alterAnswered");
            }
        }
        answer[sequenceQuestion - 1].selected = answerList;
    } else {
        var t = document.getElementById('ID').value;
        answer[sequenceQuestion - 1].selected = t;
        if (t != '') {
            var y = "." + (sequenceQuestion - 1);
            $(y).addClass("alterAnswered");
        }
        document.getElementById('ID').value = '';

    }


    console.log(answerList);
    console.log(answer);
    console.log(sequenceQuestion);
    $('input[name=option]').prop('checked', false);
    answerList = [];


    // Answer to Options Ends


    // Answer to Keypad Starts





    // Answer to Keypad Ends





    var y = "." + sequenceQuestion;
    $(y).addClass("alternotAnswered");
    if (sequenceQuestion <= 18) {
        var x = "images/questions/" + sequenceQuestion + ".JPG";
        $("#realQuestion").attr("src", x);
        $("p.questionNo span").text(sequenceQuestion);
    } else {
        alert("You have reached the End of Paper Click Submit to check Result.");
    }
    if (sequenceQuestion >= 1 && sequenceQuestion <= 6) {

        $('input[name=option]').attr("type", "radio");
        $("#sectionPattern").attr("src", "images/section_1_1.JPG");
        $(".questionNo h3 span").text("1");
        for (var i = 1; i <= 9; i++) {
            var z = ".sec" + i;
            var Z = z + " a";
            if (i == 1) {
                $(z).addClass("BGC1");
                $(Z).css("color", "#fffbff");
            } else {
                $(z).removeClass("BGC1");
                $(Z).css("color", "rgb(105, 192, 221)");
            }
        }
        for (var x = 1; x <= 6; x++) {
            var y = "." + x;
            $(y).removeClass("opacity");
        }

    }
    if (sequenceQuestion >= 7 && sequenceQuestion <= 12) {



        $('input[name=option]').attr("type", "checkbox");
        $("#sectionPattern").attr("src", "images/section_1_2.JPG");
        $(".questionNo h3 span").text("2");
        for (var i = 1; i <= 9; i++) {
            var z = ".sec" + i;
            var Z = z + " a";
            if (i == 2) {
                $(z).addClass("BGC1");
                $(Z).css("color", "#fffbff");
            } else {
                $(z).removeClass("BGC1");
                $(Z).css("color", "rgb(105, 192, 221)");
            }
        }
        for (var x = 1; x <= 18; x++) {
            var y = "." + x;
            if (x >= 7 && x <= 12)
                $(y).removeClass("opacity");
            else {
                $(y).addClass("opacity");
            }
        }
    }
    if (sequenceQuestion >= 13 && sequenceQuestion <= 18) {




        $(".optionClick").css("display", "none");
        $(".keypadClick").css("display", "block");


        $("#sectionPattern").attr("src", "images/section_1_3.JPG");
        $(".questionNo h3 span").text("3");
        for (var i = 1; i <= 9; i++) {
            var z = ".sec" + i;
            var Z = z + " a";
            if (i == 3) {
                $(z).addClass("BGC1");
                $(Z).css("color", "#fffbff");
            } else {
                $(z).removeClass("BGC1");
                $(Z).css("color", "rgb(105, 192, 221)");
            }
        }
        for (var x = 1; x <= 18; x++) {
            var y = "." + x;
            if (x >= 13 && x <= 18)
                $(y).removeClass("opacity");
            else {
                $(y).addClass("opacity");
            }
        }
    }
    sequenceQuestion++;


}

var C = 0;
$("#save-n-next").click(nextQuestion);
$(".btnques").click(function() {
    sequenceQuestion = $(this).val();
    var y = "." + sequenceQuestion;
    if ($(y).hasClass("alterAnswered")) {
        if (sequenceQuestion >= 1 && sequenceQuestion <= 12) {
            $('input[name=option]').prop('checked', false);
            var a = answer[sequenceQuestion].selected;
            var length = a.length;
            for (var x = 0; x < length; x++) {
                var t = "#option" + a[x];
                $(t).prop("checked", true);
            }
            $("#option4").is(":checked") = true;
        } else {
            var x = answer[sequenceQuestion].selected;
            document.getElementById('ID').value = '';
            document.getElementById('ID').value = x;
        }
    }
    $(y).addClass("alternotAnswered");


    nextQuestion();
});
$("#review").click(function() {
    var y = "." + (sequenceQuestion - 1);
    $(y).addClass("alterMarked");
    $(y).removeClass("alternotAnswered");
    $(y).removeClass("alternotVisited");
    $('input[name=option]').prop('checked', false);
    nextQuestion();
});
$("#response").click(function() {
    var y = "." + (sequenceQuestion - 1);
    $(y).addClass("alternotAnswered");
    $(y).removeClass("alterMarked");
    $(y).removeClass("alternotVisited");
    $(y).removeClass("alterAnswered");
    $('input[name=option]').prop('checked', false);
});












// // code for selection of question Ends


var answerList = [];






$(".keypadClick").keydown(function(event) {
    return false;
});






function backspace() {
    var S = '';
    var input = "" + document.getElementById('ID').value;
    var length = input.length;
    for (var x = 0; x < (length - 1); x++) {
        S = S + input.charAt(x);
    }
    document.getElementById('ID').value = S;
}


function showResult() {
    var c = 0;
    for (var t = 1; t <= 18; t++) {

        var a1 = answer[t].selected;
        var a2 = answer[t].correct;
        if (t <= 12) {
            for (var x = 0; x < a1.length; x++) {
                for (y = 0; y < a2.length; y++) {
                    if (a1[x] == a2[y]) {
                        c++;
                    }
                }
            }
            if (c == a1.length && c == a2.length) {
                if (t <= 6)
                    fullCorrectAnswers1 += 3;
                else
                    fullCorrectAnswers2 += 4;
            } else if (t >= 7 && t <= 12 && c > 0 && c == a1.length && c < a2.length) {
                partiallyCorrectAnswers += c;
            } else if (a1 === 1)
                notVisited++;
            else if (a1.length === 0)
                notAnswered++;
            else if (c != a1.length) {
                if (t >= 1 && t <= 6)
                    incorrectAnswers1 += 1;
                else
                    incorrectAnswers2 += 2;
            }
        } else {
            if (a1 >= a2[0] && a1 <= a2[1])
                fullCorrectAnswers3 += 4;
            else
                incorrectAnswers3 += 0;
        }
        c = 0;
    }
    totalPositiveMarks = totalPositiveMarks + fullCorrectAnswers1 + fullCorrectAnswers2 + fullCorrectAnswers3 + partiallyCorrectAnswers;
    totalNegativeMarks = incorrectAnswers1 + incorrectAnswers2 + incorrectAnswers3;
    finalScore = totalPositiveMarks - totalNegativeMarks;
    acurracy = (finalScore / totalPositiveMarks) * 100;
    console.log(fullCorrectAnswers1 + " fullCorrectAnswers1");
    console.log(fullCorrectAnswers2 + " fullCorrectAnswers2");
    console.log(fullCorrectAnswers3 + " fullCorrectAnswers3");
    console.log(partiallyCorrectAnswers + " partiallyCorrectAnswers");
    console.log(incorrectAnswers1 + " incorrectAnswers1");
    console.log(incorrectAnswers2 + " incorrectAnswers2");
    console.log(incorrectAnswers3 + " incorrectAnswers3");
    console.log(notAnswered + " notAnswered");
    console.log(notVisited + " notVisited");
    console.log(totalPositiveMarks + " totalPositiveMarks");
    console.log(totalNegativeMarks + " totalNegativeMarks");
    console.log(finalScore + " finalScore");
    console.log(acurracy + "% acurracy");
}