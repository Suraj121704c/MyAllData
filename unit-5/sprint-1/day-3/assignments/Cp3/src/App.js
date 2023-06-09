import "./App.css";
import useTimeout from "./hooks/useTimeout";
import useOnlineStatus from "./hooks/useOnlineStatus";

function App() {
  // bring useTimeout hook here
  const { ready } = useTimeout(5000);
  // bring useOnlineStatus hook here
  const { isUserOnline } = useOnlineStatus();

  return (
    <div className="App">
      <h1>Custom Hooks</h1>

      <h3>Timeout</h3>
      {ready && <div data-testid="timeout-div">After the timeout</div>}

      <br />
      <h3>Online Status</h3>

      {/* If the user's network status is online, show this div only */}

      {/* If the user's network status is offline, show this div only */}

      <div>
        {isUserOnline ? (
          <div data-testid="online-status">Online 🟢</div>
        ) : (
          <div data-testid="offline-status">Offline 🔴</div>
        )}
      </div>
    </div>
  );
}

export default App;
