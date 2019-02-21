// CONNECT TO FIREBASE

var config = {
  apiKey: "AIzaSyDR520PVWe0l8PyVbC95S7FBsIaYF0eh1w",
  authDomain: "the-ukraine-train-project.firebaseapp.com",
  databaseURL: "https://the-ukraine-train-project.firebaseio.com",
  projectId: "the-ukraine-train-project",
  storageBucket: "the-ukraine-train-project.appspot.com",
  messagingSenderId: "616421465352"
};
firebase.initializeApp(config);

var database = firebase.database();


// FIRST USER INTERACTION

// USER SHOWS UP ON OUR SITE

// USER SEES TODAY'S TOP AUTHOR

// USER SEES TODAY'S TOP NOVELS BY TOP AUTHOR

// USER SEARCHES BY AUTHOR OR BOOK
// - declare variable to hold user search by author
// - declare variable to hold user search by book
// - get user input from search field and put it into variables
// - console.log variables to make sure they recieve search values

var bookURL = '';
var searchByAuthor = '';
var searchByBook = '';
var authors = [
  {
    firstName: "Brandon",
    lastName: "Sanderson",
    fullName: "Brandon Sanderson",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Brandon_Sanderson_-_Lucca_Comics_%26_Games_2016.jpg/440px-Brandon_Sanderson_-_Lucca_Comics_%26_Games_2016.jpg",
    caption: "Brandon Sanderson (born December 19, 1975) is an American fantasy and science fiction writer. He is best known for the Cosmere universe, in which most of his fantasy novels (most notably the Mistborn series and The Stormlight Archive) are set. He is also known for finishing Robert Jordan's epic fantasy series The Wheel of Time.",
    bibliography: [
      {
        type: "Book",
        bookName: "The Way of Kings",
        coverLink: "https://upload.wikimedia.org/wikipedia/en/8/8b/TheWayOfKings.png",
        sellerLink: "https://smile.amazon.com/Way-Kings-Book-Stormlight-Archive/dp/B0041JKFJW/ref=sr_1_2?ie=UTF8&qid=1549425753&sr=8-2&keywords=The+way+of+kings"
      },
      {
        type: "Book",
        bookName: "Words of Radiance",
        coverLink: "https://upload.wikimedia.org/wikipedia/en/e/e0/WordsOfRadianceCover.png",
        sellerLink: "https://smile.amazon.com/Words-Radiance-Stormlight-Archive-Book/dp/B00HWDEFMW/ref=sr_1_1?ie=UTF8&qid=1550062168&sr=8-1&keywords=words+of+radiance+by+brandon+sanderson"
      },
      {
        type: "Book",
        bookName: "Oathbringer",
        coverLink: "https://upload.wikimedia.org/wikipedia/en/5/5d/Brandon_Sanderson_Oathbringer_book_cover.jpg",
        sellerLink: "https://smile.amazon.com/Oathbringer/dp/B071V7W5S1/ref=sr_1_1?ie=UTF8&qid=1550062263&sr=1-1&keywords=oathbringer+by+brandon+sanderson"
      },
      {
        type: "Book",
        bookName: "Mistborn: The Final Empire",
        coverLink: "https://upload.wikimedia.org/wikipedia/en/4/44/Mistborn-cover.jpg",
        sellerLink: "https://smile.amazon.com/Final-Empire-Mistborn-Book/dp/B001QKBHG4/ref=sr_1_1?ie=UTF8&qid=1550062319&sr=1-1&keywords=Mistborn%3A+The+Final+Empire+by+brandon+sanderson"
      }
    ]
  },

  {
    firstName: "J. R. R.",
    lastName: "Tolkien",
    fullName: "J.R.R. Tolkien",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Tolkien_1916.jpg",
    caption: "John Ronald Reuel Tolkien, CBE FRSL (/ruːl ˈtɒlkiːn/, ROOL TOL-keen;[a] 3 January 1892 – 2 September 1973) was an English writer, poet, philologist, and university professor who is best known as the author of the classic high fantasy works The Hobbit, The Lord of the Rings, and The Silmarillion.",
    bibliography: [
      {
        type: "Book",
        bookName: "The Hobbit",
        coverLink: "https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg",
        sellerLink: "https://smile.amazon.com/s/ref=nb_sb_ss_c_1_11?url=search-alias%3Daps&field-keywords=the+hobbit+book&sprefix=the+hobbit+%2Caps%2C382&crid=SCIA28J7TAZN"
      },
      {
        type: "Book",
        bookName: "The Lord of the Rings: The Fellowship of the Ring",
        coverLink: "https://upload.wikimedia.org/wikipedia/en/8/8e/The_Fellowship_of_the_Ring_cover.gif",
        sellerLink: "https://smile.amazon.com/Fellowship-Ring-Being-First-FELLOWSHIP/dp/B0028IF5SO/ref=sr_1_6?ie=UTF8&qid=1549937562&sr=8-6&keywords=The+Lord+of+the+Rings%3A+The+Fellowship+of+the+Ring+book"
      },
      {
        type: "Book",
        bookName: "The Lord of the Rings: The Two Towers",
        coverLink: "https://upload.wikimedia.org/wikipedia/en/a/a1/The_Two_Towers_cover.gif",
        sellerLink: "https://smile.amazon.com/Two-Towers-Being-Second-Rings/dp/0395489334/ref=pd_bxgy_img_3/132-7881591-7899342?_encoding=UTF8&pd_rd_i=0395489334&pd_rd_r=b8c3f868-2e6b-11e9-9078-655cc4d72d62&pd_rd_w=bgFDf&pd_rd_wg=FBVuF&pf_rd_p=6725dbd6-9917-451d-beba-16af7874e407&pf_rd_r=TGZJRVAG1K9ZP43MHRAA&psc=1&refRID=TGZJRVAG1K9ZP43MHRAA"
      },
      {
        type: "Book",
        bookName: "The Lord of the Rings: The Return of the King",
        coverLink: "https://upload.wikimedia.org/wikipedia/en/1/11/The_Return_of_the_King_cover.gif",
        sellerLink: "https://smile.amazon.com/Return-King-Being-theThird-Rings/dp/039548930X/ref=pd_bxgy_img_2/132-7881591-7899342?_encoding=UTF8&pd_rd_i=039548930X&pd_rd_r=b8c3f868-2e6b-11e9-9078-655cc4d72d62&pd_rd_w=bgFDf&pd_rd_wg=FBVuF&pf_rd_p=6725dbd6-9917-451d-beba-16af7874e407&pf_rd_r=TGZJRVAG1K9ZP43MHRAA&psc=1&refRID=TGZJRVAG1K9ZP43MHRAA"
      }
    ]
  },

  {
    firstName: "Robert",
    lastName: "Jordan",
    fullName: "Robert Jordan",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Robert_Jordan.jpg",
    caption: "James Oliver Rigney Jr. (October 17, 1948 – September 16, 2007), better known by his pen name Robert Jordan,[1] was an American author of epic fantasy. He is best known for the Wheel of Time series, which comprises 14 books and a prequel novel. He is one of several writers to have written original Conan the Barbarian novels; his are highly acclaimed to this day.",
    bibliography: [
      {
        type: "Book",
        bookName: "The Eye of the World",
        coverLink: "https://upload.wikimedia.org/wikipedia/en/0/00/WoT01_TheEyeOfTheWorld.jpg",
        sellerLink: "https://smile.amazon.com/Eye-World-Book-Wheel-Time/dp/B00026WUO6/ref=sr_1_3?ie=UTF8&qid=1549938554&sr=1-3&keywords=The+Eye+of+the+World+book"
      },
      {
        type: "Book",
        bookName: "The Great Hunt",
        coverLink: "https://upload.wikimedia.org/wikipedia/en/4/4b/WoT02_TheGreatHunt.jpg",
        sellerLink: "https://smile.amazon.com/Great-Hunt-Book-Wheel-Time/dp/B00026WUOG/ref=sr_1_1?ie=UTF8&qid=1549938609&sr=1-1&keywords=The+Great+Hunt+book"
      },
      {
        type: "Book",
        bookName: "The Dragon Reborn",
        coverLink: "https://upload.wikimedia.org/wikipedia/en/9/97/WoT03_TheDragonReborn.jpg",
        sellerLink: "https://smile.amazon.com/Dragon-Reborn-Book-Three-Wheel/dp/B0006IU3BC/ref=sr_1_1?ie=UTF8&qid=1549938676&sr=1-1&keywords=The+Dragon+Reborn+book"
      },
      {
        type: "Book",
        bookName: "The Shadow Rising",
        coverLink: "https://upload.wikimedia.org/wikipedia/en/1/1b/WoT04_TheShadowRising.jpg",
        sellerLink: "https://smile.amazon.com/Shadow-Rising-Book-Four-Wheel/dp/B0006IU3BM/ref=sr_1_1?ie=UTF8&qid=1549938711&sr=1-1&keywords=The+Shadow+Rising+book"
      }
    ]
  },

  {
    firstName: "Alastair",
    lastName: "Reynolds",
    fullName: "Alastair Reynolds",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Alastair_Reynolds.jpg/400px-Alastair_Reynolds.jpg",
    caption: "Alastair Preston Reynolds (born 13 March 1966) is a British science fiction author. He specialises in hard science fiction and space opera. He spent his early years in Cornwall, moved back to Wales before going to Newcastle University, where he read physics and astronomy. Afterwards, he earned a PhD from the University of St Andrews.",
    bibliography: [
      {
        type: "Book",
        bookName: "Revelation Space",
        coverLink: "https://upload.wikimedia.org/wikipedia/en/f/f8/Revelation_Space_cover_%28Amazon%29.jpg",
        sellerLink: "https://smile.amazon.com/Revelation-Space/dp/B001PLND48/ref=sr_1_1?ie=UTF8&qid=1549939033&sr=1-1&keywords=Revelation+Space+book"
      },
      {
        type: "Book",
        bookName: "Redemption Ark",
        coverLink: "https://upload.wikimedia.org/wikipedia/en/a/ac/Redemption_Ark_cover_%28Amazon%29.jpg",
        sellerLink: "https://smile.amazon.com/Redemption-Ark/dp/B001UFGDK0/ref=sr_1_1?ie=UTF8&qid=1549939063&sr=1-1&keywords=Redemption+Ark+book"
      },
      {
        type: "Book",
        bookName: "Absolution Gap",
        coverLink: "https://upload.wikimedia.org/wikipedia/en/0/0e/Absolution_Gap_cover_%28Amazon%29.jpg",
        sellerLink: "https://smile.amazon.com/Absolution-Gap/dp/B002GJHZ92/ref=sr_1_1?ie=UTF8&qid=1549939093&sr=1-1&keywords=Absolution+Gap+book"
      },
      {
        type: "Book",
        bookName: "Chasm City",
        coverLink: "https://upload.wikimedia.org/wikipedia/en/e/e0/Chasm_City_cover_%28Amazon%29.jpg",
        sellerLink: "https://smile.amazon.com/Chasm-City/dp/B00310QBOA/ref=sr_1_1?ie=UTF8&qid=1549939124&sr=1-1&keywords=Chasm+City+book"
      }
    ]
  },

  {
    firstName: "Patrick",
    lastName: "Rothfuss",
    fullName: "Patrick Rothfuss",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Patrick-rothfuss-2014-kyle-cassidy.jpg/500px-Patrick-rothfuss-2014-kyle-cassidy.jpg",
    caption: "Patrick James Rothfuss (born June 6, 1973) is an American writer of epic fantasy. He is best known for his series The Kingkiller Chronicle, which won him several awards, including the 2007 Quill Award for his debut novel, The Name of the Wind. Its sequel, The Wise Man's Fear, topped The New York Times Best Seller list.",
    bibliography: [
      {
        type: "Book",
        bookName: "The Name of the Wind",
        coverLink: "https://upload.wikimedia.org/wikipedia/en/5/56/TheNameoftheWind_cover.jpg",
        sellerLink: "https://smile.amazon.com/s/ref=nb_sb_ss_c_1_11?url=search-alias%3Daps&field-keywords=the+hobbit+book&sprefix=the+hobbit+%2Caps%2C382&crid=SCIA28J7TAZN"
      },
      {
        type: "Book",
        bookName: "The Wise Man's Fear",
        coverLink: "https://upload.wikimedia.org/wikipedia/en/8/81/The_Wise_Man%27s_Fear_UK_cover.jpg",
        sellerLink: "https://smile.amazon.com/Fellowship-Ring-Being-First-FELLOWSHIP/dp/B0028IF5SO/ref=sr_1_6?ie=UTF8&qid=1549937562&sr=8-6&keywords=The+Lord+of+the+Rings%3A+The+Fellowship+of+the+Ring+book"
      },
      {
        type: "Book",
        bookName: "The Slow Regard of Silent Things",
        coverLink: "https://upload.wikimedia.org/wikipedia/en/2/20/TheSlowRegardOfSlientThingsCover.jpg",
        sellerLink: "https://smile.amazon.com/Two-Towers-Being-Second-Rings/dp/0395489334/ref=pd_bxgy_img_3/132-7881591-7899342?_encoding=UTF8&pd_rd_i=0395489334&pd_rd_r=b8c3f868-2e6b-11e9-9078-655cc4d72d62&pd_rd_w=bgFDf&pd_rd_wg=FBVuF&pf_rd_p=6725dbd6-9917-451d-beba-16af7874e407&pf_rd_r=TGZJRVAG1K9ZP43MHRAA&psc=1&refRID=TGZJRVAG1K9ZP43MHRAA"
      },
      {
        type: "Book",
        bookName: "The Doors of Stone",
        coverLink: "http://blogs.publishersweekly.com/blogs/shelftalker/wp-content/uploads/2017/04/doorsofstone.jpg",
        sellerLink: "https://kingkiller.fandom.com/wiki/The_Doors_of_Stone"
      }
    ]
  },
];


