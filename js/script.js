$(document).ready(function(){

	// widget type 
	// type fixed or mention a div with class name
	$(window).requestToCallWidget({
		type		: 'fixed',
    	//type		: '.abc',
    	URL			: 'save.php',
    	forminput	: [{label:"name",type:"text"},{label:"Email",type:"text"},{label:"Mobile",type:"number"}]
	});


});