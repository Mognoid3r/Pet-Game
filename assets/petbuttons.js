//pet button clicked --
//if button is clicked then default image change into happy image
//after 2 hours with no click, change image back to default
function defaultMood() {
    $(".displayPetImg").attr("src", "images/avatar/idleAvatar.gif")
}

$(".boxOne").click(function (happyPet) {
    $(".petCurrentMood").html("Pet is happy!")
    $(".displayPetImg").attr("src", "images/avatar/happyAvatar.gif");
    setTimeout(defaultMood, 5000);

});

//feed button clicked
//if button is clicked then default image change into happy image
//after 4 hours with no click, change image back to default
$(".boxTwo").click(function (hungryPet) {
    $(".petCurrentMood").html("Pet is full!")
    $(".displayPetImg").attr("src", "images/avatar/happyAvatar.gif");
    setTimeout(defaultMood, 5000);

});