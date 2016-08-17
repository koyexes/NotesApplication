class NotesApplication{
	constructor(author){
		this.author = author;
		this.notes = [];
	}
	
	/*create(note_content){
		this.notes.push(note_content);
	}*/
	
	add(note){
		if(note instanceof Note){
			this.notes.push(note);
		}
	
	}
	
	listNotes(){
		var list = "";
		
		for (var i = 0; i < this.notes.length; i++){
			
			list = list + "Note ID: " + i + "\n";
			list = list + this.notes[i].text + "\n";
			list = list + "By Author " +  this.author ;
		
		}
		
		console.log(list);
	}
	
	get(note_id){
		if((typeof note_id === "integer") && (this.note.length > note_id)){
			return this.notes[note_id];
		}
		
	}
	
	searched(search_text){
		var foundList = "";
		for(var i = 0; i < this.notes.length; i++){
			var index = search_text.search(this.notes[i].text);
			if( index > -1){
				console.log(this.notes[i].text);	
			}
		}
	}
	
	delete(note_id){
		this.notes.splice(note_id,1);
	}
	
	edit(note_id, new_content){
		this.notes[note_id].changeNote(new_content);
	}
}

class Note{
	constructor(note_content){
		this.text = note_content;
	}
	
	changeNote(note_content){
		this.text = note_content;
	}
	
	
	
}


var newNoteManager = new NotesApplication("Daniel Steel");
var newNote = new Note("hello world");
newNoteManager.add(newNote);
newNoteManager.listNotes();
newNoteManager.edit(0, "koyexes");
newNoteManager.listNotes();
newNoteManager.searched("hello");
