---
layout: page
title:  CouchDB
permalink: /developers/couchdb/
categories: developers
---

## Introduction

_Apache CouchDB™_ is a database that uses JSON for documents, JavaScript for MapReduce indexes, and regular HTTP for its API.

## Best practices

We maintain a public site about [CouchDB best practices](http://docs.ehealthafrica.org/couchdb-best-practices/) which you should consult.

## Tools

### CouchApp

[couchapp](https://github.com/couchapp/couchapp) makes easy to manage CouchDB documents from the CLI.

Please follow the installation instructions on that project. [Here](https://github.com/couchapp/couchapp/wiki/Manual) you can find useful documentation, in practice all we use are the `clone` and `push` commands. [Here](https://gist.github.com/danse/ba90b017b71f6e5fd420) there is a short doc about the alternatives we considered before choosing this tool.

Having a db named **db_name** we can get any view present in the db using:

```shell
couchapp clone  "http://127.0.0.1:5984/db_name/_design/document_name" destination_folder
```

This will create the following structure:

```shell
destination_folder
├── .couchapprc
├── _id
├── language
└── views
├── view1
│   └── map.js
├── viewn
└── map.js
```

It is general best practice to name destination_folder as the document_name.

You can now make changes locally and push them as:

```shell
cd destination_folder && couchapp push "http://127.0.0.1:5984/db_name" && cd ..
```

Be aware that any change is all-or-nothing, and that changes in the local replica will propagate
to the CouchDB you are pushing to.

### Support for sharing modules

- CouchDB supports [CommonJs modules](http://wiki.apache.org/couchdb/JavascriptPatternViewCommonJs), but restricted to some types of documents
- CouchApp provides a less restrictive way of including shared code, via [CouchaApp directives](http://wiki.apache.org/couchdb/JavascriptPatternViewCommonJs)


## View naming conventions

Our naming convention for views, starting from the basic case of no reduce functions.

Views are couples of arbitrary functions, and as such it is impossible to express their whole variety with a name, so the following are just trying to cover the most common cases.

### No reduce

In the case of no reduce function, usually views are just meant to sort documents by a set of properties. An idea in this case is to name them like this:

The main grouping parameter for the name is the “object” as it (roughly) exists in the application space. For example: `person`, `contact`, `case`, `followup`, `last-followup`, `address` etc.:

`<object>-`

What follows is a condition for a subset of objects, e.g. `persons-with-address`:

`<object>-with-<property>`
`<object>-with-no-<property>`

Then, there is a sort option, e.g. `persons-with-address-by-createddate`:

`<option>-with-<property>-by-<sortfield>`

`with` and `by` clauses are both optional.

Finally, there is an optional suffix that descibes whether the view emits the full document as a value, e.g. `persons-with-address-fulldoc`: 

`<object>-with-<property>-fulldoc`


When a property is nested, just replace the dot `.` with a dash `-`. Convert cases to lowercase. Convert underscore separated to no separation.


#### Examples

```
people // all people documents
contacts-with-followups // all contacts that have followups
cases-by-lastmodifieddate // all cases sorted by doc.lastModifiedDate
address-with-city-by-createddate // all addresses that have a city property sorted by doc.createdDate
```

### With a reduce function

In this case, we use the same convention, with a prefix expressing the reduce. The reduce part should be structured as follows:

    [count|sum|stats]-[on-<property>-]<map part>

#### Examples

    stats-on-patient-age-by-case-status

The case above refers to built–in reduce functions, which should cover the wide majority of uses.
