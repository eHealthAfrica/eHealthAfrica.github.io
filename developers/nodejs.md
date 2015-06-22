---
layout: page
title:  Node.js
permalink: /developers/node-js/
categories: developers
---

## Installation

The preferred way to install node.js on OS X is via its install packages or nvm — avoid Homebrew. Please note that as of time of writing, we are waiting for 1.0 to be released; in the meantime, we are sticking to the 0.10.x series.

### Binary installer

You can find the installers in [their release folder](http://nodejs.org/dist/).

Please note that after installation, if you try to `npm install -g anything`, it will give an EACCES error. This is a known issue that npm thinks its fine to leave as is. Despite the error message, don’t re—run with sudo but follow [the documented workarounds](https://docs.npmjs.com/getting-started/fixing-npm-permissions), in particular the second option.

### nvm installation

Optionally, you can use [nvm, the Node Version Manager](https://github.com/creationix/nvm). Just follow its documentation.