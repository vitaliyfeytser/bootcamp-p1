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
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Tolkien_1916.jpg",
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
  //First, it loads the intial "author spotlight:"

  var authorSpotlightList = ["J.R.R. Tolkien", "Brandon Sanderson", "Arthur Conan Doyle", "J.K. Rowling", "Timothy Zahn"];
  var authorSpotlight = authors[Math.floor(Math.random()*5)].fullName;
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

//This function populates the four (or less) recommended books based on the search ran through google books api.
//It looks like it runs twice- but basically, the first checks if it is for sale by e-book on google books.
//If so, it adds a clickable icon that takes the user to the google books site.
//the "else" statement runs if the book is not for sale. It basically runs the same code, but does not append the clickable image link.
function populateBooks() {
  // Empty popular book div before displaying new info
  $('#popular-book-container').empty();
  // for (i = 0; i < searchedAuthor.bibliography.length; i++) {
  for (i = 0; i < 4; i++) {
    // console.log("Book URL: " + bookURL); 

    // var theLink = "bookURL" + i;
    // MY ATTEMPT TO CREATE NESTED DIVS
    // CREATE BOOKS WITH E-BOOK TAG
  if (bookURL[i].saleInfo.saleability == "FOR_SALE"){
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
        //   .attr({
        //     target:"nw", 
        //     title:"Opens in a new window"
        // });
          $('<a>').attr({
            href: bookURL[i].saleInfo.buyLink,
            target: "_blank" }).append(
            $('<img>', {
              id: 'eBook-image',
              src: "./assets/images/eBook3.png"
            }).attr("href", bookURL[i].saleInfo.buyLink)
          )
        )
      )
    ).appendTo('#popular-book-container');
  // THIS CREATES BOOK WITHOUT E-BOOK TAG
  } else {
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
        $('<h5>').text(bookURL[i].volumeInfo.title)       
        
      )
    ).appendTo('#popular-book-container');
  }
  };
}


// On-click event listener for the 'Search' button
$("#search-button").on("click", function (event) {
  event.preventDefault();

  // Grabs user input
  searchByAuthor = $("#search-by-author").val();
  searchByBook = $("#search-by-book").val();
  //If the user clicks the button without entering search info, the if statement runs, and displays one of our pre-selected recommended authors
  if(searchByAuthor == "" && searchByBook == ""){
    var authorNumber = Math.floor(Math.random()*5);
    authorSpotlight = authors[authorNumber].fullName; //randomly selects an author from the "authors" object above
    $("#popular-title").text("You did not enter search parameters. Here are some recommendations by " + authorSpotlight + ":");
    $.ajaxPrefilter(function (options) {
      if (options.crossDomain && jQuery.support.cors) {
        var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
        options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
      }
    });
    var searchURL = "https://www.googleapis.com/books/v1/volumes?q=+inauthor:" + authorSpotlight + "&key=AIzaSyAYJ5-dMTGiI5M6BoZ2WEGoJSM-D8GEH7k";
  
    $.ajax({
      url: searchURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      bookURL = response.items;
      populateBooks();
      console.log('bookURL: ', bookURL);
      $("#author-image").attr('src', bookURL[0].volumeInfo.imageLinks.thumbnail);
      $('#today-top').text("Looking for a good read? Check out our Author Spotlight!");
      $('#author-name').text(authorSpotlight);
      $('#bio-caption').text(authors[authorNumber].caption)
    }); 
    
//This "else" is what runs if the user enters any search parameters.
  }else{
    //The if/elses below change the text based on the user's chosen search parameters: author only, book only, or both
    if(searchByAuthor == ""){
      $("#popular-title").text("You searched for the following book title: " + searchByBook);
    }else if(searchByBook == ""){
    $("#popular-title").text("You searched for the following author: " + searchByAuthor);
    console.log("You searched for: ", searchByAuthor);
    }else {
      $("#popular-title").text("You searched for " + searchByBook + " by " + searchByAuthor + ":");
    }

  var searchedAuthor = searchByAuthor;

  ///////////////////////////////////////////////////////////////////////////////////////////////////
  //Tyler's code here... for dynamic images
  //This uses google API to get book thumbnail images and titles. See the function populateBooks().
  $.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
      var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
      options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
    }
  });
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
    //The clearing below is necessary so if the user wants a new search, the old search info doesn't interfere
    searchByAuthor = '';
    searchByBook = '';
  });

  }
});


//Kristal's API for Wiki media for the image and boi. 
// Function calling the API Author Search
function getAuthorInfo(authorSearch){
  $.ajax({
    url: "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + authorSearch,
    method: "GET",
  }).then(function(response) {
      console.log(response, "query")

      console.log(response.query.search[0].snippet);

      var target = response.query.search[0];

      console.log("https://en.wikipedia.org/w/api.php?action=parse&pageid=" + target.pageid + "&prop=images", "url");

      $.ajax({
        url: "https://en.wikipedia.org/w/api.php?action=parse&pageid=" + target.pageid + "&prop=images&format=json",
        method: "GET"
      }).then(function(response) {
        console.log(response, "images");

        var image = response.parse.images[0];

        console.log("https://en.wikipedia.org/w/api.php?action=query&titles=Image:" + encodeURIComponent(image) + "&prop=imageinfo&iiprop=url");

        $.ajax({
          url: "https://en.wikipedia.org/w/api.php?action=query&titles=Image:" + encodeURIComponent(image) + "&prop=imageinfo&iiprop=url&format=json",
          method: "GET"
        }).then(function(response){
          console.log(response, "imageURL");

          console.log(response.query.pages[Object.keys(response.query.pages)[0]].imageinfo[0].url);

          // $("#author-image").attr('src', response.query.pages[Object.keys(response.query.pages)[0]].imageinfo[0].url); 
          $("#author-image").attr('src', bookURL[0].volumeInfo.imageLinks.thumbnail); //I changed the image from wikipedia to google books. -Tyler
        })
      })

      //Calling the first pargraph of the bio
    $.ajax({
      url:"https://en.wikipedia.org/w/api.php?action=parse&pageid=" + target.pageid + "&prop=text&format=json",           
      method:"GET"
    }).then(function(response){
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

getAuthorInfo(authorSpotlight);



////////////////////////////////////////////////////////////////////
// KRISTAL's Favor Button
$(".btn btn-defaults").on("click", function (event) {
  event.preventDefault();

  var favorid = $(this).attr(".container popular-books");

  if (firebase.auth().currentUser !== null) 
     console.log("user id: " + firebase.auth().currentUser.uid);

  var userid = "test";

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

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      $('#member-dropdown').removeAttr('style');
      console.log('user.displayName', user.displayName);
      $('#navbarDropdown').text(user.displayName);

    } else {
      // No user is signed in.
    }
  });

// PATRICK's signout button 
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });

  });



// use jQuery to populate 'Today's Top Author' from an object




// use jQuery to populate author's most popular works from an object
// use jQuery to populate author's complete works from an object