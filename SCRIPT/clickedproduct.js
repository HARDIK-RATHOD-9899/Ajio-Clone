
async function view(){
    let d = new URLSearchParams(window.location.search)
    let id = d.get("id")
   
     let data = await fetch(`https://mock-server-app-ss14.onrender.com/womendata/${id}`)
     let key = await data.json()
     document.getElementById("data").innerHTML = v(key)
     document.getElementById("btn").innerHTML = vv(key)
  }
  
  view()
  
  
  function vv(el)
  {
    return`
    <h3 style="text-align:center;">${el.brand}</h3>
           <h3 class="head">${el.product} </h3>
           <h3 class="head3"> ₹${el.price}</h3>
           <div class="dspricce">
           <span>MRP </span>
           <h5 class="head2">₹${el.strikedOffPrice} </h5>
           <span>(25% OFF)</span>
           </div>
           <button class="btn1"  onclick="post('${el.id}')">ADD TO CART</button>
          <h6>HANDPICKED STYLES | ASSURED QUALITY</h6>
          <button class="btn2" onclick="cart()">GO TO CART</button> 
          `
}
  
function cart()
{
  window.location.href="cart.html"
}
  
  function v(el){
          return `<div>
           <img src=${el.imageURL} alt=${el.title}/> 
          </div>`
     
  
  }
  
  // function post(el){
      
  //  fetch(`https://mock-server-app-ss14.onrender.com/mendata/${el}`)
  //   .then((res)=>{
  //     return res.json()
  //   })
  //   .then((res)=>{
  //     fetch("https://mock-server-app-ss14.onrender.com/cart",{
  //         method : 'POST',
  //         headers :{
  //             'Content-type' : 'application/json'
  //         },
  //         body : JSON.stringify(res)
  //     })
  //     .then((res)=>res.json())
  //     .then((res)=>{
  //         console.log(res)
  //     })
  //     .catch((er)=>{
  //         console.log(er)
  //     })
  //   })
  //   .catch((err)=>{
  //     console.log(err)
  //   })      
  // }

  async function post(el){
    let count = 0
    let d = await fetch(`https://mock-server-app-ss14.onrender.com/cart`)
    let s = await d.json()
    
    s.forEach(element => {
       if(element.id == el){
         count++
       }
    });
    // console.log(count)
  
    if(count>0){
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "error",
        title: "Product Is Alredy In Cart"
      });
    }else{
   fetch(`https://mock-server-app-ss14.onrender.com/womendata/${el}`)
    .then((res)=>{
      return res.json()
    })
    .then((res)=>{
      fetch("https://mock-server-app-ss14.onrender.com/cart",{
          method : 'POST',
          headers :{
              'Content-type' : 'application/json'
          },
          body : JSON.stringify(res)
      })
      .then((res)=>res.json())
      .then((res)=>{
          console.log(res)
      })
      .catch((er)=>{
          console.log(er)
      })
    })
  }
  }



  
// let s = {}
// async function post(el){

//  await fetch(`https://mock-server-app-ss14.onrender.com/mendata/${el}`)
//   .then(el=>el.json())
//   .then((el)=>{
//     s = el
//   }).catch((err)=>{
//     s = "error"
//   })

//   if(s == "error"){
//     alert("al")
//   }else{
//  fetch(`https://mock-server-app-ss14.onrender.com/cart/${el}`)
//   .then((res)=>{
//     return res.json()
//   })
//   .then((res)=>{
//     fetch("https://mock-server-app-ss14.onrender.com/cart",{
//         method : 'POST',
//         headers :{
//             'Content-type' : 'application/json'
//         },
//         body : JSON.stringify(res)
//     })
//     .then((res)=>res.json())
//     .then((res)=>{
//         console.log(res)
//     })
//     .catch((er)=>{
//         console.log(er)
//     })
//   })
// }
//   // console.log(obj)
// }