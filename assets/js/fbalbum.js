//paste you fb-company album URL here. 
var album_url = 'ENTER FB-PAGE ALBUM URL HERE',
uid = album_url.split('?')[1].split('.')[1],
access_token='<Enter Your Access Token>';

$(document).ready(function () {
// Ajax Request to Facebook Graph API
var req_url = 'https://graph.facebook.com/'+uid+'/photos'+'?access_token='+access_token;

$.ajax({
    type: "GET",
    url: req_url,
    success: function(res) {
        data = res
        generateImg(data);
    },
    error: function() {
      $('.plugin_fbalbum').append('<h2> No valid image response.</h2>')
    }
});

//Add image in the placeholder
var generateImg = function (data) {
    var len = data.data.length, image_stack = '', small_image_url, big_image_url,img;
    for(i = 0 ; i < len; i++) {
        small_image_url = data.data[i].images[8].source;
        big_image_url = data.data[i].images[1].source;
        img = '<a href="'+big_image_url+'" class="group1" > '+'<img src="'+small_image_url+'" class="small" ' +' /></a>';
        image_stack += img;
    }
    $(".plugin_fbalbum").append(image_stack);
    //Add Colorbox affect.
    $(document).ready(function () {
       $(".group1").colorbox({rel:'group3', transition:"fade", width:"75%", height:"75%"});
    });
}
});
