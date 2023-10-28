import { createMarkupNote } from './createMarkupNote';
import { refs } from './refs';
import { getNotes } from './localStorageAPI';

export function renderNotes() {
  const currentStorage = getNotes();
  const currentMarkup = currentStorage.map(createMarkupNote).join('');
  refs.listEl.insertAdjacentHTML('beforeend', currentMarkup);
}
