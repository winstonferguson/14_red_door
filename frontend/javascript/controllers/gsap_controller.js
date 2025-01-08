import { Controller } from "@hotwired/stimulus"
import gsap from "greensock";

export default class extends Controller {
  connect() {
    console.log(gsap);

    // const a = 
    

    // setTimeout(() => {
    //   console.log('play');
    //   console.log(a.play());
    // a.play();
    // }, 1500);


 
    this.element.addEventListener('click', (event) => {
      event.preventDefault();
      this.animate();
    });
    


    
  }

  animate() {
    console.log('animate');

    gsap.to( this.element, { x: 200, duration: 1}); 
     
  }
}
