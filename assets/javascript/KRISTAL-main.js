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

////////////////////////////////Tyler's Code/////////////////////////////////////////////////////////////////
//We can code the default recommended books here: //////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////////////////////
  //Tyler's code here... for dynamic images

  var authorSpotlightList = ["J.R.R. Tolkien", "Brandon Sanderson", "Arthur Conan Doyle", "J.K. Rowling"]
  var authorSpotlight = authorSpotlightList[Math.floor(Math.random()*4)];
  console.log(authorSpotlight);

  $.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
      var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
      options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
      //options.url = "http://cors.corsproxy.io/url=" + options.url;
    }
  });
  var searchURL = "https://www.googleapis.com/books/v1/volumes?q=+inauthor:" + authorSpotlight + "&key=AIzaSyAYJ5-dMTGiI5M6BoZ2WEGoJSM-D8GEH7k";

  $.ajax({
    url: searchURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    $("#popular-title").text("Author Spotlight: " + authorSpotlight);
    bookURL = response.items;
    populateBooks();
    console.log('bookURL: ', bookURL);
  });
  console.log('authors: ', authors);

  /////////////////////////////////////////////////////////////////////////////////////////////

// var defaultRecommendedTitles = ["Fellowship of the Ring", "Insert"];
// var defaultRecommendedPics = ["a","b","c","d"];  //put 4 pictures in this array src: "./assets/images/eBook3.png"
// defaultRecommendedPics[0].src = ".assets/images/Fellowship.jpg"
// var defaultRecommendedLinks = ["a","b","c","d"]; //put 4 links in this array
// defaultRecommendedLinks[0] = "https://books.google.com/books?id=aWZzLPhY4o0C&printsec=frontcover&dq=fellowship+of+the+ring&hl=en&sa=X&ved=0ahUKEwjK06COyK_gAhUqIzQIHZIOBF8Q6AEIKDAA#v=onepage&q=fellowship%20of%20the%20ring&f=false";
// $('#popular-book-container').empty();
// for (i = 0; i < 1; i++) {
//   // console.log("Book URL: " + bookURL); 

//   // var theLink = "bookURL" + i;
//   // MY ATTEMPT TO CREATE NESTED DIVS
//   $('<div>', { class: 'col-3 book' }).append(
//     $('<div>', { class: 'container' }).append(
//       $('<div>', { class: 'row' }).append(
//         $('<img>', {
//           class: 'book-image',
//           src: defaultRecommendedPics[i]
//         }).append(
//         )
//       )),
//     $('<div>', { class: 'row book-title' }).append(
//       $('<h5>').text(defaultRecommendedTitles[0]).append(
//         $('<a>').attr("href", defaultRecommendedLinks[i]).append(
//           $('<img>', {
//             id: 'eBook-image',
//             src: "./assets/images/eBook3.png"
//           }).attr("href", defaultRecommendedLinks[i])
//         )
//         // $('<a>').text(bookURL[i].volumeInfo.title).attr("href", bookURL[i].saleInfo.buyLink)   
//       )
//     )
//   ).appendTo('#popular-book-container');
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////


function populateBooks() {
  // Empty popular book div before displaying new info
  $('#popular-book-container').empty();
  // for (i = 0; i < searchedAuthor.bibliography.length; i++) {
  for (i = 0; i < 4; i++) {
    // console.log("Book URL: " + bookURL); 

    // var theLink = "bookURL" + i;
    // MY ATTEMPT TO CREATE NESTED DIVS
    $('<div>', { class: 'col-3 book' }).append(
      $('<div>', { class: 'container' }).append(
        $('<div>', { class: 'row' }).append(
          $('<img>', {
            class: 'book-image',
            src: bookURL[i].volumeInfo.imageLinks.thumbnail
          }).append(
          )
        )),
      $('<div>', { class: 'row book-title' }).append(
        $('<h5>').text(bookURL[i].volumeInfo.title).append(
          $('<a>').attr("href", bookURL[i].saleInfo.buyLink).append(
            $('<img>', {
              id: 'eBook-image',
              src: "./assets/images/eBook3.png"
            }).attr("href", bookURL[i].saleInfo.buyLink)
          )
          // $('<a>').text(bookURL[i].volumeInfo.title).attr("href", bookURL[i].saleInfo.buyLink)   
        )
      )
    ).appendTo('#popular-book-container');
  };
}

