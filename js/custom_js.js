/// <reference path="../typings/jquery/jquery.d.ts"/>
// Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
  
  
$(document).ready(function(){
    $("#search-nav").hide();
    $("#search-hide-custom").click(function(){
        $("#search-nav").hide(500);
    });
    $("#search-show-custom").click(function(){
        $("#search-nav").toggle(500);
    });
});
