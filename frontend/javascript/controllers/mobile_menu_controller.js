import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.header = document.querySelector(".header");
    this.close = this.header.querySelector(".close");

    this.element.onclick = () => this.header.classList.toggle("active-mobile-menu");
    this.close.onclick = () => this.header.classList.toggle("active-mobile-menu");
  }
}
