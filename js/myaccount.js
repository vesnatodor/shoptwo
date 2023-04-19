var pronadjen= false;
document.querySelector('.login').addEventListener('click',(event)=>{
     event.preventDefault();
     fetch('data/user.json')
    .then(json=>json.json())
    .then(data=>{
     data.user.forEach((user)=>{
     if(user.user===document.getElementById("user").value &&
       user.pass===document.getElementById("pass").value){
        console.log('korisničko ime i širfa su tacni');
        document.querySelector('#success').innerHTML='Uspešno logovanje';

        if (document.querySelector('input[type="checkbox"]').checked) {
         postaviStorage();  
       } 
       function postaviStorage(){
       localStorage.setItem('user_localStorage', JSON.stringify({user:user.user,pass:user.pass}));
       console.log(localStorage.getItem('user_localStorage'));
      //ovaj console.log ne radi
        pronadjen= true;
        return json.json();
      }
      if (!pronadjen){
         document.querySelector('#not_exist').innerHTML='Ne postoji korisnik';
      }
       }
      })
    })
       .catch((err)=>{
    //    alert("korisničko ime ili šifra nisu tacni");
    let el = document.createElement('div');
    el.classList = 'error_div';
    if (err.status>=400 && err.status<500)
     { console.log('crvena greška')}
    if (err.status>=500 && err.status<600)
     { console.log('žuta greška')}
    el.innerHTML = err.statusText;
    document.body.append(el);
       })
        
      });
