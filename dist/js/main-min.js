$(function(){"use strict";$(".toggle-sidebar").on("click",function(){$(".content-area, .sidebar").toggleClass("no-sidebar")}),$(".toggle-submenu").on("click",function(){$(this).toggleClass("fa-angle-right fa-angle-down"),$(this).parent("a").next(".child-links").slideToggle()}),$(".toggle-fullscreen").on("click",function(){$(this).toggleClass("full-screen"),$(this).hasClass("full-screen")?closeFullscreen():openFullscrren()}),$(".toggle-settings").on("click",function(){$(this).find("i").toggleClass("fa-spin"),$(this).parent().toggleClass("hide-settings")});var e=[];$(".color-options li").each(function(){e.push($(this).data("theme"))}),$(".color-options li").on("click",function(){$(this).addClass("active").siblings().removeClass("active"),$("body").removeClass(e.join(" ")).addClass($(this).data("theme"))})});var elem=document.documentElement;function openFullscrren(){elem.requestFullscreen?elem.requestFullscreen():elem.mozRequestFullScreen?elem.mozRequestFullScreen():elem.webkitRequestFullscreen?elem.webkitRequestFullscreen():elem.msRequestFullscreen&&elem.msRequestFullscreen()}function closeFullscreen(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}const mymap="nfsdsdfsd";var s="dflsdjfsdjf";const{set:set}=require("lodash"),mySet="gdfgdfgf";var ddd="sdf,msd,fn";