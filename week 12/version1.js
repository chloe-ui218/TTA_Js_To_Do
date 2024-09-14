class Task {
    constructor(title, description, category) {
        this.title = title;
        this.description = description;
        this.category = category;
        this.completed= false;
    }   
    
    toggleCompleted() {
        this.completed = !this.completed;
    }

    displayDetails() {
        console.log("+-------------------------------------------------------------------------+");
        this.category(`\tCategory: ${this.category}`);
        console.log(`\tTask: ${this.title}`);
        console.log(`\tDescription: ${this.description}`);
        // console.log(`\tCompleted: ${this.completed}`);
        // if (this.completed) {
        //    console.log("\tTask is Completed"); 
        // } else{
        //     console.log("\tTask is Not Completed");
        // }
        console.log(`${this.completed ? "Task is Completed" : "\tTask is not completed"}`);
        console.log("+--------------------------------------------------------------------------+");
    }
}

let task1 = new Task("Buy groceries", "Get milk, eggs, and bread from the store", "Shopping");

task1.displayDetails();

task1.toggleCompleted();
console.log("| \t New Task Details \t |");
task1.displayDetails();

