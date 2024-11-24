let addTakBtn = document.getElementById("addTask");
let titleInp = addTakBtn.previousElementSibling;
let srchCompeleteBtn = document.getElementById("srchComplete");
let srchPendingBtn = document.getElementById("srchPending");
let allNameBtn = document.getElementById("srchAll");
let msg = document.getElementById("msg");

let allUserData = [];

let getLoStData = localStorage.getItem("user")
if (getLoStData != null) {
    allUserData = JSON.parse(getLoStData)
}
console.log(allUserData);

addTakBtn.addEventListener("click", acceptData)

function acceptData() {
    let titleInpVal = titleInp.value;
    let objData = {
        id: uuidv4(),
        "title": titleInpVal,
        "status": false,
    }

    if (titleInpVal != "") {
        allUserData.push(objData)
        msg.innerHTML = ""
    }
    else {
        msg.innerHTML = "Title should not be blank"
    }

    savetoLoSt(allUserData)
    rediplayData(allUserData)
}

// this fun save acceptData to localstorage
function savetoLoSt(data) {
    localStorage.setItem("user", JSON.stringify(data))
}

// this fun display data
let rediplayData = (data) => {
    let tdData = "";
    for (let i = 0; i < data.length; i++) {
        let status = data[i].status;
        let title = data[i].title;
        let statusVal;
        let editButtonName;
        if (status == true) {
            statusVal = "Complete"
            editButtonName = "pending"
        }
        else {
            statusVal = "pending"
            editButtonName = "Compelete"
        }
        tdData += `<tr>
            <td>${title}</td>
            <td> ${statusVal}</td>
            <td> 
             <button  onclick="changeStatus(this ,'${i}')" id="editBtn">${editButtonName}</button>
             <button onclick="deleteData(${i} , this)" id="deleteBtn">delete</button>
            
            </td>
        </tr>`
    }
    document.getElementById("tableBody").innerHTML = tdData
    titleInp.value = ""

}

// this fun delete data
function deleteData(index, dbtn) {
    // let parent = dbtn.parentElement.parentElement
    // parent.remove()    
    // console.log(index);
    allUserData.splice(index, 1)
    savetoLoSt(allUserData)
    rediplayData(allUserData)

}

// this fun change task status on the basis of array index
function changeStatus(ebtn, i) {

    allUserData.filter((obj, ind) => {
        // console.log(ind);
        if (i == ind) {
            if (obj.status == true) {
                obj.status = false
            }
            else {
                obj.status = true;
            }
            savetoLoSt(allUserData)
            rediplayData(allUserData)
        }
    })
}

// this fun show data on the basis of search title name
function searchOnTitle() {
    let titleVal = document.getElementById("srchTitle").value.toUpperCase()
    // console.log(titleVal);
    let filteredTitle = allUserData.filter((obj) => {
        let objtitle = obj.title.toUpperCase()
        if (objtitle.includes(titleVal)) {
            return obj
        }
    });
    rediplayData(filteredTitle)
}

// this fun return value on de basis of complete search button
srchCompeleteBtn.addEventListener("click", () => {
    let filteredTrueStatus = allUserData.filter((obj) => {
        let stataus = obj.status
        if (stataus === true) {
            return obj
        }
    })
    rediplayData(filteredTrueStatus)
})

// this fun return data on the basis of pending search  button
srchPendingBtn.addEventListener("click", () => {
    let filteredFalseStatus = allUserData.filter((obj) => {
        let stataus = obj.status
        if (stataus === false) {
            return obj
        }
    })

    rediplayData(filteredFalseStatus)
})

// this fun retun data on the basis of all search button
allNameBtn.addEventListener("click", () => {
    let allObj = allUserData.map((obj) => {
        return obj
    })
    rediplayData(allObj)
})

// this fun crteate a unique id
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
        .replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
}
rediplayData(allUserData)
