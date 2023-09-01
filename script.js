const form = document.getElementById("form");
const searchBox = document.getElementById("input");
const images = document.getElementById("images");
const show = document.getElementById("show-more");

var keyword = "";
var page = 1;

async function search(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=Qnq2mWwWwF1O_2Z0TOOuPYAVEddpE8sNTAwfirL47mA&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();

    if(page == 1){
        images.innerHTML = "";
    }
    const results = data.results;

    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imgLink = document.createElement("a");
        imgLink.href = result.links.html;
        imgLink.target = "_blank";
        imgLink.appendChild(image);
        images.appendChild(imgLink);
    })
    show.style.display = "block";
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    page = 1;
    search();
})

show.addEventListener("click", ()=>{
    page++;
    search();
})