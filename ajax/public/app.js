$(function() {

    // get
    $.get('/json/get', function(ret, status, jqXhr) {
        console.log('get: ');
        console.log(ret);
        console.log(status);
        console.log(jqXhr);
    });

    $.post('/json/post', 'a=1&b=2', function(ret, status, jqXhr) {
        console.log('post: ');
        console.log(ret);
        console.log(status);
        console.log(jqXhr);
    });
});
