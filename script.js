
const App = {
	data(){
		return{
			counter: 1,
			title: 'What to do today?',
			placeholderString: 'Add your first note!',
			inputValue: '',
			notes: [],
			importantNotes: [],
			timeOfNote: [],
			info: '',
			important: false,
			importantNotes: [],
			time: '12:00',
			first: false,
			column: false
		}
	},
	methods: {
		inputChangeHandler(event){
			this.inputValue = event.target.value;
		},
		addNewNote(){
			if(this.inputValue !== ''){
				if(this.first){
					this.notes.unshift(this.inputValue);
					this.importantNotes.unshift(this.important);
					this.timeOfNote.unshift(this.time);
				} else{
					this.notes.push(this.inputValue);
					this.importantNotes.push(this.important);
					this.timeOfNote.push(this.time);
				}
				this.time = '12:00';
				this.important = false;
				this.first = false;
				this.inputValue = '';
			}
			if(this.counter >= 1){
				this.placeholderString = 'Add your new note here..';
			}
		},
		deleteNote(index, event){
			this.notes.splice(index, 1);
			this.importantNotes.splice(index, 1);
			this.timeOfNote.splice(index, 1);
		},
		toUpperCase(item){
			return item.toUpperCase();
		}
	},
	computed:{
		doubleCountComputed(){
			return this.notes.length = 2;
		}
	},
	watch:{
		inputValue(value){
			if(value.length < 50) {
				this.info = '';
			}
			if(value.length > 50){
				this.info = 'Max length of note!';
				this.inputValue = value.substring(0, value.length - 1);
			}
		}
	}
} 

const app = Vue.createApp(App)

app.mount('#app')