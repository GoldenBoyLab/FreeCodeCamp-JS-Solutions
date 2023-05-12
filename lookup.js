function phoneticLookup(val){
    
    var result = "";

var lookUp = {
    "alpha": "Addams",
    "bravo": "Bonston",
    "charlie": "Chicago",
    "delta": "Danver",
    "echo": "Easy",
    "foxtrot": "Frank"
};

result = lookUp[val];
return result;

}
console.log(phoneticLookup("charlie"));