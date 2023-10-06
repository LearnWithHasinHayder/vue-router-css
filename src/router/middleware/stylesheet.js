/**
 * Define our route selectable stylesheets
 *
 * @type {Object}
 */
const stylesheets = {
  public:
    "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css",
  login:
    "https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.1.2/tailwind.min.css",
  admin:
    "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
};

const cssElement = document.getElementById("stylesheet");

/**
 * Set the default fallback stylesheet
 * @type {[type]}
 */
const defaultStylesheet = stylesheets.public;

export default function stylesheet(to, from, next) {
  if (to.meta.stylesheet !== from.meta.stylesheet) {
    cssElement.href = stylesheets[to.meta.stylesheet] || defaultStylesheet;
  }

  return next();
}
