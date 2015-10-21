// Initialize Parse app
Parse.initialize("HQp3RyGUlfoJUCN1qLbgJzT3QsaFBaCHDxHpAogh", "q2gOHTlfq7lDzG53KGDlqlJKPprmyjErAGbA6LSB");

// Create a new sub-class of the Parse.Object, with name "Music"
var Music = Parse.Object.extend("Music");

// // Create a new instance of your Music class 
// var music = new Music();

// // // Set a property 'band' equal to a band name
// // music.set("band", "Hyukoh");

// // // Set a property 'website' equal to the band's website
// // music.set("website", "http://highgrnd.com/artist.php?idx=HYUKOH");
    
// // // Set a property 'song' equal to a song
// // music.set("song", "Comes and Goes");

// // // Save your instance of your song -- and go see it on parse.com!
// // music.save();

// Click event when form is submitted
$('form').submit(function() {

	// Create a new instance of your Music class 
	var music = new Music();

	// For each input element, set a property of your new instance equal to the input's value
	$(this).find('input').each(function() {
		music.set($(this).attr('id'), $(this).val());
		$(this).val('');
	});

	//
	// var band = $('#band'.val());
	// music.set('band', band);	

	// var website = $('#website'.val());
	// music.set('website', band);

	// var song = $('#song'.val());
	// music.set('song', band);

	// After setting each property, save your new instance back to your database
	music.save();
	//getData();
	return false
});



// Write a function to get data
var getData = function() {
	
	console.log('getData');
	// Set up a new query for our Music class
	var query = new Parse.Query(Music);

	// Set a parameter for your query -- where the website property isn't missing
	//query.exists('website');
	query.notEqualTo('website', '');
	/* Execute the query using ".find".  When successful:
	    - Pass the returned data into your buildList function
	*/
	query.find({
		// success: function(response) {
		// 	buildList(response);
		// }
		success: buildList
	})
}

// A function to build your list
var buildList = function(data) {
	console.log('buildList');
	// Empty out your unordered list
	$('ol').empty();

	// Loop through your data, and pass each element to the addItem function
	data.forEach(function(d) {
		addItem(d);
	});

}

// This function takes in an item, adds it to the screen
var addItem = function(item) {
	// Get parameters (website, band, song) from the data item passed to the function
	var website = item.get('website');
	var band = item.get('band');
	var song = item.get('song');
	
	// Append li that includes text from the data item
	var li = $('ol').append('<li>Check out ' + band + ', I love the song ' + song + '</li>');

	// Time pending, create a button that removes the data item on click
	var button = $('<button class="btn-xs btn-danger">');
	button.on('click', function() {
		item.destroy({
			success: getData
		})
	})
	li.append(button);
	$('ol').append(li);
}

// Call your getData function when the page loads

