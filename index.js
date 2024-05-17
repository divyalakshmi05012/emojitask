async function display(){
    try{
    let res=await fetch("https://emojihub.yurace.pro/api/all")
    let data=await res.json()
    console.log(data)
    if(data){
        let root=document.getElementById("root")
        data.forEach((e)=>{
            let div=document.createElement("div")
            div.innerHTML=`
            <div class="card" style="width: 18rem;">
                <div class="emoj">Emoji</div>
                <div class="emoji">${e.htmlCode}</div>
                <div class="emoji-name">Name:${e.name}</div>
                <div class="cata">Catagory:${e.category}</div>
                <div class="cata">Group:${e.group}</div>
                <div class="cata">Unicode:${e.unicode}</div>
              </div>`
            root.appendChild(div)
        })
    }
    else{
        console.log("No Data Found")
    }
    }
    catch(error)
    {
        console.log(error)
    }
}
display()