# eHealth Documentation

This repo is used to generate our [Documentation site](http://docs.ehealthafrica.org). If something is missing or incorrect, please file an issue and send a pull request

## Structure

Most the of the website lives here in this repository. However, there are a few other repo's that displayed seamlessly within the Docs website such as:

- Custom Bootstrap theme [/ehealth-boostrap](https://github.com/eHealthAfrica/ehealth-bootstrap)
- Design assets [/design](https://github.com/eHealthAfrica/design) (private)

## Developing

To our develop / build site on your local machine do the following:

- Install Jekyll using `gem install jekyll`
- Build the static site & watch for files `jekyll serve --watch --config _config.yml _config-dev.yml`