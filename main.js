$(document).click(function(event) {
    changeText($(event.target));
});

function changeText($paragraph)
{
    if($paragraph.attr('class') == "first")
    {
        id = $paragraph.attr("id").slice(2);
        $paragraph.fadeOut(200, function(){
            $paragraph.html(secondText[id]);
            $paragraph.fadeIn(200);
            $paragraph.attr('class', "second");
        });
    }
    else if($paragraph.attr('class') == "second")
    {
        id = $paragraph.attr("id").slice(2);
        $paragraph.fadeOut(200, function(){
            $paragraph.html(thirdText[id]);
            $paragraph.fadeIn(200);
            $paragraph.attr('class', "third");
        });
    }
    else if($paragraph.attr('class') == "third")
    {
        id = $paragraph.attr("id").slice(2);
        $paragraph.fadeOut(200, function(){
            $paragraph.html(firstText[id]);
            $paragraph.fadeIn(200);
            $paragraph.attr('class', "first");
        });
    }
}

function initialize(){
    for(let i = 0; i < firstText.length; i++){
        $('.mainDiv').append('<p class="first" id="id' + i.toString() + '"></p>')
        $('#id' + i.toString()).html(firstText[i]);
    }
}

initialize();
