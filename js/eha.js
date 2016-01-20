(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var $ = window.$

$(function () {
  // add a hero section to job adverts
  if ($('html').hasClass('jobs') && $('.hero').length === 0) {
    var $article = $('article')
    var $heading = $('article > h1').first().detach()
    var $sub = $('article > h2').first().detach()
    var $hero = $('<section></section>').addClass('hero')
    $hero.append($heading).append($sub).prependTo($article)
  }

  // convert alt attributes to captions
  $('article img').each(function () {
    if ($(this).attr('alt')) {
      var $img = $(this)
      var $figure = $('<figure></figure>')
        .append($('<caption></caption')
          .text($img.attr('alt')))
        .insertAfter($img)
      $img.detach().prependTo($figure)
    }
  })
})


},{}]},{},[1]);
