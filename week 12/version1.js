class Task {
    constructor(title, description) {
        this.little = title;
        this.description = description;
        this.completed= false;
    }   
    
    toggle() {
        this.completed = !this.completed;
    }

    displayDetails() {
        console.log("+------------------------------------------------------------+");
        console.log(`\tTask: ${this.title}`);
        console.log(`\tDescription: ${this.description}`);
        // console.log(`\tCompleted: ${this.completed}`);
        if (this.completed) {
            console.log("\tTask is Completed"); 
        } else{
            console.log("\tTask is Not Completed");
        }
        console.log("+------------------------------------------------------------+");
    }
}

let task1 = new Task("Buy groceries", "Get milk, eggs, and bread from the store.");

task1.displayDetails();

task1.toggleCompleted();
console.log("| \t New Task Details \t |");
task1.displayDetails();

