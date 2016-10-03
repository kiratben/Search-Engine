var subStrSearch = function(strs, txt){
    
    var res = {};
	//loop on each element of array
    strs.forEach(function(e){
		//define res key
        res[e] = 0;
		//iterate over text length
        for(var i = 0; i < txt.length;){

            var pos = txt.indexOf(e, i)
            
            if(pos > -1){
			//incr res at key of element
                res[e]++;

                i = pos+1;
                
            }
            else{
			//incr i to continue search
                i++;
            }
   
        } 
    });
    return res;

}