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
        },

        updateTitle(newTitle) {
            this.title = newTitle;
            console.log("Task Title updated successfully");

        },

        updateCategory(newCategory) {
            this.category = newCategory;
            console.log("Task Category updated successfully")
        }
    }
}

let task1 = createTask("Buy groceries", "Get milk, eggs, and bread from the store.", "Shopping");
task1.displayDetails();

task1.toggleCompleted();
console.log("| \t New Task Details \t |");
task1.displayDetails();

task1.updateTitle("Buy groceries - 1");
console.log("\t Updated Task Details \t");
task1.displayDetails();

task1.updateDescription("1. Get milk, eggs, and bread from the store.");
console.log("\t Updated Task Details \t");
task1.displayDetails();

task1.updateCategory("shopping - 1");
console.log("\t Updated Task Details \t");
task1.displayDetails();

// task1.toggleCompleted();
// console.log("| \t New Task Details \t |");
// task1.displayDetails();