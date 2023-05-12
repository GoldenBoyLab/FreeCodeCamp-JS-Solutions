var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let it Rock"
        ]
    },
     "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
    "artist": "Robert Palmer",
    "tracks": [ ]
    },
    "5439": {
    "album": "Abba Gold",
    "tracks": [ ]
    },
} 

//Copy of collection OBJ
var collectionCopy = JSON.parse(JSON.stringify(collection))

//OBJ Manipulation
function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop]
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;
}

//values to test the code
console.updateRecords(5439, "artist", "ABBA");
