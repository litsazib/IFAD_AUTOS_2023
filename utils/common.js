export const isEmpty = (value)=>{
    if(value.length===0){
        return true;
    }
    else {
        return false
    }
}

export const isPdfFile = (fileUrl) => {
    var ext = fileUrl?.substring(fileUrl.lastIndexOf('.') + 1);
    if(ext == "pdf")
    {
        return true;
    } 
    else{
        return false;
    }
}

export const linkBreak = (txt,splitChar="[BR]")=>{
    return txt?.split(splitChar).map(function (text, index) {
        return <p key={index}>{ text }</p>; 
    });
}

