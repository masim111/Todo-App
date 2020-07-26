var ul= document.getElementById('ul')


function addBtn(){
    var input= document.getElementById('input')
    console.log(input.value)

    //create list

    var list=document.createElement('li')
    var listText=document.createTextNode(input.value)

    list.setAttribute('class','mb-3 pb-3 ')
    list.appendChild(listText)
    ul.append(list)
    input.value=""

    //dlt btn

    var dlt= document.createElement('button')
    var dltText=document.createTextNode('delete')
    dlt.setAttribute('class','float-right  keysBtn ')
    dlt.setAttribute('onclick','dltItem(this)')
    dlt.appendChild(dltText)
    list.append(dlt)

    //edit item

    var edit=document.createElement('button')
    var editText=document.createTextNode('Edit')
    edit.setAttribute('class','float-right mr-2  keysBtn ')

    edit.setAttribute('onclick','editBtn(this)')
    edit.appendChild(editText)
    list.append(edit)
    
    
}
function dltItem(e){
    e.parentNode.remove()

}
function dltAll(){
    ul.innerHTML=""

}
function editBtn(e){
   var value=e.parentNode.firstChild.nodeValue;
   var editVal=prompt('Edit Task Here',value)
   e.parentNode.firstChild.nodeValue=editVal
   

}
