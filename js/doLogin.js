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
        alert(username + wachtwoord);
        $.ajax({
            url: 'http://localhost:666/api/login/log',
            data: {
                username: username,
                wachtwoord: wachtwoord
            },
            method: 'POST'
            //contentType: "application/x-www-form-urlencoded"
        }).fail(function (jqXHR, textStatus) {
            alert("API	Request	failed:	" + textStatus.responseText + jqXHR.responseText);
        }).done(function (data,textStatus,xhr) {
            switch(xhr.status){
                case 200:
                    localStorage.setItem("token", data.token);
                    break;
                case 204:
                    alert("Username or Password incorrect!");
            }
        });
        return false;
    });
});