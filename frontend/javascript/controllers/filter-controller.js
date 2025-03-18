import { Controller } from "@hotwired/stimulus";
import { captureParams } from "../lib/params.js";

export default class extends Controller {
  connect() {
    this.inputs = Array.from(this.element.querySelectorAll("input[type=radio]"));
    this.cards = Array.from(document.querySelectorAll(".card"));
    this.activeFilters = [];

    this.initializeFilters();
    this.addEventListeners();
  }

  /**
   * Initializes filters based on URL parameters
   */
  initializeFilters() {
    const params = captureParams();
    const filter = params?.get("service")?.toLowerCase();

    if (filter) {
      this.inputs.forEach(input => {
        input.checked = input.value.toLowerCase() === filter;
      });
    }
    this.filter();
  }

  /**
   * Adds event listeners to inputs
   */
  addEventListeners() {
    this.inputs.forEach(input => {
      input.addEventListener("change", () => this.filter());
    });
  }

  /**
   * Activates selected filters
   */
  activateFilters() {
    this.activeFilters = this.inputs
      .filter(input => input.checked && input.value !== "all")
      .map(input => input.value.toLowerCase());

    if (this.activeFilters.length === 0) {
      this.activeFilters.push("all");
    }
  }

  /**
   * Handles the 'all' filter behavior
   */
  handleAllFilter() {
    const allInput = this.inputs.find(input => input.value === "all");
    
    if (this.activeFilters.includes("all")) {
      allInput.checked = true;
      this.cards.forEach(card => card.classList.remove("hidden"));
    } else {
      allInput.checked = false;
    }
  }

  /**
   * Filters cards based on active filters
   */
  filter() {
    this.activateFilters();
    this.cards.forEach(card => this.updateCardVisibility(card));
    this.handleAllFilter();
  }

  /**
   * Updates the visibility of a card based on active filters
   * @param {HTMLElement} card 
   */
  updateCardVisibility(card) {
    const services = Array.from(card.querySelectorAll(".service"))
      .map(service => service.innerHTML.toLowerCase());

    const isVisible = services.some(service => this.activeFilters.includes(service));
    card.classList.toggle("hidden", !isVisible);
  }
}