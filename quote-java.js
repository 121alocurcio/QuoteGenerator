var quotes = ["Envy of other people shows how they are unhappy. Their continual attention to others behavior shows how they are boring. - Seneca",
"It is easier to act yourself into a new way of thinking, than it is to think yourself into a new way of acting. - Millard Fuller", 
"You can only lose what you cling to. -Buddha", 
"The more we value things outside our control, the less control we have. - Epictetus", 
"Don’t ever solve the same the same problem three times in a row. If you have the same question or problem three times in a row, systematize it. - Joel Runyun", 
"The strong do what they have to do and the weak accept what they have to accept. - Thucydides"]


function getQuote() {
var generator = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById("text").innerHTML = generator;

}
