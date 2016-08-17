// note application class
class NotesApplication {
	constructor () {
		this.notes = [];
	}

	add (note) {
		if(note instanceof Note) {
			this.notes.push(note);
		}
	
	}
	
	listNotes() {
		var list = "";
		
		for (var i = 0; i < this.notes.length; i++) {
			
			list = list + "Note ID: " + i + "\n";
			list = list + this.notes[i].text + "\n";
			list = list + "By Author " +  this.notes[i].author + "\n\n";
		
		}
		
		console.log(list);
	}
	
	get (note_id) {
		if ( (typeof note_id === "number") && (this.notes.length > note_id) ) {
			return this.notes[note_id];
		}
		
	}
	
	search (search_text) {
		for (var i = 0; i < this.notes.length; i++) {
			if( this.notes[i].text.indexOf(search_text) > -1) {
				console.log(this.notes[i].text + "\n");	
			}else{
				console.log("No match found");
			}
		}
	}
	
	delete (note_id) {
		this.notes.splice(note_id, 1);
	}
	
	edit (note_id, new_content) {
		this.notes[note_id].setNote(new_content);
	}
}

// note class
class Note {
	constructor (note_content, author) {
		this.text = note_content;
		this.author = author;
	}
	
	setNote (note_content) {
		this.text = note_content;
	}
	
	
	
}


var newNoteManager = new NotesApplication();
newNoteManager.add(new Note("hello world", "Daniel Steel"));
newNoteManager.add(new Note("i am a boy", "lengendary"));
newNoteManager.listNotes();
newNoteManager.edit(0, "koyexes");
newNoteManager.listNotes();
newNoteManager.search("koyexes");
console.log(newNoteManager.get(0));
