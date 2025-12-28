class SearchView extends View {
  _parentElement = document.querySelector('.search');

  getQuery () {
    const query = this._parentElement.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }
  clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }
  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      removeEventListener.preventDefault();
      handler();
    })
  }
}
export default new SearchView();