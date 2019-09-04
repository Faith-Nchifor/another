function moveCommand(direction){
    var whatHappens;
    switch(direction){
        case "Forward":
            whatHappens="you will encounter a monster";
            break;
        case "Backward":
            whatHappens="you arrived home";
            break;
        case "Left":
            whatHappens="you run into a troll";
            break;
        case "Right":
            whatHappens="you found a river";
            break;
        default:
            whatHappens="please enter a valid direction"
    }
    return whatHappens; 
}
let name="faith";
const sex="female";
let job="software engineering";
let salute=`hey ${name} you are a ${sex} ${job}`