



const notes = [{}, {
	title: "my book", 
	body: "travel"
	}, {
	title: "hobbits to work on ", 
	body: "coding"	
}]




const index = notes.findIndex(function(note, index){
	return note.title === "my book"

});

console.log(index); 