///////////////////////////////////////////////////////////////////////////////////////////////////
//Tyler's code here... for dynamic images
//First, it loads the intial "author spotlight", by randomly selecting an author from the author object above

// var authorSpotlightNumber = Math.floor(Math.random() * authors.length);
var authorNumber = '';

var chooseAuthor = Math.floor(Math.random() * authors.length);
// this statement prevents sequentially repeating author spotlight
if (authorNumber === chooseAuthor) {
  authorNumber = chooseAuthor + 1;
} else {
  authorNumber = chooseAuthor;
}


var authorSpotlight = authors[authorNumber].fullName;

function topAuthor() {
  // authorNumber = Math.floor(Math.random() * authors.length);
  authorSpotlight = authors[authorNumber].fullName;

  // $.ajaxPrefilter(function (options) {
  //   if (options.crossDomain && jQuery.support.cors) {
  //     var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
  //     options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
  //     //options.url = "http://cors.corsproxy.io/url=" + options.url;
  //   }
  // });
  var searchURL = "https://www.googleapis.com/books/v1/volumes?q=+inauthor:" + authors[authorNumber].fullName + "&key=AIzaSyAYJ5-dMTGiI5M6BoZ2WEGoJSM-D8GEH7k";

  $.ajax({
    url: searchURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    $("#popular-title").text("Author Spotlight: " + authors[authorNumber].fullName);
    bookURL = response.items;
    populateBooks();
    booksFoundTable();
  });

  $("#author-image").attr('src', authors[authorNumber].image);
  $('#today-top1').text("Looking for a good read?");
  $('#today-top2').text("Check out our Author Spotlight!");
  $('#author-name').text(authors[authorNumber].fullName);
  $('#bio-caption').text(authors[authorNumber].caption);
}

