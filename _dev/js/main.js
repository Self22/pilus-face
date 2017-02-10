'use strict';



// $(window).scroll(function () {
//
//     //Display or hide scroll to top button
//     if ($(this).scrollTop() > 100) {
//         $('.scrollup').fadeIn();
//     } else {
//         $('.scrollup').fadeOut();
//     }
//
//     if ($(this).scrollTop() > 5) {
//         $('.navbar-default').addClass('fixed');
//     } else {
//         $('.navbar-default').removeClass('fixed');
//     }
//
//     // Get container scroll position
//     var fromTop = $(this).scrollTop() + topMenuHeight + 10;
//
//     // Get id of current scroll item
//     var cur = scrollItems.map(function () {
//         if ($(this).offset().top < fromTop)
//             return this;
//     });
//
//     // Get the id of the current element
//     cur = cur[cur.length - 1];
//     var id = cur && cur.length ? cur[0].id : "";
//
//     if (lastId !== id) {
//         lastId = id;
//         // Set/remove active class
//         menuItems
//             .parent().removeClass("active")
//             .end().filter("[href=#" + id + "]").parent().addClass("active");
//     }
// });
//

$(document).ready(function(){

    //accordeon__texts

    (function () {

        var flag = true;

        $('.question__nav').on('click', function (e) {
         

            var
                $this = $(this),
                container = $this.closest('.questions__acc'),
                item = $this.closest('.questions__item'),
                currentContent = item.find('.question__answer'),
                duration = 500;

            if (flag) {
                flag = false;


                if (!item.hasClass('active')) {
                    item.addClass('active')
                        .siblings()
                        .removeClass('active')
                        .find('.question__answer')
                        .slideUp(duration);

                    currentContent.slideDown(duration, function () {
                        flag = true
                    });
                }
                else {
                    item.removeClass('active');
                    currentContent.slideUp(function () {
                        flag = true
                    });
                }

            }
        })
    })();

    //accordeon__video

    // (function () {
    //
    //     var flag = true;
    //
    //     $('.video_nav').on('click', function (e) {
    //         e.preventDefault();
    //
    //         var
    //             $this = $(this),
    //             container = $this.closest('.video__acc'),
    //             item = $this.closest('.video__item'),
    //             currentContent = item.find('.video__list'),
    //             duration = 500;
    //
    //         if (flag) {
    //             flag = false;
    //
    //
    //             if (!item.hasClass('active')) {
    //                 item.addClass('active')
    //                     .siblings()
    //                     .removeClass('active')
    //                     .find('.video__list')
    //                     .slideUp(duration);
    //
    //                 currentContent.slideDown(duration, function () {
    //                     flag = true
    //                 });
    //             }
    //             else {
    //                 item.removeClass('active');
    //                 currentContent.slideUp(function () {
    //                     flag = true
    //                 });
    //             }
    //
    //         }
    //     })
    // })();

});


