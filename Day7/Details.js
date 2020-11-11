let users ;
window.onload = async function(){
   
 let id = window.location.search.split("=")

 id=id[1]
 id=parseInt(id)
 
        const myusers= await fetch(`
        https://jsonplaceholder.typicode.com/users`
        )

         users = await myusers.json()
     let colum = document.querySelector(".col")

        let [user] = users.filter((e)=> e.id==id)
        

        console.log(user)
    
}