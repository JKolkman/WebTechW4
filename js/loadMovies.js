/**
 * Created by sveno on 24-10-2016.
 */
$(document).ready(function() {
    $.ajax({
        url: "http://localhost:666/api/movies/",
        dataType: "json",
        type: "GET"
    }).fail(function (jqXHR, textStatus) {
        alert("API	Request	failed:	" + textStatus + jqXHR);
    }).done(function (data) {
        data.forEach(function (movie) {
            $.ajax({
                url: "http://www.omdbapi.com/?i=" + movie.imdb + "&plot=short&r=json",
                dataType: "json",
                type: "GET"
            }).fail(function (jqXHR, textStatus) {
                alert("API	Request	failed:	" + textStatus + jqXHR);
            }).done(function (poster) {
                var html = '<div class="col-xs-4 col-sm-3 col-md-2 padmov">';
                html += '<div class="imgWrap" alt="'+movie.imdb+'">';
                html += '<img class="imgMovie" src="' + poster.Poster + '"/>';
                html += '<p class="imgDescription" alt="'+movie.imdb+'">' + movie.titel + '<br>'+movie.year+'<br>';
                /*$.ajax({
                    url: "http://localhost:666/api/rating/movie",
                    dataType: "json",
                    data:'{ imdb:'+movie.imdb+'}',
                    type: "POST"
                }).fail(function (jqXHR, textStatus) {
                    alert("API	Request	failed:	" + textStatus + jqXHR);
                }).done(function (rating) {
                    var rate = rating.rating;
                    if(rating>4.5){
                        html += '&#9733;&#9733;&#9733;&#9733;&#9733;</p></div></div>'
                    }else if(rating>4){
                        html += '&#9733;&#9733;&#9733;&#9733;&#189;</p></div></div>'
                    }else if(rating>3.5){
                        html += '&#9733;&#9733;&#9733;&#9733;</p></div></div>'
                    }else if(rating>3){
                       html += '&#9733;&#9733;&#9733;&#189;</p></div></div>'
                    }else if(rating>2.5){
                        html += '&#9733;&#9733;&#9733;</p></div></div>'
                    }else if(rating>2){
                        html += '&#9733;&#9733;&#189;</p></div></div>'
                    }else if(rating>1.5){
                        html += '&#9733;&#9733;</p></div></div>'
                    }else if(rating>1){
                        html += '&#9733;&#189;</p></div></div>'
                    }else if(rating>0.5){
                        html += '&#9733;</p></div></div>'
                    }else if(rating>0){
                        html += '&#189;</p></div></div>'
                    }
                });*/

                $('#movies').append(html);
            });
        });

    });


});
