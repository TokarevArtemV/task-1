import { createNotes } from './createNotes';

export function submitForm(evt) {
  evt.preventDefault();
  const newNote = createNotes(evt);
}
