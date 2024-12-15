

//////////////--main is in the lower portion




const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("write something");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click",function(e){
    // if(e.target.tagName === "LI"){
    //     e.target.classList.toggle("checked");
    //     if (e.target.classList.contains("checked")) {
    //         setTimeout(() => {
    //             e.target.remove();
    //             saveData();
    //         }, 1000); 
            
    //     }
        
//         saveData();

//     }
//     else if(e.target.tagName === 'SPAN'){
//         e.target.parentElement.remove();
//         saveData();
//     }

// },false);

if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    if (e.target.classList.contains("checked")) {
        // Add fade-out animation, then remove the element
        setTimeout(() => {
            e.target.classList.add("fade-out");
            setTimeout(() => {
                e.target.remove();
                saveData();
            }, 500); // Wait for fade-out animation to finish
        }, 1000); // Wait before starting fade-out animation
    }
} else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.classList.add("fade-out");
    setTimeout(() => {
        e.target.parentElement.remove();
        saveData();
    }, 500); // Wait for fade-out animation to finish
}
});
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
  function showTask()  {
    listContainer.innerHTML = localStorage.getItem("data");

}
showTask();
const { app, BrowserWindow, dialog } = require('electron');
///////////////////////// ---------start to pin////////////////////
