import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.duration = 50;
    this.framesMax = 7;
    this.inter = null;
    this.orginalText = this.element.innerText
    this.element.addEventListener('mouseover', this.startShuffle.bind(this));
    this.element.addEventListener('mouseleave', this.endShuffle.bind(this))
  }

  endShuffle() {
    clearInterval(this.inter);
    this.element.textContent = this.orginalText;

  }

  startShuffle() {
    let text = this.orginalText
    let charArr = text.split("");
    let frame = 0;

    
    // shuffle at given speed
    this.inter = setInterval(() => {
      if ( frame < this.framesMax ) {
        let charArrShuff = this.shuffle(charArr);
        this.element.textContent = charArrShuff.join("");
        frame++
      } else {
        clearInterval(this.inter);
        this.element.textContent = this.orginalText;
      }
    }, this.duration);    
  }

  shuffle(array) {
    return array.reduce(
      ([a, b]) => (
        b.push(...a.splice((Math.random() * a.length) | 0, 1)), [a, b]
      ),
      [[...array], []]
    )[1];
  }
}
