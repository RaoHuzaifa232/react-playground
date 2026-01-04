import './App.css'

// Profile component
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

function App() {
  return (
    // Jsx syntax
    <>
    <div>
      <Profile />
    </div>
    </>
  )
}

export default App