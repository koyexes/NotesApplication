class NotesApplication{
	constructor(author){
		this.author = author;
		this.notes = [];
	}
	
	create(note_content){
		this.notes.push(note_content);
	}
	
	listNotes(){
		for (var i = 0; i < this.notes.length; i++){
			var list = "";
			list = list + "Note ID:" +  i + "\n";
			list = list + this.notes[i] + "\n";
			list = list + "By Author " +  this.author ;
			console.log(list);
			
		}
		
	}
}

var newNote = new NotesApplication("Daniel Steel");
newNote.create("hello world");
newNote.listNotes();