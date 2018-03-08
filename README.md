# Building locally

After cloning the repo, navigate to its folder. Install the node with

'npm install'

Choose one of the directories src or dist. Run it with

'python -m SimpleHTTPServer 8080'

Open it on localhost:8080.

# Grunt

Grunt was installed and used. In order to use it you must type the task

'grunt + task'

if you type

'grunt'

all tasks will be done at same time. The configurations can be checked on gruntfile.js

## Tasks

This are the avaiable tasks

### uglify  

Minify files with UglifyJS.                              

### imagemin  

Minify PNG, JPEG, GIF and SVG images

### responsive_images  

Create images at different sizes for responsive websites.

### htmlmin  Minify HTML  

cssmin  Minify CSS

# main.js and pizza.html

Pizza.html was minified for perfomance.

On main.js I did some changes on a few things:

* used getElementsByClassName instead of querySelectorAll in the function changePizzaSizes.
* Reduced the pizzas built on init from 8 to 6.
* On changePizzaSizes(size) moved the variables and outside the loop. Also the the math is done for the first pizza only and reproduced for the others.
* Moved pizzasDiv outside the loop for perfomance
* On update positions function moved document.documentElement.scrollTop outside the for loop also.
