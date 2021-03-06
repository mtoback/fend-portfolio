# Website Optimization Project

## installation requirements

1. Install [node.js and npm](https://docs.npmjs.com/getting-started/installing-node) if required.
1. Install either [imageMagick or graphicsMagick](https://www.npmjs.com/package/grunt-responsive-images). I tested it with imageMagick.
1. run "npm install" in the home directory against package.json this will install the following packages:
+  grunt 1.0.1
+ grunt-contrib-clean 1.0.0
+ grunt-contrib-concat 1.0.1
+ grunt-contrib-cssmin 1.0.1
+ grunt-contrib-htmlmin 1.4.0
+ grunt-contrib-imagemin 1.0.0
+ grunt-contrib-jshint 1.0.0
+ grunt-contrib-uglify 1.0.1
+ grunt-contrib-watch 1.0.0
+ grunt-responsive-images 0.1.7
+ load-grunt-tasks 3.5.0

## How to update site

run grunt on top of site. Will generate dist directory for production site

## Changes made

all html minimized by grunt-contrib-htmlmin
all css minimuzed by grunt-contrib-cssmin
all images optimized by grunt-contrib-imagemin and grunt-responsive-images
all javascript minimized by grunt-contrib-uglify

index.html:
1. embed css stylesheet
1. mark print.css for print media only
1. mark javascript as async
1. optimize all images associated with this page
1. add javascript to load font

views/pizza.html
1. added viewport
1. embedded style.css
1. marked print.css for print media only

views/main.js
1. perform initial calculation of phase in updatePositions outside of loop
1. change from use of querySelectorAll to getElementsByClassName
1. basicLeft was a ruse, it was just a function based on the ith item

## Notes

I am seeing some "jank" on the site, but it seems to be related to the measuring tools. Maybe Heisenberg was right :-)

## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js.

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
