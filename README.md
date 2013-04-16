<h2><strong>Facebook Album Plugin</strong></h2>

=======
Facebook Album plugin written in javascript.

The plugin shows photos on the album on a facebook page.

This is an clone of the Django-CMS plugin for facebook albums of Vinitcool76, to work outside django-cms as well.<br/>

https://github.com/vinitcool76/cmsplugin-fb-album

=======

<h3><strong>In order to use it in your site.</strong></h3><br/>

- Add these files to the HEAD
```html
        <script type="text/javascript" src="assets/js/jquery.min.js"></script>
        <script type="text/javascript" src="assets/js/jquery.colorbox-min.js"></script>
        <script type="text/javascript" src="assets/js/fbalbum.js"></script>
        <link rel="stylesheet" href="assets/css/colorbox.css">
```

=======
- Step 2
add:
```html
        <div class="plugin_fbalbum">
        </div>
```
Where you see fitted.

- Step 3
- 
Go to the /fbalbum.js file and add you facebook page album URL there:

```js
      //paste you fb-company album URL here. 
      var album_url = 'ENTER FB-PAGE ALBUM URL HERE',
```

###Note: Works only for Facebook Pages as of now and you can modify the style.css for styling of the grid as you like

