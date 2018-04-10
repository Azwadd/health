function advice() {
    $("#start").append("<div id='test' class='row'> <div id='a1' class='col-md-2'></div> <div id='a2' class='col-md-2'></div> <div id= 'a3' class='col-md-2'></div> <div id='a4' class='col-md-2'></div> <div id='a5' class='col-md-2'></div> </div>");
}

function answer() {
    if ($("#q1").val() === "breakfast") {
        $("#a1").append("<img class='i1' src='breakfast.jpg'><p class='p'>Breakfast can be the most important meal of the day it is recommended to eat healthy for this meal. For breakfast we recommend 25% protein, 25% carbohydrates, and 50% fruits and/or vegetables.</p>");
    } else if ($("#q1").val() === "lunch") {
        $("#a1").append("<img class='i1' src='lunch.jpeg'><p class='p'>During lunch try to eat something filling so you have enough energy for the rest of the day.</p>");
    } else if ($("#q1").val() === "dinner") {
        $("#a1").append("<img class='i1' src='diner.jpg'><p class='p'>For diner try to eat something light because you probably won't be burning most of the calories while sleeping.</p>");
    } else if ($("#q1").val() === "snacks") {
        $("#a1").append("<img class='i1' src='snacks.jpg'><p class'p'>It's not that bad to eat snacks but do so in moderation!</p>");        
    }
}

function answer2() {
    if ($("#q2").val() === "meat") {
        $("#a2").append("<img class='i' src='meat.jpeg'><p class='p'>You like to eat alot of meat! Meat is a good source of protein but you should always try vegetables or fruits aswell.</p>");
    } else if ($("#q2").val() === "vegetable") {
        $("#a2").append("<img class='i' src='vegetable.jpg'><p class='p'>You like to eat vegetables, good for you! Vegetables will help you live longer but always remember to eat portions of everything else.</p>");
    } else if ($("#q2").val() === "fruit") {
        $("#a2").append("<img class='i' src=''><p class='p'></p>");
    } else if ($("#q2").val() === "dairy") {
        $("#a2").append("<img class='i' src='fruits.jpg'><p class='p'>Fruits are good for you but you also need to eat alot of vegetables and meat!</p>");
    } else if ($("#q2").val() === "grain") {
        $("#a2").append("<img class='i' src='grains.jpg'><p class='p'>Don't forget to eat grains and whole wheat because they are also very important in a balance diet.</p>");
    }
}

function answer3(response) {
    if ($("#calories").val() > 2000) {
        answer3B(response);
    } else if ($("#calories").val() <= 2000) {
        answer3A(response);    
    }
}

function answer3A(response) {
    for (var i = 0; i < 2; i++){
        console.log(response.results[i].thumbnail);
      $("#a3").append("<img class='i' src="+response.results[i].thumbnail+">"); 
      $("#a3").append("<p class='p'>"+response.results[i].brand_name+"</p>");
      $("#a3").append("<p class='p'>"+response.results[i].item_name+"</p>");
      $("#a3").append("<p class='p'>"+response.results[i].nutrient_value+"calories</p>");
    }
}

function answer3B(response) {
    for (var i = 6; i < 8; i++){
        if (response.results[i].nutrient_value < 250) {
            $("#a3").append("<img class='i' src="+response.results[i].thumbnail+">"); 
            $("#a3").append("<p class='p'>"+response.results[i].brand_name+"</p>");
            $("#a3").append("<p class='p'>"+response.results[i].item_name+"</p>");
            $("#a3").append("<p class='p'>"+response.results[i].nutrient_value+"calories</p>");
        } else {
        }
    }
}

function linkToAPI() {
    if ($("#q2").val() === "meat") {
        return "https://apibeta.nutritionix.com/v2/search?q=vegetables&fields=item_name,brand_name,item_id,nf_calories&appId=543a53ea&appKey=a2476d1824c2ff264a1a871eb1806f85";
    } else if ($("#q2").val() === "vegetable") {
        return "https://apibeta.nutritionix.com/v2/search?q=meat&fields=item_name,brand_name,item_id,nf_calories&appId=543a53ea&appKey=a2476d1824c2ff264a1a871eb1806f85";
    } else if ($("#q2").val() === "dairy") {
        return "https://apibeta.nutritionix.com/v2/search?q=fruits&fields=item_name,brand_name,item_id,nf_calories&appId=543a53ea&appKey=a2476d1824c2ff264a1a871eb1806f85";
    } else if ($("#q2").val() === "fruit") {
        return "https://apibeta.nutritionix.com/v2/search?q=dairy&fields=item_name,brand_name,item_id,nf_calories&appId=543a53ea&appKey=a2476d1824c2ff264a1a871eb1806f85";
    } else if ($("#q2").val() === "grain") {
        return "https://apibeta.nutritionix.com/v2/search?q=vegetables&fields=item_name,brand_name,item_id,nf_calories&appId=543a53ea&appKey=a2476d1824c2ff264a1a871eb1806f85";    
    }
}

