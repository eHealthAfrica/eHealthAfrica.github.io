var attachFastClick = require('fastclick')

var $ = window.$

$(function () {
  attachFastClick(document.body)

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

  // show/hide nav on mobile
  $('.js-show-nav').click(function () {
    $('body').toggleClass('nav-visible')
  })

  $('.js-contact-link').click(function (e) {
    e.preventDefault()
    scrollTo($('.js-contact'))
  })
})

function scrollTo ($el) {
  $('html,body').animate({
    scrollTop: $el.offset().top
  }, 'fast')
}