topAuthor();

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4 LARGE BOOK IMAGES AT TOP
//This function populates the four (or less) recommended books based on the search ran through google books api.
//It looks like it runs twice- but basically, the first checks if it is for sale by e-book on google books.
//If so, it adds a clickable icon that takes the user to the google books site.
//the "else" statement runs if the book is not for sale. It basically runs the same code, but does not append the clickable image link.

function populateBooks() {
  // Empty popular book div before displaying new info
  $('#popular-book-container').empty();

  for (i = 0; i < 4; i++) {
    // PREVENTS ERROR IF NO BOOK-IMAGE THUMBNAIL EXISTS IN RETURNED OBJECT
    var bookImage = "./assets/images/book-cover-placeholder.jpg";
    // checks bookURL object for property 'thumbnail'
    var myProp = 'imageLinks';
    if (bookURL[i].volumeInfo.hasOwnProperty(myProp)) {
      // alert("yes, i have that property");
      bookImage = bookURL[i].volumeInfo.imageLinks.thumbnail;
    }

    // declared variable for eBook icon
    var ebookImage = '';

    // logic for skipping books without eBook links
    if (bookURL[i].saleInfo.saleability == "FOR_SALE") {
      ebookImage = "./assets/images/rect-ebook.png";
    } else {
      ebookImage = "./assets/images/rect-ebook-blank.png";
    }

    // CREATE BOOKS WITH E-BOOK TAG
    // if (bookURL[i].saleInfo.saleability == "FOR_SALE") {
      $('<div>', { class: 'col-3 book' }).append(
        $('<div>', { class: 'container' }).append(
          $('<div>', {
            class: 'row book-row'
            // onclick: 'favoriteBook()',
            // data_cover: bookImage
          }).append(
            // x of 4 LARGE BOOK IMAGES AT TOP
            // book covers are made interactive - link explores purchase options
            $('<a>', {
              href: bookURL[i].volumeInfo.infoLink,
              target: "_blank"
            }).append(
              $('<img>', {
                // onclick: 'favoriteBook()',
                class: 'book-image',
                src: bookImage
                // 'data-author': bookURL[i].volumeInfo.auhtors[0]
              })),
            // FAVORITE BUTTON /////////////////////////////////////////////////////////
            // DIV FOR FAVORITE BUTTON
            $('<div class="book-buttons">').append(
              $('<a>', {
                href: "#",
                target: "#",
              }).append(
                $('<img>', {
                  class: 'favorite-button favorite-button-spotlight',
                  src: "./assets/images/favorite-heart-red.png",
                  // this value setting is helping track the favorite button's association with the index of the volumeInfo of the current bookURL object
                  value: i
                })),
              // LINK DIV FOR E-BOOK BUTTON
              $('<a>', {
                href: bookURL[i].saleInfo.buyLink,
                target: "_blank",
              }).append(
                // E-BOOK BUTTON IMAGE
                $('<img>', {
                  class: 'eBook-image eBook-image-spotlight',
                  src: ebookImage
                })
              )
            ),
          )),

        $('<div>', { class: 'container' }).append(
          // BOOK TITLE
          $('<div>', { class: 'row book-title' }).append(
            $('<p>').text(bookURL[i].volumeInfo.title)
          ))).appendTo('#popular-book-container');

      // THIS CREATES BOOK WITHOUT E-BOOK TAG
    // } else {
    //   $('<div>', { class: 'col-3 book' }).append(
    //     $('<div>', { class: 'container' }).append(
    //       $('<div>', {
    //         class: 'row book-row'
    //         // onclick: 'favoriteBook()',
    //         // data_cover: bookImage
    //       }).append(
    //         // x of 4 LARGE BOOK IMAGES AT TOP
    //         // book covers are made interactive - link explores purchase options
    //         $('<a>', {
    //           href: bookURL[i].volumeInfo.infoLink,
    //           target: "_blank"
    //         }).append(
    //           $('<img>', {
    //             // onclick: 'favoriteBook()',
    //             class: 'book-image',
    //             src: bookImage
    //             // 'data-author': bookURL[i].volumeInfo.auhtors[0]
    //           })),
    //         // FAVORITE BUTTON /////////////////////////////////////////////////////////
    //         // DIV FOR FAVORITE BUTTON
    //         $('<div class="book-buttons">').append(
    //           $('<a>', {
    //             href: "#",
    //             target: "#",
    //           }).append(
    //             $('<img>', {
    //               class: 'favorite-button',
    //               src: "./assets/images/favorite-heart-blank.png",
    //               // this value setting is helping track the favorite button's association with the index of the volumeInfo of the current bookURL object
    //               value: i
    //             })),
    //           // LINK DIV FOR E-BOOK BUTTON
    //           $('<a>', {
    //             href: "#",
    //             target: "#",
    //           }).append(
    //             // E-BOOK BUTTON IMAGE
    //             $('<img>', {
    //               class: 'eBook-image',
    //               src: "./assets/images/rect-ebook-blank.png"
    //             })
    //           )
    //         ),
    //       )),

    //     $('<div>', { class: 'container' }).append(
    //       // BOOK TITLE
    //       $('<div>', { class: 'row book-title' }).append(
    //         $('<p>').text(bookURL[i].volumeInfo.title)
    //       ))).appendTo('#popular-book-container');

    // }

  };
}
// [1].volumeInfo.imageLinks.thumbnail
// "http://books.google.com/books/content?id=VsT3DQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
// "http://books.google.com/books/content?id=VsT3DQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"



