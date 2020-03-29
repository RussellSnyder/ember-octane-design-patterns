import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class IntlImage extends Component {
  @service intl;

  constructor(owner, args) {
    super(owner, args);
    this.src = this.intl.t(`${args.t_ns}${args.image}.src`);
    this.alt = this.intl.t(`${args.t_ns}${args.image}.alt`);
    const caption_t_key = `${args.t_ns}${args.image}.caption`
    if (this.intl.exists(caption_t_key)) {
      this.caption = this.intl.t(caption_t_key) 
    }
  }
}