// เริ่มเขียนโค้ดตรงนี้
async function getUsers (){
 let respons = await fetch(`https://jsonplaceholder.typicode.com/users`);
 let data = await respons.json();
 console.log(data);
 return data
}


getUsers()
.then(users =>{
    let name = users
    .filter(users => users.name.length > 17)
    .map(users => users.name);

    console.log(name);
})