https://books.google.com/books/content/images/frontcover/kYjqAQAAQBAJ?fife=w400-h600

///////////////////////////////////////////////////////////////////////////////////////////
// THIS CODE GENERATES THE BOOKS-FOUND TABLE

function tableRowCreator() {  // !!! MUST DECLARE 'var row = x' before this function is called for proper row numbers


  // PREVENTS ERROR IF NO BOOK-IMAGE THUMBNAIL EXISTS IN RETURNED OBJECT
  var bookImage = "./assets/images/book-cover-placeholder.jpg";
  // checks bookURL object for property 'thumbnail'
  var myProp = 'imageLinks';
  if (bookURL[i].volumeInfo.hasOwnProperty(myProp)) {
    // alert("yes, i have that property");
    bookImage = bookURL[i].volumeInfo.imageLinks.thumbnail;
  }

  // declared variable for eBook icon
  var ebookImage = '';

  // logic for skipping books without eBook links
  if (bookURL[i].saleInfo.saleability == "FOR_SALE") {
    ebookImage = "./assets/images/rect-ebook.png";
  } else {
    ebookImage = "./assets/images/rect-ebook-blank.png";
  }

  // creates new table row html element
  $('<tr>').append(
    // creates table-row-NUMBER html element and sets it's value
    $('<th>', {
      scope: 'row',
      text: row + 1
    }
    ),
    $('<td>').append(
      $('<a>', {
        // creates CLICKABLE book-cover-image html element with link
        href: bookURL[i].volumeInfo.infoLink,
        style: "text-decoration: none",
        target: "_blank"
      }).append(
        // polulates with BOOK IMAGE
        $('<img>', {
          class: 'table-book-image',
          src: bookImage
        }),
      )),
    $('<td>').append(
      // LINK DIV FOR E-BOOK BUTTON
      $('<a>', {
        href: bookURL[i].saleInfo.buyLink,
        target: "_blank",
      }).append(
        // E-BOOK BUTTON IMAGE
        $('<img>', {
          class: 'eBook-image eBook-image-table',
          src: ebookImage
        })
      ),
      // LINK DIV FOR FAVORITE BUTTON
      $('<a>', {
        href: "#",
        target: "#",
      }).append(
        // FAVORITE BUTTON IMAGE
        $('<img>', {
          class: 'favorite-button favorite-button-table',
          src: "./assets/images/favorite-heart-red.png",
          // this value setting is helping track the favorite button's association with the index of the volumeInfo of the current bookURL object
          value: i
        })
      )
    ),
    // creates BOOK-NAME table html element
    $('<td>', {
      class: 'table-book-name',
      text: bookURL[i].volumeInfo.title
    }),
    // creates DATE-PUBLISHED table html element
    $('<td>', {
      class: "date-published-column",
      text: bookURL[i].volumeInfo.publishedDate
    }),
    // creates BOOK-RATING table html element
    $('<td>', {
      class: 'last-column'
    })
      .append(
        // creates BOOK-STARS 
        $('<img>', {
          class: 'table-rating-image',
          src: bookStars
        }),
      ),
  ).appendTo('#books-table');
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// BOOK RATINGS GLOBAL VARIABLES
var bookRating = ''; // global variable for book-rating of the current book in the for-loop
var bookStars = ''; // global variable for book-star file to display for the current book in the for-loop
var ratingRangeLimits = [0, 0.5, 1.5, 2.5, 3.5, 4.5, 5.1]; // array of ratings' breakpoints from 0 to 5.1 (if 0 t 5 is set, a 5-star rating is returned as a 4-star rating-image)
var originalRatingsOrder = [];

var highToLowRatings = [];   // array of bookURL ratings sorted from highest to lowest book rating
var highToLowRatingsIndices = []; // array of bookURL indices sorted from highest to lowest book rating

var lowToHighRatings = [];  // array of bookURL ratings sorted from lowest to highest book rating
var lowToHighRatingsIndices = [];  // array of bookURL indices sorted from lowest to highest book rating

function ratingsFunction() {
  // BOOK RATINGS ARE DONE HERE
  bookRating = bookURL[i].volumeInfo.averageRating;
  // bookRating variable is taking care of errors where bookrating does not exist - sets it to zero
  if (bookRating === undefined) {
    bookRating = 0;
    console.log('bookRating set to zero: ', bookRating);
  }
  // match star file to be displayed with rating
  for (r = 0; r < ratingRangeLimits.length; r++) {
    // evaluating rating for the appropriate star-rating image
    if (bookRating >= ratingRangeLimits[r] && bookRating < ratingRangeLimits[r + 1]) {
      bookStars = 'assets/images/Star_rating_' + r + '_of_5.png';
    }
  }
  console.log('bookRating: ', bookRating);
  console.log('bookStars: ', bookStars);
}

// CREATES booksFound TABLE
function booksFoundTable() {
  // Empty books-found table before displaying new info
  $('#books-table').empty();
  originalRatingsOrder = [];

  console.log('bookURL: ', bookURL);
  // LOOP THROUGH booksURL variable for volume info and RETRIEVE BOOK-RATINGS IN ORIGINAL ORDER
  for (i = 0; i < bookURL.length; i++) {

    bookRating = bookURL[i].volumeInfo.averageRating;
    // this code is taking care of errors where bookrating does not exist - sets it to zero
    if (bookRating === undefined) {
      bookRating = 0;
      console.log('bookRating set to zero: ', bookRating);
    }
    // push bookrating in original order
    originalRatingsOrder.push(bookRating);
    console.log('originalRatingsOrder: ', originalRatingsOrder);
  }

  // sort books by rating
  function sortWithIndices(toSort) {
    for (var i = 0; i < toSort.length; i++) {
      toSort[i] = [toSort[i], i];
    }
    toSort.sort(function (left, right) {
      return left[0] < right[0] ? -1 : 1;
    });
    toSort.sortIndices = [];
    for (var j = 0; j < toSort.length; j++) {
      toSort.sortIndices.push(toSort[j][1]);
      toSort[j] = toSort[j][0];
    }
    return toSort;
  }

  lowToHighRatings = '';
  lowToHighRatings = originalRatingsOrder;

  sortWithIndices(lowToHighRatings);
  console.log('lowToHighRatings: ', lowToHighRatings);

  lowToHighRatingsIndices = '';
  lowToHighRatingsIndices = lowToHighRatings.sortIndices;
  console.log('lowToHighRatingsIndices: ', lowToHighRatingsIndices);

  highToLowRatingsIndices = lowToHighRatingsIndices.reverse();
  console.log('highToLowRatingsIndices: ', highToLowRatingsIndices);

  // create table rows to show higest rated books first
  for (j = 0; j < highToLowRatingsIndices.length; j++) {
    // guides functions through bookURL indices in high-to-low book-rating sort order
    i = highToLowRatingsIndices[j];
    ratingsFunction();
    row = j
    tableRowCreator();
    console.log('i of highToLowRatingsIndices: ', i);
  }
}


///////////////////////////////////////////////////////////////////////////////

// On-click event listener for the 'Search' button
$("#search-button").on("click", function (event) {
  event.preventDefault();

  // Grabs user input
  searchByAuthor = $("#search-by-author").val();
  searchByBook = $("#search-by-book").val();

  //If the user clicks the button without entering search info, the if statement runs, and displays one of our pre-selected recommended authors
  if (searchByAuthor == "" && searchByBook == "") {
    topAuthor();
    // authorSpotlight = authors[authorNumber].fullName; //randomly selects an author from the "authors" object above
    $("#popular-title").text("You did not enter search parameters. Here are some recommendations by " + authorSpotlight);
    // // authorNumber = Math.floor(Math.random() * authors.length);
    // $.ajaxPrefilter(function (options) {
    //   if (options.crossDomain && jQuery.support.cors) {
    //     var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
    //     options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
    //   }
    // });
    // var searchURL = "https://www.googleapis.com/books/v1/volumes?q=+inauthor:" + authorSpotlight + "&key=AIzaSyAYJ5-dMTGiI5M6BoZ2WEGoJSM-D8GEH7k";

    // $.ajax({
    //   url: searchURL,
    //   method: "GET"
    // }).then(function (response) {
    //   console.log(response);
    //   bookURL = response.items;
    //   populateBooks(authorNumber);
    //   booksFoundTable();
    //   console.log('bookURL: ', bookURL);
    //   $("#author-image").attr('src', authors[authorNumber].image);
    //   $('#today-top').text("Looking for a good read? Check out our Author Spotlight!");
    //   $('#author-name').text(authorSpotlight);
    //   $('#bio-caption').text(authors[authorNumber].caption)
    // });

    //This "else" is what runs if the user enters any search parameters.
  } else {
    //The if/elses below change the text based on the user's chosen search parameters: author only, book only, or both
    if (searchByAuthor == "") {
      $("#popular-title").text("You searched for the following book title: " + searchByBook);
    } else if (searchByBook == "") {
      $("#popular-title").text("You searched for the following author: " + searchByAuthor);
      console.log("You searched for: ", searchByAuthor);
    } else {
      $("#popular-title").text("You searched for " + searchByBook + " by " + searchByAuthor + ":");
    }

    // var searchedAuthor = searchByAuthor;

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    //Tyler's code here... for dynamic images
    //This uses google API to get book thumbnail images and titles. See the function populateBooks().
    // $.ajaxPrefilter(function (options) {
    //   if (options.crossDomain && jQuery.support.cors) {
    //     var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
    //     options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
    //   }
    // });
    var authorSearch = searchByAuthor;
    var titleSearch = searchByBook;
    var searchURL = "https://www.googleapis.com/books/v1/volumes?q=" + titleSearch + "+inauthor:" + authorSearch + "&key=AIzaSyAYJ5-dMTGiI5M6BoZ2WEGoJSM-D8GEH7k";
    $.ajax({
      url: searchURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      bookURL = response.items;
      populateBooks();
      booksFoundTable();
      //The clearing below is necessary so if the user wants a new search, the old search info doesn't interfere
    });
  }
  searchByAuthor = '';
  searchByBook = '';

});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//DON'T NEED THIS RIGHT NOW, BUT IT IS VALUABLE CODE FOR WIKIPEDIA API. MAY USE IN FUTURE UPDATES.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //Kristal's API for Wiki media for the image and bio. 
// // Function calling the API Author Search
// function getAuthorInfo(authorSearch) {
//   $.ajax({
//     url: "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + authorSearch,
//     method: "GET",
//   }).then(function (response) {
//     console.log(response, "query")

//     console.log(response.query.search[0].snippet);

//     var target = response.query.search[0];

//     console.log("https://en.wikipedia.org/w/api.php?action=parse&pageid=" + target.pageid + "&prop=images", "url");

//     $.ajax({
//       url: "https://en.wikipedia.org/w/api.php?action=parse&pageid=" + target.pageid + "&prop=images&format=json",
//       method: "GET"
//     }).then(function (response) {
//       console.log(response, "images");

//       var image = response.parse.images[0];

//       console.log("https://en.wikipedia.org/w/api.php?action=query&titles=Image:" + encodeURIComponent(image) + "&prop=imageinfo&iiprop=url");

//       $.ajax({
//         url: "https://en.wikipedia.org/w/api.php?action=query&titles=Image:" + encodeURIComponent(image) + "&prop=imageinfo&iiprop=url&format=json",
//         method: "GET"
//       }).then(function (response) {
//         console.log(response, "imageURL");

//         console.log(response.query.pages[Object.keys(response.query.pages)[0]].imageinfo[0].url);


//         $("#author-image").attr('src', bookURL[0].volumeInfo.imageLinks.thumbnail); //I changed the image from wikipedia to google books. -Tyler
//       })
//     })

//     //Calling the first pargraph of the bio
//     $.ajax({
//       url: "https://en.wikipedia.org/w/api.php?action=parse&pageid=" + target.pageid + "&prop=text&format=json",
//       method: "GET"
//     }).then(function (response) {
//       console.log(response, "wikitext");

//       $("#author-name").text(response.parse.title);

//       $text = $(response.parse.text['*']);

//       console.log($text);

//       //$text.removeAll(".mw-empty-elt");

//       console.log($text.find("p")[1]);

//       var bio = $($text.find("p")[1]);

//       console.log(bio);

//       bio = bio.text().replace(/]+>/gi, '');

//       $("#bio-caption").html(bio);

//     })

//   })
// }

// getAuthorInfo(authorSpotlight);


////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
$(document).ready(function () {
  // Create a variable to reference the database.
  database = firebase.database();


  $(".book-row").on("click", function (event) {
    event.preventDefault();


    // var favorid = $(this).attr(".table-book-image");

    if (firebase.auth().currentUser !== null)
      console.log("user id: " + firebase.auth().currentUser.uid);

    // var userid = firebase.auth().currentUser.uid;
    var userid = "test-again";

    // var bookName = 'vitaliy';
    var bookName = $(this).attr("src");
    console.log('bookName: ', bookName);
    // var author =
    // var bookCoverLink =
    // var bookSellerLink

    database.ref("/" + userid + "/favorite").push({
      favorite: bookName,
      favorite2: bookName
      // name: bookName
      // bookAuthor: "row book-title",
      // bookImageLink: $(this).attr(".book-image", ),
      // bookSellerLink: ""
    })
    console.log('!!!!------clicked-image (this): ', (this));
  });

  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  // PATRICK'S WORK - SIGN UP & SIGN-IN 

  // $(document).ready(function () {
  //   // Create a variable to reference the database.
  //   database = firebase.database();

  // FirebaseUI config.
  var uiConfig = {
    signInSuccessUrl: './index.html',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: true
      },
    ],
  };

  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig);



  // VITALIY'S AUTHENTICATION PERSISTENCE CODE = DEFAULT PERSISTENCE IS LOCAL => USER MUST SIGN OUT TO CHANGE STATE
  // VITALIY'S CODE TO CHECK FOR CURRENT FIREBASE USER
  var user = firebase.auth().currentUser;

  if (user) {
    // User is signed in.
    console.log('CURRENT USER (signed-in): ', user);
    console.log('user.displayName: ', user.displayName);
    $('#navbarDropdown').text(user.displayName);
    $('#sign-in-button').hide();
    $('#member-dropdown').show();

  } else {
    // No user is signed in.
    console.log('CURRENT USER (signed-out): ', user);
    $('#member-dropdown').hide();
    $('#sign-in-button').show();
  }


  // SIGN-IN/OUT ACTIONS
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log('user.displayName: ', user.displayName);
      $('#navbarDropdown').text(user.displayName);
      $('#sign-in-button').hide();
      $('#member-dropdown').show();

    } else {
      // No user is signed in.
      console.log('CURRENT USER (signed-out): ', user);
      $('#member-dropdown').hide();
      $('#sign-in-button').show();
    }
  });


  // PATRICK's signout button 
  $('#sign-out-dropdown').on("click", function (event) {
    event.preventDefault();

    firebase.auth().signOut().then(function () {
      // Sign-out successful.
      console.log("USER SIGNED OUT!..¯\_(ツ)_/¯ ")
      console.log('user.displayName: ', user.displayName);
      $('#navbarDropdown').text('');
      $('#sign-in-button').show();
      $('#member-dropdown').hide();

    })
      .catch(function (error) {
        // An error happened.
        console.log('If user.displayName below is not NULL ...');
        console.log("USER DID NOT SIGN OUT")
      });
    console.log('user.displayName: ', user.displayName);
  });



});



// use jQuery to populate 'Today's Top Author' from an object




// use jQuery to populate author's most popular works from an object
// use jQuery to populate author's complete works from an object