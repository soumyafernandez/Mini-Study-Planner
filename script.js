let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.textContent = task;

    let btn = document.createElement("button");
    btn.textContent = "❌";
    btn.style.marginLeft = "10px";
    btn.onclick = () => deleteTask(index);

    li.appendChild(btn);
    list.appendChild(li);
  });
}

function addTask() {
  let subject = document.getElementById("subject").value;
  let time = document.getElementById("time").value;

  if (!subject || !time) {
    alert("Please fill all fields");
    return;
  }

  tasks.push(subject + " at " + time);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  document.getElementById("subject").value = "";
  document.getElementById("time").value = "";

  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

renderTasks();
