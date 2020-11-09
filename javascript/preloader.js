var quotes = [" An investment in knowledge pays the best interest.",
    "Change is the end result of all true learning.",
    "Education is the passport to the future,<br> for tomorrow belongs to those who prepare for it today.",
    " The roots of education are bitter, but the fruit is sweet.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "Education without values, as useful as it is,<br> seems rather to make man a more clever devil.",
    "The learning process continues until the day you die.",
    "Education is not the filling of a pail, but the lighting of a fire.",
    "Develop a passion for learning. If you do, you will never cease to grow.",
    "Education is not preparation for life; education is life itself."
]
var authors = ["- Benjamin Franklin",
    "– Leo Buscaglia",
    "– Malcolm X",
    "– Aristotle",
    " ― Mahatma Gandhi",
    "― C.S. Lewis",
    "– Kirk Douglas",
    "― W.B. Yeats",
    "– Anthony J. D’Angelo",
    "– John Dewey"
]



function loadComplete() {
    var quoteNum = Math.floor(Math.random() * 10);
    $("#loader").css("display", "none");
    $("#quote").text(quotes[quoteNum]);
    $("#author").text(authors[quoteNum]);
}