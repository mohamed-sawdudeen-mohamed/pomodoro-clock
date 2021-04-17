const arrEls = document.querySelectorAll('.arr');
const sesMintValEl = document.getElementById('ses-mint-val');
const sesSecValEl = document.getElementById('ses-sec-val');
const intMintValEl = document.getElementById('int-mint-val');
const intSecValEl = document.getElementById('int-sec-val');


const dataValueToElementMap ={
    'ses-mint-up' : sesMintValEl,
    'ses-mint-down' : sesMintValEl,
    'ses-sec-up' : sesSecValEl,
    'ses-sec-down' : sesSecValEl,
    'int-mint-up' : intMintValEl,
    'int-mint-down' : intMintValEl,
    'int-sec-up' : intSecValEl,
    'int-sec-down' : intSecValEl,

}




arrEls.forEach(arrEl =>{
    arrEl.addEventListener('click', ()=>{
        const dataValue = arrEl.getAttribute('data-value');
        console.log({dataValue});

        let newVal = '';
        const el = dataValueToElementMap[dataValue];
        if(dataValue.indexOf('-up') > -1){
            newVal = `${el.textContent === '59' ? '59' : parseInt(el.textContent) + 1}`
        } else if (dataValue.indexOf('-down') > -1){
            newVal = `${el.textContent === '00' ? '00' : parseInt(el.textContent) - 1}`
        }
        el.textContent = newVal.length === 1 ? `0${newVal}` : newVal;


        // let newVal = '';
        // switch (dataValue){
        //     case 'ses-mint-up' :
        //         newVal = `${parseInt(sesMintValEl.textContent) + 1}`
        //         sesMintValEl.textContent = newVal.length === 1 ? `0${newVal}` : newVal;
        //         break;
            
        //     case 'ses-mint-down' :
        //         newVal = `${parseInt(sesMintValEl.textContent) - 1}`
        //         sesMintValEl.textContent = newVal.length === 1 ? `0${newVal}` : newVal;
        //         break;

        //     case 'ses-sec-up' :
        //         newVal = `${parseInt(sesSecValEl.textContent) + 1}`
        //         sesSecValEl.textContent = newVal.length === 1 ? `0${newVal}` : newVal;
        //         break;
            
        //     case 'ses-sec-down' :
        //         newVal = `${parseInt(sesSecValEl.textContent) - 1}`
        //         sesSecValEl.textContent = newVal.length === 1 ? `0${newVal}` : newVal;
        //         break;

        //     case 'int-mint-up' :
        //         newVal = `${parseInt(intMintValEl.textContent) + 1}`
        //         intMintValEl.textContent = newVal.length === 1 ? `0${newVal}` : newVal;
        //         break;
            
        //     case 'int-mint-down' :
        //         newVal = `${parseInt(intMintValEl.textContent) - 1}`
        //         intMintValEl.textContent = newVal.length === 1 ? `0${newVal}` : newVal;
        //         break;

        //     case 'int-sec-up' :
        //         newVal = `${parseInt(intSecValEl.textContent) + 1}`
        //         intSecValEl.textContent = newVal.length === 1 ? `0${newVal}` : newVal;
        //         break;
            
        //     case 'int-sec-down' :
        //         newVal = `${parseInt(intSecValEl.textContent) - 1}`
        //         intSecValEl.textContent = newVal.length === 1 ? `0${newVal}` : newVal;
        //         break;
            
            
            
    
        // }


        // if(dataValue == 'ses-mint-up'){
        //     const newVal = `${parseInt(sesMintValEl.textContent) + 1}`
        //     sesMintValEl.textContent = newVal.length === 1 ? `0${newVal}` : newVal;
        // }

        // if(dataValue == 'ses-mint-down'){
        //     const newVal = `${parseInt(sesMintValEl.textContent) - 1}`
        //     sesMintValEl.textContent = newVal.length === 1 ? `0${newVal}` : newVal;
        // }

        // if(dataValue == 'ses-sec-up'){
        //     sesSecValEl.textContent = parseInt(sesSecValEl.textContent) + 1;
        // }

        // if(dataValue == 'ses-sec-down'){
        //     sesSecValEl.textContent = parseInt(sesSecValEl.textContent) - 1;
        // }

        


        
    })
})