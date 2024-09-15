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
    
    function createWorkTask(title, description, deadline){
        let task = createTask(title, description, "Work");
        return {
            ...task,
            deadline,
    
            toggleCompleted(){
                task.toggleCompleted();
            },
    
            displayDetails(){
                task.displayDetails();
                console.log(`\tDeadline: ${this.deadline}`);
            }
        }
    }
    
    function createPersonalTask(title, description, priority){
        let task = createTask(title, description, "Personal");
        return{
            ...task,
            priority,
    
            toogleCompleted(){
                task.toggleCompleted();
            },
    
            displayDetails(){
                task.displayDetails();
                console.log(`\tPriority: ${this.property}`);
            }
        }
    }

    function displayTaskDetails(task){
        task.displayDetails();

    }
    
    let task1 = createTask("Buy groceries", "Get milk, eggs, and bread from the store.", "Shopping");
    
    console.log("+-------------------------------------------------------------------------------------+")
    // task1.displayDetails();
    displayTaskDetails(task1);
    console.log("+-------------------------------------------------------------------------------------+")
    
    let task2 = createWorkTask("complete report", "Finish the report for the meeting", "Friday");
    console.log("Work Related Task")
    console.log("+----------------------------------------------------------------------------------------+")
    task2.displayDetails();
    console.log("+----------------------------------------------------------------------------------------+")
    
    task2.toggleCompleted();
    console.log("+----------------------------------------------------------------------------------------+")
    task2.displayDetails();
    console.log("+----------------------------------------------------------------------------------------+")
    
    let task3 = createPersonalTask("Call mom", "Call mom and ask her to buy milk.", "High");
    console.log("Personal Related Task");
    console.log("+----------------------------------------------------------------------------------------+");
    task3.displayDetails();
    console.log("+----------------------------------------------------------------------------------------+");
    
    task3.toogleCompleted();
    console.log("+----------------------------------------------------------------------------------------+");
    task3.displayDetails();
    console.log("+----------------------------------------------------------------------------------------+");