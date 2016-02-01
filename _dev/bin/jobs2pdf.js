#!/usr/bin/env node

var markdownpdf = require('markdown-pdf')
var fs = require('fs')
var split = require('split')
var through = require('through')
var duplexer = require('duplexer')

fs.readdir('../_jobs/', function (err, files) {
  var md = files.filter(function (f) {
    return f.indexOf('.md') !== -1
  }).map(function (f) {
    return '../_jobs/' + f
  })
  console.log(md)
  var pdf = md.map(function (f) {
    return f.replace('_jobs', 'pdf').replace('.md', '.pdf')
  })

  markdownpdf({
    remarkable: {
      typographer: true,
      breaks: true
    },
    preProcessMd: preProcessMd,
    // cssPath: '../css/pdf.css'
    cssPath: '.tmp/css/pdf.css'
  }).from(md).to(pdf, function () {
    pdf.forEach(function (d) {
      console.log('Created', d)
    })
  })
})

var capitalize = function (word) {
  var exceptions = ['the', 'of', 'to', 'a', 'an']
  if (exceptions.indexOf(word) === -1) {
    word = word.toLowerCase().replace(/\b\w/g, function (m) {
      return m.toUpperCase()
    })
  }
  return word
}

function preProcessMd () {
  // Split the input stream by lines
  var splitter = split()
  var frontMatter = false
  var opening = true

  var transformFrontMatter = through(function (data) {
    if (opening) {
      opening = !opening
      this.queue('![](../img/logo.png)\n\n')
    }
    if (data === '---') {
      frontMatter = !frontMatter
      this.queue('\n')
    } else if (frontMatter) {
      var bits = data.split(':')
      this.queue('**' + bits[0].replace('-', ' ').replace(/\w+/g, capitalize) + '**: ' + bits[1] + '\n')
    } else {
      this.queue(data + '\n')
    }
  })

  splitter.pipe(transformFrontMatter)
  return duplexer(splitter, transformFrontMatter)
}

