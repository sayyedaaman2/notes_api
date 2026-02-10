function database() {
  let notes = [];
  let currentIndex = 1;

  function createNote(payload) {
    try {
      const { title, content, tags } = payload;

      const noteObj = {
        id: currentIndex++,
        title,
        content,
        tags: tags || [],
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };

      notes.push(noteObj);
      return noteObj;
    } catch (err) {
      console.error(err.message);
      return null;
    }
  }

  function getNotes(id) {
    if (id !== undefined) {
      return notes.find((x) => x.id === id) || null;
    }
    return notes;
  }

  function updateNote(id, payload) {
    const note = notes.find((x) => x.id === id);
    if (!note) return null;

    const { title, content, tags } = payload;

    if (title !== undefined) note.title = title;
    if (content !== undefined) note.content = content;
    if (tags !== undefined) note.tags = tags;

    note.updatedAt = Date.now();
    return note;
  }

  function deleteNote(id) {
    const index = notes.findIndex((x) => x.id === id);
    if (index === -1) return false;

    notes.splice(index, 1);
    return true;
  }

  return {
    createNote,
    getNotes,
    updateNote,
    deleteNote,
  };
}

export default database()