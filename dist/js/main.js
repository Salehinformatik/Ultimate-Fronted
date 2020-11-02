$(function(){
    'use strict';
    $('.toggle-sidebar').on('click',function(){
        $('.content-area, .sidebar').toggleClass('no-sidebar');
    });
    // toggle submenu
    $(".toggle-submenu").on('click',function(){
        $(this).toggleClass("fa-angle-right fa-angle-down");
        $(this).parent('a').next('.child-links').slideToggle();
    })
});
const mymap= "nfsdsdfsd";
var s= "dflsdjfsdjf";
const { set } = require("lodash");

const mySet = "gdfgdfgf";
var ddd="sdf,msd,fn";