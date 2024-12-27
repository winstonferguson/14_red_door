import { Controller } from "@hotwired/stimulus"
export default class extends Controller {
  
  connect() {   
    this.images =  this.element.querySelectorAll('img');

    this.check();

    window.addEventListener('resize', () => this.check());
  }

  check() {
    const flexDirection = getComputedStyle(this.element).flexDirection;

    if ( flexDirection === "row" ) return this.resize();

    this.revert();
  }

  revert() {
    for (const image of this.images ) {
      image.parentNode.style.width = "inherit"; 
    }
  }

  resize() {
    for (const image of this.images ) {
      image.parentNode.style.width = `${(100 / this.images.length)}%`; 
    }
  }
}
