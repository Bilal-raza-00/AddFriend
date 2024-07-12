let istatus = document.querySelector("h2")
let addFriend = document.querySelector("#add")


let removeFriend = document.querySelector("#remove")


removeFriend.addEventListener("click", function(){
    istatus.innerHTML = "Sranger"
   
})



addFriend.addEventListener ("click", function(){
    console.log ("addFriend")
    istatus.innerHTML = "Friend"
})

