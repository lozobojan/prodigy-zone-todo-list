var taskCount = 0;
var tasks = [{}];

function saveTask(){
    let task = {
        "id": taskCount,
        "name": document.getElementById('taskName').value,
        "deadline": document.getElementById('taskDeadline').value,
        "priority": document.getElementById('taskPriority').value,
        "isChecked": false
    }

    tasks.push(task);

    let newRow = '<tr id="task'+taskCount+'">'
                        + '<td> <input type="checkbox" onchange="markTask('+taskCount+')"> </td>'
                        + '<td>'+ task.name + '</td>'
                        + '<td>'+ task.deadline +'</td>'
                        + '<td>'+ task.priority +'</td>'
                + '</tr>';

    taskCount++;

    document.getElementById('tasksTableBody').innerHTML += newRow;
    resetForm();
}

function resetForm(){
    let taskInputs = document.querySelectorAll('.task-input');
    taskInputs.forEach(function(input){
        input.value = '';
    });
}

function markTask(cnt){
    tasks.forEach(task => {
        if (task.id == cnt) {
            task.isChecked = !task.isChecked;
        }
    })
    document.getElementById('task'+cnt).classList.toggle('finished-task')
}