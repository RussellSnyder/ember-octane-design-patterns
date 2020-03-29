import Component from "@glimmer/component";

import globalData from 'ember-octane-design-patterns/helpers/global-data'
const { base_url, branch_route } = globalData.source_code;

export default class PatternExampleContainer extends Component {
  constructor(owner, args) {
    super(owner, args)

    this.t_ns = `${args.t_ns}.examples.${args.example_name}.`
    this.code_url = `${base_url}${branch_route}${args.code_location}`
  }
}