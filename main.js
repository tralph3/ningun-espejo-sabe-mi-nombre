// handle click events
$(document).click(function(event)
{
	clicked($(event.target));
});


function clicked($element)
{
	// if its one of the circles
	if($element.attr('class') == "circle")
	{
		changeParagraphsTo($element);
		return;
	}
	// if its a paragraph
	else
	{
		nextParagraph($element);
	}
}

// switch paragraph to its next version
function nextParagraph($paragraph)
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

// change all paragraphs to another version depending on circle
function changeParagraphsTo($circle)
{
	text = getText($circle);
	$(".textDiv").fadeOut(200, function(){
		document.querySelectorAll('[name="text"]').forEach(function($paragraph, index)
		{
		$paragraph.innerHTML = text[index];
		$paragraph.className = $circle.attr("id");
		});
		$(".textDiv").fadeIn(200);
});
}


// create paragraph elements
function loadParagraphs()
{
	for(let i = 0; i < firstText.length; i++)
	{
		$('.textDiv').append('<p name="text" class="first" id="id' + i.toString() + '"></p>')
		$('#id' + i.toString()).html(firstText[i]);
	}

}

function initialize()
{
	loadParagraphs();
	showAlert();
}


// identify text version given a circle
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
	text: "Este cuento es interactivo. Podés hacer click en los párrafos para alternar entre las diferentes narraciones de la historia, o utilizar los círculos de colores para cambiar todos los párrafos a la vez.",
	icon: "info"
	})
}

initialize();
