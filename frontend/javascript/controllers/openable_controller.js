import { Controller } from "@hotwired/stimulus"
export default class extends Controller {
  connect() {   
    this.element.addEventListener('click', this.toggle.bind(this));
  }

  toggle() {
    this.element.classList.toggle('open');
  }
}
