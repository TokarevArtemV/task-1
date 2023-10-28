import { nanoid } from "nanoid";

export function createNotes(evt) {
  const newNote = {id: nanoid()};
  new FormData(evt.currentTarget).forEach((value, key) => {
    newNote[key] = value;
  });
  return newNote;
}
