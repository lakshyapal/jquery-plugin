(function($) {

	let formInputArray; // for form inputs
	
	let formURL;// form action page (ajax will hit on this URL)
	
	// this form will be appended after generateModal()
	function generateForm (id){
		
		let templateHTMLString = `<form method="post" id="${id}">`

		for(let v of formInputArray){
			templateHTMLString += `<div class="form-group">
      			<label for="${v.label}">${v.label}</label>
      			<input type="${v.type}" class="form-control" id="${v.label}" placeholder="Enter email" name="${v.label}">
    			</div>`
		}

		templateHTMLString += `<div class="d-flex justify-content-center"><input type="submit" class="bg-gradient4 btn btn-primary" value="Submit" onclick="send('${id}','${formURL}'); return false;"></div></form>`;

		$('#menu1').html(templateHTMLString);
	}
	
	// button HTML for type 'fixed' at bottom right
	function generateButton(text){
		
		let templateButton = `<button type="button" class="cus-btn cus-btn-pos bg-gradient4" data-toggle="modal" data-target="#myModal"><i class="fa fa-phone" aria-hidden="true"></i> ${text}</button>`
		
		$('body').append(templateButton);
	}
	
	// pop up HTML
	function generateModal(){
		
		let templateModal = `<div class="modal" id="myModal"> <div class="modal-dialog"> <div class="modal-content"> 
		<div class="modal-header m-header"> <h4 class="modal-title m-title ">Contact Us</h4> <button type="button" class="close" data-dismiss="modal">&times;</button> 
		</div><div class="modal-body"> <ul class="nav nav-tabs" role="tablist"> <li class="nav-item"> <a class="nav-link " data-toggle="tab" href="#home">Call Now</a> </li>
		<li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#menu1">Request A Call</a> </li></ul> 
		<div class="tab-content"> <div id="home" class="container tab-pane fade"><br><h3>CALL AT</h3> +91-8860478444</div>
		<div id="menu1" class="container tab-pane active"><br></div></div></div><div class="modal-footer"> 
		<button type="button" class="btn btn-danger bg-gradient4" data-dismiss="modal">Close</button> </div></div></div></div>`;

		$('body').append(templateModal);
	}
	
	// function generating random form id so that it should not collapse with others form
	function randomFormId(){
		
		return `ASD${Math.floor(Math.random() * 10000000) + 1}AS1231DSADSAD`;
	
	}

	// function for button embedded on any div 
	function generateEmbedForm(className,text){
		
		$(className).append(`<button type="button" class="cus-btn bg-gradient4" data-toggle="modal" data-target="#myModal"><i class="fa fa-phone" aria-hidden="true"></i> ${text}</button>`)
	
	}


    $.fn.requestToCallWidget = function( options ) {

        var settings = $.extend({
            text         : 'Request A Call',
        }, options);

        return this.each( function() {
            
			    if(settings.URL){
			    	formURL = settings.URL;
			    }
			    if (settings.forminput){
			    	formInputArray = settings.forminput
			    }

			    if(settings.type){
			    	if(settings.type == 'fixed'){
			    		generateModal();
			    		generateButton(settings.text);
			    		generateForm(randomFormId()); 
			    	}

			    	if(settings.type.search('.') >= 0){
			    		generateEmbedForm(settings.type,settings.text);
			    		generateModal();
			    		generateForm(randomFormId()); 
			    	}	
			   }


        });

    }



}(jQuery));


function send(id,URL){

	let dataToBeSent = {};
	let formValidate = true; //status variable for validation	
	
	$.each($('#'+id).serializeArray(),function(i,v){
		dataToBeSent[v.name] = v.value
	})

	//validating the inputs
	$.each(dataToBeSent,function(v){
		if(dataToBeSent[v] == ''){
			alert(`Please provide ${v}`)
			formValidate = false;
		}
	})
		
	// ajax call if validation is fulfilled	
		if(formValidate == true){
			$.ajax({
		        type: 'POST',
		        dataType: 'json',
		        async: true,
		        data: dataToBeSent,
		        url: URL,
		        success: (data) => {
		        	
		        	if(data.result == "true"){
		            	alert("Your record has been fetched")
		            	location.reload()
		        	}else{
		        		alert("some error occured");
		        	}
		            console.log(data)
		        },
		        error: (data) => { // in case of error response
		            console.log(new Error("some error occured"));
		        },

		        beforeSend: () => { // while request is processing.
		            console.log("request is being made. please wait")
		        },
		        complete: () => {
		            console.log("data fetched success")
		        },
		        timeout:3000 // this is in milli seconds
	    	});

		}
	
		return false;
}

