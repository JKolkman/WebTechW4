/**
 * Created by sveno on 26-10-2016.
 */
$(document).ready(function() {
    $('#doLogin').submit(function() {
        var $inputs = $('#doLogin :input');

        var values = {};
        $inputs.each(function() {
            values[this.name] = $(this).val();
        });
        var username = values["username"];
        var wachtwoord = values["wachtwoord"];


        alert(username + wachtwoord);

        $.ajax({
            method: "POST",
            url : "localhost:666/api/login",
            contentType: 'application/json',
            data : JSON.stringify({
                username : username,
                wachtwoord: wachtwoord
            }),
            body : JSON.stringify({
                username : username,
                wachtwoord: wachtwoord
            })
        }).fail(function (jqXHR, textStatus) {
            alert("Login Failed"+jqXHR.responseText+textStatus);
        }).done(function (data) {
            alert(data.token);
        });
    });
});