var reqemler = [];
var btn = document.querySelector('button')

function lottery() {
    var reqem = Math.floor(Math.random() *5)
    if (reqemler.indexOf(reqem) == -1) {
      for(var i=0;i<100;i++)
      {
        if(reqem==i)
        {
            img.setattribute('src',`${i}.jpg`) 
        }
      }
        reqemler.push(reqem)
    } else {
          if(reqemler.length==5)
          {
             alert('Qutuda dash qalmadi')
          }
    }
}
btn.onclick = function () {
    lottery()
}