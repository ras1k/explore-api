function loadUsers2(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(res => res.json())
    .then(data => displayUsers2(data))
}

function displayUsers2(data){
    const ul = document.getElementById('users-list');
    for (const user of data){
        // console.log(user.name);
       const li = document.createElement('li');
       li.innerText = user.name;
       console.log(li);
       ul.appendChild(li); 
    }
}