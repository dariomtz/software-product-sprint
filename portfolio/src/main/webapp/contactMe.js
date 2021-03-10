document.addEventListener('DOMContentLoaded', renderMessages)

async function renderMessages(){
    let messages = await loadMessages();

    const container = document.getElementById('container');
    const ul = document.createElement('ul');
    ul.classList.add('list-group');

    for(let message of messages){
        ul.insertAdjacentHTML('beforeend', messageToHTML(message));
    }

    container.appendChild(ul);
}

async function loadMessages(){
    let request = await fetch('/list-contact-me');
    let list = await request.json();

    return list;
}

function messageToHTML({ email, message, timestamp}){
    let dateString = new Date(timestamp).toISOString();
    return `
    <li class="list-group-item p-3">
        <h5>${ email }</h5>
        <small class="text-disabled">${ dateString }</small>
        <p>${ message }</p>
    </li>
    `;
}
