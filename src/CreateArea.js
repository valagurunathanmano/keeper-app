import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  }

  function submitNote(event) {
    event.preventDefault();

    // Validation: check if title or content is empty
    if (note.title.trim() === "" || note.content.trim() === "") {
      alert("Both Title and Content must be filled out.");
      return; // stop further execution
    }

    props.onAdd(note);

    setNote({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
