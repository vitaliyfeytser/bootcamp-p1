// <!--<script src="https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=handleResponse"></script>-->

//   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
//   <script type="text/javascript">



    // event listener for any button click
    $("#search-button").on("click", function(event) {
      event.preventDefault();

    // var mySearchEntry = $('#search-field');
    var mySearchEntry = $('#search-field').val().toLowerCase();

    // var mySearchEntry = $('#search-field').attr("data-search-entry");
    // var queryURL = "https://www.mediawiki.org/wiki/API";
    console.log("------------- NEW CLICK -------------");
    console.log("(this) of button", this);
    console.log('var mySearchEntry: ', mySearchEntry);



    // this code fixes the CORS issue 
    $.ajaxPrefilter(function (options) {
      if (options.crossDomain && jQuery.support.cors) {
        var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
        options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
        //options.url = "http://cors.corsproxy.io/url=" + options.url;
      }
    });

      $.ajax({
      url: "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + mySearchEntry,
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

          var image = response.parse.images[1];

          console.log("https://en.wikipedia.org/w/api.php?action=query&titles=Image:" + encodeURI(image) + "&prop=imageinfo&iiprop=url");

          $.ajax({
            url: "https://en.wikipedia.org/w/api.php?action=query&titles=Image:" + encodeURI(image) + "&prop=imageinfo&iiprop=url&format=json",
            method: "GET"
          }).then(function(response){
            console.log(response, "imageURL");

            console.log('22222 response.query.pages["-1"].imageinfo[0].url :', response.query.pages["-1"].imageinfo[0].url);

            $("#gifs-appear-here").append('<img src="' + response.query.pages["-1"].imageinfo[0].url + '" height="300px">');
          })
        })

        $.ajax({
          url: "https://en.wikipedia.org/w/api.php?action=parse&pageid=" + target.pageid + "&prop=text&format=json",
          method: "GET"
        }).then(function(response) {
          console.log(response, "sections");

          // $("#response-stuff").html("<div id='temp' style='display:none'>" + response.parse.text['*'] + "</div>");
          $("#response-stuff").html("<div id='temp'>" + response.parse.text['*'] + "</div>");

          $("#response-stuff").append($(".infobox")[0]);

          $(".infobox")[0].removeAttribute("class");

          // $("#temp").remove();

          console.log("response.parse.text['*'] :", response.parse.text);

        })
   
   
    });
    });
  

  