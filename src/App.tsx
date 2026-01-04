import './App.css'

//JS object 
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
}


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
      <br />
      {/* Js onject accessing */}
      <h1>{car.brand} {car.model}</h1>
      <h2>Year: {car.year}</h2>
    </div>
    </>
  )
}

export default App