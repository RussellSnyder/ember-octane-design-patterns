import Component from '@ember/component';

const languageOptions = [
  { value: "en-us", name: "English" },
  { value: "es-es", name: "Spanish" },
  { value: "fr-fr", name: "French" },
  { value: "de-de", name: "German" },
]

export default Component.extend({
  tagName: "",
  languageOptions,
});
