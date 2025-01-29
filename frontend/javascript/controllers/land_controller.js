import { Controller } from "@hotwired/stimulus"
import { useIntersection } from 'stimulus-use'

export default class extends Controller {

  connect() {
    this.container = document.querySelector("main > .aside .container");
    
    const containerHeight = this.container.clientHeight

    useIntersection(this, {rootMargin: `-${containerHeight}px -${containerHeight}px -${containerHeight}px -${containerHeight}px`});
    this.fly();
  }

  appear(entry, observer) {
    // callback automatically triggered when the element
    // intersects with the viewport (or root Element specified in the options)
    this.land();
  }


  disappear(entry, observer) {
    // callback automatically triggered when the element
    // leaves the viewport (or root Element specified in the options)
    this.fly();
  }

  fly() {
    this.container.classList.remove("land");
    this.container.classList.add("fly");

  }

  land() {
    this.container.classList.add("land");
    this.container.classList.remove("fly");
  }
}
