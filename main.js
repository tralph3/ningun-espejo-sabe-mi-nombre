$(document).click(function(event) {
    changeText($(event.target));
});

function changeText($paragraph){
    if($paragraph.attr('class') == "front"){
        id = $paragraph.attr("id").slice(2);
        $paragraph.fadeOut(200, function(){
            $paragraph.html(backgroundText[id]);
            $paragraph.fadeIn(200);
            $paragraph.attr('class', "background");
        });
    }else if($paragraph.attr('class') == "background"){
        id = $paragraph.attr("id").slice(2);
        $paragraph.fadeOut(200, function(){
            $paragraph.html(frontText[id]);
            $paragraph.fadeIn(200);
            $paragraph.attr('class', "front");
        });
    }
}

function initialize(){
    for(let i = 0; i < frontText.length; i++){
        $('.mainDiv').append('<p class="front" id="id' + i.toString() + '"></p>')
        $('#id' + i.toString()).html(frontText[i]);
    }
}

initialize();
