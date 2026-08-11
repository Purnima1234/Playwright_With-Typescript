let element:unknown={
    tagName:"Button",
    textContent:"Submit",
    id:"submit-Btn",
    disabled:false
}

interface elementI {
    tagName: string,
    textContent:string,
    id:String,
    disabled:boolean


};

let button= element as elementI;

console.log("Tag Name:", button.tagName);
console.log ("Text Content:", button.textContent);
