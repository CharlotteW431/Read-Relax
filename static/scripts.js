

//function fillReview is used by review.html to populate the review page. 'Book' is the position in the array of the book referred to, and is embedded in the URL. 
function fillReview()
{
     //extract the parsed book variable from the URL to creat the book variable
     const queryString = window.location.search;
     const urlParams = new URLSearchParams(queryString);
     var book = urlParams.get('book');
     //--debug code -- console.log(book);   

    //some logic here to check if a paramater wasn't parsed in the URL. If it wasn't, check the length of the Books array, and randomly land on a reviw  (FIX LATER)
    if (book == null) {
        var randomMax = books.length; // - Fix this later, for now, if unset, set book to 0
        book = Math.floor(Math.random() * randomMax);
        
    }

    
    //first block of code gathers to text elements to be populated from the HTML
    var title = document.getElementById("reviewTitle");
    var author = document.getElementById("reviewAuthor");
    var synopsis = document.getElementById("reviewSynopsis");
    var body = document.getElementById("reviewBody");
    var image = document.getElementById("reviewImage");
    var pgTitle = document.getElementById("pageTitle");
    
    //this extracts the relevant entry for each elemt from the array
    var toTitle =  books[book].title;
    var toAuthor = books[book].author;
    var toSynopsis = books[book].synopsis;
    var toBody = books[book].review;
    //then changes the innerHTML property of each elemtent to output the data. 
    title.innerHTML = toTitle;
    author.innerHTML = toAuthor;
    synopsis.innerHTML = toSynopsis;
    body.innerHTML = toBody;
    //now we need some magic to build the image URL - images should be named to reflect the unique ID of each entry (the number at the start of the array entry)
    var toImageURL = "./static/images/" + books[book].id + ".jpg";
    var toImageAlt = toTitle + " cover image";
    image.setAttribute("src", toImageURL);
    image.setAttribute("alt", toImageAlt);

    //finally append the book title to the page <title> tag

    pgTitle.innerHTML += "¦¦ " + toTitle + " by " +toAuthor;


}


function fillShelf() {
    var gallery = document.querySelector(".gallery-wrap");

    var content = "";

    for (var i = 0; i < books.length;i++){

        content +=  `<a class="h3 item-container" href="review.html?book=${books[i].id}">
                        <div class="item item-${i}" style="background-image:url('static/images/${books[i].id}.jpg')">
                            <div class="synopsis-container">
                            ${books[i].synopsis}
                            </div>
                            <div class="sticker-container">
                                <div class="sticker">                                                            
                                    <div class="mt-3 text-center">${books[i].title}</div>
                                    <div class="h4 mt-3 text-center">${books[i].author}</div>
                                </div>
                            </div>
                        </div>
                    </a>`
    }

  gallery.innerHTML = content;
}
