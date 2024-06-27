let arr = [];
let ary = [];
async function view() {
  let data = await fetch("https://mock-server-app-ss14.onrender.com/cart");
  let dee = await data.json();
  document.getElementById("data").innerHTML = v(dee);
  document.getElementById("btns").innerHTML = btns();
  ary = dee
}

view();

let cart = 0;
let total = 0;
let disscount = 0;
let maintotal;

function btns() {
  return `<a href="#" class="btn btn-success w-100 shadow-0 mb-2"> Make Purchase </a>
              <a href="#" class="btn btn-light w-100 border mt-2" onclick="del()"> Back to shop </a>`;
}

function v(elem) {
  return elem
    .map((el) => {
      total += +el.price;

      document.getElementById("maintotal").innerText = "₹" + total;
      disscount = 0.1 * total;
      document.getElementById("dissco").innerText = "₹" + Math.round(disscount);
      maintotal = total - disscount;
      document.getElementById("total").innerText = "₹" + Math.round(maintotal);
      // document.getElementById("line").innerText = `You will save ₹${Math.round(disscount)} on this order`

      let dis = Math.floor(
        ((el.strikedOffPrice - el.price) / el.strikedOffPrice) * 100
      );

      return `
           <div class="row gy-3 mb-4">
<div class="col-lg-5">
  <div class="me-lg-5">
    <div class="d-flex">
      <img src=${el.imageURL} alt=${el.title} class="border rounded me-3" style="width: 96px; height: 96px;" />
      <div class="">
        <a href="#" class="nav-link">${el.product}</a>
        <p class="text-muted">${el.brand}</p>
      </div>
    </div>
  </div>
</div>
<div class="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
  <div class="">
    <select style="width: 100px;" class="form-select me-4">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </select>
  </div>
  <div class="">
    <text class="h6">₹${el.price}</text> <br />
    <small class="text-muted text-nowrap" style="text-decoration:line-through;">₹${el.strikedOffPrice} </small>
  </div>
</div>
<div class="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
  <div class="float-md-end">
    <a href="#!" class="btn btn-light border px-2 icon-hover-primary"><i class="fas fa-heart fa-lg px-1 text-secondary"></i></a>
    <a href="#" class="btn btn-light border text-danger icon-hover-danger" onclick="del(${el.id})"> Remove</a>
  </div>
</div>
</div>`;
    })
    .join("");
}

function del(el) {
  ary.forEach((el) => {
    fetch(`https://mock-server-app-ss14.onrender.com/cart/${el.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        ary = [];
        document.getElementById("data").innerHTML = v(ary);
      })
      .catch((er) => {
        console.log(er);
      });
  });


  const Toast = Swal.mixin({
    toast: true,
    position: "top-center",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "success",
    title: "Thank You For Shopping"
  });
  setTimeout(()=>{
    window.location.href="index.html"
},2000)
}

//

// <tr>
// <td data-th="Product">
//     <div class="row" >
//         <div class="col-md-3 text-left">
//             <img src=${el.imageURL} alt=${el.title} class="img-fluid d-none d-md-block rounded mb-2 shadow ">
//         </div>
//         <div id="dd" class="col-md-9 text-left mt-sm-2">
//         <h6 class="font-weight-light">${el.brand}</h6>
//         <h4>${el.product}</h4>
//         </div>
//     </div>
// </td>
//  <span class="text-sm text-gray-500 line-through font-normal">₹${el.strikedOffPrice}</span>
//      <br> <span class="text-sm text-primary-green">${dis}%&nbsp;off</span>
// <td class="prc">₹${el.price}</td>
// <td></td>
// <td data-th="Quantity">
//     <input type="number" class="form-control form-control-lg text-center" value="1">
// </td>
// <td class="actions" data-th="">
//     <div class="text-right">
//         <button class="btn btn-white border-secondary bg-white btn-md mb-2">
//             <i class="fas fa-sync"></i>
//         </button>
//         <button class="btn btn-white border-secondary bg-white btn-md mb-2">
// <span onclick="del('${el.id}')" id="ri" class="fas fa-trash"> </span>

//         </button>

//     </div>
// </td>
// </tr>
