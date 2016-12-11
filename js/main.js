window.onload = function() {
    // add page header title
    var pageTitle = $(document).attr("title");
    $("header").append("<div class='tab-title'>" + pageTitle + "</div>");

    // // change map size
    // var divMap = document.getElementById('map');
    // divMap.style.position = "static";
};