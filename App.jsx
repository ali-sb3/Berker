import './App.css';

function App() {
  return (
    <div className="container">
      <h1>BERKER</h1>
      <iframe
        style={{ borderRadius: "12px", marginTop: "20px" }}
        src="https://open.spotify.com/embed/playlist/7rPmbK3VXBwHhso1VQEQkg?utm_source=generator&theme=0"
        width="100%"
        height="380"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default App;