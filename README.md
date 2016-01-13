# eHealth Informatics Site

## Editorial

Either edit the markdown files inside Github, or clone the repository, edit locally and push

## Development

Clone, then:

* `cd _dev`
* run `bundle install` to install the github pages gem (which includes Jekyll)
* run `npm install` to get all the Node-related stuff (mostly Grunt plugins)
* `grunt serve` to run locally and develop

To deploy:

* `grunt build` to compile the site
* commit and push to master
