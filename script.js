function addNote() {
    const noteInput = document.getElementById('noteInput').value;
    if (noteInput.trim() !== '') {
        const notesList = document.getElementById('notesList');
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.innerHTML = `<p>${noteInput}</p>`;
        notesList.appendChild(noteElement);
        document.getElementById('noteForm').reset();
    }
}
