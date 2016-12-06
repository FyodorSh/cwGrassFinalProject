/**
 * Created by f.shevchenko on 06.12.2016.
 */
function initPage(){

    var pageTitle = $(document).attr("title");

    $("header").append("<div class='tab-title'>" + pageTitle + "</div>");
}
