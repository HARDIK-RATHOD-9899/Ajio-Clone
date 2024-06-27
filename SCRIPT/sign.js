function showMenu(id) {
    let menuContainer = document.getElementById(id);
    menuContainer.style.visibility = "visible"
    menuContainer.style.opacity="1"
}
function hideMenu(id) {
    let menuContainer = document.getElementById(id);
    menuContainer.style.visibility = "hidden"
    menuContainer.style.opacity="0"
}

document.getElementById('SignUp').addEventListener("click",(e)=>{
    e.preventDefault();


    let obj={
        username:document.getElementById('name').value,
        email:document.getElementById('email').value,
        password:document.getElementById('password').value
    }

    console. log(obj.email)
    fetch(`https://mock-server-app-ss14.onrender.com/user?email=${obj.email}`)
    .then((res)=>res.json())
    .then ((res)=>{
    if(res.length>0)
    {
        
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
    title: "User is already registered"
  });
    }
    else
    {
        fetch("https://mock-server-app-ss14.onrender.com/user",{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        .then((res)=>res.json())
        .then((res)=>{
            if(res)
                {
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
                        title: "User Register Succesfully"
                      });
                      setTimeout(()=>{
                        window.location.href="login.html"
                    },2000)
                }
        })
    }
 })


     
})

