
function even(n)
{
	var arr=[],j=0; 
	for(var i=0;i<n.length;i++)
	{
		if(n[i]%2==0)
		{
			arr[j]=n[i];
			j++;
		}
	}
	console.log(arr);
}
var n=[];
n=[4,6,8,7,5,9];
even(n);

