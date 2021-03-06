import React from 'react';
function App() {
  const [state, setstate] = React.useState(false);
  return (
    <div
      onClick={() => setstate(!state)}
      className="App"
      style={{
        color: 'white',
        height: '100vh',
        background: state ? 'red' : 'blue',
      }}
    >
      <header className="App-header">
        <h1>I am puppy side rendered 🐶 woof</h1>
      </header>
    </div>
  );
}

export default App;
