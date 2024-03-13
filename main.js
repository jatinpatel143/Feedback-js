let from =document.querySelector("form")
let select =document.querySelector("#feedback")
let input = document.querySelector("#input")
let ul =document.querySelector("ul")
// console.log(ul);

function feedback (e){
  e.preventDefault();

  let li = document.createElement("li")
  let h1 =document.createElement ("h1")
  let h2 =document.createElement ("h2")
  // console.log(h2);
  li.className ="list-group-item rounded-0 shadow-sm mt-3"
   
  h1.innerText ="rating; " + "   "  +select.value
  h2.innerText = "fedback;" + "   " + input.value

  h1.className ="display-4"
  h2.className ="display-6 text -secoundry"

  

  let dltbtn =document.createElement('button')
  dltbtn.className="btn btn-danger float-end  rounded-0 "
  dltbtn.innerText ="Delete"
  li.appendChild(dltbtn)

  li.appendChild(h1)
  li.appendChild(h2)
  ul.appendChild(li)

  from.reset();
}

from.addEventListener("submit",feedback)

function del (e){
  if (e.target.className.includes ("btn-danger")) {
    let li = e.target.parentElement

    if (window.confirm  ("are you sure ")){

      ul.removeChild(li)
    }
  }
  
}

ul.addEventListener("click",del)