import { Controller } from "@hotwired/stimulus"
export default class extends Controller {
  
  connect() {   
    this.image =  this.element.querySelector('img');
    this.aspectRatio = this.image.naturalHeight / this.image.naturalWidth;
    
    this.addClass();
  }

  addClass() {
    if ( this.aspectRatio > 1 ) {
      this.element.classList.add('portrait');
    } else if ( this.aspectRatio < 1 ) {
      this.element.classList.add('landscape');
    } else {
      this.element.classList.add('square');
    }
  }
}
