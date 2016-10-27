/**
 * Created by sveno on 27-10-2016.
 */

$(document).ready(function() {
    $('#doLogin').submit(function() {
        var $inputs = $('#doLogin :input');

        var values = {};
        $inputs.each(function () {
            values[this.name] = $(this).val();
        });
        var username = values["username"];
        var wachtwoord = values["wachtwoord"];

        $.ajax({
            url: "http://localhost:666/api/login",
            dataType: "json",
            method: "POST",
            contentType: 'application/json',
            data: JSON.stringify({
                username: username,
                wachtwoord: wachtwoord
            })
        }).fail(function (jqXHR, textStatus) {
            alert("API	Request	failed:	" + textStatus.responseText + jqXHR.responseText);
        }).done(function (res) {
            alert(res);
        });
    });
});