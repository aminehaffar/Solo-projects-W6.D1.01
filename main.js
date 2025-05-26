
      function togglePopup() {
            const overlay = document.getElementById('popupOverlay');
            overlay.classList.toggle('show');
        }

      function addNote(event) {
  event.preventDefault();

  var input = document.getElementById('noteInput');
  var text = input.value;
  if (text === "") return;

  var noteDiv = document.createElement('div');
  noteDiv.className = 'note';
  noteDiv.style.backgroundColor = getRandomColor();

  var span = document.createElement('span');
  span.textContent = text;
  span.className = 'span';

  var deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.id = 'del'
  deleteButton.onclick = function() {
    noteDiv.remove();
  };

  var markReadButton = document.createElement('button');
  markReadButton.textContent = 'Mark Done';
  markReadButton.id = 'read'
  markReadButton.onclick = function () {
  span.style.textDecoration = 'line-through';
};

  noteDiv.appendChild(span);
  noteDiv.appendChild(deleteButton);
  noteDiv.appendChild(markReadButton);

  var container = document.getElementById('notesContainer');
  container.appendChild(noteDiv);

  input.value = '';
  togglePopup();
}


document.querySelector('.form-container').addEventListener('submit', addNote);

var colors = ['#FFD700', '#FF7F50', '#87CEFA', '#90EE90', '#FF69B4', '#FFA07A', '#D8BFD8', '#F0E68C'];
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
