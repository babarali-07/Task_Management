let addTaskBtn = document.getElementById("addTask");
let titleInp = document.getElementById("titleInp");
let tbody = document.getElementById("tableBody");


let taskTitles = [];

let getDataLoStor = localStorage.getItem("titles");

if (getDataLoStor != null) {
    taskTitles = JSON.parse(getDataLoStor)
}
console.log(taskTitles);

addTaskBtn.addEventListener("click", () => {
    if (!titleInp.value == "") {
        taskTitles.push({
            id: uuidv4(),
            "status": false,
            "title": titleInp.value
        });
    }
    saveLocalSto(taskTitles);


})
displayData()
function saveLocalSto(data) {
    localStorage.setItem("titles", JSON.stringify(data))
    displayData()


}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
        .replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
}

console.log("this is testing commit")
function displayData() {
    let tdData = ""
    taskTitles.forEach((obj, i) => {
        let statusVal;
        let status = obj.status;

        if (status === true) {
            statusVal = "Compelete"
        }
        else {
            statusVal = "pending"
        }
        tdData += ` <tr>
 <td>${i + 1}</td>
                <td>${obj.title}</td>
                    <td id="statusTd">${statusVal}</td>
                    <td>
                        <button style="background-color: deepskyblue;" onClick="changeStatus('${obj.id}')" id="editButton">Compelete</button>
                        <button style="background-color: rgb(245, 27, 27);" onClick="deleteData(${i})" id="deleteButton">Delete</button>
                    </td>
                </tr>`
    })
    tbody.innerHTML = tdData
    titleInp.value = ""
}
// this fun delete data
function deleteData(index) {


    alert("You want to delete this item")
    taskTitles.splice(index, 1)
    saveLocalSto(taskTitles);

}
// this fun change status


function changeStatus(id) {
    taskTitles.filter((obj) => {
        let userId = obj.id

        if (id === userId) {

            if (obj.status != true) {
                alert("you want to compelete task")
            }
            else {
                alert("Task Compelete")
            }
            obj.status = true;
            saveLocalSto(taskTitles);
        }
    })


}