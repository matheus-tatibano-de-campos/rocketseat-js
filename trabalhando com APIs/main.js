const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
    .then(response => {
       apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUser(newUser){
    axios.post(url, newUser)
    .then(response =>{
        console.log(response)
    })
    .catch(error => console.error(error))
}

function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(response => {
        userName.textContent = response.data.name
        userCity.textContent = response.data.city
        userId.textContent = response.data.id
        userAvatar.src = response.data.avatar
    })
    .catch(error => console.error(error))
}

function updateUser(id, userUpdated) {
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error =>console.error(error))
}

function deleteUser(id){
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(eror => console.error(error))
}
deleteUser(2)
getUsers()
getUser(1)

const NewUser =  {
    name: "Olivia Zars",
    avatar:"http://picsum.photos/200/300",
    city: "Rio de Janeiro"
}
const userUpdated = {
    name: "marcelo calvis",
    avatar:"https://picsum.photos/200/300",
    city:"recife"
}
//addNewUser(newUser)
//updateUser(3, userUpdated)