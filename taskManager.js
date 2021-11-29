showNotes();
showComTask()
let addBtn = document.getElementById('addbtn');
addBtn.addEventListener("click", function() {

    let addTxt = document.getElementById('addtxt');
    let addtitle = document.getElementById('addtitle');
    let textTime = document.getElementById('time');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        text: addTxt.value,
        title: addtitle.value,
        time: textTime.innerText
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));

    addTxt.value = "";
    addtitle.value = ""
    showNotes();


});

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
        html +=
            `
            <div class=" noteCard my-2 mx-2 card" style="width: 18rem;">
      
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.text}</p>
          <p class="card-text">${element.time}</p>

          <button id=${index} onclick=deleteNote(this.id) class="btn btn-primary">Complete Task</button>
        </div>
      </div>`;

    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerText = "NOTHING..."
    }
}

function showComTask() {
    let ctask = localStorage.getItem("completed");
    if (ctask == null) {
        ctaskObj = [];
    } else {
        ctaskObj = JSON.parse(ctask);
    }


    ctaskObj.reverse()
    if (ctaskObj.length > 10) {
        ctaskObj1 = ctaskObj.slice(0, 10)
        ctaskObj2 = ctaskObj.slice(10, ctaskObj.length)


        let html = "";
        let html1 = "";


        ctaskObj1.forEach(function(element, index) {
            html +=
                `
            <div class=" noteCard my-2 mx-2 card completetask" style="width: 18rem;">
      
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.text}</p>
          <p class="card-text">${element.time}</p>

          <button id=${index}onclick=deleteNote(this.id) class="btn btn-primary">Task Completed</button>
        </div>
      </div>`;


        });

        ctaskObj2.forEach(function(element, index) {
            html1 +=
                `
            <div class=" noteCard my-2 mx-2 card completetask" style="width: 18rem;">
      
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.text}</p>
          <p class="card-text">${element.time}</p>

          <button id=${index}  class="btn btn-primary">Task Completed</button>
        </div>
      </div>`;


        });
        console.log(ctaskObj2)

        let notesElm = document.getElementById("cTask");
        let ATask = document.getElementById("ATask");

        if (ctaskObj.length != 0) {
            notesElm.innerHTML = html;
            ATask.innerHTML = html1;

        } else {
            notesElm.innerText = "NOTHING..."
            ATask.innerText = "NOTHING..."
        }
    } else {

        let html = "";


        ctaskObj.forEach(function(element, index) {
            html +=
                `
            <div class=" noteCard my-2 mx-2 card completetask" style="width: 18rem;">
      
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.text}</p>
          <p class="card-text">${element.time}</p>

          <button id=${index}  class="btn btn-primary">Task Completed</button>
        </div>
      </div>`;

        });

        let notesElm = document.getElementById("cTask");

        if (ctaskObj.length != 0) {
            notesElm.innerHTML = html;

        } else {
            notesElm.innerText = "NOTHING..."
        }
    }
}

function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    notesObj = JSON.parse(notes);
    let com = localStorage.getItem("completed");
    if (com == null) {
        comObj = [];
    } else {
        comObj = JSON.parse(com);
    }
    comObj.push(notesObj[index]);
    localStorage.setItem("completed", JSON.stringify(comObj));

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));

    showNotes();
    showComTask()
}

let search = document.getElementById('searchtxt');
search.addEventListener("input", function() {
    let inputval = search.value;
    let noteCard = document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function(element) {
        let cardtxt = element.getElementsByTagName('p')[0].innerText;
        if (cardtxt.includes(inputval)) {
            element.style.display = 'block'
        } else {
            element.style.display = 'none'
        }
    });
});

function updateDate() {
    let newDate = new Date();
    time1 = newDate.toString();
    time.innerHTML = time1.slice(0, 24);
}
setInterval(updateDate, 1000)


let t1 = document.getElementById('t1');
let t2 = document.getElementById('t2');
let t3 = document.getElementById('t3');
let t4 = document.getElementById('t4');
let ts1 = document.getElementById('ts1');
let ts2 = document.getElementById('ts2');
let ts3 = document.getElementById('ts3');
let ts4 = document.getElementById('ts4');

t1.addEventListener('click', opent1 = () => {
    ts1.style.display = 'block'
    ts2.style.display = 'none'
    ts3.style.display = 'none'
    ts4.style.display = 'none'

});
t2.addEventListener('click', opent2 = () => {
    ts2.style.display = 'block'
    ts1.style.display = 'none'
    ts3.style.display = 'none'
    ts4.style.display = 'none'

});
t3.addEventListener('click', opent3 = () => {
    ts3.style.display = 'block'
    ts2.style.display = 'none'
    ts1.style.display = 'none'
    ts4.style.display = 'none'


});
t4.addEventListener('click', opent4 = () => {
    ts4.style.display = 'block';
    ts2.style.display = 'none';
    ts3.style.display = 'none';
    ts1.style.display = 'none';
});