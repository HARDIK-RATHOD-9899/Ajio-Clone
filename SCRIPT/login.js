document.getElementById('login').addEventListener("click",async(e)=>{
    e.preventDefault();

    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    let d = await fetch("https://mock-server-app-ss14.onrender.com/user")

    let data = await d.json()

    let val = data.filter((el)=>el.email == email)
    if(val.length==0)
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
            icon: "error",
            title: "First register Your Account"
          });
          setTimeout(()=>{
            window.location.href="sign.html"
        },2000)
    }
    else{
        if(val[0].password == password)
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
    title: "Login Successfully"
  });
  setTimeout(()=>{
    window.location.href="index.html"
},2000)
            }
            else
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
                    icon: "error",
                    title: "Wrong Password"
                  });
            }
    }  
})