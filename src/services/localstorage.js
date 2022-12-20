export default function getListColaborator(){
    if(!localStorage["@colaborators"]){
        localStorage["@colaborators"] = JSON.stringify([])
    }
    let colaborators = JSON.parse(localStorage["@colaborators"])
}