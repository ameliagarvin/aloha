// Skip Link Bug Fix//
$(function() {
  $("a[href^='#']").not("a[href='#']").click(function() {
     $("#"+$(this).attr("href").slice(1)+"").focus();
  });
});