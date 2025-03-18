import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.header = document.querySelector(".header");
    this.closeButton = this.header?.querySelector(".close");

    // Ensure both elements exist before proceeding
    if (!this.header || !this.closeButton) return;

    // Attach event listeners for opening and closing the mobile menu
    this.element.addEventListener("click", this.toggleMenu.bind(this));
    this.closeButton.addEventListener("click", this.toggleMenu.bind(this));
  }

  /**
   * Toggles the 'active-mobile-menu' class on the header.
   * This method is triggered when either the trigger element
   * (e.g., a menu button) or the close button is clicked.
   */
  toggleMenu() {
    this.header.classList.toggle("active-mobile-menu");
  }
}