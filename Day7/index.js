window.onload = function(){
    const loadUsers =  function(){

        const myusers=  fetch(`
        https://jsonplaceholder.typicode.com/users`
        )

        .then((response) => response )
        .then((body)=>{
            console.log(body)
        })
}

}


   