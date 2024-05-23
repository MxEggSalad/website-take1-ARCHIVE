window.onload = function(){

  document.getElementById("navbarCheck").addEventListener("change", (e) => {
    console.log(e.currentTarget.checked ? "Checked" : "Not checked")
    save()
    refreshCSS()
    })
    document.getElementById("footerCheck").addEventListener("change", (e) => {
      console.log(e.currentTarget.checked ? "Checked" : "Not checked")
    save()
    refreshCSS()
    })
    
  function save() {
  var checkbox = document.getElementById("navbarCheck");
  localStorage.setItem("navbarCheck", checkbox.checked);
  var checkbox2 = document.getElementById("footerCheck");
  localStorage.setItem("footerCheck", checkbox2.checked);
  }

  var checked = JSON.parse(localStorage.getItem("navbarCheck"));
  document.getElementById("navbarCheck").checked = checked; 

  var checked = JSON.parse(localStorage.getItem("footerCheck"));
  document.getElementById("footerCheck").checked = checked;}
  refreshCSS = () => { 
    let links = document.getElementsByTagName('link'); 
    for (let i = 0; i < links.length; i++) { 
        if (links[i].getAttribute('rel') == 'stylesheet') { 
            let href = links[i].getAttribute('href') 
                                    .split('?')[0]; 
              
            let newHref = href + '?version='  
                        + new Date().getMilliseconds(); 
              
            links[i].setAttribute('href', newHref); 
        } 
    } 
} 

