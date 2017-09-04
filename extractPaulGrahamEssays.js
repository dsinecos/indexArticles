var extractArticle = require('./extractArticle.js');

var essaysPaulGraham = ['http://www.paulgraham.com/pow.html', 'http://www.paulgraham.com/disc.html', 'http://www.paulgraham.com/prop62.html', 'http://www.paulgraham.com/pgh.html', 'http://www.paulgraham.com/vb.html', 'http://www.paulgraham.com/ineq.html'];

var extractEssaysPaulGraham = essaysPaulGraham.map(function(extractFromURL) {
    return extractArticle(extractFromURL);
});

var essayListPaulGraham = [];

// How to use Promise.all - 1. https://stackoverflow.com/a/33073533/7640300 2. https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

Promise.all(extractEssaysPaulGraham).then(function(response) {
    essayListPaulGraham = response.map(function(articleData) {
        return {
            title: articleData.objects[0].title,
            // type: articleData.objects[0].type
        }
    });

    console.log(essayListPaulGraham);
});

// response.objects[0].type
// response.objects[0].title