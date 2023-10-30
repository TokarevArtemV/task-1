import { createNotes } from './createNotes';
import { refs } from './refs';
import { addNote } from './localStorageAPI';
import { createMarkupNote } from './createMarkupNote';

export function submitForm(evt) {
  evt.preventDefault();
  const newNote = createNotes(evt);
  addNote(newNote);
  const markup = createMarkupNote(newNote);
  refs.listEl.insertAdjacentHTML('beforeend', markup);
  evt.target.reset()
}
