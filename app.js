var $input;
$(document).ready(function(){
	

	$('body').on('click', "#submitButton", function(event) {
		event.preventDefault();
		$input = $('#searchInput').val();
		console.log("This is inputs:" + $input);
		
	
		search($input);
		search2($input);
	});


});

function callback(data){
    	console.log(data);
    	$(".search").append("<div class='info'><h3>" + "Username: " + data.login + "</h3>" + "<br>" + "<a class='link' href=\"" + data.html_url + "\">Github Page</a> </div>");
        $(".search").append("<div>" + "<img class='img' src=\"" + data.avatar_url + "\" \/>" + "</div>");
}
function repoCallback(data){
    	console.log(data);
    	for (var i = 0; i<data.length; i++) {
    	$(".search").append("<div class='repo'><h3 class='info'>" + "Reponame: " + data[i].name + "</h3>" + "<br>" + "<a class='link' href=\"" + data[i].html_url + "\">Repo Link</a> </div>");
    }
}

function search (query) {
	$.ajax({
		url: 'https://api.github.com/users/' + encodeURI($input) + '?client_id=f8a4b95805c9804c9eb7&client_secret=4b1bff35a5b8b802fe4bb4e1204afd2f56fc8d8d',
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
function search2 (query2) {
	$.ajax({
		url: 'https://api.github.com/users/' + encodeURI($input) + '/repos?client_id=f8a4b95805c9804c9eb7&client_secret=4b1bff35a5b8b802fe4bb4e1204afd2f56fc8d8d',
		type: 'GET',
		crossDomain: true,
		dataType: 'json',
		success: function(data){
			repoCallback(data);
		},
		error: function(errorThrown) { 
            $(".search").append("<p>" + "User not found" + "</p>");
        },
        complete: function() {
	        console.log('ajax complete');
	    }
	});
}