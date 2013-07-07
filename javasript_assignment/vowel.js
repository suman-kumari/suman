function pass_value(vowel)
{
	vowel('a');
}
function check_vowel(x)
{
	var v,x;
	v=x.toLowerCase();
  	if (v=='a'||v=='e'||v=='i'||v=='o'||v=='u')
		console.log(true);
   	else
   		console.log(false);
	

 }
pass_value(check_vowel);
   


