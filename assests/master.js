let btn = document.querySelector('.btn')
  let container= document.querySelector('.container')
  let tex = document.querySelector('.tex')
  let h1=document.querySelector('.h1')
  let tex_1=document.querySelector('.tex_1')
  let alarm = document.querySelector('.alarm')
  console.log(tex_1);
btn.addEventListener('click', ()=>{
let userName= document.querySelector('.inp_1').value
  let email= document.querySelector('.inp_2').value
  let passWord= document.querySelector('.inp_3').value
  if (
    userName != ''&&
    email !=''&&
    passWord !=''
  ){
   
    sendDta(userName , email , passWord)
    // alert('msg');
  }else{
    alert('please adam bash')
  }
})

function sendDta(userName , email  , passWord){

  const newform = {
    userName : userName ,
    email : email ,
    passWord : passWord
    };

    fetch('https://654e3ab9cbc3253557428f34.mockapi.io/api/form/users', {
      method: 'POST',
      headers: {'content-type':'application/json'},
      // Send your data in the request body as JSON
      body: JSON.stringify(newform)
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(task => {
      // do something with the new task
      alarm.style.display='flex'
      alarm.style.top='100px'
      container.style.display='none'
      tex.style.display='flex'
      tex.style.justifyContent='center'
      tex.style.alignItems= 'center'
      tex.innerHTML=`
      
      <div class="tex_1" id="tet">
      <h1 class="h1"> welcom : ${newform.userName}</h1>
        <h2>email : ${newform.email}</h2>
        <h2> passWord : ${newform.passWord}</h2>
     </div>
      
      `
      // document.getElementById('tet')
      // console.log(document.getElementById('tet').classList[0]);
      
      setTimeout (function(){
                alarm.style.top='1500px'
            }, 4000) 
      
    }).catch(error => {
      // handle error
      alert('error')
    })

}


  