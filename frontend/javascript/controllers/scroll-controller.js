import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    selector: String
  }

  connect() {
    this.destination = document.querySelector(this.selectorValue);
    this.element.onclick = (event) => this.scrollToDestination(event);    
  }

  scrollToDestination(e) {
    e.preventDefault();
    this.destination.scrollIntoView({ behavior: 'smooth' });
  }
}