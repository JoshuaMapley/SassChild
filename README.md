![SassChild.jpg](http://joshuamapley.com/storage/app/media/SassChild.jpg)
# README #

This is a brief guide going over how to set up, and how to use this Sass Child Theme.

### Initial Setup ###

* clone the repository into your WordPress Themes folder, and navigate to it:

```
cd myProject/wp-content/themes/
git clone https://Mapleish@bitbucket.org/Mapleish/sasschild.git
cd sasschild/
```

* run the following commands to install the themes dependencies, and create the distribution folder.
```
npm install
gulp init
```
* Open the 'style.css' folder in the root of the child theme and edit the template line to match the theme that you are using.
```
Template:    {Your Theme Name Here, e.g. twentyseventeen}
```
### Usage ###

* Navigate to your theme directory and run one of the following commands.
```
cd myProject/wp-content/themes/sasschild
gulp styles
gulp scripts
gulp images
gulp watch
```
* Gulp styles compiles all of the SCSS files in your assets folder
* Gulp scripts compiles all of the .js files in your assets folder
* Gulp images compresses the images in your assets folder and places the compressed ones in your distribution folder
* Gulp watch tracks all of the files in your assets folder and runs the appropriate gulp task for what files are changed.

### Final Words ###

Make sure you remove the git repository from this theme after cloning it, otherwise when you commit it your assets folder will be ignored and that'll just be a mess... Other than that, Have fun!

**Disclaimer: Not an official product of Sass, Just a handy little project to assist development with themes in WordPress.**