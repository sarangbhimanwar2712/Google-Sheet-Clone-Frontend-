const  theadRow = document.getElementById("table-heading-row") ;
const tbody = document.getElementById("table-body");
let currentCell ;

//for adding heading row in sheet
for(let col= 65 ;col<=90 ;col++){
    let th =document.createElement("th");
    th.innerText= String.fromCharCode(col);
    theadRow.append(th) ;
}

//for 
for(let row= 1 ;row<=100 ;row++){
    let tr = document.createElement("tr");
    let th = document.createElement("th") ;
    th.innerText= row ;
    tr.appendChild(th) ;
    //Looping from A to Z
    for(let col=1 ;col<=26;col++){
        let td =document.createElement("td") ;
        td.setAttribute("contenteditable","true");

        //colRow --> A1 , B1 , C!...
        td.setAttribute("id",`${String.fromCharCode(col+64)}${row}`) ;

        td.addEventListener("focus",(event)=>onFocusFunction(event));
        tr.appendChild(td) ;
    }
    tbody.appendChild(tr) ;
}

function onFocusFunction(event){
    // console.log(event.target);
    currentCell =event.target ;
    document.getElementById("current-cell").innerText =currentCell.id ;
}