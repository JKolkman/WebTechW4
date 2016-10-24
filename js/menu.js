$(document).ready(function(){
    $('main').load('movies.html');
    $('#button-movies').click(showMovies);
    $('#button-rating').click(showRating);
    $('#button-users').click(showUser);
});

function showMovies() {
    $('main').load('movies.html');
    return false;
}
function showRating() {
    $('main').load('ratings.html');
    return false;
}
function showUser() {
    $('main').load('user.html');
    return false;
}