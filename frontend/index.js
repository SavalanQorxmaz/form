

url = 'https://jsonplaceholder.typicode.com/users'
url2 = 'http://127.0.0.1:8000/'



// const getData =(e)=>{
//     fetch(url2,{
//         method: 'GET',
//         headers: {
//             // 'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD',
//             "Content-Type": "application/json",
//             'Access-Control-Allow-Origin': '*',
//             'Access-Control-Allow-Credentials': true
//         }
        
//     })
//     .then(res=>res.json())
//     .then(res=>res.data)
//     .then(res=>{
//         console.log(res)
//         data = []
//         for (const x of res){
//             data.push(JSON.stringify(x))
//         }
        
//         document.getElementById('data').innerHTML = data
//     })

// }


form = document.querySelector('#register')
const register = async (e) => {
    e.preventDefault();
    user = form.children[0].children[1]
    password = form.children[1].children[1]
    console.log(form.children[2])

    if(!user.value.length  || !password.value.length){
        form.children[2].innerHTML = 'Fill'
    }
    else {
         fetch(url2,{
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD',
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    
                },
                
                body: JSON.stringify({user: user.value, password: password.value}),
                
            })
            .then(res=>res.json())
            .then(res=>res.data)
            .then(res=>{
                console.log(res)
                // data = []
                // for (const x of res){
                //     data.push(JSON.stringify(x))
                // }
                
                // document.getElementById('data').innerHTML = data
            })
        
    
    }
    

   
}

form.addEventListener('submit', register)


