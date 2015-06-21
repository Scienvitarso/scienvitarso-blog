/// <reference path="../typings/jquery/jquery.d.ts"/>
// Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
  
  
$(document).ready(function(){
    $("#search-show-custom").click(function(){
        $("#search-input:text").val("");
        $("#search-bar-custom").toggle(1000);
    });
    
});
