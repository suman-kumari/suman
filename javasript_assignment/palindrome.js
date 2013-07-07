
function palindrome(n)
{
	var n,rev=0,d;
	var number=n;
	while(n>0)
	{
		d=n%10;
		rev=(rev*10)+d;
		n=n/10;
		n=parseInt(n);
	}
	if(number==rev)
		console.log(true);
		else
		console.log(false);			
}
palindrome(121);

	 
