

let titleInput = document.querySelector('.titleInput');
let noteInput = document.querySelector('.noteInput');
let addNote = document.querySelector('.addNote');
let notes = document.querySelector('.notes');


addNote.addEventListener('click', ()=>{



    if(titleInput.value.length < 1 || noteInput.value.length < 1){
        let errorBox = document.querySelector('.errorBox')
        errorBox.style.display = 'block';

        setInterval(()=>{
            errorBox.style.display = 'none';
        },1000)
    }
    else{
        let note = document.createElement('div');
        note.setAttribute('class', 'note');
    
        let noteHeader = document.createElement('div');
        noteHeader.setAttribute('class', 'noteHeader');
    
        let noteTitle = document.createElement('p');
        noteTitle.setAttribute('class', 'noteTitle');
        noteTitle.textContent = titleInput.value[0].toUpperCase() + titleInput.value.slice(1);
    
        let noteBtns = document.createElement('div');
        noteBtns.setAttribute('class', 'noteBtns');
    
        let noteEdit = document.createElement('button');
        noteEdit.setAttribute('class','noteEdit');
        let editImg = document.createElement('img');
        editImg.setAttribute('src', 'Edit.png');
        noteEdit.append(editImg);
    
        let noteDelete = document.createElement('button');
        noteDelete.setAttribute('class','noteDelete');
        let deleteImg = document.createElement('img');
        deleteImg.setAttribute('src', 'Delete.png');
        noteDelete.append(deleteImg);
    
        noteBtns.append(noteEdit, noteDelete);
    
        noteHeader.append(noteTitle, noteBtns);
    
        let noteContent = document.createElement('textarea');
        noteContent.setAttribute('disabled','');
        noteContent.setAttribute('cols', '50');
        noteContent.setAttribute('rows', '20');
        noteContent.setAttribute('class', 'noteContent');
        noteContent.value = noteInput.value[0].toUpperCase() + noteInput.value.slice(1);
    
        let noteDate = document.createElement('p');
        noteDate.setAttribute('class', 'noteDate');
        noteDate.textContent = `${Date().split(' ')[1]}, ${Date().split(' ')[2]}, ${Date().split(' ')[3]}, ${Date().split(' ')[0]} ${Date().split(' ')[4]}`;
    
        note.append(noteHeader, noteContent, noteDate)
        notes.append(note);
        
        // Resetting input values
        titleInput.value = '';
        noteInput.value = '';

        
    }


    // Delete btn

    let allDelBtns = document.querySelectorAll('.noteDelete');

    allDelBtns.forEach((element)=>{
        element.addEventListener('click', ()=>{
            element.parentElement.parentElement.parentElement.remove();
        })
    })

    //

    let allEditBtns = document.querySelectorAll('.noteEdit');

    allEditBtns.forEach((element)=>{


        



        
        element.addEventListener('click', ()=>{
            let editBox = document.createElement('div');
            editBox.setAttribute('class', 'editBox');
            // editBox.style.position = 'relative';
            let editInput = document.createElement('input');
            editInput.setAttribute('class', 'editInput');

            let removeEditButton = document.createElement('button');
            removeEditButton.setAttribute('class', 'removeEditButton');

            let removeEditButtonImg = document.createElement('img');
            removeEditButtonImg.setAttribute('src', 'cross.png');

            removeEditButton.append(removeEditButtonImg);

            editInput.value = element.parentElement.parentElement.querySelector('.noteTitle').textContent;

            let editContent = document.createElement('textarea');
            editContent.setAttribute('cols', '30');
            editContent.setAttribute('rows', '10');
            editContent.setAttribute('class', 'editContent');

            editContent.value = element.parentElement.parentElement.parentElement.querySelector('.noteContent').value;

            let editDone = document.createElement('button');
            editDone.setAttribute('class', 'editDone');
            let doneImg = document.createElement('img');
            doneImg.setAttribute('class', 'doneImg');
            doneImg.setAttribute('src', 'Done.png');
            editDone.append(doneImg);
            editBox.append(removeEditButton,editInput, editContent, editDone);
            document.body.prepend(editBox);


            // OFF FOCUS CONTENT
            document.body.querySelector('.sideBar').setAttribute('style', 'filter: blur(5px);')
            document.body.querySelector('.notes').setAttribute('style', 'filter: blur(5px);')
            
            //POINTER EVENT CONTENTS
            document.querySelector('.noteEdit').setAttribute('disabled', '');
            document.querySelector('.noteDelete').setAttribute('disabled', '');


            //CURSOR DISABLE

            document.querySelector('.noteEdit').setAttribute('style', 'cursor: auto;');
            document.querySelector('.noteDelete').setAttribute('style', 'cursor: auto;');
            document.querySelector('.noteContent').setAttribute('style', 'cursor:auto;');
            
            //Sidebars
            document.querySelector('.title').setAttribute('style', 'cursor:default;');
            document.querySelector('.subTitle').setAttribute('style', 'cursor:default;');
            document.querySelector('.titleInput').setAttribute('style', 'cursor:default;');
            document.querySelector('.noteInput').setAttribute('style', 'cursor:default;');
            document.querySelector('.addNote').setAttribute('style', 'cursor:default;');
            document.querySelector('.addNote').setAttribute('disabled', '');

            //userselect disable

            // document.querySelector('.sideBar').setAttribute('onselectstart', 'return false');
            
            

            // onselectstart="return false;" ondragstart="return false;"
  
            
            
            document.querySelector('.removeEditButton').addEventListener('click', ()=>{
                editDone.parentElement.remove();                    document.querySelectorAll('.editBox').forEach((element)=>{
                        element.remove();
                    });
                    document.body.querySelector('.sideBar').setAttribute('style', 'filter: blur(0px);')
                    document.body.querySelector('.notes').setAttribute('style', 'filter: blur(0px);')
                    document.querySelector('.noteEdit').setAttribute('style', 'cursor: pointer;');
                    document.querySelector('.noteDelete').setAttribute('style', 'cursor: pointer;');
                    document.querySelector('.noteEdit').removeAttribute('disabled');
                    document.querySelector('.noteDelete').removeAttribute('disabled');
                    document.querySelector('.noteContent').setAttribute('style', 'cursor:default;');
                    //sidebar reset
                    document.querySelector('.title').setAttribute('style', 'cursor:auto;');
                    document.querySelector('.subTitle').setAttribute('style', 'cursor:auto;');
                    document.querySelector('.titleInput').setAttribute('style', 'cursor:auto;');
                    document.querySelector('.noteInput').setAttribute('style', 'cursor:auto;');
                    document.querySelector('.addNote').setAttribute('style', 'cursor:auto;');
                    document.querySelector('.addNote').removeAttribute('disabled');
            });

            
            
            editDone.addEventListener('click', ()=>{


                if(editInput.value.length < 1 || editContent.value.length < 1){
                    console.log(element);
                }
                else{
                    element.parentElement.parentElement.querySelector('.noteTitle').textContent = editInput.value;
                    
                    element.parentElement.parentElement.parentElement.querySelector('.noteContent').value = editContent.value;
    
                    editDone.parentElement.remove();
                    document.querySelectorAll('.editBox').forEach((element)=>{
                        element.remove();
                    })
                    
    
                    // Reset Attributes
                    document.body.querySelector('.sideBar').setAttribute('style', 'filter: blur(0px);')
                    document.body.querySelector('.notes').setAttribute('style', 'filter: blur(0px);')
    




                    document.querySelector('.noteEdit').setAttribute('style', 'cursor: pointer;');
                    document.querySelector('.noteDelete').setAttribute('style', 'cursor: pointer;');


                    document.querySelector('.noteEdit').removeAttribute('disabled');
                    
                    document.querySelector('.noteDelete').removeAttribute('disabled');
    
    
                    document.querySelector('.noteContent').setAttribute('style', 'cursor:default;');
    
    
                    //sidebar reset
                    document.querySelector('.title').setAttribute('style', 'cursor:auto;');
                    document.querySelector('.subTitle').setAttribute('style', 'cursor:auto;');
                    document.querySelector('.titleInput').setAttribute('style', 'cursor:auto;');
                    document.querySelector('.noteInput').setAttribute('style', 'cursor:auto;');
                    document.querySelector('.addNote').setAttribute('style', 'cursor:auto;');
                    document.querySelector('.addNote').removeAttribute('disabled');

                }



            })
            
            
        })
        
        

    
    })




});

