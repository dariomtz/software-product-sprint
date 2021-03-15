renderMessages();

async function renderMessages(){
    let messages = await loadMessages();

    const ul = document.getElementById('listMessages');

    for(let message of messages){
        ul.insertAdjacentHTML('beforeend', messageToHTML(message));
    }
}

async function loadMessages(){
    let request = await fetch('/list-contact-me');
    let list = await request.json();

    return list;
}

function messageToHTML({ id, email, message, timestamp}){
    let dateString = new Date(timestamp).toDateString();
    return `
    <li id="li-${ id }" class="list-group-item p-3 d-flex justify-content-between">
        <div class="d-block">
            <h5>${ email }</h5>
            <small class="text-disabled">${ dateString }</small>
            <p>${ message }</p>
        </div>
        <div class="d-block">
            <button onclick="confirmDelete(${ id }, '${ email }')" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#confirmDeleteModal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>
        </div>
    </li>
    `;
}

function confirmDelete(id, email){
    let span = document.getElementById('emailModal');
    span.innerText = email;

    let btn = document.getElementById('btnDelelte');
    btn.setAttribute('onclick', `deleteMessage(${ id })`);
}

async function deleteMessage(id){
    let response = await fetch(`/contact-me?id=${ id }`, {
        method: 'DELETE'
    });

    if(response.ok){
        deleteSuccessful(id);
    }else{
        throw Error(`Not able to delete ${ id } due to an error in the http request`);
    }
}

function deleteSuccessful(id){
    let li = document.getElementById(`li-${ id }`);
    li.remove();

    let div = document.getElementById('alerts');
    div.innerHTML = `
    <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Message deleted</strong> Everything went fine.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `
}
