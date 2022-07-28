const fibonacci = function(n) {

    fiboArray=[1,1];

    if(n>0){

        for (i=1; i<n;i++){

            nextFibo = fiboArray[i] + fiboArray[i-1];
            
            fiboArray.push(nextFibo);
    
        }
    
        return fiboArray[n-1];
        
    } else {

        return "OOPS"
    }

    

};

// Do not edit below this line
module.exports = fibonacci;
