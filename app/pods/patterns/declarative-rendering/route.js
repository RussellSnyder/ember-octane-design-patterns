import AbstractRouteIntlRoute from 'ember-octane-design-patterns/pods/abstract-route-intl/route';

const picsumURL = "https://picsum.photos/800/400?random=";
const photos = [1,2,3,4,5,6,7,8].map(int => `${picsumURL}${int}`)

export default class PatternsDeclarativeRenderingRoute extends AbstractRouteIntlRoute {
  model() {
    const parentResults = super.model()
    return {
      ...parentResults,
      photos,
    }
  }
}
