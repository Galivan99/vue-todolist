Vue.config.devtools = true;
var app = new Vue ({
    el: '#root',
    data: {
        newToDo: '',
        toDos: [
            {
                do: 'Fare i compiti',
                checked: false,
            },
            {
                do: 'Fare la spesa',
                checked: false,
            },
            {
                do: 'Fare il bucato',
                checked: false,
            },
        ],
    },
    methods: {
        addToDo() {
            if(this.newToDo != '') {
                this.toDos.push({
                        do: this.newToDo,
                        checked: false,
                    });
                this.newToDo = "";
            }
        },
        deleteToDo(index) {
            this.toDos.splice(index, 1); // splice per rimuovere un elemento 
        }
    }
})