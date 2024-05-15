const root=document.getElementById("root")
const roott=document.getElementById("div1")
const url="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png"
setTimeout(()=>{
root.textContent=10
setTimeout(()=>{
    root.textContent=9
    setTimeout(()=>{
        root.textContent=8
        setTimeout(()=>{
            root.textContent=7
            setTimeout(()=>{
                root.textContent=6
                setTimeout(()=>{
                    root.textContent=5
                    setTimeout(()=>{
                        root.textContent=4
                        setTimeout(()=>{
                            root.textContent=3
                            setTimeout(()=>{
                                root.textContent=2
                                setTimeout(()=>{
                                    root.textContent=1
                                    setTimeout(()=>{
                                      roott.innerHTML="<h1>Happy Independence Day</h1>"
                                      const image=document.createElement("img")
                                      image.setAttribute("alt","flag")
                                      image.setAttribute("src",url)
                                      roott.appendChild(image)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
},1000)