//Helper function to create an li
const createUser = (data) => {
    let li = document.createElement('li')
    li.textContent = `${data}`
    document.body.appendChild(li)
}

const submitData = (userName, userEmail) => {
    return fetch('http://localhost:3000/users', {
        method:'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify({
            'name': userName,
            'email': userEmail
        })
    })
    .then(res => res.json())
    .then(data => {createUser(data.id)})
    .catch(error => document.body.innerHTML = error)
}

submitData();