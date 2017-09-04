// Turn this into a module where you can send a URL and it will return you the response from diffbot/article API as a promise

var developerToken = "957ad6b3e65d4ff95db7cfb3d363c804";

const https = require('https');
const http = require('http');

module.exports = function (extractFromURL) {

    var encodedTargetURL = encodeURIComponent(extractFromURL);
    var requestStringDiffbot = "https://api.diffbot.com/v3/article?token=" + developerToken + '&url=' + encodedTargetURL;
    var diffbotResponse = "";

    return new Promise(function (resolve, reject) {

        https.get(requestStringDiffbot, handleDiffbotResponse);

        function handleDiffbotResponse(res) {

            res.on('data', function (data) {
                diffbotResponse += data;
            });

            res.on('error', function (error) {
                reject(error);
            });

            res.on('end', function () {
                resolve(JSON.parse(diffbotResponse));
            });
        }
    });
}