let formWrapper = document.getElementById("form-wrapper")
let form = document.getElementById("form")
let input = document.getElementById("input")
let buttonWrapper = document.getElementById("button-wrapper")
let searchButton = document.getElementById("search-button")
let clearButton = document.getElementById("clear-button")
let imgWrapper = document.getElementById("img-wrapper")

runEvent()
function runEvent() {
    form.addEventListener("submit", search)
    clearButton.addEventListener("click" ,clear)
}

function clear(){
    input.value="";
    Array.from(imgWrapper.children).forEach((child) =>{
        child.remove()
    })
}
function search(e) {
  
    let value = input.value.trim();

    fetch(`https://api.unsplash.com/search/photos?page=1&query=${value}&per_page=20`,
        {
            method: "GET",
            headers: {
                Authorization: "Client-ID LiHvB21GqYh3peHhl6jDx2bphx70OFO29Gik1zSvbnM"
            }
        })
        .then((response) => response.json())
        .then((data) => {
              data.results.forEach((img) => {
                addImgToUI(img.urls.small)
              });
          
        })

        .catch((err) => console.log(err))

        e.preventDefault();
}

function addImgToUI(url){
  let div = document.createElement("div");
  div.id="card";

  let img = document.createElement("img")
  img.setAttribute("src" ,url);
  img.height ="300";
  img.width ="300";

  div.append(img);
  imgWrapper.append(div)
//     <div id="img-wrapper">
//     <!-- <div id="card">
//         <img src="" alt="">
//     </div> -->
// </div>
}


