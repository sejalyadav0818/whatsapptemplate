const uploadCsvForBulkMsg = document.getElementById('uploadCsvForBulkMsg');
// document.getElementById("hideANdShowCategorySEction").style.display='none';
// document.getElementById("phoneNumInputField").style.display='none';


toggleCsvFileINput = () => {
    const selectFileOption = document.getElementById('selectFileOption');
    const uploadCsvForBulkMsg = document.getElementById('uploadCsvForBulkMsg');
    if (selectFileOption.checked) {
        uploadCsvForBulkMsg.style.display = 'block';
        phoneNumInputField.style.display = 'none';
        document.getElementById("hideANdShowCategorySEction").style.display='none';

    }
}
toggleCommaSeparatedInputField = () => {
    const commaSeparatedNumbersLikeArray = document.getElementById('commaSeparatedNumbersLikeArray');
    const phoneNumInputField = document.getElementById('phoneNumInputField');
    if (commaSeparatedNumbersLikeArray.checked) {
        phoneNumInputField.style.display = 'block'
        uploadCsvForBulkMsg.style.display = 'none'
        document.getElementById("hideANdShowCategorySEction").style.display='none';

    }
}
toggleSelectCategoryInputfield=()=>{
    const checkbox = document.getElementById("checkSElectCAtegory");
    if(checkbox.checked){
        document.getElementById("hideANdShowCategorySEction").style.display='block';
        document.getElementById('uploadCsvForBulkMsg').style.display='none';

    }
}