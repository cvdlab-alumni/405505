var num = "";
for(var i=1; i<=10; i++){

	for(var j=1;j<=10;j++){
			
			num = num + ('\t' + i*j);
	}
	console.log(num);
	num= "";
};