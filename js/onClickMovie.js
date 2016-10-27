/**
 * Created by sveno on 26-10-2016.
 */
$(document).ready(function() {
    $('#movies').on('click', '.item', function () {
        var id = $(this).data('id');
        console.log('id:', id)
    })
});