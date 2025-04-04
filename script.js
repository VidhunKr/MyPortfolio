
// --------TabLinks-------
let tablinks=document.getElementsByClassName("tab-links")
let tabcontents=document.getElementsByClassName("tab-contents")
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

// ------SideMenu------

let sidemenu=document.getElementById("sidemenu")
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}
// -------GoogleSheet---------
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyDhcuQdjCGQnarOVDYO_uyon7NZ5tzjq5fC4SLWWT1V-uk6UJpvk8uVOltnsCwlRh1/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(Response =>{
        msg.innerHTML="Message Send Successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      }
      )    
      .catch(error => console.error('Error!', error.message))
  })

//   --------TopButton-----
let calcScrollValue = () => {
    let scrollprogress = document.getElementById("progress");
    
    if (!scrollprogress) return; // Prevent errors if the element is missing
    
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if (pos > 100) {
        scrollprogress.style.display = "grid";
    } else {
        scrollprogress.style.display = "none";
    }

    scrollprogress.style.background = `conic-gradient(rgba(0, 0, 0, 0.48) ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

// Attach scroll event
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// Add event listener only once
document.addEventListener("DOMContentLoaded", () => {
    let scrollprogress = document.getElementById("progress");
    if (scrollprogress) {
        scrollprogress.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});

