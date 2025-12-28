import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class PrevieviewView extends View {

  _generateMarkup() {
    const id = window.location.hash.slice(1);

    return `
    <li class="preview">
      <a class="preview__link ${
        this._data.id === id ? 'preview__link--active' : ''
      }" href="#${this._data.id}">
        <figure class="preview__fig">
          <img src="${this._data.image}" alt="${this._data.title}" />
        </figure>
      </a>
    </li>
    `;
  }
}
export default new PrevieviewView();