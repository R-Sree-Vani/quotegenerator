const btn=document.querySelector('.btncls');
const quote=document.querySelector('.quote');


const quotes=[
	'"The best way to find yourself is to lose yourself in the service of others"'
,

	'"If you want to live a happy life, tie it to a goal, not to people or things"'
,

	'"At his best, man is the noblest of all animals, separated from law and justice he is the worst"'
,

'"Your time is limited, so don\'t waste it living someone else\'s life"'
,

	'"Tell me and I forget, Teach me and I remember, Involve me and I learn"'
,

	'"If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life,you\'ll never have enough"'
,
  '"It does not matter how slowly you go as long as you do not stop"'
  ,
  '"Our lives begin to end the day we become silent about things that matter"'
  ,
  '"Remember that not getting what you want is sometimes a wonderful stroke of luck"'
  ,
  '"The journey of a thousand miles begins with one step"'


];

btn.addEventListener('click',function(){
	var ran=Math.floor(Math.random()*quotes.length);

	quote.innerText=quotes[ran];
	
});