const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(facts)
{
  var i = 0;
  while(i < facts.length)
  {
    facts[i] = facts[i] + "!!!";
    i += 1;
  }

  return facts;
}

function iLoveTheBeatles(num)
{
  var meh = [];
  do while(num < 15)
  {
    meh.add("I love the Beatles!");
    num += 1;
  }

  return meh;
}
