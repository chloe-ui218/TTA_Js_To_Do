let tasks = ["Buy milk", "clean the room", "go to the gym"];

console.log("Tasks on My To-Do List");
console.log("1." + tasks [0]);
console.log(`2. ${tasks[1]}`);
console.log("3. " + tasks [2]);

tasks.push("do the laundry");
console.log("4. " + tasks[3]);

tasks.pop();
console.log(tasks);


tasks.shift();
console.log(tasks);

tasks.unshift("cook dinner");
console.log(tasks);

tasks.splice(1,1);
console.log(tasks);

tasks.splice(1,0, "wash the dishes");
console.log(tasks);