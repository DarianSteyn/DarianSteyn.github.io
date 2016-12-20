//Take to top of page on page reload
$(document).ready(function() {
   $(window).scrollTop(0);
});

//Shrink Header

$(function () {
    $('#section-one').data('size', 'big');
});

$(window).scroll(function headerShrink() {
    if ($(document).scrollTop() > 2) {
        if ($('#section-one').data('size') == 'big') {
            $(".header").data('size', 'small');
            $(".header").stop().animate({
                height: '40px'
            }, 600);
            $('#section-one').data('size', 'small');
            $('#section-one').stop().animate({
                height: '65px'
            }, 600);
        }
    } else {
        if ($('#section-one').data('size') == 'small') {
            $(".header").data('size', 'big');
            $(".header").stop().animate({
                height: '60%'
            }, 600);
            $('#section-one').data('size', 'big');
            $('#section-one').stop().animate({
                height: '80px'
            }, 600);
        }
    }
});

//Expand menu

$("#vertical-menu h3").click(function () {
  
    if (!$(this).next().is(":visible")) {
        
        $(this).next().slideDown();
        $('.plus').html('+');
        $('.plus',this).html('-');
        
    } else {
        
        $("#vertical-menu ul ul").slideUp();
        $('.plus',this).html('+');
    }
});

$(document).ready(function(){

        $("#vertical-menu ul ul").slideUp();
        $('.plus',this).html('+');    
    
});

//Scroll smoothly when clicking on links

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//Animate Projects in on index page

$(window).scroll(function () {
    var windowWidth = $(this).width();
    var windowHeight = $(this).height();
    var windowScrollTop = $(this).scrollTop();

    // effect - No2
    var firstAnimation = function () {
        $('.p1').each(
            function () {
                $(this).delay(100).animate({
                    opacity: 1,
                    bottom: 10
                }, 1500);
            }
        );
    };

    if (windowWidth <= 549) {
        if (windowScrollTop > 500) {
            firstAnimation();
        }
    } else if (windowWidth > 549 && windowWidth <= 991) {
        if (windowScrollTop > 400) {
            firstAnimation();
        }
    } else {
        if (windowScrollTop > 300) {
            firstAnimation();
        }
    }

});

//Load progressbars

//var skillsDiv = jQuery('#skills');
//
//$(window).on('scroll', function(){
//    
//	var winT = jQuery(window).scrollTop(),
//  	winH = jQuery(window).height(),
//  	skillsT = skillsDiv.offset().top;
//    
//  if((winT + winH)  < (skillsT)){
//  	$('.skillbar').each(function(){
//        
//      $(this).find('.skillbar-bar').animate({
//        width:$(this).attr('data-percent')
//      },3000);
//    });
//  }
//});

//Contact info popup
$(window).scroll(function() {
    if ($(window).scrollTop() >= ($(document).height() - $(window).height())) {
        $('#bugPop').animate({width: 'toggle'});
    }else{
        $('#bugPop').fadeOut('slow');
    }
});

//Typing Script