// On-click event listener for the 'Search' button
$("#search-button").on("click", function (event) {
  event.preventDefault();

  // Grabs user input
  searchByAuthor = $("#search-by-author").val().toLowerCase();
  searchByBook = $("#search-by-book").val().toLowerCase();
  if(searchByAuthor == "" && searchByBook == ""){
    $("#popular-title").text("You did not enter search parameters. Here are some recommendations: ");
    authorSpotlight = authorSpotlightList[Math.floor(Math.random()*4)];
    $.ajaxPrefilter(function (options) {
      if (options.crossDomain && jQuery.support.cors) {
        var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
        options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
        //options.url = "http://cors.corsproxy.io/url=" + options.url;
      }
    });
    var searchURL = "https://www.googleapis.com/books/v1/volumes?q=+inauthor:" + authorSpotlight + "&key=AIzaSyAYJ5-dMTGiI5M6BoZ2WEGoJSM-D8GEH7k";
  
    $.ajax({
      url: searchURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      // $("#popular-title").text("Author Spotlight: " + authorSpotlight);
      bookURL = response.items;
      populateBooks();
      console.log('bookURL: ', bookURL);
    }); 

  }else{
  $("#popular-title").text("You searched for: ");
  console.log('searchByAuthor: ', searchByAuthor);
  console.log('searchByBook: ', searchByBook);

  // Declare a variable for searched author that awaits an object
  var searchedAuthor = searchByAuthor;
  var searchedBook = {};

  // // Loop through authors to find a search match
  // for (i = 0; i < authors.length; i++) {

  //   console.log('authors[i].firstName.toLowerCase(): ', authors[i].firstName.toLowerCase());
  //   console.log('authors[i].lastName.toLowerCase(): ', authors[i].lastName.toLowerCase());
  //   console.log("authors[i].firstName.toLowerCase() + ' ' + authors[i].lastName.toLowerCase(): ", authors[i].firstName.toLowerCase() + ' ' + authors[i].lastName.toLowerCase());

  //   if (searchByAuthor == authors[i].firstName.toLowerCase()  
  //    || searchByAuthor == authors[i].lastName.toLowerCase()
  //    || searchByAuthor == authors[i].firstName.toLowerCase() + ' ' + authors[i].lastName.toLowerCase()) {
  //     console.log('It matches');

  //     // set searchedAuthor variable to an object of the search match
  //     searchedAuthor = authors[i];
  //     console.log('searchedAuthor: ', searchedAuthor);

  //    } else {
  //      console.log("Sorry, there's no match.");
  //    }

  // };

  // Replace info in 'Today's Top Author' div with 'You searched for:' info
  $('#author-image').attr('src', searchedAuthor.image);
  $('#today-top').text('YOU SEARCHED FOR:');
  $('#author-name').text(searchedAuthor.firstName + ' ' + searchedAuthor.lastName);
  $('#bio-caption').text(searchedAuthor.caption);

  ///////////////////////////////////////////////////////////////////////////////////////////////////
  //Tyler's code here... for dynamic images
  $.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
      var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
      options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
      //options.url = "http://cors.corsproxy.io/url=" + options.url;
    }
  });
  console.log('searchedAuthor: ', searchedAuthor);
  var authorSearch = searchByAuthor;
  var titleSearch = searchByBook
  var searchURL = "https://www.googleapis.com/books/v1/volumes?q=" + titleSearch + "+inauthor:" + authorSearch + "&key=AIzaSyAYJ5-dMTGiI5M6BoZ2WEGoJSM-D8GEH7k";

  $.ajax({
    url: searchURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    bookURL = response.items;
    populateBooks();
    // bookURL1 = response.items[0].saleInfo.buyLink;
    // bookURL2 = response.items[1].saleInfo.buyLink;
    // bookURL3 = response.items[2].saleInfo.buyLink;
    // bookURL4 = response.items[3].saleInfo.buyLink;
    // console.log("This is the book URL: " + bookURL1);
    // $("#theLink").attr("href", bookURL1);
    console.log('bookURL: ', bookURL);
  });
  console.log('authors: ', authors);

  /////////////////////////////////////////////////////////////////////////////////////////////

  }
});

