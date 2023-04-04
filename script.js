var taskCount = 0;

function saveTask(){
    let taskName = document.getElementById('taskName').value;
    let taskDeadline = document.getElementById('taskDeadline').value;
    let taskPriority = document.getElementById('taskPriority').value;

    taskCount++;
    let newRow = '<tr id="task'+taskCount+'">'
                        + '<td> <input type="checkbox" onchange="markTask('+taskCount+')"> </td>'
                        + '<td>'+ taskName + '</td>'
                        + '<td>'+taskDeadline+'</td>'
                        + '<td>'+taskPriority+'</td>'
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