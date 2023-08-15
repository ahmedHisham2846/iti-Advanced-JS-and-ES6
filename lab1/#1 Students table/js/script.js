var studentNumber = 1;

function getStudent(_name, _age) {
  return { name: _name, age: _age, id: studentNumber++ };
}

function Student(_name, _age) {
  this.name = _name;
  this.age = _age;
  this.id = studentNumber++;
}

function addStudent() {
  var studentName = document.getElementById("txtStudentName").value;
  var studentAge = parseInt(document.getElementById("txtStudentAge").value);
  if (studentName.length < 3) {
    document.querySelectorAll(".error")[0].style.display = "block";
    return;
  }
  if (studentAge < 18 || isNaN(studentAge)) {
    document.querySelectorAll(".error")[1].style.display = "block";
    return;
  }



  // var student = getStudent(studentName, studentAge);
  var student = new Student(studentName, studentAge);
  
  
  
  var studentCells = getStudentCells(student);
  var newTableRow = getNewTableRow(studentCells);
  document.querySelector("tbody").appendChild(newTableRow);
}

function deleteStudent(sender) {
  sender.parentElement.parentElement.remove();
}

function getDeletButtonCell() {
  var tableCell = document.createElement("td");
  tableCell.className = "action";
  var btnDelete = document.createElement("button");
  btnDelete.append("Delete");
  btnDelete.className = "btn-delete";
  btnDelete.setAttribute("onclick", "deleteStudent(this)");
  tableCell.appendChild(btnDelete);
  return tableCell;
}

function getNewTableRow(studentCells) {
  var newTableRow = document.createElement("tr");
  newTableRow.appendChild(studentCells.studentId);
  newTableRow.appendChild(studentCells.studentName);
  newTableRow.appendChild(studentCells.studentAge);
  newTableRow.appendChild(getDeletButtonCell());
  return newTableRow;
}

function getStudentCells(studentObject) {
  var studentIdCell = document.createElement("td");
  studentIdCell.append(studentObject.id);
  var studentNameCell = document.createElement("td");
  studentNameCell.append(studentObject.name);
  var studentAgeCell = document.createElement("td");
  studentAgeCell.append(studentObject.age);
  return {
    studentId: studentIdCell,
    studentName: studentNameCell,
    studentAge: studentAgeCell,
  };
}
