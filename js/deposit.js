function getInputFieldValueById(inputid){
    const inputField = document.getElementById(inputid);
    const inputFieldString=inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    inputField.value ='';

    return inputFieldValue;
}

// ekn amra text valur jonno function likhbo 

function getElemetById(elementId){
    const element =document.getElementById(elementId);
    const elementValueString =element.innerText;
    const value = parseFloat(elementValueString);
    element.innerText='';
    return value;
}

// ei function er kaj hocche text elelment er mantake ber kore 
// seitar innertext ki ache ber kore boshai dea 

function setTextElementValueById(elementId,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}


document.getElementById('btn-deposit').addEventListener('click',function(){
    
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositTotal = getElemetById('deposit-total');
    const newDepositTotal = previousDepositTotal+newDepositAmount;
     setTextElementValueById('deposit-total',newDepositTotal);



    //  balance 
    const previousBalanceTotal= getElemetById('balance-totoal');
    const newBalanceTotal = previousBalanceTotal+newDepositTotal;

    setTextElementValueById('balance-total',newBalanceTotal);


})