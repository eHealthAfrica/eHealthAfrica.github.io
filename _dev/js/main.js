var attachFastClick = require('fastclick')
var feature = require('./Feature')

var $ = window.$

$(function () {
  attachFastClick(document.body)

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

  $('img').each(function () {
    var $img = $(this)
    var pathNoExtension = $img.attr('src').replace(/\.[^.]*$/, '')

    // check whether this image is available in various sizes
    checkFileExists(pathNoExtension + '-320.jpg')
      .fail(function () {
        console.log('This 404 error is normal; it\'s just a result of testing for responsive images')
      })
      .done(function () {
        // add srcset attribute to img tags, where possible, and include alternative URLs
        if (feature.srcset) {
          var widths = [320, 640, 720, 1440]
          var sizes = '100vw, (min-width: 800px) 720px, 100vw'
          var srcset = ''
          for (var i = 0; i < widths.length; i++) {
            srcset += pathNoExtension + '-' + widths[i] + '.jpg ' + widths[i] + 'w'
            if (i < widths.length - 1) {
              srcset += ', '
            }
          }
          $img.attr('srcset', srcset)

          if (feature.sizes) {
            $img.attr('sizes', sizes)
          }
        } else {
          // if no browser support, set a medium sized image
          $img.attr('src', pathNoExtension + '-720.jpg')
        }
      })
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
  }, 300)
}

function checkFileExists (src) {
  return $.ajax({
    url: src,
    type: 'HEAD'
  })
}
