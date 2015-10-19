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
	
	return false
});



// Write a function to get data
var getData = function() {
	

	// Set up a new query for our Music class


	// Set a parameter for your query -- where the website property isn't missing


	/* Execute the query using ".find".  When successful:
	    - Pass the returned data into your buildList function
	*/
}

// A function to build your list
var buildList = function(data) {
	// Empty out your unordered list
	
	// Loop through your data, and pass each element to the addItem function

}


// This function takes in an item, adds it to the screen
var addItem = function(item) {
	// Get parameters (website, band, song) from the data item passed to the function

	
	// Append li that includes text from the data item


	
	// Time pending, create a button that removes the data item on click
	
}

// Call your getData function when the page loads