! function ($) {

    "use strict";

    var Typed = function (el, options) {

        // chosen element to manipulate text
        this.el = $(el);

        // options
        this.options = $.extend({}, $.fn.typed.defaults, options);

        // attribute to type into
        this.isInput = this.el.is('input');
        this.attr = this.options.attr;

        // show cursor
        this.showCursor = this.isInput ? false : this.options.showCursor;

        // text content of element
        this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text();

        // html or plain text
        this.contentType = this.options.contentType;

        // typing speed
        this.typeSpeed = this.options.typeSpeed;

        // add a delay before typing starts
        this.startDelay = this.options.startDelay;

        // backspacing speed
        this.backSpeed = this.options.backSpeed;

        // amount of time to wait before backspacing
        this.backDelay = this.options.backDelay;

        // div containing strings
        this.stringsElement = this.options.stringsElement;

        // input strings of text
        this.strings = this.options.strings;

        // character number position of current string
        this.strPos = 0;

        // current array position
        this.arrayPos = 0;

        // number to stop backspacing on.
        // default 0, can change depending on how many chars
        // you want to remove at the time
        this.stopNum = 3;

        // Looping logic
        this.loop = this.options.loop;
        this.loopCount = this.options.loopCount;
        this.curLoop = 0;

        // for stopping
        this.stop = false;

        // custom cursor
        this.cursorChar = this.options.cursorChar;

        // shuffle the strings
        this.shuffle = this.options.shuffle;
        // the order of strings
        this.sequence = [];

        // All systems go!
        this.build();
    };

    Typed.prototype = {

        constructor: Typed,

        init: function () {
            // begin the loop w/ first current string (global self.strings)
            // current string will be passed as an argument each time after this
            var self = this;
            self.timeout = setTimeout(function () {
                for (var i = 0; i < self.strings.length; ++i) self.sequence[i] = i;

                // shuffle the array if true
                if (self.shuffle) self.sequence = self.shuffleArray(self.sequence);

                // Start typing
                self.typewrite(self.strings[self.sequence[self.arrayPos]], self.strPos);
            }, self.startDelay);
        },

        build: function () {
            var self = this;
            // Insert cursor
            if (this.showCursor === true) {
                this.cursor = $("<span class=\"typed-cursor\">" + this.cursorChar + "</span>");
                this.el.after(this.cursor);
            }
            if (this.stringsElement) {
                this.strings = [];
                this.stringsElement.hide();
                console.log(this.stringsElement.children());
                var strings = this.stringsElement.children();
                $.each(strings, function (key, value) {
                    self.strings.push($(value).html());
                });
            }
            this.init();
        },

        // pass current string state to each function, types 1 char per call
        typewrite: function (curString, curStrPos) {
            // exit when stopped
            if (this.stop === true) {
                return;
            }

            // varying values for setTimeout during typing
            // can't be global since number changes each time loop is executed
            var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
            var self = this;

            self.timeout = setTimeout(function () {
                // check for an escape character before a pause value
                // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
                // single ^ are removed from string
                var charPause = 0;
                var substr = curString.substr(curStrPos);
                if (substr.charAt(0) === '^') {
                    var skip = 1; // skip atleast 1
                    if (/^\^\d+/.test(substr)) {
                        substr = /\d+/.exec(substr)[0];
                        skip += substr.length;
                        charPause = parseInt(substr);
                    }

                    // strip out the escape character and pause value so they're not printed
                    curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
                }

                if (self.contentType === 'html') {
                    // skip over html tags while typing
                    var curChar = curString.substr(curStrPos).charAt(0)
                    if (curChar === '<' || curChar === '&') {
                        var tag = '';
                        var endTag = '';
                        if (curChar === '<') {
                            endTag = '>'
                        } else {
                            endTag = ';'
                        }
                        while (curString.substr(curStrPos + 1).charAt(0) !== endTag) {
                            tag += curString.substr(curStrPos).charAt(0);
                            curStrPos++;
                            if (curStrPos + 1 > curString.length) {
                                break;
                            }
                        }
                        curStrPos++;
                        tag += endTag;
                    }
                }

                // timeout for any pause after a character
                self.timeout = setTimeout(function () {
                    if (curStrPos === curString.length) {
                        // fires callback function
                        self.options.onStringTyped(self.arrayPos);

                        // is this the final string
                        if (self.arrayPos === self.strings.length - 1) {
                            // animation that occurs on the last typed string
                            self.options.callback();

                            self.curLoop++;

                            // quit if we wont loop back
                            if (self.loop === false || self.curLoop === self.loopCount)
                                return;
                        }

                        self.timeout = setTimeout(function () {
                            self.backspace(curString, curStrPos);
                        }, self.backDelay);

                    } else {

                        /* call before functions if applicable */
                        if (curStrPos === 0) {
                            self.options.preStringTyped(self.arrayPos);
                        }

                        // start typing each new char into existing string
                        // curString: arg, self.el.html: original text inside element
                        var nextString = curString.substr(0, curStrPos + 1);
                        if (self.attr) {
                            self.el.attr(self.attr, nextString);
                        } else {
                            if (self.isInput) {
                                self.el.val(nextString);
                            } else if (self.contentType === 'html') {
                                self.el.html(nextString);
                            } else {
                                self.el.text(nextString);
                            }
                        }

                        // add characters one by one
                        curStrPos++;
                        // loop the function
                        self.typewrite(curString, curStrPos);
                    }
                    // end of character pause
                }, charPause);

                // humanized value for typing
            }, humanize);

        },

        backspace: function (curString, curStrPos) {
            // exit when stopped
            if (this.stop === true) {
                return;
            }

            var humanize = Math.round(Math.random() * (100 - 30)) + this.backSpeed;
            var self = this;

            self.timeout = setTimeout(function () {

                if (self.contentType === 'html') {
                    // skip over html tags while backspacing
                    if (curString.substr(curStrPos).charAt(0) === '>') {
                        var tag = '';
                        while (curString.substr(curStrPos - 1).charAt(0) !== '<') {
                            tag -= curString.substr(curStrPos).charAt(0);
                            curStrPos--;
                            if (curStrPos < 0) {
                                break;
                            }
                        }
                        curStrPos--;
                        tag += '<';
                    }
                }

                // replace text with base text + typed characters
                var nextString = curString.substr(0, curStrPos);
                if (self.attr) {
                    self.el.attr(self.attr, nextString);
                } else {
                    if (self.isInput) {
                        self.el.val(nextString);
                    } else if (self.contentType === 'html') {
                        self.el.html(nextString);
                    } else {
                        self.el.text(nextString);
                    }
                }

                // less than the stop number, keep going
                if (curStrPos > self.stopNum) {
                    // subtract characters one by one
                    curStrPos--;
                    // loop the function
                    self.backspace(curString, curStrPos);
                }
                // array position to next string
                else if (curStrPos <= self.stopNum) {
                    self.arrayPos++;

                    if (self.arrayPos === self.strings.length) {
                        self.arrayPos = 0;

                        // Shuffle sequence again
                        if (self.shuffle) self.sequence = self.shuffleArray(self.sequence);

                        self.init();
                    } else
                        self.typewrite(self.strings[self.sequence[self.arrayPos]], curStrPos);
                }

                // humanized value for typing
            }, humanize);

        },
        shuffleArray: function (array) {
            var tmp, current, top = array.length;
            if (top)
                while (--top) {
                    current = Math.floor(Math.random() * (top + 1));
                    tmp = array[current];
                    array[current] = array[top];
                    array[top] = tmp;
                }
            return array;
        },

        // Reset and rebuild the element
        reset: function () {
            var self = this;
            clearInterval(self.timeout);
            var id = this.el.attr('id');
            this.el.empty();
            if (typeof this.cursor !== 'undefined') {
                this.cursor.remove();
            }
            this.strPos = 0;
            this.arrayPos = 0;
            this.curLoop = 0;
            // Send the callback
            this.options.resetCallback();
        }

    };

    $.fn.typed = function (option) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('typed'),
                options = typeof option == 'object' && option;
            if (data) {
                data.reset();
            }
            $this.data('typed', (data = new Typed(this, options)));
            if (typeof option == 'string') data[option]();
        });
    };

    $.fn.typed.defaults = {
        strings: [],
        stringsElement: null,
        // typing speed
        typeSpeed: 0,
        // time before typing starts
        startDelay: 0,
        // backspacing speed
        backSpeed: 0,
        // shuffle the strings
        shuffle: false,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: true,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function () {},
        // starting callback function before each string
        preStringTyped: function () {},
        //callback for every typed string
        onStringTyped: function () {},
        // callback for reset
        resetCallback: function () {}
    };


}(window.jQuery);

//MY JS FOR TYPED

$(function () {
            $(".element").typed({
                strings: ["&lt;I'm a front end web developer" , "and Motion Graphics designer&gt;"],
                typeSpeed: 80
            });
        });
