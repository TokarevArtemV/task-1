export function createNotes(evt) {
  const newNote = {};
  new FormData(evt.currentTarget).forEach((value, key) => {
    newNote[key] = value;
  });
  return newNote;
}
