import React, { useState } from "react";
import useVideo from "../../../data/hooks/useVideo";

const NewVideoForm = () => {
  const { dispatch } = useVideo();
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("0");
  const [url, setUrl] = useState("");
  const [cover, setCover] = useState("");

  const save = () => {
    const newVideo = {
      title,
      duration,
      url,
      cover,
      id: Math.floor(Math.random() * 100),
    };

    dispatch({ type: "ADD_NEW_VIDEO", value: newVideo });

    reset();
  };

  const reset = () => {
    setTitle("");
    setDuration("0");
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
