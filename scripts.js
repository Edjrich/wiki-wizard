//wikiraces! Get two random wikipedia links as prompts


//Pseudo Code/Steps:
// 1. link to wikipedia api
// 2. ???
// 3. Profit

const app = {};

app.getArticles = () => {
    $.ajax({
        url: 'https://en.wikipedia.org/w/api.php?action=query&list=random&format=json&rnnamespace=0&rnlimit=100',
        method: 'GET',
        dataType: 'JSONP',
        data: {
            
        }

    }).then((response) => {
        let data = response.query.random
        let index1 = Math.floor(Math.random() * data.length)
        let index2 = Math.floor(Math.random() * data.length)
        app.randomArticle1 = data[index1]
        app.randomArticle2 = data[index2]
        let string1 = app.randomArticle1.title
        let stringReplace1 = string1.split(" ").join("_")
        app.randomArticle1.title = `https://en.wikipedia.org/wiki/${stringReplace1}`
        let string2 = app.randomArticle2.title
        let stringReplace2 = string2.split(" ").join("_")
        app.randomArticle2.title = `https://en.wikipedia.org/wiki/${stringReplace2}`
        console.log(app.randomArticle1);
        console.log(app.randomArticle2);
        app.displayArticles();
    })
} 

app.randomArticle1 = {}
app.randomArticle2 = {}
// console.log(app.randomArticle);


app.displayArticles = () => {
    // $(".url-one").html(`${app.randomArticle1.title}`); //shows link, link doesn't go anywhere
    $(".url-one").attr("href", `${app.randomArticle1.title}`).attr("target", "_blank").html(`${app.randomArticle1.title}`);
    $(".url-two").attr("href", `${app.randomArticle2.title}`).attr("target", "_blank").html(`${app.randomArticle2.title}`);
    const buttonTextArray2 = [
        "BLESS US WITH EVEN MORE RESULTS, OH WISE ONE",
        "THESE ARE NOT THE LINKS I'M LINKING FOR, OH BEARDED ONE",
        "I SEEK MORE KNOWLEDGE, OH GREAT ONE",
        "I SOLVED YOUR SECRET OH GREAT ONE",
        "MAY I HAVE ANOTHER, PLEASE?",
        "I AM STILL NOT AS SMART AS THOU, OH WISE ONE",
        "I DO NOT CARE FOR THESE LINKS AT ALL! DO BETTER!",
        "I HAVE A FEVER AND THE ONLY CURE IS MORE LINKS",
        "THAT WAS NOT HARD ENOUGH! CHALLENGE US OH MERCIFUL ONE",
        "DID YOU KNOW USING GEOGRAPHY IS A REALLY GOOD WAY TO CONNECT MOST LINKS?",
        "ARE YOU THE WIZARD THEY TALK ABOUT IN THE BLACK SABBATH SONG, THE WIZARD?",
    ]
    $(".button2").html(`${buttonTextArray2[Math.floor(Math.random() *buttonTextArray2.length)]}`).show();

    $('.url-container').show();
    // have button two appear after results are given

    //  information to html
    // use a tag it is clickable!
    // make sure it opens new page

    //second button class.hide
}





// app.setButtonText , pull from array of silly text choices



app.setButtonText = () => {
    const buttonTextArray1 = [
        "BLESS US WITH YOUR INFINITE KNOWLEDGE, OH MIGHTY ONE",
        "WAVE YOUR MAGIC WAND, OH MAGIC ONE",
        "JUST GIVE US THE LINKS ALREADY OH MY GOD",
        "LET US DIVE INTO YOUR POOL OF KNOWLEDGE, OH MYSTIC ONE",
        "SHOW US THE MEANING OF LIFE, OH WISE ONE",
        "I REALLY HOPE BOTH OF THESE LINKS ARE NOT THE SAME. THAT WOULD BE REALLY EMBARRASSING",
        "GIVE US THE LINKS, OH REPETITIVE ONE",
        "THIS WEBSITE HAS NO ASSOCIATION WITH THE BASKETBALL TEAM BEARING THE NAME WIZARDS",
        "READ TO US FROM THE SACRED TOME, OH LONG WINDED ONE"
    ]
    $(".button1").html(`${buttonTextArray1[Math.floor(Math.random() *buttonTextArray1.length)]}`)
    // console.log("does the text change?"
    // )
}




app.init = () => {
    // console.log('you gotta be INIT to win it')
    $('.button1').on('click', function() {
        app.getArticles();
    })

    app.setButtonText();

    $('.button2').on('click', function() {
        app.getArticles();
    })

    $('.button2').hide();
    $('.url-container').hide();
}

$(document).ready(() => {
    app.init();
});

// we appear to be getting information from the url. What next?

// replace space in string with _ (as is wikis url formatting)
// let string = app.randomArticle1.title
// string.replace(" ","_")
//is it possible to get full info on JSON/JSONP page rather than extract? 

// screen scraping? review later

//once replacing spaces in title string with _, append basic wikipedia url (https://en.wikipedia.org/wiki/) with (random article title) using string concatenation
//`https://en.wikipedia.org/wiki/${xyz}`
//.split(" ").join("_")