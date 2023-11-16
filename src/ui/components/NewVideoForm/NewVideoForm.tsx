import React, { useState } from "react";

const NewVideoForm = () => {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [url, setUrl] = useState("");
  const [cover, setCover] = useState("");

  const save = () => {
    const newVideo = {
      title,
      duration,
      url,
      cover,
    };
    reset();
  };

  const reset = () => {
    setTitle("");
    setDuration("");
    setUrl("");
    setCover("");
  };

  return (
    <div className="form">
      <label htmlFor="title">Título:</label>
      <input
        type="text"
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />
      <label htmlFor="duration">Duração:</label>
      <input
        type="text"
        onChange={(event) => setDuration(event.target.value)}
        value={duration}
      />
      <label htmlFor="url">Vídeo:</label>
      <input
        type="text"
        onChange={(event) => setUrl(event.target.value)}
        value={url}
      />
      <label htmlFor="cover">Capa:</label>
      <input
        type="text"
        onChange={(event) => setCover(event.target.value)}
        value={cover}
      />

      <button onClick={save}>Salvar</button>
    </div>
  );
};

export default NewVideoForm;
