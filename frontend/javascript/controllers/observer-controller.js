import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    const myElements = document.querySelectorAll('.observe');
    const options = {
      root: null,
      threshold: 0,
      rootMargin: "0px",
    }

    

    for (const element of myElements) {
      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      }, options);
      
      observer.observe(element);
    }
  }

}
