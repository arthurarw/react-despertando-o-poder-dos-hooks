import "./App.css";
import { VideoProvider } from "./data/contexts/VideoContext";
import NewVideoForm from "./ui/components/NewVideoForm/NewVideoForm";
import VideoList from "./ui/components/VideoList/VideoList";
import VideoPlayer from "./ui/components/VideoPlayer/VideoPlayer";

function App() {
  return (
    <div className="App">
      <VideoProvider>
        <NewVideoForm />
        <VideoPlayer />
        <VideoList />
      </VideoProvider>
    </div>
  );
}

export default App;
