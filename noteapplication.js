// note application class
class NotesApplication {
	constructor () {
		this.notes = [];
	}

	add(note){
		if(note instanceof Note) {
			this.notes.push(note);
		}
	
	}
	
	listNotes() {
		var list = "";
		
		for (var i = 0; i < this.notes.length; i++) {
			
			list = list + "Note ID: " + i + "\n";
			list = list + this.notes[i].text + "\n";
			list = list + "By Author " +  this.notes[i].author + "\n";
		
		}
		
		console.log(list);
	}
	
	get(note_id){
		if((typeof note_id === "integer") && (this.note.length > note_id)){
			return this.notes[note_id];
		}
		
	}
	
	search(search_text){
		var foundList = "";
		for(var i = 0; i < this.notes.length; i++){
			if( this.notes[i].text.indexOf(search_text) > -1){
				console.log(this.notes[i].text + "\n");	
			}
		}
	}
	
	delete(note_id){
		this.notes.splice(note_id,1);
	}
	
	edit(note_id, new_content){
		this.notes[note_id].setNote(new_content);
	}
}

// note class
class Note{
	constructor(note_content, author){
		this.text = note_content;
		this.author = author;
	}
	
	setNote(note_content){
		this.text = note_content;
	}
	
	
	
}


var newNoteManager = new NotesApplication();
var newNote = new Note("hello world", "Daniel Steel");
newNoteManager.add(newNote);
newNoteManager.listNotes();
newNoteManager.edit(0, "koyexes");
newNoteManager.listNotes();
newNoteManager.search("koyexes");
