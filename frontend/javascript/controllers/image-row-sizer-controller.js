import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    // Select all images within the element
    this.images = this.element.querySelectorAll("img");

    // Initial check on page load
    this.updateImageSizes();

    // Listen for window resize and update images accordingly
    window.addEventListener("resize", this.updateImageSizes.bind(this));
  }

  /**
   * Determines whether to resize or revert image widths
   * based on the element's flex direction.
   */
  updateImageSizes() {
    const flexDirection = getComputedStyle(this.element).flexDirection;

    if (flexDirection === "row") {
      this.resizeImages();
    } else {
      this.revertImages();
    }
  }

  /**
   * Restores the original width of each image container.
   */
  revertImages() {
    this.images.forEach((image) => {
      image.parentNode.style.width = "inherit";
    });
  }

  /**
   * Adjusts each image container's width to evenly distribute them.
   */
  resizeImages() {
    const widthPercentage = 100 / this.images.length;
    this.images.forEach((image) => {
      image.parentNode.style.width = `${widthPercentage}%`;
    });
  }
}
