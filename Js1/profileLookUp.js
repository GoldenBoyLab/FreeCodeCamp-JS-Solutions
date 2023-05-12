var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "9801479871",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "1344478958",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "8305617489",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "Unkown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop){
    for(i = 0; i < contacts.length; i++){
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such prop";
        }
        // } else {
        //     return "No such contact"; ESSE RETURN FUNCIONA PRIMEIRO, PQ?
        // } NÃO FUNCIONA
    }
    return "No such contact";
}
var data = lookUpProfile("Sherlock", "lastName")
console.log(data); 