import { Controller } from "@hotwired/stimulus";

import ScrollyVideo from 'scrolly-video';

export default class extends Controller {
  connect() {   
    new ScrollyVideo({
      scrollyVideoContainer: this.element,
      src: this.element.dataset.videoSrc
    });
  }
}
