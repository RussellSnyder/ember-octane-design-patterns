import Component from "@glimmer/component";
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";
import podNames from "ember-component-css/pod-names";

const slideWidthPercent = 62.5;
const requiredArgs = ['photos'];

export default class DeclarativeCarousel extends Component {
  // this is a hack until ember-component-css gets updated
  // https://github.com/ebryn/ember-component-css/issues/342
  get styleNamespace() {
    return podNames["declarative-carousel"];
  }

  @tracked
  currentSlideIndex = 0;

  constructor(owner, args) {
    super(owner, args);

    requiredArgs.forEach(arg => {
      if (typeof args[arg] === 'undefined') { console.warn(`the argument ${arg} is required in DeclarativeCarousel`) }
    })

    this.photos = args.photos
    this.slideSize = args.photos.length
  }

  @action
  move(direction = 0) {
    let newSlideIndex;    
    if (direction < 0 && this.currentSlideIndex === 0) {
      newSlideIndex = this.photos.length - 1;
    } else if (direction > 0 && this.currentSlideIndex >= this.photos.length - 1) {
      newSlideIndex = 0;
    } else {
      newSlideIndex = this.currentSlideIndex + direction
    }
    // TODO This is not actually declaratively rendered
    // the move action should only updated the currentSlideIndex
    // the other properties should watch currentSlideIndex and update themselves
    this.currentSlideIndex = newSlideIndex;
    this.transform = `transform: translate(-${slideWidthPercent * this.currentSlideIndex}%)`;
    this.currentSlideDisplay = this.currentSlideIndex + 1;
  }

  @tracked
  transform = `transform: translate(-${slideWidthPercent * this.currentSlideIndex}%)`
  @tracked
  currentSlideDisplay = this.currentSlideIndex + 1;
}