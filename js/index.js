$(document).ready(function() {
  var quote = document.getElementById('quote');
  var quoteLining = new lining(quote, {
    'autoResize': true,
    'lineClass': 'line'
  });
 var randomQuoteText ="The same hand can draw art for the sake of emotional expression and design that serves a purpose.";
  var randomQuoteTextBy = "Raphael Henry";
  var data = [
{
ID: 1211,
title: "James Joyce",
content: "<p>Mistakes are the portals of discovery. </p> ",
link: "http://quotesondesign.com/james-joyce/"
},
{
ID: 1164,
title: "David Starr",
content: "<p>Wisdom is knowing what to do next, skill is knowing how to do it, and virtue is doing it. </p> ",
link: "http://quotesondesign.com/david-starr/"
},
{
ID: 2194,
title: "Chuck Jones",
content: "<p>The whole essence of good drawing—and of good thinking, perhaps—is to work a subject down to the simplest form possible and still have it believable for what it is meant to be.</p> ",
link: "http://quotesondesign.com/chuck-jones/",
custom_meta: {
}
},
{
ID: 32,
title: "Jef I. Richards",
content: "<p>Creative without strategy is called &#8216;<strong>art</strong>&#8216;. Creative with strategy is called &#8216;<strong>advertising</strong>&#8216;. </p> ",
link: "http://quotesondesign.com/jef-i-richards/"
},
{
ID: 2105,
title: "Stefan Sagmeister",
content: "<p>When I am down, [I am] not good at any work, including design work.</p> ",
link: "http://quotesondesign.com/stefan-sagmeister-3/",
custom_meta: {
}
},
{
ID: 1988,
title: "Chuck Close",
content: "<p>The advice I like to give young artists, or really anybody who’ll listen to me, is not to wait around for inspiration. Inspiration is for amateurs; the rest of us just show up and get to work.</p> <p>If you wait around for the clouds to part and a bolt of lightning to strike you in the brain, you are not going to do an awful lot of work. All the best ideas come out of the process; they come out of the work itself.</p> <p>Things occur to you. If you’re sitting around trying to dream up a great idea, you can sit there a long time before anything happens. But if you just get to work, something will occur to you and something else will occur to you and something else that you reject will push you in another direction.</p> <p>Inspiration is absolutely unnecessary and somehow deceptive. You feel like you need this great idea before you can get down to work, and I find that’s almost never the case.</p> ",
link: "http://quotesondesign.com/chuck-close/"
},
{
ID: 551,
title: "Jason M. Blumer",
content: "<p>You do a disservice to your clients when you <strong>don&#8217;t</strong> fire the bad ones because you eventually provide poor service to those you don&#8217;t want to serve. </p> ",
link: "http://quotesondesign.com/jason-m-blumer/",
custom_meta: {
}
},
{
ID: 1253,
title: "Lukas Mathis",
content: "<p>The goal is not to make your user interface as realistic as possible. The goal is to add those details which help users identify what an element is, and how to interact with it, and to add no more than those details. </p> ",
link: "http://quotesondesign.com/lukas-mathis/",
custom_meta: {
}
},
{
ID: 82,
title: "Robert Bringhurst",
content: "<p>Typography at its best is a visual form of language linking timelessness and time. </p> ",
link: "http://quotesondesign.com/robert-bringhurst/"
},
{
ID: 1259,
title: "Emil Ruder",
content: "<p>Typography has one plain duty before it and that is to convey information in writing. No argument or consideration can absolve typography from this duty. </p> ",
link: "http://quotesondesign.com/emil-ruder/"
},
{
ID: 944,
title: "Epictetus",
content: "<p>No great thing is created suddenly. </p> ",
link: "http://quotesondesign.com/epictetus/"
},
{
ID: 1289,
title: "Nick Law",
content: "<p>Creativity is a habit. It&#8217;s not something that happens in the shower. </p> ",
link: "http://quotesondesign.com/nick-law/",
custom_meta: {
}
},
{
ID: 269,
title: "Brian Webb",
content: "<p>I would show my jobs to my mother, and she would always say the same thing: &#8220;That&#8217;s nice dear.&#8221; And then she would say, &#8220;Did you write it?&#8221; or &#8220;Did you do the drawing?&#8221; or &#8220;Did you take the pictures?&#8221; I&#8217;d always answer &#8220;no,&#8221; then I realized the problem. My answer was then, &#8220;I made this happen. It&#8217;s called design.&#8221; </p> ",
link: "http://quotesondesign.com/brian-webb/",
custom_meta: {
}
},
{
ID: 1683,
title: "Matthew Haeck",
content: "<p>Sometimes the best way to prove your own value is to let a client play the field.</p> ",
link: "http://quotesondesign.com/matthew-haeck/"
},
{
ID: 1120,
title: "William Morris",
content: "<p>History has remembered the kings and warriors, because they destroyed; art has remembered the people, because they created. </p> ",
link: "http://quotesondesign.com/william-morris/"
},
{
ID: 1673,
title: "Tord Boontje",
content: "<p>Modernism does not mean minimalism, contemporary does not forsake tradition, and technology does not mean abandon people and senses.</p> ",
link: "http://quotesondesign.com/tord-boontje/",
custom_meta: {
}
},
{
ID: 2161,
title: "Steve Krug",
content: "<p>Don’t let your design resist your readers. Don’t let it stand in the way of what they want to do: read.</p> ",
link: "http://quotesondesign.com/steve-krug-4/"
},
{
ID: 1667,
title: "Robert A. Heinlein",
content: "<p>Never attribute to malice that which can be adequately explained by stupidity.</p> ",
link: "http://quotesondesign.com/robert-a-heinlein/"
},
{
ID: 2387,
title: "Shawn Lukas",
content: "<p>A portfolio as pretty as pictures is nothing but a tip of the iceberg, the real treasure underlies the ocean.</p> ",
link: "http://quotesondesign.com/shawn-lukas-2/",
custom_meta: {
}
},
{
ID: 931,
title: "Milton Glaser",
content: "<p>I think what I feel fortunate about is that I am still astonished &#8211; that things still amaze me. And I think that that&#8217;s a great benefit of being in the arts, where the possibility for learning never disappears; where you basically have to admit you never learn it. </p> ",
link: "http://quotesondesign.com/milton-glaser-5/"
},
{
ID: 1072,
title: "Dan Rubin",
content: "<p>Limit your usage to two fonts (three at the absolute most) to help viewers focus on the words, not how many different fonts are saying them. </p> ",
link: "http://quotesondesign.com/dan-rubin-2/",
custom_meta: {
}
},
{
ID: 1819,
title: "Steve Jobs",
content: "<p>Almost everything &#8211; all external expectations, all pride, all fear of embarrassment or failure &#8211; these things just fall away in the face of death, leaving only what is truly important.</p> ",
link: "http://quotesondesign.com/steve-jobs-5/",
custom_meta: {
}
},
{
ID: 1456,
title: "Ken Peters",
content: "<p>Designers deal in ideas. They give shape to ideas that shape our world, enrich everyday experiences, and improve our lives. Where there’s confusion, designers fashion clarity; where there’s chaos, designers construct order; where there’s entropy, designers promote vitality; where there’s indifference, designers swell passion; where there’s mediocrity, designers imbue excellence; and where there’s silence, designers lend voice. </p> ",
link: "http://quotesondesign.com/ken-peters-2/",
custom_meta: {
}
},
{
ID: 1020,
title: "Jan Michl",
content: "<p>Design is redesign. </p> ",
link: "http://quotesondesign.com/jan-michl/",
custom_meta: {
}
},
{
ID: 1176,
title: "Jim Rohn",
content: "<p>Money is usually attracted, not pursued. </p> ",
link: "http://quotesondesign.com/jim-rohn/"
},
{
ID: 704,
title: "Samuel Antupit",
content: "<p>If the bones don&#8217;t work, you&#8217;ve got a pile of skin. </p> ",
link: "http://quotesondesign.com/samuel-antupit/"
},
{
ID: 359,
title: "Mieke Gerritzen",
content: "<p>Good design goes to heaven; bad design goes everywhere. </p> ",
link: "http://quotesondesign.com/mieke-gerritzen/"
},
{
ID: 48,
title: "Curt Cloninger",
content: "<p>To dismiss front-end design as mere &#8216;icing&#8217; is to jeopardize the success of any site. </p> ",
link: "http://quotesondesign.com/curt-cloninger/"
},
{
ID: 1603,
title: "Johann Wolfgang von Goethe",
content: "<p>He who cannot draw on three thousand years is living from hand to mouth.</p> ",
link: "http://quotesondesign.com/johann-wolfgang-von-goethe/"
},
{
ID: 1640,
title: "Scott Belsky",
content: "<p>To envision what will be, you must remove yourself from the constant concern for what already is.</p> ",
link: "http://quotesondesign.com/scott-belsky/",
custom_meta: {
}
},
{
ID: 302,
title: "Douglas Adams",
content: "<p>A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools. </p> ",
link: "http://quotesondesign.com/douglas-adams/",
custom_meta: {
}
},
{
ID: 60,
title: "Tim Brown",
content: "<p>Where you innovate, how you innovate, and what you innovate are design problems. </p> ",
link: "http://quotesondesign.com/tim-brown/"
},
{
ID: 1305,
title: "Babe Ruth",
content: "<p>The way a team plays as a whole determines its success. You may have the greatest bunch of individual stars in the world, but if they don&#8217;t play together, the club won&#8217;t be worth a dime. </p> ",
link: "http://quotesondesign.com/babe-ruth/"
},
{
ID: 1344,
title: "Von Glitschka",
content: "<p>A healthy creative process should be able to give a coherent rationale to a client as to why you designed what you designed. </p> ",
link: "http://quotesondesign.com/von-glitschka-2/"
},
{
ID: 990,
title: "Derek Sivers",
content: "<p>The creative person basically has two kinds of jobs: One is the sexy, creative kind. Second is the kind that pays the bills. Sometimes the task at hand covers both bases, but not often. </p> ",
link: "http://quotesondesign.com/derek-sivers/",
custom_meta: {
}
},
{
ID: 2352,
title: "Vital Lokossou",
content: "<p>Tech without design is the business&#8217;s perdition.</p> ",
link: "http://quotesondesign.com/vital-lokossou/"
},
{
ID: 884,
title: "Mark Twain",
content: "<p>I never let my schooling get in the way of my education. </p> ",
link: "http://quotesondesign.com/mark-twain-2/"
},
{
ID: 844,
title: "Rem Koolhaas",
content: "<p>I can think of nothing worse than becoming really popular, being all the rage. </p> ",
link: "http://quotesondesign.com/rem-koolhaas-2/"
},
{
ID: 528,
title: "Michael Mistretta",
content: "<p>I think advertising is a brilliant concept that has been pooped upon by selfish marketers, resulting in corrupted motives and flawed execution. </p> ",
link: "http://quotesondesign.com/michael-mistretta/",
custom_meta: {
}
},
{
ID: 58,
title: "Jesse James Garrett",
content: "<p>Problems with visual design can turn users off so quickly that they never discover all the smart choices you made with navigation or interaction design. </p> ",
link: "http://quotesondesign.com/jesse-james-garrett/"
}
];
  var randomQuotes = data.map(function(item){
    return {
      quote:$(item.content).text(),
      author:item.title
    };
  }).filter(function(item){
    return (item.quote).length<100;
  });
  console.log(randomQuotes);
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