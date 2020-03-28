import Route from '@ember/routing/route';
import patterns from './patterns'

const { articles, icon } = patterns

export default class PatternsRoute extends Route {
  model() {
    return {
      articles,
      icon
    }
  }
}
