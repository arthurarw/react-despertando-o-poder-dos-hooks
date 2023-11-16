import "./App.css";
import { VideoContext } from "./data/contexts/VideoContext";
import NewVideoForm from "./ui/components/NewVideoForm/NewVideoForm";
import VideoList from "./ui/components/VideoList/VideoList";
import VideoPlayer from "./ui/components/VideoPlayer/VideoPlayer";

function App() {
  return (
    <div className="App">
      <VideoContext>
        <NewVideoForm />
        <VideoPlayer />
        <VideoList />
      </VideoContext>
    </div>
  );
}

export default App;
