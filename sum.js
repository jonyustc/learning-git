var nums=[1,2,3,4,5];

function doSum(n){
	var sum=0;

	//Actiual logic
	sum=n.reduce(function(o,n) {return o+n; });
	

	return sum;

}

console.log(doSum(nums));