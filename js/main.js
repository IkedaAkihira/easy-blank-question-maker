const question=document.getElementById("question"),
blankLen=document.getElementById("blankLen"),
output=document.getElementById("output");


function getBlankedText(baseText,start,end,blankLen){
    let blank="_".repeat(blankLen||end-start);
    return baseText.substr(0,start)+blank+baseText.substr(end,baseText.length-end);
}

function addQuestion(){
    //console.log(question.value,question.selectionStart,question.selectionEnd,parseInt(blankLen.value));
    output.value+=((output.value.length)?"\n":"")+getBlankedText(question.value,question.selectionStart,question.selectionEnd,parseInt(blankLen.value))+"\t"+question.value.substr(question.selectionStart,question.selectionEnd-question.selectionStart);
}

function copyToClipboard(){
    output.select();
    document.execCommand("Copy");
}

onkeydown=(e)=>{
    if(e.key=="Enter")
        addQuestion();
}