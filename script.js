var name = '';
var numberCard = '';
var MM = '';
var YY = '';
var CVC = '';

function changeName() {

	name = document.querySelector('input[name=card_name]').value;

	document.querySelector('span[class=cdName]').innerHTML = name;

	var namePattern = /[^a-zà-ú\s]/gi;

	var nameVerify = name.match(namePattern);

	if (nameVerify) {
		document.querySelector('label[id=name_format]').classList.add('ativeError');
	} else{
		document.querySelector('label[id=name_format]').classList.remove('ativeError');
	}
}

function changeNumber() {

	numberCard = document.querySelector('input[name=card_number]').value;

	document.querySelector('span[class=cdNumber]').innerHTML = numberCard;

	var numberVerify = Number(numberCard.replaceAll(' ', ''));

	if (isNaN(numberVerify) === true) {
		document.querySelector('label[id=number_format]').classList.add('ativeError');
	} else {
		document.querySelector('label[id=number_format]').classList.remove('ativeError');
	}
}


function changeExpMonth() {

	MM = document.querySelector('input[name=cardDateMM]').value;
	document.querySelector('span[class=innerMM]').innerHTML = MM;

	if (isNaN(MM) === true) {
		document.querySelector('label[id=date_format]').classList.add('ativeError');
	} else {
		document.querySelector('label[id=date_format]').classList.remove('ativeError');
	}
}


function changeExpYear() {

	YY = document.querySelector('input[name=cardDateYY]').value;
	document.querySelector('span[class=innerYY]').innerHTML = YY;

	if (isNaN(YY) === true) {
		document.querySelector('label[id=date_format]').classList.add('ativeError');
	} else {
		document.querySelector('label[id=date_format]').classList.remove('ativeError');
	}
}


function changeCVC() {

	CVC = document.querySelector('input[name=cardCVC]').value;
	document.querySelector('span[class=cdCVC]').innerHTML = CVC;

	if (isNaN(CVC) === true) {
		document.querySelector('label[id=cvc_format]').classList.add('ativeError');
	} else {
		document.querySelector('label[id=cvc_format]').classList.remove('ativeError');
	}
}

function formVerify() {
	event.preventDefault();
	
	if (name.length === 0) {
		document.querySelector('label[id=name_blank]').classList.add('ativeError');
	} else {
		document.querySelector('label[id=name_blank]').classList.remove('ativeError');
	}

	if (numberCard.length === 0) {
		document.querySelector('label[id=number_blank]').classList.add('ativeError');
	} else {
		document.querySelector('label[id=number_blank]').classList.remove('ativeError');
	}

	if (MM.length === 0 || YY.length === 0) {
		document.querySelector('label[id=date_blank]').classList.add('ativeError');
	} else {
		document.querySelector('label[id=date_blank]').classList.remove('ativeError');
	}

	if (CVC.length === 0) {
		document.querySelector('label[id=cvc_blank]').classList.add('ativeError');
	} else {
		document.querySelector('label[id=cvc_blank]').classList.remove('ativeError');
	}

	if (document.querySelector('label[id=name_format]').classList.contains('ativeError') || 
		document.querySelector('label[id=number_format]').classList.contains('ativeError') ||
		document.querySelector('label[id=date_format]').classList.contains('ativeError') ||
		document.querySelector('label[id=date_format]').classList.contains('ativeError') ||
		document.querySelector('label[id=cvc_format]').classList.contains('ativeError') ||
		document.querySelector('label[id=name_blank]').classList.contains('ativeError') ||
		document.querySelector('label[id=number_blank]').classList.contains('ativeError') ||
		document.querySelector('label[id=date_blank]').classList.contains('ativeError') ||
		document.querySelector('label[id=cvc_blank]').classList.contains('ativeError')) {

		document.querySelector('.secForm').style.display = 'flex';
		document.querySelector('.sucessScreen').style.display = 'none';

	} else {

		document.querySelector('.secForm').style.display = 'none';
		document.querySelector('.sucessScreen').style.display = 'flex';

	}
}