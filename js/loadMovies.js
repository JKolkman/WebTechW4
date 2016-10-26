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
                html += '<div class="imgWrap">';
                html += '<img class="imgMovie" src="' + poster.Poster + '"/>';
                html += '<p class="imgDescription">' + movie.titel + '<br>'+movie.year+'<br><br><br><br>&#9733;&#9733;&#9733;&#189;</p></div></div>'
                $('#movies').append(html);
            });
        });

    });
});
