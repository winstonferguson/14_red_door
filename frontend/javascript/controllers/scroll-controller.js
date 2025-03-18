import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    selector: String
  }

  connect() {
    // Find the destination element using the selector value
    this.destination = document.querySelector(this.selectorValue);

    // Ensure the destination exists before adding the event listener
    if (!this.destination) return;

    // Attach click event listener to trigger smooth scrolling
    this.element.addEventListener("click", this.scrollToDestination.bind(this));
  }

  /**
   * Scrolls smoothly to the destination element.
   * Prevents the default behavior of anchor links.
   * @param {Event} event - The click event object.
   */
  scrollToDestination(event) {
    event.preventDefault(); // Prevents default anchor link behavior
    this.destination.scrollIntoView({ behavior: "smooth" });
  }
}