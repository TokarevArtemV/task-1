const KEY_STORAGE = 'notes';
export function addNote(newNote) {
  const data = JSON.parse(localStorage.getItem(KEY_STORAGE)) || [];
  data.push(newNote);
  localStorage.setItem(KEY_STORAGE, JSON.stringify(data));
}
