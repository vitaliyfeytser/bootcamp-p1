

$(document).ready(function () {

    // Global Heroku ajax Prefilter for all ajax calls
    $.ajaxPrefilter(function (options) {
        if (options.crossDomain && jQuery.support.cors) {
            var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
            options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
            //options.url = "http://cors.corsproxy.io/url=" + options.url;
        }
    });

    var bookURL = '';

    // // XML PARSER INTO JAVASCRIPT OBJECT
    // function parseXml(xml, arrayTags) {
    //     var dom = null;
    //     if (window.DOMParser) {
    //         dom = (new DOMParser()).parseFromString(xml, "text/xml");
    //     }
    //     else if (window.ActiveXObject) {
    //         dom = new ActiveXObject('Microsoft.XMLDOM');
    //         dom.async = false;
    //         if (!dom.loadXML(xml)) {
    //             throw dom.parseError.reason + " " + dom.parseError.srcText;
    //         }
    //     }
    //     else {
    //         throw "cannot parse xml string!";
    //     }

    //     function isArray(o) {
    //         return Object.prototype.toString.apply(o) === '[object Array]';
    //     }

    //     function parseNode(xmlNode, result) {
    //         if (xmlNode.nodeName == "#text") {
    //             var v = xmlNode.nodeValue;
    //             if (v.trim()) {
    //                 result['#text'] = v;
    //             }
    //             return;
    //         }

    //         var jsonNode = {};
    //         var existing = result[xmlNode.nodeName];
    //         if (existing) {
    //             if (!isArray(existing)) {
    //                 result[xmlNode.nodeName] = [existing, jsonNode];
    //             }
    //             else {
    //                 result[xmlNode.nodeName].push(jsonNode);
    //             }
    //         }
    //         else {
    //             if (arrayTags && arrayTags.indexOf(xmlNode.nodeName) != -1) {
    //                 result[xmlNode.nodeName] = [jsonNode];
    //             }
    //             else {
    //                 result[xmlNode.nodeName] = jsonNode;
    //             }
    //         }

    //         if (xmlNode.attributes) {
    //             var length = xmlNode.attributes.length;
    //             for (var i = 0; i < length; i++) {
    //                 var attribute = xmlNode.attributes[i];
    //                 jsonNode[attribute.nodeName] = attribute.nodeValue;
    //             }
    //         }

    //         var length = xmlNode.childNodes.length;
    //         for (var i = 0; i < length; i++) {
    //             parseNode(xmlNode.childNodes[i], jsonNode);
    //         }
    //     }

    //     var result = {};
    //     if (dom.childNodes.length) {
    //         parseNode(dom.childNodes[0], result);
    //     }

    //     return result;
    //     console.log('result: ', result);
    // }

    // ON-CLICK EVENT LISTENER FOR SEARCH
    $("#getButton").on("click", function (event) {
        event.preventDefault();


        var authorSearch = $('#authorTextbox').val().trim();
        authorSearch = authorSearch.replace(/ /g, '+');
        authorSearch = authorSearch.replace(/'/g, '%27');

        // var str = "Test One";
        // str = str.replace(/ /g, '');

        console.log("authorSearch: ", authorSearch);

        // var searchURL = "https://www.googleapis.com/books/v1/volumes?q=+inauthor:" + authorSpotlight + "&key=AIzaSyAYJ5-dMTGiI5M6BoZ2WEGoJSM-D8GEH7k";

        var searchURL = "https://www.goodreads.com/search.xml?key=4T3mOpx1YI2LtEhXJ0V6Vg&q=" + authorSearch;
        console.log('searchURL: ', searchURL);

        $.ajax({
            url: searchURL,
            dataType: "xml",
            method: "GET"
        }).then(function (response) {
            console.log('response-right-away: ', response);
            // var strResponse = JSON.stringify(response);
            // console.log('strResponse: ', strResponse)
            // $("#popular-title").text("Author Spotlight: " + authorSpotlight);
            // bookURL = response.items;
            bookURL = response;

            $('#xml-container').text(response);

            ///////////////////////////////////////////////////////////
            //// PARSER ONE ///////////////
            // var xmlDoc = $.parseXML( response );
            // console.log('xmlDoc: ', xmlDoc);

            // var $xml = $(xmlDoc);
            // console.log("$xml: ", $xml);
            //////////////////////////////////////////////////////////





            // bookURL = bookURL.serializeToString();

            // $(function () {

            //     //Parse the givn XML
            //     var xmlDoc = $.parseXML(response);
            //     // console.log("xmlDoc: ", xmlDoc);

            //     var $xml = $(xmlDoc);
            //     console.log("$xml: ", $xml);

            //     // Find results Tag
            //     var $results = $xml.find("results");
            //     console.log("$results: ", $results);

            //     // Find work Tag
            //     var $work = $xml.find("work");
            //     console.log("$work: ", $work);

            //     $work.each(function () {

            //         var title = $(this).find('title').text(),
            //             image_url = $(this).find('image_url').text();

            //         $("#book-list").append('<li>' + title + ' - ' + image_url + '</li>');

            //     });


            // });

            // var content = response.innerHTML;
            // console.log("content: ", content);

            // populateBooks();

            console.log('response: ', response);
            console.log('JSON.stringify(response): ', JSON.stringify(response));
            console.log('JSON.stringify({response}): ', JSON.stringify({ response }));
            console.log('bookURL.innerHTML: ', bookURL.innerHTML);
            console.log('bookURL: ', bookURL);
            console.log('JSON.stringify(bookURL): ', JSON.stringify(bookURL));
            console.log('JSON.stringify({bookURL}): ', JSON.stringify({ bookURL }));
            // console.log('bookURL.document.search.results: ', bookURL.#document.search.results);
        });


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
                                src: bookURL.volumeInfo.imageLinks.thumbnail
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

    })

    // function parseXML() {
    //     $(function () {

    //         var xml = bookURL;
    //         //Parse the givn XML

    //         var xmlDoc = $.parseXML(xml);
    //         // console.log("xmlDoc: ", xmlDoc);

    //         var $xml = $(xmlDoc);
    //         console.log("$xml: ", $xml);

    //         // Find results Tag
    //         var $results = $xml.find("results");
    //         console.log("$results: ", $results);

    //         // Find work Tag
    //         var $work = $xml.find("work");
    //         console.log("$work: ", $work);

    //         $work.each(function () {

    //             var title = $(this).find('title').text(),
    //                 image_url = $(this).find('image_url').text();

    //             $("#book-list").append('<li>' + title + ' - ' + image_url + '</li>');

    //         });


    //     });
    // }

    var authorSearch = $('#authorTextbox').val().trim();
    authorSearch = authorSearch.replace(/ /g, '+');
    authorSearch = authorSearch.replace(/'/g, '%27');

    $("#parse-xml").on("click", function (event) {
        event.preventDefault();

        //// PARSER TWO ///////////////
        $(document).ready(function () {
            $.ajax({
                type: "GET",
                url: "https://www.goodreads.com/search.xml?key=4T3mOpx1YI2LtEhXJ0V6Vg&q=" + authorSearch,
                dataType: "xml",
                success: function (xml) {

                    //var xmlDoc = $.parseXML( xml );   <------------------this line
                    //if single item
                    var title = $(xml).find('title').text();

                    //but if it's multible items then loop
                    $(xml).find('title').each(function () {
                        $("#book-list").append('<li>' + $(this).text() + '</li>');
                    });
                    $(xml).find('image_url').each(function () {
                        $("#book-list").append('<li><img src="' + $(this).text() + '"></li>');
                    });
                }
            });
        });

        // parseXML();
    })
});