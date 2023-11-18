import "./App.css";
import { VideoProvider } from "./data/contexts/VideoContext";
import { useOnlineStatus } from "./data/hooks/useOnlineStatus";
import NewVideoForm from "./ui/components/NewVideoForm/NewVideoForm";
import VideoList from "./ui/components/VideoList/VideoList";
import VideoPlayer from "./ui/components/VideoPlayer/VideoPlayer";

function App() {
  const isOnline = useOnlineStatus();

  return (
    <div className="App">
      <VideoProvider>
        {isOnline ? (
          <>
            <NewVideoForm />
            <VideoPlayer />
            <VideoList />
          </>
        ) : (
          <h3>Você está Offline.</h3>
        )}
      </VideoProvider>
    </div>
  );
}

export default App;
