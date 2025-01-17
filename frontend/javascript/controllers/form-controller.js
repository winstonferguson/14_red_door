import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    id: String
  }

  connect() {
    this.form = this.element;
    this.initForm();
  }

  initForm () {
    this.form.action = `https://fabform.io/f/${this.idValue}`; 
    this.form.method = "post";
  }
}