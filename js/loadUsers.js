/**
 * Created by joost on 26/10/2016.
 */
$(document).ready(function() {
    $.ajax({
        url: "http://localhost:666/api/user/",
        dataType: "json",
        type: "GET"
    }).fail(function (jqXHR, textStatus) {
        alert("API	Request	failed:	" + textStatus + jqXHR);
    }).done(function (data) {
        var id = 1;
        date.forEach(function (user) {
            var html = '<tr><td>'+ id + '</td> <td>' + user.username + '</td> <td>'+ user.voornaam+'</td> <td>' + user.achternaam + '</td> </tr>';
            id++;
            alert(html);
            $('tbody').append(html);
        });
    });
});