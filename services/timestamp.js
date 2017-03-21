"use strict"

function getJSON(reqTime) {

    let json = {
        "unix": null,
        "natural": null
    };
   
    const time = new Date(reqTime);
   
   
    if (time.toString() === 'Invalid Date') {
        time.setTime(+reqTime * 1000);
    } 
   
    if (time.toString() !== 'Invalid Date') {
        const options = {month: 'long', day: 'numeric', year: 'numeric'};
        
        json.unix = +time / 1000;
        json.natural = time.toLocaleDateString('en-US', options);
    }
    
    return json;
    
}

module.exports = exports = getJSON;