"use strict"

function getJSON(reqTime) {

    let json = {
        "unix": null,
        "natural": null
    };
   
    let time = new Date(reqTime);
   
   
    if (time.toString() === 'Invalid Date') {
        time.setTime(reqTime);
    } 
   
    if (time.toString() !== 'Invalid Date') {
        let options = {month: 'long', day: 'numeric', year: 'numeric'};
        
        json.unix = +time;
        json.natural = time.toLocaleDateString('en-US', options);
    }
    
    return json;
    
}

module.exports = exports = getJSON;