$(document).ready(function() {
  var quote = document.getElementById('quote');
  var quoteLining = new lining(quote, {
    'autoResize': true,
    'lineClass': 'line'
  });
 var randomQuoteText ="The same hand can draw art for the sake of emotional expression and design that serves a purpose.";
  var randomQuoteTextBy = "Raphael Henry";
  var randomQuotes;
 $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40&callback=", function(data) {
  randomQuotes = data.map(function(item){
    return {
      quote:$(item.content).text(),
      author:item.title
    };
  }).filter(function(item){
    return (item.quote).length<100;
  });
   console.log(randomQuotes);
});
  $('#new-quote').on('click', function(e) {
    var randomIndex = Math.floor(Math.random() * randomQuotes.length);
    randomQuoteText = randomQuotes[randomIndex].quote;
    randomQuoteTextBy = randomQuotes[randomIndex].author;
    $('#quote').text(randomQuoteText);
    $('.quote-by').html('-By ' + randomQuoteTextBy);
    quoteLining = new lining(quote, {
      'lineClass': 'line'
    });

    //16777215 is ffffff in decimal
    // toString(16) converts decimal into hexadecimal value
    $('body').css("background", '#' + Math.floor(Math.random() * 16777215).toString(16));
  });
  $('#share-tw').on('click', function(e) {
    e.preventDefault();
    window.open('http://twitter.com/share?text=' + encodeURIComponent(randomQuoteText) + ' ' + 'By ' + encodeURIComponent(randomQuoteTextBy)+'&url=http://goo.gl/P4CwSJ');
  });
});