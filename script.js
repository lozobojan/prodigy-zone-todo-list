var taskCount = 0;
var tasks = [{}];

function saveTask(){
    let task = {
        "name": document.getElementById('taskName').value,
        "deadline": document.getElementById('taskDeadline').value,
        "priority": document.getElementById('taskPriority').value
    }

    tasks.push(task);
    taskCount++;

    let newRow = '<tr id="task'+taskCount+'">'
                        + '<td> <input type="checkbox" onchange="markTask('+taskCount+')"> </td>'
                        + '<td>'+ task.name + '</td>'
                        + '<td>'+ task.deadline +'</td>'
                        + '<td>'+ task.priority +'</td>'
                + '</tr>';

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
    document.getElementById('task'+cnt).classList.toggle('finished-task')
}