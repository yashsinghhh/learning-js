function practice(val)  {
    if(val<5){
        return "tiny"
    }else if (val<10) {
        return "small"
    } else if (val<15) {
        return "large"   
    } else if(val<=20) {
        return "Huge"
    } 
    
    }
    console.log(practice(19))
    console.log(practice(4))
    console.log(practice(8))
    console.log(practice(12))
