import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

// there can't be more than 100 use cases can there?
const MAX_ARRAY_SIZE = 100;

// extra keys are for when your tranlation is not a single string, but an object
const getArrayOfTranslations = (intl, explanationNamespace, desiredArrayKey, extraKeys = null) => {
  let finalReturn = []
  for (let i = 0; i < MAX_ARRAY_SIZE; i++) {
    const t_key = `${explanationNamespace}${desiredArrayKey}.${i}${extraKeys ? '.' + extraKeys[0] : ''}`;
    if (!intl.exists(t_key)) { break; }
      if (extraKeys) {
        finalReturn.push({});
        extraKeys.forEach((key) => {
          finalReturn[i][key] = intl.t(`${explanationNamespace}${desiredArrayKey}.${i}.${key}`)
        })
      } else {
        finalReturn.push(intl.t(t_key))
      }
  }
  return finalReturn
}

export default class PatternExplanation extends Component {
  @service intl;

  constructor(owner, args) {
    super(owner, args);
    const explanationNamespace = `${args.t_ns}.pattern_explanation.`
    this.use_cases = getArrayOfTranslations(this.intl, explanationNamespace, 'use_cases')
    this.rabbit_holes = getArrayOfTranslations(this.intl, explanationNamespace, 'rabbit_holes')
    this.references = getArrayOfTranslations(this.intl, explanationNamespace, 'references', ['title', 'short_explanation', 'link'])
  }

  // UI
  @tracked
  isShowingExplanation = false;
  @tracked
  hideText = null;
  @tracked  
  showText = null;

  @action
  toggleExplanation() {
    this.isShowingExplanation = !this.isShowingExplanation;
  }
}
