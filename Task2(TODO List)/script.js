function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("taskList");

        var li = document.createElement("li");
        li.textContent = taskText;

        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = function() {
            li.remove();
        };
        li.appendChild(deleteBtn);

        var prioritySelect = document.createElement("select");
        prioritySelect.innerHTML = `
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        `;
        prioritySelect.addEventListener('change', function() {
            li.classList.remove('priority-low', 'priority-medium', 'priority-high');
            li.classList.add('priority-' + this.value);
        });
        li.appendChild(prioritySelect);

        var dueDateInput = document.createElement("input");
        dueDateInput.type = "date";
        dueDateInput.addEventListener('change', function() {
            li.setAttribute('data-due-date', this.value);
        });
        li.appendChild(dueDateInput);

        li.onclick = function() {
            li.classList.toggle("completed");
        };

        taskList.appendChild(li);

        input.value = "";
    }
}
