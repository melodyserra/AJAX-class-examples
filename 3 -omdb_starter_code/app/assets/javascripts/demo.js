// get the party started
$(document).ready(function(){
	// hide our spinner
	$('.loading').hide();

	$('.movieSearch').first().on('submit',function(e){
		e.preventDefault();
		$('#movie').remove();
		$('.loading').show();
		var title = $('#title').val();
		$.ajax({
			url: "http://www.omdbapi.com/",
			data: {s: title}

		}).done(function(result){
			//dis = result;
			$('.loading').hide();
			var movieCollection = $($.parseJSON(result).Search);

			console.log(movieCollection);

			var outer_div = $('<div>').attr("id", "movie");

			movieCollection.each(function(index,movie){
				var movie_div = $('<div>').append(movie.Title+", "+movie.Year);
				outer_div.append(movie_div);

			});

			$('#movieData').append(outer_div);

		});
	});
});

		// remove our success logic from the ajax response - save it for $when, make sure to return the promise object

		// When the form is submitted...

		// prevent the default, show the spinner and clear any previous search values

		// set the value of what the user typed in to some variable

			// use $.when to make our AJAX call


					// erase previous movie data and hide the spinner

					// When we get our data back, append it to the page

					// BONUS 1 check to see if we have a valid search

					// BONUS 2 otherwise, append our precompiled Handlebars template to a div


			// clear the value of the text field


