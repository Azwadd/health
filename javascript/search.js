function firstResults(response) {
    for (var i = 0; i < 100; i = i + 3) {
        console.log(response.results[i].thumbnail);
        $("#first").append("<img class='image' src=" + response.results[i].thumbnail + ">" +
        "<p class='text'>Has a total of " + response.results[i].nutrient_value + " Calories<p>");
    }
}  
    
function secondResults(response) {     
    for (var i = 1; i < 100; i = i + 3) {
        $("#second").append("<img class='image' src=" + response.results[i].thumbnail + ">" +
        "<p class='text'>Has a total of " + response.results[i].nutrient_value + " Calories<p>");
    }
}

function thirdResults(response) {
    for (var i = 2; i < 100; i = i + 3) {
        $("#third").append("<img class='images' src=" + response.results[i].thumbnail + ">" +
        "<p class='text'>Has a total of " + response.results[i].nutrient_value + " Calories<p>");
    }
}

function linkToAPI(item) {
    console.log("https://apibeta.nutritionix.com/v2/search?q=" + item + "&fields=item_name,brand_name,item_id,nf_calories&appId=543a53ea&appKey=a2476d1824c2ff264a1a871eb1806f85");
    return "https://apibeta.nutritionix.com/v2/search?q=" + item + "&fields=item_name,brand_name,item_id,nf_calories&appId=543a53ea&appKey=a2476d1824c2ff264a1a871eb1806f85";
}

function output(item) {
    $.ajax({
        url: linkToAPI(item),
        method: "GET",
        success: function(response) {
            console.log(response);
            firstResults(response);
            secondResults(response);
            thirdResults(response);
        },
    });
}
$(document).ready(function() {
    $("#submit").click(function(e) {
        e.preventDefault();
        output($("#value").val());
    });
});
