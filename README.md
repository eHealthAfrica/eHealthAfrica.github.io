# eHealth Documentation

This repo is used to generate our [Documentation site](http://docs.ehealthafrica.org). If something is missing or incorrect, please file an issue and send a pull request

## Structure

Most the of the website lives here in this repository. However, there are a few other repo's that displayed seamlessly within the Docs website such as:

- Custom Bootstrap theme [/ehealth-boostrap](https://github.com/eHealthAfrica/ehealth-bootstrap)
- Design assets [/design](https://github.com/eHealthAfrica/design) (private)

## Developing

To our develop / build site on your local machine do the following:

- Install Jekyll using `gem install jekyll`
- Build the static site & watch for files `jekyll serve --watch --config _config.yml,_config-dev.yml`

## Adding Items

Each section of the Documentation's sidebar (Apps, Designers, Templates, etc...) is generated using files in the `_data` folder as well as a Markdown file for each page. In order to add a new page, do the following:

- Copy the `_template.md` file from associated directory
- Add corresponding values to the `_data/apps.yml` file


So to add an *App* you would use [this template]({{site.url_repo}}blob/master/apps/_template.md) and rename is as `apps/your-new-app.md` and you would then add an item like this to the `_data/apps.yml` file

```
- name: Your New App
  type: communications
  path: /apps/trace-and-go/

```