import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    id: String
  };

  connect() {
    this.initializeForm();
  }

  /**
   * Initializes the form with the appropriate action and method
   */
  initializeForm() {
    this.element.action = `https://fabform.io/f/${this.idValue}`;
    this.element.method = "post";
  }
}