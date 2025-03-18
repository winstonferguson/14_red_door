import { Controller } from "@hotwired/stimulus"
import { useIntersection } from 'stimulus-use'

export default class extends Controller {

  connect() {
    this.container = document.querySelector("main > .aside .container");
    
    if (!this.container) return;
    
    const containerHeight = this.container.clientHeight;
    const margin = `-${containerHeight}px`;

    useIntersection(this, { rootMargin: `${margin} ${margin} ${margin} ${margin}` });
    this.fly();
  }

  /**
   * Triggered when the element enters the viewport
   */
  appear(entry, observer) {
    // source 'stimulus-use'
    // callback automatically triggered when the element
    // intersects with the viewport (or root Element specified in the options)
    this.land();
  }


  /**
   * Triggered when the element exits the viewport
   */
  disappear(entry, observer) {
    // source 'stimulus-use'
    // callback automatically triggered when the element
    // leaves the viewport (or root Element specified in the options)
    this.fly();
  }

  /**
   * Adds 'fly' class and removes 'land' class
   */
  fly() {
    this.container.classList.add("fly");
    this.container.classList.remove("land");
  }

  /**
   * Adds 'land' class and removes 'fly' class
   */
  land() {
    this.container.classList.remove("fly");
    this.container.classList.add("land");
  }
}
