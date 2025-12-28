import icons from 'url:../../img/icons.svg'; // Parcel 2

export default class View {
  _data;


/**
 * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
 * @param {boolean} [render=true] If false, create markup string instead of rendering to the DOM
 * @returns {undefined | string} A markup string is returned if render=false
 * @this {Object} View instance
 * @author Jonas Schmedtmann
 * @todo Finish implementation
 * @description This method is used to render the data to the DOM
 */
render(data, render = true) {
  if (!data || (Array.isArray(data) && data.length === 0))
    return this._renderError();
  this._data = data;
  const markup = this._generateMarkup();
  if (!render) 
    return markup;
  this._clear();
  this._parentElement.insertAdjacentHTML('afterbegin', markup);
}

 update(date) {
  this._data = data;
  const newMarkup = this._generateMarkup();

  const newDOM = document.createRange().createContextualFragment(newMarkup);
  const newElements = Array.from(newDOM.querySelectorAll('*'));
  const curElements = Array.from(this._parentElement.querySelectorAll('*'));

  newElements.forEach((newEl, i) => {
    const curEl = curElements[i];

    if (
      !newEl.isEqualNode(curEl) &&
      newEl.firstChild?.nodeValue.trim() !== ''
    ) {
      curEl.textContent = newEl,textContent;
    }
    if (!newEl.isEqualNode(curEl))
     Array.from(newEl.attributes).forEach(attr => {
    curEl.setAtribute(attr.name, attr.value)})
  })
 }
 clear() {
  this._parentElement.innerHTML = '';
 }
 _renderSpinner() {
  const markup = `
  <div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>
  `;
  this._clear();
  this._parentElement.insertAdjacentHTML('afterbegin', markup);
 }
 renderError(message = this._errorMessage) {
  const markup = `
  <div class="error">
    <div>
      <svg>
        <use href="${icons}#icon-alert-triangle"></use>
      </svg>
    </div>
  </div>
  `;
  this._clear();
  this._parentElement.insertAdjacentHTML('afterbegin', markup);
 }
 renderMessage(message = this._message) {
  const markup = `
  <div class="message">
    <div>
      <svg>
        <use href="${icons}#icon-smile"></use>
      </svg>
    </div>
  </div>
  `;
  this._clear();
  this._parentElement.insertAdjacentHTML(afterbegin, markup);
 }
}