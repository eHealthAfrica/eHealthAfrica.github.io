# eHealth Global Informatics Site

This repo contains the eHealth Global Informatics website. It uses Jekyll and is served directly by Github pages (which understands Jekyll) at [ehealthafrica.github.io](http://ehealthafrica.github.io).

## Editorial

The content is all held in markdown files. `index.md` is the homepage, `case-studies.md` is the case studies listing page. The case studies themselves are in `/case-studies/`; the job listings are in `/jobs/`.

You can edit these files or add/delete jobs directly on Github. When adding new jobs, make sure you add the metadata at the beginning of the markdown file. It should look like this:

```
---
title: Senior Frontend Developers
description: Using software to fight Ebola and strengthen health systems in West Africa
department: Software Development 
program:
grade:
reports-to:
location: Berlin / Kano
job-duration: 
---
```

Alternatively you can clone the repository, edit the files locally and then push them.

### Creating job PDFs

The command `npm run jobs2pdf` will create PDF files for all of the Markdown files in `/_jobs`. Front matter variables will be displayed at the top of the PDF file, capitalised and with dashes replaced by spaces (eg. `job-duration` will become **Job Duration**).

## Development

Clone the repo, then:

* `cd _dev`
* run `bundle install` to install the github pages gem (which includes Jekyll)
* run `npm install` to get all the Node-related stuff (mostly Grunt plugins)
* `grunt serve` to run locally and develop

The SCSS files are all in `/_dev/scss`, the Jacasript in `/_dev/js/`. We use Browserify to compile the Javascript.

To deploy:

* `grunt build` to compile the SCSS and Javascript files
    * commit and push to master
