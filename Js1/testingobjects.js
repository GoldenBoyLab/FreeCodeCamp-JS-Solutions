var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleight"
};

function checkObj (checkProp) {
    if(myObj.hasOwnProperty){
        return myObj[checkProp];
    } else {
        return "Not Found";
    }
}

console.log (checkObj("gift"));