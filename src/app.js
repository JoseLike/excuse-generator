let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

const rannumber = getinput => {
  let random = Math.floor(Math.random() * getinput.length);
  return random;
};

const excuses = () => {
  let ran1 = who[rannumber(who)];
  let ran2 = action[rannumber(action)];
  let ran3 = what[rannumber(what)];
  let ran4 = when[rannumber(when)];
  return ran1 + " " + ran2 + " " + ran3 + " " + ran4;
};

window.onload = function() {
  document.getElementById("excuse").innerHTML = excuses();
};
