const myBtn=()=>{
    const inputItem=document.getElementById('inputItem')
    const inputAmount=document.getElementById('inputAmount')
    const inputItemValue=inputItem.value
    const inputAmountValue=inputAmount.value
    
    if(inputItemValue && inputAmountValue){
        localStorage.setItem(inputItemValue,inputAmountValue)
    }

    inputItem.value=''
    inputAmount.value=''
}