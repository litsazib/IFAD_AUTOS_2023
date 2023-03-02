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

export const youtube_parser = (url)=>{
    try {        
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match&&match[7].length==11)? match[7] : "qqBW78xdjyo";
    } catch (error) {
        console.log(error)
    }
}

