
let i = 2

function addActivity(){

    let table = document.getElementById('activityTable');

    let newRow = document.createElement('tr');

    /* First cell */
    let firstCell = document.createElement('td');
    firstCell.textContent = 'Activity '+i;
    newRow.appendChild(firstCell);

    /* Second cell */
    let secondCell = document.createElement('td');
    secondCell.textContent = 'A'+i;
    newRow.appendChild(secondCell);

    /* Third cell */
    let thirdCell = document.createElement('td');
    let thirdCellInput = document.createElement('input');
    thirdCellInput.id = 'weight'+i;
    thirdCellInput.type = 'number';
    thirdCellInput.min = '0';
    thirdCellInput.max = '100';

    thirdCellInput.classList.add('weight');

    thirdCell.appendChild(thirdCellInput);
    newRow.appendChild(thirdCell);



    /* Fourth cell */
    let fourthCell = document.createElement('td');
    let fourthCellInputOne = document.createElement('input');
    let fourthCellInputTwo = document.createElement('input');
    fourthCellInputOne.id = 'gradeReceived'+i;
    fourthCellInputTwo.id = 'gradeTotal'+i;
    fourthCellInputOne.type = 'number';
    fourthCellInputTwo.type = 'number';
    
    fourthCellInputOne.classList.add('gradeReceived');
    fourthCellInputTwo.classList.add('gradeTotal');

    fourthCell.appendChild(fourthCellInputOne);
    fourthCell.appendChild(document.createTextNode(' / '));
    fourthCell.appendChild(fourthCellInputTwo);
    newRow.appendChild(fourthCell);

    
    let fifthCell = document.createElement('td');
    let fifthCellPercent = document.createElement('p');
    fifthCellPercent.id = 'percentage'+i;
    fifthCellPercent.textContent = "N/A";
    fifthCell.appendChild(fifthCellPercent);
    newRow.appendChild(fifthCell);
    
    table.appendChild(newRow);

    addEventListener(i);

    i++

}

function addEventListener(i){
    var current = i;
    console.log("functionCalled current is:" +current);
    var input = document.getElementById('gradeReceived'+current);
    var input2 = document.getElementById('gradeTotal'+current);
    input.addEventListener('input',function(){
        updatePercent(current);
    });
    input2.addEventListener('input',function(){
        updatePercent(current);
    });
    

}

document.addEventListener('DOMContentLoaded', function(){
    
    var imm = document.getElementById('gradeReceived1');
    var imm2 = document.getElementById('gradeTotal1');
    
    imm.addEventListener('input',function(){
        updatePercent(1);
    });
    imm2.addEventListener('input',function(){
        updatePercent(1);
    });
})


function updatePercent(current){
    console.log("inside updatePercent, current is "+current);
    var perc = document.getElementById("percentage"+current);
    
    var w1 = document.getElementById("gradeReceived"+current);
    var w2 = document.getElementById("gradeTotal"+current);

    if((w2.value != 0)){

        var percentage = (w1.value / w2.value) *100;
        perc.textContent = percentage.toFixed(2) + "%";
    }else{
        perc.textContent = "N/A";
    }

}


function weighted() {
    var result=0;
    var sumR=0
    var pResult = document.getElementById("results");
    var sumWeight=0
    for(var j=1;j<i;j++){
        
        var mReceive= document.getElementById("gradeReceived"+j);
        var mTotal= document.getElementById("gradeTotal"+j);
        var mWeight= document.getElementById("weight"+j);

        if(mReceive.value == "" || mTotal.value == "" || mWeight.value == "" || mTotal.value == 0){
            console.log("Error detected");
            pResult.textContent = ("ERROR");
            return;
        }

        sumWeight = sumWeight + parseFloat(mWeight.value);


        sumR = sumR + ((parseFloat(mReceive.value)/parseFloat(mTotal.value)) * parseFloat(mWeight.value));
        
    }


    result = sumR/sumWeight;
    
    
    pResult.textContent = (result.toFixed(4))*100+"%";
}

function mean() {
    
    var result=0;
    var sumR=0
    var pResult = document.getElementById("results");
    for(var j=1;j<i;j++){
        
        
        var mReceive= document.getElementById("gradeReceived"+j);
        var mTotal= document.getElementById("gradeTotal"+j);

        if(mReceive.value == "" || mTotal.value == "" || mTotal.value == 0){
            console.log("Error detected");
            pResult.textContent = ("ERROR");
            return;
        }

        sumR = sumR + (mReceive.value/mTotal.value);
        
        
    }
    result = (sumR/(i-1))*100;
    
    pResult.textContent = result.toFixed(2)+"%";
}


