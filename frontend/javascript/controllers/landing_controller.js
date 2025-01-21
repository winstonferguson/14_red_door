import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  connect() {
    this.aside, this.container, this.landingPosition;

    this.landed = false;
    this.lastKnownScrollPosition = 0;

    this.element.classList.add("fly");

    this.prepare();
    window.onresize = (event) => this.prepare();
  }

  prepare() {
    this.aside = document.querySelector("main > .aside");
    this.container = this.aside.querySelector(".container");
    this.landingPosition = this.aside.getBoundingClientRect().top;

    document.onscroll = (event) => this.approach();    
  }

  approach() {
    this.lastKnownScrollPosition = window.innerHeight + window.scrollY;

    if ( !this.landed ) {
      window.requestAnimationFrame(() => {
        this.land(this.lastKnownScrollPosition);
        this.landed = false;
      });
    }

    this.landed = true;
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
