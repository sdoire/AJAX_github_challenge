var $input;
$(document).ready(function(){
	

	$('body').on('click', "#submitButton", function(event) {
		event.preventDefault();
		$input = $('#searchInput').val();
		console.log("This is inputs:" + $input);
		
	
		search($input);
	});


});

function callback(data){
    	console.log(data.login);
    	var URL = encodeURI(data.html_url);
    	$(".search").append("<div><h3 class='info'>" + "Username: " + data.login + "</h3>" + "<br>" + "<div> <a class='link' href=\"" + URL + "\">Github Page</a> </div>");
        $(".search").append("<div>" + "<img class='img' src=\"" + data.avatar_url + "\" \/>" + "</div>");
}

function search (query) {
	$.ajax({
		url: 'https://api.github.com/users/' + $input + '?client_id=f8a4b95805c9804c9eb7&client_secret=4b1bff35a5b8b802fe4bb4e1204afd2f56fc8d8d',
		type: 'GET',
		crossDomain: true,
		dataType: 'json',
		success: function(data){
			callback(data);
		},
		error: function(errorThrown) { 
            $(".search").append("<p>" + "User not found" + "</p>");
        },
        complete: function() {
	        console.log('ajax complete');
	    }
	});
}