function answer3Search() {
    $.ajax({
      url: linkToAPI(),
      method: "GET",
      success: function(response) {
          console.log(response);
          answer3(response);
      },
    });
}

function answer4(response) {
    for (var i = 7; i < 10; i++){
        if (response.results[i].nutrient_value < 250) {    
            $("#a4").append("<img class='i' src="+response.results[i].thumbnail+">"); 
            $("#a4").append("<p class='p'>"+response.results[i].brand_name+"</p>");
            $("#a4").append("<p class='p'>"+response.results[i].item_name+"</p>");
            $("#a4").append("<p class='p'>"+response.results[i].nutrient_value+"calories</p>");
        } else {
        }
    }  
}

function link4Answer() {
    if ($("#q4").val() === "breakfast") {
        return "https://apibeta.nutritionix.com/v2/search?q=breakfast&fields=item_name,brand_name,item_id,nf_calories&appId=543a53ea&appKey=a2476d1824c2ff264a1a871eb1806f85";   
    } else if ($("#q4").val() === "lunch") {
        return "https://apibeta.nutritionix.com/v2/search?q=lunch&fields=item_name,brand_name,item_id,nf_calories&appId=543a53ea&appKey=a2476d1824c2ff264a1a871eb1806f85";
    } else if ($("#q4").val() === "dinner") {
        return "https://apibeta.nutritionix.com/v2/search?q=dinner&fields=item_name,brand_name,item_id,nf_calories&appId=543a53ea&appKey=a2476d1824c2ff264a1a871eb1806f85";
    } else if ($("#q4").val() === "snacks") {
        return "https://apibeta.nutritionix.com/v2/search?q=snacks&fields=item_name,brand_name,item_id,nf_calories&appId=543a53ea&appKey=a2476d1824c2ff264a1a871eb1806f85";
    }
}   

function answer4Search() {
    $.ajax({
      url: link4Answer(),
      method: "GET",
      success: function(response) {
          console.log(response);
          answer4(response);
      },
    });
}

function answer5(response) {
    for (var i = 10; i < 12; i++){
            $("#a5").append("<img class='i1' src="+response.results[i].thumbnail+">"); 
            $("#a5").append("<p class='p'>"+response.results[i].brand_name+"</p>");
            $("#a5").append("<p class='p'>"+response.results[i].item_name+"</p>");
            $("#a5").append("<p class='p'>"+response.results[i].nutrient_value+"calories</p>");
    }  
}

function link5Answer() {
    if ($("#q5").val() === "meat") {
        return "https://apibeta.nutritionix.com/v2/search?q=meat&fields=item_name,brand_name,item_id,nf_calories&appId=543a53ea&appKey=a2476d1824c2ff264a1a871eb1806f85";
    } else if ($("#q5").val() === "vegetable") {
        return "https://apibeta.nutritionix.com/v2/search?q=vegetable&fields=item_name,brand_name,item_id,nf_calories&appId=543a53ea&appKey=a2476d1824c2ff264a1a871eb1806f85";
    } else if ($("#q5").val() === "dairy") {
        return "https://apibeta.nutritionix.com/v2/search?q=dairy&fields=item_name,brand_name,item_id,nf_calories&appId=543a53ea&appKey=a2476d1824c2ff264a1a871eb1806f85";
    } else if ($("#q5").val() === "fruit") {
        return "https://apibeta.nutritionix.com/v2/search?q=fruits&fields=item_name,brand_name,item_id,nf_calories&appId=543a53ea&appKey=a2476d1824c2ff264a1a871eb1806f85";
    } else if ($("#q5").val() === "grain") {
        return "https://apibeta.nutritionix.com/v2/search?q=grains&fields=item_name,brand_name,item_id,nf_calories&appId=543a53ea&appKey=a2476d1824c2ff264a1a871eb1806f85";    
    }
}

function answer5Search() {
    $.ajax({
      url: link5Answer(),
      method: "GET",
      success: function(response) {
          answer5(response);
      },
    });
}

$(document).ready(function() {
    $("#submit").click(function(){
        if ($("#q1").val() === "" || $("#q2").val() === "" || $("#q4").val() === "" || $("#q5").val() === "" || $("#calores").val() < 0 ) {
        alert("Please pick an answer for every question");
        } else {
        advice();
        answer();
        answer2();
        answer3Search();
        answer4Search();
        answer5Search();
        }
    });
}); 