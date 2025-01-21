import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  connect() {
    this.aside, this.container, this.landingPosition;

    this.landed = false;
    this.lastKnownScrollPosition = 0;

    this.prepare();
    window.onresize = (event) => this.prepare();
  }

  prepare() {
    this.aside = document.querySelector("main > .aside");
    this.container = this.aside.querySelector(".container");
    this.landingPosition = this.aside.getBoundingClientRect().top;

    if ( window.innerHeight < this.landingPosition ) {
      this.element.classList.add("fly");
    } else {
      this.element.classList.add("land");
    }

    document.onscroll = (event) => this.approach();    
  }

  approach() {
    this.lastKnownScrollPosition = window.innerHeight + window.scrollY;

    window.requestAnimationFrame(() => {
      this.land(this.lastKnownScrollPosition);
    });    
  }

  land(scrollPosition) {
    const calculatedPosition = scrollPosition - (this.container.clientHeight + 30);

    if (calculatedPosition > this.landingPosition) {
      this.element.classList.add("land");
      this.element.classList.remove("fly");
    } else {
      this.element.classList.remove("land");
      this.element.classList.add("fly");
    }
  }
}
