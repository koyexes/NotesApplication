class NotesApplication{
	constructor(author){
		this.author = author;
		this.notes = [];
	}
	
	create(note_content){
		this.notes.push(note_content);
	}
	
	listNotes(){
		var list = "";
		
		for (var i = 0; i < this.notes.length; i++){
			
			list = list + "Note ID:" + i + "\n";
			list = list + this.notes[i] + "\n";
			list = list + "By Author " +  this.author ;
		
		}
		
		console.log(list);
	}
	
	getNot(note_id){
		if(this.note.length > note_id){
			return this.notes[note_id];
		}
		
	}
	
	search(search_text){
		
	}
	
	delete(note_id){
		this.notes.splice(note_id,1);
	}
}

var newNote = new NotesApplication("Daniel Steel");
newNote.create("hello world");
newNote.create("hello world 2");
newNote.create("hello world 3");
console.log(newNote.listNotes());
newNote.delete(0);
console.log(newNote.listNotes());