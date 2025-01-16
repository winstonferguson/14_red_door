import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.elements = this.element.querySelectorAll(".observe");
    this.options = {
      // Add root here so rootBounds in entry object is not null
      root: document.body,
      // Margin to when element should take action
      rootMargin: "100px 0px",
      threshold: [...Array(30).keys()].map(x => x / 29)
    }

    this.observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach((entry, index) => {
        const element = entry.target;
    
        // Get root element (document) coords
        const rootTop = entry.rootBounds.top;
        const rootBottom = entry.rootBounds.height;
    
        // Get div coords
        const topBound = entry.boundingClientRect.top - 100; // margin in config
        const bottomBound = entry.boundingClientRect.bottom;
    
        let className;
    
        // Do calculations to get class names
        if (topBound < rootTop && bottomBound < rootTop) {
          className = "outview-top";
        } else if (topBound > rootBottom) {
          className = "outview-bottom";
        } else if (topBound < rootBottom && bottomBound > rootBottom) {
          className = "inview-bottom";
        } else if (topBound < rootTop && bottomBound > rootTop) {
          className = "inview-top";
        }
        element.setAttribute('data-view', className);
      });
    }, this.config);
  

    this.elements.forEach(el => {
      this.observer.observe(el);
    });
  }   
}
