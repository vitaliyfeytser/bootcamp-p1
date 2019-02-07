      // MY ATTEMPT TO CREATE NESTED DIVS
      $('<div>',{class : 'col-3 book'}).append(
            $('<div>',{class : 'container'}).append(
                $('<div>',{class : 'row'}).append(
                    $('<img>',{class : 'book-image',
                                 src : searchedAuthor.bibliography[i].coverLink}).append(
                    )
        )),
        $('<div>',{class : 'row book-title'}).append(
            $('<h5>').text(searchedAuthor.bibliography[i].bookName)
        )
      ).appendTo('#popular-book-container')   



    $("<div>", {class: "wrapper"}).append(
        $("<div>", {class: "inner"}).append(
            $("<span>").text(
                "Some text"
            )
        ), 
        $("<div>", {class: "inner"}).append(
            $("<span>").text(
                "Some text"
            )
        )
    ).appendTo("body")