var tasks = [
    
];

function saveTask(){
    let taskName = document.getElementById('taskName').value;
    let taskDeadline = document.getElementById('taskDeadline').value;
    let taskPriority = document.getElementById('taskPriority').value;

    tasks.push({
        name: taskName,
        deadline: taskDeadline,
        priority: taskPriority,
        isDone: false
    });

    displayTable();
    resetForm();
}

function resetForm(){
    let taskInputs = document.querySelectorAll('.task-input');
    taskInputs.forEach(function(input){
        input.value = '';
    });
}

function markTask(index){
    tasks[index].isDone = !(tasks[index].isDone);
    displayTable();
}

function attachListeners(){
    document.querySelectorAll('.finish-chk').forEach(function(chk){
        chk.addEventListener('change', function(e){
            markTask(e.target.value);
        });
    });
}

function displayTable(){
    let tableRows = "";
    tasks.forEach( (task, index) => {
        let checkedAttr = '';
        let finishedClass = '';
        if(task.isDone){
            checkedAttr = 'checked';
            finishedClass = 'finished-task';
        };

        let newRow = '<tr id="task'+index+'" class="'+finishedClass+'" >'
                        + '<td> <input type="checkbox" '+checkedAttr+' class="finish-chk" value="'+index+'"> </td>'
                        + '<td>'+ task.name + '</td>'
                        + '<td>'+ task.deadline +'</td>'
                        + '<td>'+ task.priority +'</td>'
                + '</tr>';
        tableRows += newRow;
    });
    document.getElementById("tasksTableBody").innerHTML = tableRows;
    attachListeners();
}

document.getElementById('saveBtn').addEventListener('click', (e) => {
    saveTask();
});
