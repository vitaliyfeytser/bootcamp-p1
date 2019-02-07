// <!--<script src="https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=handleResponse"></script>-->

//   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
//   <script type="text/javascript">
    //   Output link for the animals 

    $("button").on("click", function () {
    var animal = $(this).attr("data-animal");
    var queryURL = "https://www.mediawiki.org/wiki/API";


    

    // Calling the URL 
    $.ajaxPrefilter(function (options) {
      if (options.crossDomain && jQuery.support.cors) {
        var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
        options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
        //options.url = "http://cors.corsproxy.io/url=" + options.url;
      }
    });

      $.ajax({
      url: "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + animal,
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

            console.log(response.query.pages["-1"].imageinfo[0].url);

            $("#gifs-appear-here").append("<img src='" + response.query.pages["-1"].imageinfo[0].url + "' >");
          })
        })

        $.ajax({
          url: "https://en.wikipedia.org/w/api.php?action=parse&pageid=" + target.pageid + "&prop=text&format=json",
          method: "GET"
        }).then(function(response) {
          console.log(response, "sections");

          $("#gifs-appear-here").append("<div id='temp' style='display:none'>" + response.parse.text['*'] + "</div>");

          $("#gifs-appear-here").append($(".infobox")[0]);

          $(".infobox")[0].removeAttribute("class");

          $("#temp").remove();

        })
   
   
    });
    });
  

  