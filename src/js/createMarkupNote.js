export function createMarkupNote({ taskName, taskText, id }) {
  return `<li class="task-list-item">
       <button class="task-list-item-btn" id=${id}>Удалить</button> <h3>${taskName}</h3>
      <p>${taskText}</p>
    </li>`;
}