// create an authors array of Brandon Sanderson
// create a limited complete works object of Brandon Sanderson's works - simulate populating divs from here

// var topAuthorName = ""; 
// var topAuthorImage = ""; 
// var topAuthorCaption = ""; 

// var authorsList = [
//   "Brandon Sanderson",
//   "J. R. R. Tolkien",
//   "Robert Jordan",
//   "John Scalzi",
//   "Stephen King"
// ];


// var brandonSanderson = {
//   firstName: "Brandon",
//   lastName: "Sanderson",
//   image: "https://en.wikipedia.org/wiki/File:Brandon_Sanderson_-_Lucca_Comics_%26_Games_2016.jpg",
//   caption: "Brandon Sanderson (born December 19, 1975) is an American fantasy and science fiction writer. He is best known for the Cosmere universe, in which most of his fantasy novels (most notably the Mistborn series and The Stormlight Archive) are set. He is also known for finishing Robert Jordan's epic fantasy series The Wheel of Time.",
//   bibliography: {
//     type: "Book",
//     bookName: "The Way of Kings",
//     coverLink: "https://en.wikipedia.org/wiki/File:TheWayOfKings.png",
//     sellerLink: "https://smile.amazon.com/Way-Kings-Book-Stormlight-Archive/dp/B0041JKFJW/ref=sr_1_2?ie=UTF8&qid=1549425753&sr=8-2&keywords=The+way+of+kings"
//   }
// };
// console.log('brandonSanderson: ', brandonSanderson);

// var fyodorDostoyevsky = {
//   firstName: "Fyodor",
//   lastName: "Dostoevsky",
//   image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Dostoevskij_1876.jpg/440px-Dostoevskij_1876.jpg',
//   caption: "Fyodor Mikhailovich Dostoevsky[a] (/ˌdɒstəˈjɛfski, ˌdʌs-/;[1] Russian: Фёдор Михайлович Достоевский[b], tr. Fyódor Mikháylovich Dostoyévskiy, IPA: [ˈfʲɵdər mʲɪˈxajləvʲɪtɕ dəstɐˈjɛfskʲɪj] (About this soundlisten); 11 November 1821 – 9 February 1881[2][c]), sometimes transliterated Dostoyevsky, was a Russian novelist, short story writer, essayist, journalist and philosopher. Dostoevsky's literary works explore human psychology in the troubled political, social, and spiritual atmospheres of 19th-century Russia, and engage with a variety of philosophical and religious themes.",
//   bibliography: {
//     type: "Book",
//     bookName: "Demons",
//     coverLink: "https://upload.wikimedia.org/wikipedia/en/6/6d/Demons_%28Fyodor_Dostoyevsky%29.jpg",
//     sellerLink: "https://smile.amazon.com/Demons-Penguin-Classics-Fyodor-Dostoevsky/dp/0141441410/ref=sr_1_4?s=books&ie=UTF8&qid=1549427616&sr=1-4&keywords=demons+dostoyevsky"
//   }
// };
// console.log('fyodorDostoyevsky: ', fyodorDostoyevsky);

