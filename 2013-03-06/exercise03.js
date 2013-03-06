var num = "";
for(var i=1; i<=10; i++){

	for(var j=1;j<=10;j++){
			
			if(i==j){ 
				num += "1";
			}else{
				num += "0";
			}

			if(j<=9){
				num = num + ('\t' + ',');
			}else{
				num = num + ('\t');
			}
	}
	console.log(num);
	num= "";
};