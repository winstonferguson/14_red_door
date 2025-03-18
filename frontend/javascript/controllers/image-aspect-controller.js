import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    this.image = this.element.querySelector("img");
    
    if (this.image.complete) {
      this.setAspectRatioClass();
    } else {
      this.image.addEventListener("load", () => this.setAspectRatioClass());
    }
  }

  /**
   * Determines the aspect ratio and applies the appropriate class
   */
  setAspectRatioClass() {
    const aspectRatio = this.image.naturalHeight / this.image.naturalWidth;
    
    if (aspectRatio > 1) {
      this.element.classList.add("portrait");
    } else if (aspectRatio < 1) {
      this.element.classList.add("landscape");
    } else {
      this.element.classList.add("square");
    }
  }
}