var authors = [{
  firstName: "Fyodor",
  lastName: "Dostoevsky",
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Dostoevskij_1876.jpg/440px-Dostoevskij_1876.jpg',
  caption: "Fyodor Mikhailovich Dostoevsky[a] (/ˌdɒstəˈjɛfski, ˌdʌs-/;[1] Russian: Фёдор Михайлович Достоевский[b], tr. Fyódor Mikháylovich Dostoyévskiy, IPA: [ˈfʲɵdər mʲɪˈxajləvʲɪtɕ dəstɐˈjɛfskʲɪj] (About this soundlisten); 11 November 1821 – 9 February 1881[2][c]), sometimes transliterated Dostoyevsky, was a Russian novelist, short story writer, essayist, journalist and philosopher. Dostoevsky's literary works explore human psychology in the troubled political, social, and spiritual atmospheres of 19th-century Russia, and engage with a variety of philosophical and religious themes.",
  bibliography: {
    type: "Book",
    bookName: "Demons",
    coverLink: "https://upload.wikimedia.org/wikipedia/en/6/6d/Demons_%28Fyodor_Dostoyevsky%29.jpg",
    sellerLink: "https://smile.amazon.com/Demons-Penguin-Classics-Fyodor-Dostoevsky/dp/0141441410/ref=sr_1_4?s=books&ie=UTF8&qid=1549427616&sr=1-4&keywords=demons+dostoyevsky"
  }
},

{
  firstName: "Brandon",
  lastName: "Sanderson",
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
      sellerLink: "https://smile.amazon.com/Way-Kings-Book-Stormlight-Archive/dp/B0041JKFJW/ref=sr_1_2?ie=UTF8&qid=1549425753&sr=8-2&keywords=The+way+of+kings"
    },
    {
      type: "Book",
      bookName: "Oathbringer",
      coverLink: "https://upload.wikimedia.org/wikipedia/en/5/5d/Brandon_Sanderson_Oathbringer_book_cover.jpg",
      sellerLink: "https://smile.amazon.com/Way-Kings-Book-Stormlight-Archive/dp/B0041JKFJW/ref=sr_1_2?ie=UTF8&qid=1549425753&sr=8-2&keywords=The+way+of+kings"
    },
    {
      type: "Book",
      bookName: "Mistborn: The Final Empire",
      coverLink: "https://upload.wikimedia.org/wikipedia/en/4/44/Mistborn-cover.jpg",
      sellerLink: "https://smile.amazon.com/Way-Kings-Book-Stormlight-Archive/dp/B0041JKFJW/ref=sr_1_2?ie=UTF8&qid=1549425753&sr=8-2&keywords=The+way+of+kings"
    },
    {
      type: "Book",
      bookName: "Mistborn: The Well of Ascension",
      coverLink: "https://upload.wikimedia.org/wikipedia/en/7/7b/Mistborn-_The_Well_of_Ascension_by_Brandon_Sanderson.jpg",
      sellerLink: "https://smile.amazon.com/Way-Kings-Book-Stormlight-Archive/dp/B0041JKFJW/ref=sr_1_2?ie=UTF8&qid=1549425753&sr=8-2&keywords=The+way+of+kings"
    },
    {
      type: "Book",
      bookName: "Mistborn: The Hero of Ages",
      coverLink: "https://upload.wikimedia.org/wikipedia/en/b/bb/The_Hero_of_Ages_-_Book_Three_of_Mistborn.png",
      sellerLink: "https://smile.amazon.com/Way-Kings-Book-Stormlight-Archive/dp/B0041JKFJW/ref=sr_1_2?ie=UTF8&qid=1549425753&sr=8-2&keywords=The+way+of+kings"
    }
  ]
}];

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    //Tyler's code here... for dynamic images
    $.ajaxPrefilter(function (options) {
      if (options.crossDomain && jQuery.support.cors) {
        var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
        options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
        //options.url = "http://cors.corsproxy.io/url=" + options.url;
      }
    });
    var authorSearch = "Brandon Sanderson";
    var titleSearch = "Return of the King"; //not yet implemented
    var searchURL = "https://www.googleapis.com/books/v1/volumes?q=steel+inauthor:" + authorSearch + "&key=AIzaSyAYJ5-dMTGiI5M6BoZ2WEGoJSM-D8GEH7k";

    $.ajax({
      url: searchURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      bookURL = response.items;
      // bookURL1 = response.items[0].saleInfo.buyLink;
      // bookURL2 = response.items[1].saleInfo.buyLink;
      // bookURL3 = response.items[2].saleInfo.buyLink;
      // bookURL4 = response.items[3].saleInfo.buyLink;
      // console.log("This is the book URL: " + bookURL1);
      // $("#theLink").attr("href", bookURL1);
      console.log(bookURL[2]);
    }); console.log('authors: ', authors);

    //Kristal's API for Wiki media for the image and boi. 
    // Function calling the API Author Search
    function getAuthorInfo(authorSearch) {
      $.ajax({
        url: "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + authorSearch,
        method: "GET",
      }).then(function (response) {
        console.log(response, "query")

        console.log(response.query.search[0].snippet);

        var target = response.query.search[0];

        console.log("https://en.wikipedia.org/w/api.php?action=parse&pageid=" + target.pageid + "&prop=images", "url");

        $.ajax({
          url: "https://en.wikipedia.org/w/api.php?action=parse&pageid=" + target.pageid + "&prop=images&format=json",
          method: "GET"
        }).then(function (response) {
          console.log(response, "images");

          var image = response.parse.images[0];

          console.log("https://en.wikipedia.org/w/api.php?action=query&titles=Image:" + encodeURIComponent(image) + "&prop=imageinfo&iiprop=url");

          $.ajax({
            url: "https://en.wikipedia.org/w/api.php?action=query&titles=Image:" + encodeURIComponent(image) + "&prop=imageinfo&iiprop=url&format=json",
            method: "GET"
          }).then(function (response) {
            console.log(response, "imageURL");

            console.log(response.query.pages[Object.keys(response.query.pages)[0]].imageinfo[0].url);

            $("#author-image").attr('src', response.query.pages[Object.keys(response.query.pages)[0]].imageinfo[0].url);
          })
        })

        //Calling the first pargraph of the bio
        $.ajax({
          url: "https://en.wikipedia.org/w/api.php?action=parse&pageid=" + target.pageid + "&prop=text&format=json",
          method: "GET"
        }).then(function (response) {
          console.log(response, "wikitext");

          $("#author-name").text(response.parse.title);

          $text = $(response.parse.text['*']);

          console.log($text);

          //$text.removeAll(".mw-empty-elt");

          console.log($text.find("p")[1]);

          var bio = $($text.find("p")[1]);

          console.log(bio);

          bio = bio.text().replace(/]+>/gi, '');

          $("#bio-caption").html(bio);

        })

      })
    }

    getAuthorInfo("Conan Doyle");



    // use jQuery to populate 'Today's Top Author' from an object


    // use jQuery to populate author's most popular works from an object
    // use jQuery to populate author's complete works from an object
////////////////////////////////////////////////////////////////////
// KRISTAL's Favor Button
$(".btn btn-defaults").on("click", function (event) {
  event.preventDefault();

  var favorid = $(this).attr(".container popular-books");

  if (firebase.auth().currentUser !== null) 
     console.log("user id: " + firebase.auth().currentUser.uid);

  var userid = firebase.auth().currentUser.uid;


  database.ref("/" + userid + "/favorite").push({
    favorite: "row book-title"
  })
});

////////////////////////////////////////////////////////////////////
// PATRICK'S WORK - SIGN UP & SIGN-IN 

$(document).ready(function() {
  // Create a variable to reference the database.
  database = firebase.database();

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

  // // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  // // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig);


// PATRICK's signout button 
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });

  });

