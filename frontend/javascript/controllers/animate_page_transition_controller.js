import { Controller } from "@hotwired/stimulus"


export default class extends Controller {
  connect() {
    this.url = new URL(window.location.href);

    // this.checkPosition();

    const params = new URLSearchParams(this.url.search);
    window.scrollTo(0, params.get('y'));

    window.history.replaceState(null, document.title, this.url.pathname); 

    this.links =  this.element.querySelectorAll('a');
    this.animateLinks();
  }

  animateLinks() {
    this.links.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();

        if (link.href === window.location.href) return;
        
        this.element.classList.add('animate-out');

        setTimeout(() => {
          let url = link.href;

          if (this.element.classList.contains('service') && link.classList.contains('icon')) {
            url += `?y=${window.scrollY}`
          }
          window.location.href = url;
        }, 350);
      });
    });
  }  

  checkPosition() {
    const params = new URLSearchParams(this.url.search);
    const yPos = params.get('y');

    if (yPos) window.scrollTo(0, yPos);

    window.history.replaceState(null, document.title, this.url.pathname);  
  }
}
