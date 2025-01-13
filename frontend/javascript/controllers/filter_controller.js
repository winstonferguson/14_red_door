import { Controller } from "@hotwired/stimulus"
import { captureParams } from "../lib/params.js"  

export default class extends Controller {
  connect() {
    this.inputs = this.element.querySelectorAll("input[type=radio]");
    this.cards = document.querySelectorAll(".card");

    this.activeFilters = [];


    for (const input of this.inputs) {
      input.addEventListener("change", this.filter.bind(this))
    }

    this.param();

  }

  param() {
    const params = captureParams();
    const filter = params.get("service").toLowerCase();

    if (filter) {
      this.inputs.forEach(input => {
        console.log(input.value);
        console.log(input.value == filter);
        if (input.value == filter) {
          console.log(input);
          input.checked = true;
        }
      });
    }

    this.filter();
  }

  activate() {
    this.activeFilters = []

    this.inputs.forEach(input => {
      if (input.checked && input.value != "all") {
        this.activeFilters.push(input.value.toLowerCase());
      }
    })

    if (this.activeFilters.length == 0) {
      this.activeFilters.push("all")
    }
  }

  all() {
    if (this.activeFilters.includes("all")) {
      Array.from(this.inputs).filter(input => input.value == "all")[0].checked = true;
      this.cards.forEach(card => {
        card.classList.remove("hidden");
      })

    } else {
      Array.from(this.inputs).filter(input => input.value == "all")[0].checked = false;
     }

  }

  filter() {
    this.activate();


    this.cards.forEach(card => {
      this.visibility(card);
    })

    this.all();
  }

  visibility(card) {
    const services = card.querySelectorAll('.service');
    const serviceNames = Array.from(services).map(service => service.innerHTML.toLowerCase());

    for (const service of serviceNames) {
      if (this.activeFilters.includes(service)) {
        card.classList.remove("hidden");
        return;
      } else {
        card.classList.add("hidden");
      }
    }



    
  
  } 
}
