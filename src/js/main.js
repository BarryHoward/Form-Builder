import $ from 'jquery';

var data = $.ajax({
	url: "http://json-data.herokuapp.com/forms",
	success:  drawForm
	});

function drawForm(data){
	var totalHTML = "";
	data.forEach(function(element){
		var newHTML = newInput(element);
		$(".container").append(newHTML);
	});
}

function newInput(element){

	var divHTML = `<div class="inputContainer">`
	var iconHTML = `<i class="icon fa ${element.icon}"></i>`
	if (element.type==="select"){
		var inputHTML = `<div class="selectBox"><div class="selectArrowBox"><div class="arrow-up"></div><div class="arrow-down"></div></div><select class="inputBar" id="selectBar" name="${element.label}">`
		inputHTML = inputHTML + `<option value="" disabled selected>${element.label}...</option>`;
		for (var i=0; i<element.options.length; i++){
			var optionHTML = `<option value="${element.options[i].value}">${element.options[i].label}</option>`;
			inputHTML = inputHTML+optionHTML;
		}
		inputHTML = inputHTML + `</div></select>`;

	} else if (element.type==="textarea"){
		var inputHTML = iconHTML + `<textarea class="inputBar" id="textBox" placeholder="${element.label}" name="textarea" rows="3" cols="50"></textarea>`
	} else {
		var inputHTML = iconHTML + `<input class="inputBar" placeholder="${element.label}" type="${element.type}">`;
	}

	return divHTML + inputHTML+'</div>';
}