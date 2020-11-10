
let users ;
window.onload = async function(){
   
        const myusers= await fetch(`
        https://jsonplaceholder.typicode.com/users`
        )

         users = await myusers.json()
        // console.log(users)

    //   console.log(users[0].name)
    
    // console.log(addressesAsArray(users))  
      
    // AscDes()
        
}
const NameList = function (){
    let namesList = []
    users.forEach(element => {
        namesList.push(element.name)
    });

  console.log(namesList)


    
}

const SearchFunction = function(){

    const myInput = document.getElementById("inputField")
    const mySelect = document.getElementById("select")
    
    
    const user = users.filter(e=> e[mySelect.value].includes(myInput.value))

    // console.log(user)



}

function addressAsString(address){
    delete address.geo
    return Object.values(address).join(" ") 
}

function addressesAsArray(users){
    return users.map((user)=>addressAsString(user.address))

   
}


function AscDes(){
    let asc = users.map((user)=> user.name).sort()
    console.log(asc)
    
    let des = asc.reverse()
    console.log(des)

        let myUl = document.getElementById("myUl")
        let myli= document.createElement("li");

    
    



        myUl.appendChild(myli)
}



    


   