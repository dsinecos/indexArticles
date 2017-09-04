var developerToken = "957ad6b3e65d4ff95db7cfb3d363c804";

const https = require('https');
const http = require('http');

// Encode URL - 1. What does encoding a URL mean? 
//              2. Are there multiple standards to encode? 
//              3. How to encode a URL in Nodejs/ Express?

var targetURL = "https://www.sitepoint.com/search-engine-node-elasticsearch/"
var encodedURL = encodeURIComponent('https://www.sitepoint.com/search-engine-node-elasticsearch/');

var requestStringDiffbot = "https://api.diffbot.com/v3/article?token=" + developerToken + '&url=' + encodedURL;
https.get(requestStringDiffbot, handleResponse);

var completeResponse = "";

function handleResponse(res) {

    console.log("Inside handleResponse");
    res.on('data', function (data) {
        completeResponse += data;
    });

    res.on('error', function (error) {
        console.log("Error occurred ");
        console.log(error);
    });

    res.on('end', function () {
        console.log(JSON.stringify(JSON.parse(completeResponse), null, "  "));
    });
}

// console.log("Encoded URL \n");
// console.log(encodedURL);

// var httpsRequestOptions = {
//     protocol: 'https:',
//     // hostname: 'https://api.diffbot.com/v3/article',
//     // hostname: 'www.google.com',
//     hostname: 'ghanta',
//     method: 'GET',
//     path: '?token=' + developerToken + '&url=' + encodedURL
// };

// var httpRequestOptions = {
//     protocol: 'http:',
//     hostname: 'https://api.diffbot.com/v3/article',
//     // hostname: 'www.google.com',
//     // hostname: 'ghanta',
//     method: 'GET',
//     path: '?token=' + developerToken + '&url=' + encodedURL
// };

// var requestStringBoilerpipe = "http://boilerpipe-web.appspot.com/extract?url=" + targetURL +"&output=htmlFragment";
// console.log(requestString);

// console.log("Before making the GET request");
// console.log(httpsRequestOptions.hostname+httpsRequestOptions.path);

// http.get(requestStringBoilerpipe, handleResponse);
// https.get(httpsRequestOptions, handleResponse);
// http.get(httpRequestOptions, handleResponse);

// http.get(requestStringBoilerpipe, function(res) {
//     res.on('data', function(data) {
//         completeResponse += data;
//     });

//     res.on('error', function (error) {
//         console.log("Error occurred ");
//         console.log(error);
//     });

//     res.on('end', function () {
//         console.log(completeResponse);
//     });

// });
