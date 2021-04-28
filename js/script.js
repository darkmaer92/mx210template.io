
/* add class depending on scroll*/
function fc(){
    let nav = document.querySelector('.navbar');
      if (window.pageYOffset > 1200) {
         nav.classList.add('--active');
      } else {
        nav.classList.remove('--active');
      } 
/*1 */ 
      let extend = document.querySelector('.extend');
      if (window.pageYOffset > 1000) {
        extend.classList.add('--active_extend',);
      } 
      else {
        extend.classList.remove('--active_extend');
      } 

      let extendIN = document.querySelector('.extend');
      if (window.pageYOffset > 2300) {
        extendIN.classList.add('--inactive_extend');
      } else {
        extendIN.classList.remove('--inactive_extend');
      } 
/*2 */ 
        let migrate = document.querySelector('.migrate');
        if (window.pageYOffset > 2300) {
            migrate.classList.add('--active_migrate',);
        } 
        else {
            migrate.classList.remove('--active_migrate');
        } 

        let migrateIN = document.querySelector('.migrate');
        if (window.pageYOffset > 3500) {
            migrateIN.classList.add('--inactiv_migrate');
        } else {
            migrateIN.classList.remove('--inactiv_migrate');
        } 
/*3 */ 
        let integrate = document.querySelector('.integrate');
        if (window.pageYOffset > 3500) {
            integrate.classList.add('--active_integrate',);
        } 
        else {
            integrate.classList.remove('--active_integrate');
        } 

        let integrateIN = document.querySelector('.integrate');
        if (window.pageYOffset > 4000) {
            integrateIN.classList.add('--inactiv_migrate');
        } else {
            integrateIN.classList.remove('--inactiv_migrate');
        } 
/*4 */ 
        let read = document.querySelector('.read');
        if (window.pageYOffset > 4400) {
            read.classList.add('--active_read',);
        } 
        else {
            read.classList.remove('--active_read');
        } 

        let readIN = document.querySelector('.integrate');
        if (window.pageYOffset > 4400) {
            readIN.classList.add('--inactiv_integrate');
        } else {
            readIN.classList.remove('--inactiv_integrate');
        } 

  }
  
  window.onscroll=fc;
  fc();



  
/*end*/
/* smooth */
  const anchors=document.querySelectorAll('a[href*="#"]');for(let anchor of anchors){anchor.addEventListener("click",function(e){e.preventDefault();const blockID=anchor.getAttribute("href").substr(1);document.getElementById(blockID).scrollIntoView({behavior:"smooth",block:"start",});});}
/*smooth  end */


/*      let extend = document.querySelector('.extend');
      if (window.pageYOffset > 1000) {
        extend.classList.add('--active_extend',);
      } 
      else {
        extend.classList.remove('--active_extend');
      } 

      let extendIN = document.querySelector('.extend');
      if (window.pageYOffset > 2300) {
        extendIN.classList.add('--inactive_extend');
      } else {
        extendIN.classList.remove('--inactive_extend');
      } 

      let migrate = document.querySelector('.migrate');
      if (window.pageYOffset > 2300) {
        migrate.classList.add('--active_migrate');
      } else {
        migrate.classList.remove('--active_migrate');
      } 

      let migrateIN = document.querySelector('.migrate');
      if (window.pageYOffset > 3500) {
        migrateIN.classList.add('--inactive_migrate');
      } else {
        migrateIN.classList.remove('--inactive_migrate');
      } 

      let integrate = document.querySelector('.integrate');
      if (window.pageYOffset > 3500) {
        integrate.classList.add('--active_integrate',);
      } else {
        integrate.classList.remove('--active_integrate');
      } */