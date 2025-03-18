import { Controller } from "@hotwired/stimulus"
import { useIntersection } from 'stimulus-use'

export default class extends Controller {
  connect() {
    useIntersection(this)
  }

  /**
 * Triggered when the element enters the viewport
 */
  appear(entry, observer) {
    // source 'stimulus-use'
    // callback automatically triggered when the element
    // intersects with the viewport (or root Element specified in the options)
    this.element.classList.add("visible");
  }
  
  /**
   * Triggered when the element exits the viewport
   */
  disappear(entry, observer) {
    // source 'stimulus-use'
    // callback automatically triggered when the element
    // leaves the viewport (or root Element specified in the options)
    this.element.classList.remove("visible");
  }
}