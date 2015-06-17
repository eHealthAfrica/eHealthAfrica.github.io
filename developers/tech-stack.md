---
layout: page
title:  Tech Stack
permalink: /developers/tech-stack/
categories: developers
---

We build our products based on open source tech stacks. Our standard tech stack consists of:

- [CouchDB](/developers/couchdb)
- PouchDB on the client
- Node.js
- [Angular.js](/developers/angular-js/)
- Cordova for mobile apps
- Docker for deployments

Alternatively, we use Django and PostgreSQL.

We host our code repositories on [GitHub](https://www.github.com/eHealthAfrica), read the CONTRIBUTING.md file when in doubt on how to work within a project. When creating a new repository, start from it being private (read more).

Continuous integration is handled via [Travis](https://travis-ci.org). To make sure that works, your new repo needs to have a private key set by the org owners — ask about it on Slack. The repos that are checked out while testing need to have the corresponding public key set by adding the ehealthafrica-ci user as a Collaborator (that means adding the “read only” group).

We currently use Grunt as build tool.
Package management is done via npm for the backend and Bower for frontend libraries.

<div class="alert alert-info">
  <strong>TODO: Write about testing and deployment.</strong> Feel free to contribute.
</div>

Localization of translatable strings is done in Transifex; we have a Grunt task that handles up- and download of the .po files.

Some other tools that might be helpful in development:

- [Vagrant](/developers/vagrant)
