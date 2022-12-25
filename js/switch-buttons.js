buttonDepilation.addEventListener('click', function () {
	if (!(this.classList.contains('active'))) {
		buttonClear.classList.remove('active');
		ClearWrapper.classList.remove('active');
		buttonMassage.classList.remove('active');
		MassageWrapper.classList.remove('active');
		buttonPeeling.classList.remove('active');
		PeelingWrapper.classList.remove('active');
		buttonСombined.classList.remove('active');
		СombinedWrapper.classList.remove('active');
		this.classList.add('active');
		DepilationWrapper.classList.add('active');
	}
});
buttonClear.addEventListener('click', function () {
	if (!(this.classList.contains('active'))) {
		buttonDepilation.classList.remove('active');
		DepilationWrapper.classList.remove('active');
		buttonMassage.classList.remove('active');
		MassageWrapper.classList.remove('active');
		buttonPeeling.classList.remove('active');
		PeelingWrapper.classList.remove('active');
		buttonСombined.classList.remove('active');
		СombinedWrapper.classList.remove('active');
		this.classList.add('active');
		ClearWrapper.classList.add('active');
	}
});

buttonMassage.addEventListener('click', function () {
	buttonDepilation.classList.remove('active');
	DepilationWrapper.classList.remove('active');
	buttonClear.classList.remove('active');
	ClearWrapper.classList.remove('active');
	buttonPeeling.classList.remove('active');
	PeelingWrapper.classList.remove('active');
	buttonСombined.classList.remove('active');
	СombinedWrapper.classList.remove('active');
	if (!(this.classList.contains('active'))) {
		this.classList.add('active');
		MassageWrapper.classList.add('active');
	}
});

buttonPeeling.addEventListener('click', function () {
	buttonDepilation.classList.remove('active');
	DepilationWrapper.classList.remove('active');
	buttonClear.classList.remove('active');
	ClearWrapper.classList.remove('active');
	buttonMassage.classList.remove('active');
	MassageWrapper.classList.remove('active');
	buttonСombined.classList.remove('active');
	СombinedWrapper.classList.remove('active');
	if (!(this.classList.contains('active'))) {
		this.classList.add('active');
		PeelingWrapper.classList.add('active');
	}
});


buttonСombined.addEventListener('click', function () {
	buttonDepilation.classList.remove('active');
	DepilationWrapper.classList.remove('active');
	buttonClear.classList.remove('active');
	ClearWrapper.classList.remove('active');
	buttonMassage.classList.remove('active');
	MassageWrapper.classList.remove('active');
	buttonPeeling.classList.remove('active');
	PeelingWrapper.classList.remove('active');
	if (!(this.classList.contains('active'))) {
		this.classList.add('active');
		СombinedWrapper.classList.add('active');
	}
});




$('#read-first-left').click(function () {
	$(this).find('i').toggleClass('fa-angle-down fa-angle-up')
});
$('#read-midl-left').click(function () {
	$(this).find('i').toggleClass('fa-angle-down fa-angle-up')
});
$('#read-last-left').click(function () {
	$(this).find('i').toggleClass('fa-angle-down fa-angle-up')
});


$('#read-first-right').click(function () {
	$(this).find('i').toggleClass('fa-angle-down fa-angle-up')
});

$('#read-midl-right').click(function () {
	$(this).find('i').toggleClass('fa-angle-down fa-angle-up')
});

$('#read-last-right').click(function () {
	$(this).find('i').toggleClass('fa-angle-down fa-angle-up')
});







