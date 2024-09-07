let tasks = [
    ["Work", ["Complete the report", "Email the team", "Call the client"]],
    ["Personal", ["Buy groceries", "Pick up the kids", "Do the laundry"]]
]
// Function to display tasks and their category
function displayCategorizedTasks(){
    tasks.forEach((category) => {
        console.log(`\t ${category[0]} Tasks:`);
        category[1].forEach((task, index) => {
            console.log(`\t\t ${index + 1}. ${task}`);
        })
    })
}

displayCategorizedTasks()