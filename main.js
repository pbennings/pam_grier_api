//javascript, jQuery
var xhr = $.get(
  "http://api.giphy.com/v1/gifs/search?q=pam+grier&api_key=jmVWOQg5o8XbGR4QHVOGlIpGs1KPQUrq&limit=30"
);
xhr.done(function(response) {
  console.log("success got data", response);
});
