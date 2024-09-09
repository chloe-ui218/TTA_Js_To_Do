let tasks = [
    ["Work", ["Complete the report", "Email the team", "Call the client"]],
    ["Personal", ["Buy groceries", "Pick up the kids", "Do the laundr"]]
]
// Function to display tasks and their category
function displayCategorizedTasks(){
    tasks.forEach((category) =>{
        console.log(`\t ${category[0]} Tasks:`);
        category[1].forEach((task, index) => {
            console.log(`\t\t ${index + 1}. ${task}`);
        })
    })
}

// function to add a new task to a category
function addCategorizedTask(category, task){
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i][0] === category){
            tasks[i][1].push(task);
            console.log(`\nTask "${task}" added to "${category}" tasks\n`);
            console.log("To DO List after adding a new task\n");            return;
        }
    
    }
    console.log(`Category "${category}" not found \n`);

}

// function to remove a task from a category
function removeCategorizedTask(category, index){
    for (let i = 0; i < tasks.length; i++){
        if(tasks[i][0] === category){
            if (index >= 0 && index < tasks[i][1].length){
                let removedTask = tasks[i][1][index];
                for (let j = index; j < tasks[i][1].length; j++){
                    tasks[i][1][j] = tasks[i][1][j + 1];
                }
                tasks[i][1].length--;
                console.log(`\nTask "${removedTask}" removed from "${category}" tasks\n`);
                console.log("To DO List after removing a task\n");
                return;
            }
        }
    }
    console.log(`Category "${category}" not found \n`);
}

// Function to sort tasks in a category alphabetically
function sortTasks(category){
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i][0] === category){
            tasks[i][1].sort();
            console.log(`\nTasks in "${category}" sorted alphabetically\n`);
            return;
        }
    }
    console.log(`Category "${category}" not found \n`);
}


// Function to search through a category for a task
function searchTask(category, task){
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i][0] === category){
            let index = tasks[i][1].indexOf(task);
            if (index != -1){
                console.log(`Task ${task} found at index ${index + 1} in "${category}" tasks\n`);
                return;
            }
        }
    }
    console.log(`Task "${task}" not found in "${category}" tasks \n`);
}


console.log("To Do List before adding a new task\n");
displayCategorizedTasks();

addCategorizedTask("Work", "Complete the presentation");
displayCategorizedTasks();

removeCategorizedTask("Personal", "1");
displayCategorizedTasks();

sortTasks("Work");
displayCategorizedTasks();

searchTask("Work", "Em(ail the team");
// displayCategorizedTasks();