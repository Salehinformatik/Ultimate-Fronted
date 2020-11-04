$(function(){
    'use strict';
    $('.toggle-sidebar').on('click',function(){
        $('.content-area, .sidebar').toggleClass('no-sidebar');
    });
    // toggle submenu
    $(".toggle-submenu").on('click',function(){
        $(this).toggleClass("fa-angle-right fa-angle-down");
        $(this).parent('a').next('.child-links').slideToggle();
    });
    // Open / colse full screen
    $('.toggle-fullscreen').on('click',function(){
        $(this).toggleClass('full-screen');
        if($(this).hasClass('full-screen')){
            // page is now full screen
            closeFullscreen();
        }else{
            openFullscrren();
        }
    })

});

var elem = document.documentElement;

function openFullscrren(){
    if(elem.requestFullscreen){
        elem.requestFullscreen();
    }else if(elem.mozRequestFullScreen){
        elem.mozRequestFullScreen();
    }else if(elem.webkitRequestFullscreen){
        elem.webkitRequestFullscreen();
    }else if(elem.msRequestFullscreen){
        elem.msRequestFullscreen();
    }
}

function closeFullscreen(){
    if(document.exitFullscreen){
        document.exitFullscreen();
    }else if(document.mozCancelFullScreen){
        document.mozCancelFullScreen();
    }else if(document.webkitExitFullscreen){
        document.webkitExitFullscreen();
    }
}