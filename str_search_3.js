var subStrSearch = function(strs, txt){
    
    var res = {};

    strs.forEach(function(e){

        res[e] = 0;

        for(var i = 0; i < txt.length;){

            var pos = txt.indexOf(e, i)
            
            if(pos > -1){

                res[e]++;

                i = pos+1;
                
            }
            else{

                i++;
            }
   
        } 
    });
    return res;

}