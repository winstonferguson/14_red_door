import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  connect() {
    this.content = document.querySelector("main > .content");
    this.landed = false;
    this.landingPosition = this.content.getBoundingClientRect().bottom;
    this.lastKnownScrollPosition = 0;
    this.startPosition = this.element.getBoundingClientRect().top;

    this.element.classList.add("fly");

    document.onscroll = (event) => this.approach();    
  }

  prepare() {
    this.content = document.querySelector("main > .content");
    this.landingPosition = this.content.getBoundingClientRect().bottom;
    this.startPosition = this.element.getBoundingClientRect().top;
  }

  approach() {
    this.lastKnownScrollPosition = this.startPosition + window.scrollY;

    if ( !this.landed ) {
      window.requestAnimationFrame(() => {
        console.log("approaching");
        this.land(this.lastKnownScrollPosition);
        this.landed = false;
      });
    }
  
    this.landed = true;
  }

  land(scrollPosition) {
    if ((scrollPosition - 110) > this.landingPosition) {
      this.element.classList.add("land");
      this.element.classList.remove("fly");
    } else {
      this.element.classList.remove("land");
      this.element.classList.add("fly");
    }
  }
}
