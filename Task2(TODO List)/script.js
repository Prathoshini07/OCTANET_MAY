document.addEventListener("DOMContentLoaded", function() {
    const dueDateInput = document.getElementById('dueDate');
    const startTimeInput = document.getElementById('startTime');
    const endTimeInput = document.getElementById('endTime');
    const timeRequiredInput = document.getElementById('timeRequired');
    const today = new Date().toISOString().split('T')[0];
    dueDateInput.setAttribute('min', today);

    function calculateTimeRequired() {
        const startTime = startTimeInput.value;
        const endTime = endTimeInput.value;
        
        if (startTime && endTime) {
            const start = new Date(`1970-01-01T${startTime}:00`);
            const end = new Date(`1970-01-01T${endTime}:00`);
            const diff = (end - start) / 60000; // Difference in minutes

            if (diff > 0) {
                timeRequiredInput.value = diff;
            } else {
                timeRequiredInput.value = "";
            }
        }
    }

    function addTask() {
        const taskInput = document.getElementById('taskInput');
        const dueDate = dueDateInput.value;
        const startTime = startTimeInput.value;
        const endTime = endTimeInput.value;
        const timeRequired = timeRequiredInput.value;
        const priority = document.getElementById('priority').value;
        const category = document.getElementById('category').value;
        const taskList = document.getElementById('taskList');

        if (taskInput.value.trim() !== "" && dueDate && startTime && endTime && timeRequired) {
            const li = document.createElement('li');
            li.className = priority;
            li.innerHTML = `
                <span>${taskInput.value}</span>
                <span>Due: ${new Date(dueDate).toLocaleDateString()}</span>
                <span>Start: ${startTime}</span>
                <span>End: ${endTime}</span>
                <span>Time Required: ${timeRequired} mins</span>
                <span>Category: ${category}</span>
                <button onclick="markComplete(this)">Complete</button>
                <button onclick="deleteTask(this)">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = "";
            startTimeInput.value = "";
            endTimeInput.value = "";
            timeRequiredInput.value = "";
        }
    }

    window.calculateTimeRequired = calculateTimeRequired;
    window.addTask = addTask;

    window.markComplete = function(button) {
        const task = button.parentElement;
        task.classList.toggle('completed');
    }

    window.deleteTask = function(button) {
        const task = button.parentElement;
        task.remove();
    }
});
