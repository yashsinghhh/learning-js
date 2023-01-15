function switchStat(val){
    switch (val){
        case 1:
            answer = "alpha"
        break;
        case 2:
            answer= "beta"
        break;
        case 3:
            answer= "gamma"
        break;
        case 4:
            answer = "Delta"
        break;
    }
    return answer
}
console.log(switchStat(3))