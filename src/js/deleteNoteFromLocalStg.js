import { getNotes, clearStoradge, KEY_STORAGE } from './localStorageAPI';

export function deleteNoteFromLocalStg(evt) {
  if (evt.target.textContent === 'Удалить' && (evt.target = 'BUTTON')) {
    const noteEl = document.querySelector(`#${evt.target.id}`).parentElement;
    const newNotes = getNotes().filter(notes => notes.id !== evt.target.id);
    clearStoradge(KEY_STORAGE);
    localStorage.setItem(KEY_STORAGE, JSON.stringify(newNotes));
    noteEl.remove();
  }
}