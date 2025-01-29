import { Controller } from "@hotwired/stimulus"
import { useIntersection } from 'stimulus-use'

export default class extends Controller {

  connect() {
    this.aside, this.container, this.landingPosition;

    this.landed = false;
    this.lastKnownScrollPosition = 0;

    const c = document.querySelector("main > .content");
    this.landingPosition = c.getBoundingClientRect().bottom;

    this.prepare();
    window.onresize = (event) => this.prepare();

    this.aside = document.querySelector("main > .aside");
    this.container = this.aside.querySelector(".container");

    useIntersection(this)
  }

  prepare() {
    this.aside = document.querySelector("main > .aside");
    this.container = this.aside.querySelector(".container");
    

    if ( window.innerHeight < this.landingPosition ) {
      this.element.classList.add("fly");
    } else {
      this.element.classList.add("land");
    }

    document.onscroll = (event) => this.approach();    
  }

  appear(entry, observer) {
    // callback automatically triggered when the element
    // intersects with the viewport (or root Element specified in the options)
    this.element.classList.add("visible");
  }

  disappear(entry, observer) {
    // callback automatically triggered when the element
    // leaves the viewport (or root Element specified in the options)
    this.element.classList.remove("visible");
  }

  approach() {
    this.lastKnownScrollPosition = window.innerHeight + window.scrollY;

    // window.requestAnimationFrame(() => {
      this.land(this.lastKnownScrollPosition);
    //  });    
  }

  land(scrollPosition) {
    const calculatedPosition = scrollPosition - (this.container.clientHeight + 30);

    console.log(calculatedPosition, this.landingPosition);

    if (calculatedPosition > this.landingPosition) {
      this.element.classList.add("land");
      this.element.classList.remove("fly");
    } else {
      this.element.classList.remove("land");
      this.element.classList.add("fly");
    }
  }
}
