let score = 0;
let count =-1;
Data = [
  {
    Question: "Your parents have six sons including you and each son has one sister. How many people are in the family?",
    options: ["Twelve", "Fourteen.", "Nine", "Eight"],
    answer: "Nine",
  },

  {
    Question: "Fourteen of the kids in the class are girls. Eight of the kids wear blue shirts. Two of the kids are neither girls or wear a blue shirt. If five of the kids are girls who wear blue shirts, how many kids are in the class?",
    options: ["Nineteen", "Eighteen", "Seventeen", "Sixteen"],
    answer: "Nineteen",
  },

  {
    Question: "The water level in a reservoir is low, but doubles every day. It takes 60 days to fill the reservoir. How long does it take for the reservoir to become half full?",
    options: ["Thirty", "Fifteen", "Fifty Nine", "Twenty Five"],
    answer: "Fifty Nine",
  },

  {
    Question: "A red house is made from red bricks. A blue house is made from blue bricks. A yellow house is made from yellow bricks. What is a green house made from?",
    options: ["RED", "GREEN", "GLASS", "YELLOW"],
    answer: "GLASS",
  },

  {
    Question: "A man describes his daughters, saying, “They are all blonde, but two; all brunette but two; and all redheaded but two.” How many daughters does he have?",
    options: ["TWO", "THREE", "SIX", "FIVE"],
    answer: "THREE",
  },

  {
    Question: "During which month do people sleep the least?",
    options: ["February", "May", "June", "November"],
    answer: "February", 
  },

  {
    Question: " You find five short chains each made of four gold links. You combined them all into one big loop of 20 links.Jeweler,tells you the cost of making the necklace will be $10 for each gold link that she has to break and then reseal.How much will it cost?",
    options: ["Fifty", "Forty", "Thirty", "Sixty"],
    answer: "Forty",
},

{
    Question: "Can you analyse what is the probability of meeting someone in your lifetime who is having an above average number of arms?",
    options: ["Impossible", "Fifty Fifty", "Certain", "Fairly Likely"],
    answer: "Certain",
},

{
    Question :"100 men are standing in a circle and are numbered from number 1 to 100. A game is created in which the first person will shoot the next person (i.e.second person) and then need to pass the gun to the next person (i.e. Third person) and he will shoot the person to the next. This game will continue until one man stays alive.Which man will survive at the end?",
    options: ["Fifty", "Ninety One", "Fifty", "Seventy three"],
    answer: "Seventy three",
},

{
    Question :"How much time did you invest in the game?",
    options: ["Zero","Three minutes","One minute","Five minutes"],
    answer: "Five minutes"
}
];

let a = 0;

function functionA() {
  if (a == 0) {
    document.getElementById("Buttons").style.display = "none";
  }
  document.getElementById("Question").innerHTML = Data[a].Question;
  for (let i = 1; i <= 4; i++) {
    let s = "option" + i;
    document.getElementById(s).innerHTML = Data[a].options[i - 1];
  }
  
  if (a == 0) {a++};
  count =30;
}

function functionB() {
  let s = "Your score is " + score+ "/10";
  document.getElementById("ans").innerHTML = s;
  document.getElementById("ans_block").style.display = "block";
  clearInterval(myInterval);
  a++;

}
document.getElementById("radio1").addEventListener("click", function () {
  if (a != 0 && a<=9) {
    if (Data[a - 1].options[0] == Data[a - 1].answer) {
      score++;
    }
    functionA();
    a++;
    document.getElementById("radio1").checked=false;
  }
  else if (a == 10) {
    if (Data[a - 1].options[0] == Data[a - 1].answer) {
      score++;
    }
    functionB();
    document.getElementById("radio1").checked=false;
  }
});

document.getElementById("radio2").addEventListener("click", function () {
    if (a != 0 && a<=9) {
    if (Data[a - 1].options[1] == Data[a - 1].answer) {
      score++;
    }
    functionA();
    a++;
    document.getElementById("radio2").checked=false;
  }
  else if (a == 10) {
    if (Data[a - 1].options[1] == Data[a - 1].answer) {
      score++;
    }
    functionB();
    document.getElementById("radio2").checked=false;
  }
});

document.getElementById("radio3").addEventListener("click", function () {
    if (a != 0 && a<=9) {
    if (Data[a - 1].options[2] == Data[a - 1].answer) {
      score++;
    }
    functionA();
    a++;
    document.getElementById("radio3").checked=false;
  }
  else if (a == 10) {
    if (Data[a - 1].options[2] == Data[a - 1].answer) {
      score++;
    }
    functionB();
    document.getElementById("radio3").checked=false;
  }
});

document.getElementById("radio4").addEventListener("click", function () {
    if (a != 0 && a<=9) {
    if (Data[a-1].options[3] == Data[a-1].answer) {
      score++;
    }
    functionA();
    a++;
    document.getElementById("radio4").checked=false;
  }
  else if (a == 10) {
    if (Data[a - 1].options[3] == Data[a - 1].answer) {
      score++;
    }
    functionB();
    document.getElementById("radio4").checked=false;
  }
});

myInterval = setInterval(function() {
  count--;
  if(count==0 && a!=10)
  {
    functionA();
    a++;
  }else if(count ==0 && a==10)
  {
    functionB();
  }
},1000);
