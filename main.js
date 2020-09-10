$(document).click(function(event)
{
    clicked($(event.target));
});

function clicked($element)
{
    if($element.attr('class') == "circle")
    {
	text = getText($element);
	$(".textDiv").fadeOut(200, function(){
	    document.querySelectorAll('[name="text"]').forEach(function($paragraph, index)
	    {
		$paragraph.innerHTML = text[index];
		$paragraph.className = $element.attr("id");
	    });
	    $(".textDiv").fadeIn(200);
	});
	return;
    }

    if($element.attr('class') == "first")
    {
        id = $element.attr("id").slice(2);
        $element.fadeOut(200, function(){
            $element.html(secondText[id]);
            $element.fadeIn(200);
            $element.attr('class', "second");
        });
    }
    else if($element.attr('class') == "second")
    {
        id = $element.attr("id").slice(2);
        $element.fadeOut(200, function(){
            $element.html(thirdText[id]);
            $element.fadeIn(200);
            $element.attr('class', "third");
        });
    }
    else if($element.attr('class') == "third")
    {
        id = $element.attr("id").slice(2);
        $element.fadeOut(200, function(){
            $element.html(firstText[id]);
            $element.fadeIn(200);
            $element.attr('class', "first");
        });
    }
}

function initialize()
{
    for(let i = 0; i < firstText.length; i++)
    {
        $('.textDiv').append('<p name="text" class="first" id="id' + i.toString() + '"></p>')
        $('#id' + i.toString()).html(firstText[i]);
    }

    showAlert();
}

function getText($circle)
{
    id = $circle.attr("id");
    if(id == "first")
    {
	return firstText;
    }
    else if(id == "second")
    {
	return secondText;
    }
    else if(id == "third")
    {
	return thirdText;
    }
}

function showAlert()
{
    swal({
	text: "Este cuento es interactivo. Puede hacer click en los párrafos para ver diferentes versiones de la historia, o puede utilizar los círculos de colores para cambiar todos los párrafos a la vez.",
	icon: "info"
    })
}

initialize();
