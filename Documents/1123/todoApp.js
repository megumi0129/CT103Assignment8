// Initialize an empty array to hold tasks
let tasks = [];

// Function to add a new task
function addTask(description, priority) {
    if (!description || !priority) {
        console.log("Error: Task description and priority are required.");
        return;
    }
    if (!["high", "medium", "low"].includes(priority.toLowerCase())) {
        console.log("Error: Priority must be 'high', 'medium', or 'low'.");
        return;
    }
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1; // Safely generate unique IDs
    tasks.push({ id, description, priority: priority.toLowerCase() });
    console.log(`Task Added: ${description} (${priority})`);
}

// Function to display all tasks
function displayTasks() {
    console.clear();
    if (tasks.length === 0) {
        console.log("No tasks available.");
        return;
    }
    console.log("To-Do List:");
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Description: ${task.description}, Priority: ${task.priority}`);
    });
}

// Function to delete a task by ID
function deleteTask(id) {
    if (!tasks.some(task => task.id === id)) {
        console.log(`Error: Task with ID ${id} not found.`);
        return;
    }
    tasks = tasks.filter(task => task.id !== id);
    console.log(`Task with ID ${id} has been deleted.`);
}

// Function to filter tasks by priority
function filterByPriority(priority) {
    const filteredTasks = tasks.filter(task => task.priority === priority.toLowerCase());
    if (filteredTasks.length === 0) {
        console.log(`No tasks found with priority '${priority}'.`);
        return;
    }
    console.log(`Tasks with priority '${priority}':`);
    filteredTasks.forEach(task => {
        console.log(`ID: ${task.id}, Description: ${task.description}`);
    });
}

// Interactive menu for user interaction
function interactiveMenu() {
    let option;
    do {
        option = prompt(`Choose an option:
        1. Add Task
        2. View All Tasks
        3. Delete Task
        4. Filter by Priority
        5. Exit`);

        switch (option) {
            case '1':
                const description = prompt("Enter task description:");
                const priority = prompt("Enter task priority (high, medium, low):");
                addTask(description, priority);
                break;
            case '2':
                displayTasks();
                break;
            case '3':
                const idToDelete = parseInt(prompt("Enter Task ID to delete:"));
                deleteTask(idToDelete);
                break;
            case '4':
                const priorityToFilter = prompt("Enter priority to filter (high, medium, low):");
                filterByPriority(priorityToFilter);
                break;
            case '5':
                alert("Exiting application.");
                break;
            default:
                alert("Invalid option! Please try again.");
        }
    } while (option !== '5');
}

// Start the application
interactiveMenu();
