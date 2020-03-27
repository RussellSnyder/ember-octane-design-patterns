export default {
  app: {
    title: "Ember Design Patterns"
  },
  sections: {
    general: { 
      icon: "book-open",
      articles: [
        {
          t_key: 'use_pods'
          // link: 'general.use-pods'
        },
        {
          t_key: 'two_way_binding_does_not_scale',
          // link: 'general.two_way_binding_does_not_scale'
        },  
        {
          t_key: 'mixin_checklist',
          // link: 'general.mixin_checklist'
        },  
        {
          t_key: 'serializer_checklist',
          // link: 'general.serializer_checklist'
        },  
        {
          t_key: 'use_angle_brackets',
          // link: 'general.angle-brackets'
        },
        {
          t_key: 'less_services',
          // link: 'general.utils'
        },
        {
          t_key: 'use_models_right',
          // has dirty attributes
          // rollback
          // link: 'general.models'
        },

      ]
    },
    patterns: { 
      icon: "thumbs-up",
      articles: {
        substates: [
          {
            t_key: 'substate_error',
            link: 'patterns.substate-error'
          },
          {
            t_key: 'substate_loading',
            link: 'patterns.substate-loading'
          }  
        ],
        components: [
          {
            t_key: 'component_overview',
            // link: 'patterns.component.overview'
          },
          {
            t_key: 'reusable_component',
            link: 'patterns.component.reusable'
          },
          {
            t_key: 'single_purpose_component',
            link: 'patterns.component.single-purpose'
          },
          {
            t_key: 'provider_component',
            link: 'patterns.component.provider'
          },
          {
            t_key: 'presentational_component',
            link: 'patterns.component.presentational'
          },
          {
            t_key: 'contextual_component',
            link: 'patterns.component.contextual'
          },
          {
            t_key: 'declarative_rendering',
            link: 'patterns.component.declarative-rendering'
          },
          {
            t_key: 'higher_order_component',
            // link: 'patterns.component.hoc'
          }  
        ],
        models: [
          {
            t_key: 'mindful_models',
            // link: 'patterns.mindful_models'
            // tracking combinations of states or related model states
            // allow function to change multiple parts of model state
          },
          {
            t_key: 'track_your_models',
            link: 'patterns.model.tracking',
            needsServer: true,
          },
          {
            t_key: 'control_z_your_model',
            // link: 'patterns.model.rollback'
          }  
        ],
        mixins: [
          {
            t_key: 'encapsulate_mixins',
            // link: 'patterns.mixin.fully-encapulated'
          },  
        ],
        data_down_actions_up: [
          {
            t_key: 'data_down_strategies',
            // link: 'patterns.concurrency'
          },
          {
            t_key: 'action_up_strategies',
            // link: 'patterns.concurrency'
          }
        ]
      }
    },
    "anti-patterns": { 
      icon: "exclamation-triangle",
      articles: [
        {
          t_key: 'controller_substate_loading',
          link: 'anti-patterns.controller-substate-loading'
        },
        {
          t_key: 'the_meager_model',
          // So much repeat logic can be avoided by making Models smart 
          // Models can even know about other models...
          // link: 'anti-patterns.dumster-fire-component'
        },        
        {
          t_key: 'two_way_binding_magic',
          // link: 'anti-patterns.two-way-binding-magic'
        },
        {
          t_key: 'wtf_mixins',
          // Use a component instead of a mixin to minimize those (where the fuck did that come from?) moments
          // link: 'anti-patterns.wtf-mixin'
        },
        {
          t_key: 'god_controller'
          // this component does fucking everything, but it should not
          // link: 'anti-patterns.god-component'
        },
      ],
    }
  }, 
}