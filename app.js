window.onscroll = () => {
    const nav = document.querySelector('#nav');
    const border1 = document.querySelector('#link-border1');
    const border2 = document.querySelector('#link-border2');
    const border3 = document.querySelector('#link-border3');
    if(this.scrollY < 10){
        nav.className = 'navbar navbar-light navbar-expand-lg navbar-custom fixed-top'
        nav.style.backgroundColor ="transparent";
    }
    else{
        nav.className = 'navbar navbar-light navbar-expand-lg navbar-custom fixed-top';
        nav.style.backgroundColor ="white";
    }
    if( this.scrollY > 850 && this.scrollY < 1500){
        border1.style.borderBottom = "3px solid rgb(70, 153, 111)"
        
    }
    else {
        border1.style.borderBottom = "none"
    }
    if( this.scrollY > 1500 && this.scrollY < 3000){
        border2.style.borderBottom = "3px solid rgb(70, 153, 111)"
    }
    else {
        border2.style.borderBottom = "none"
    }
    if( this.scrollY > 3000 && this.scrollY < 4000){
        border3.style.borderBottom = "3px solid rgb(70, 153, 111)"
    }
    else {
        border3.style.borderBottom = "none"
    }
  };