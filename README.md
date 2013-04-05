<h2><strong>fbalbum</strong></h2>

=======

Facebook Plugin written in javascript.
The plugin shows Photo's on the album you want of a facebookpage.

This is an edit of the Django-CMS plugin of Vinitcool76, to work outside django-cms aswell.<br/>
The plugin makes use of the coolbox jquery plugin.


https://github.com/vinitcool76/cmsplugin-fb-album

=======

<h3><strong>How to make it work on your page:</strong></h3><br/>

<strong>step 1:</strong><br/>
add these files to the HEAD
```ruby
        <script type="text/javascript" src="assets/js/jquery.min.js"></script>
        <script type="text/javascript" src="assets/js/jquery.colorbox-min.js"></script>
        <script type="text/javascript" src="assets/js/fbalbum.js"></script>
        <link rel="stylesheet" href="assets/css/colorbox.css">
```

=======
<strong>step 2:</strong><br/>
add:
```ruby
        <div class="plugin_fbalbum">
        </div>
```
Where you see fitted.

=======
<strong>step 3:</strong>
Go to the /fbalbum.js file and add you facebook page album URL there:

```ruby
      //paste you fb-company album URL here. 
      var album_url = 'ENTER FB-PAGE ALBUM URL HERE',
```

<strong>NOTE: only works for albums of a facebook PAGE, not on an album of a facebook PROFILE!</strong>

<strong>NOTE 2: you can modify the style.css for styling of the grid as you like</strong>
