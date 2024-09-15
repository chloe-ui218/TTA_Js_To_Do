function createTask(title, description, category){
//    console.log("To do list");
    return{
        title,
        description,
        category,
        completed: false,

        toggleCompleted() {
            this.completed = !this.completed;
        },

        displayDetails() {
            console.log("+-----------------------------------------------------------------------+");
            console.log(`\tCategory: ${this.category}`);
            console.log(`\tTask: ${this.title}`);
            console.log(`\tDescription: ${this.description}`);
            console.log(`${this.completed ? "Task is Completed" : "\tTask is not completed"}`);
            console.log("+-----------------------------------------------------------------------+");
        }
    }
}

let task1 = createTask("Buy groceries", "Get milk, eggs, and bread from the store.", "Shopping");