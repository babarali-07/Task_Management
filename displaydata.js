// this fun display data on screen
// function dispalyData() {


//     let tdData = "";
//     for (let i = 0; i < allUserData.length; i++) {
//         // let id = allUserData[i].id;
//         let status = allUserData[i].status;
//         let title = allUserData[i].title;
//         let statusVal;
//         let editButtonName;
//         if (status == true) {
//             statusVal = "Complete"
//             editButtonName = "pending"
//         }
//         else {
//             statusVal = "pending"
//             editButtonName = "Compelete"
//         }
//         tdData += `  <tr>
//                 <td>${i + 1}</td>
//                 <td>${title}</td>
//                 <td> ${statusVal}</td>
//                 <td> 
//                  <button  onclick="changeStatus(this ,'${i}')" id="editBtn">${editButtonName}</button>
//                  <button onclick="deleteData(${i} , this)" id="deleteBtn">delete</button>

//                 </td>
//             </tr>`
//     }

//     document.getElementById("tableBody").innerHTML = tdData
//     titleInp.value = ""

// }
// dispalyData() 