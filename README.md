pamex-angular
=============

web app for [Pamex ©](http://hylasoftusa.com:8090/) using [angular](http://angularjs.org/) and [yeoman](http://yeoman.io/) scaffolding template

Set up
-------------

###On Windows

Install [ruby](http://rubyinstaller.org/) and [nodejs](nodejs.org)
Then you can install yeoman:

    npm install -g yo

*npm is the package manager for Node.js and comes bundled with it.*

npm will take care of all the dependencies, installing grunt and bower. Now it's time to install the the angular scaffolder:

    npm install -g generator-angular

Please refer to [this link](https://github.com/yeoman/generator-angular) to learn how to use the angular scaffolder with yeoman. In order to use compass for scss you also need to install the compass gem:

    gem install compass

Building
-------------

Running `grunt` will run jshint, build the application in the dist folder and run the unit tests with karma. The dist folder is ready to be put in production or dev servers.

Testing
-------------

Running `grunt test` will run the unit tests with karma.
