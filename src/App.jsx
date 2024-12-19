import { useState } from 'react'

function App() {
  const [accepted, setAccepted] = useState(false)
  const [noButtonStyle, setNoButtonStyle] = useState({})

  const moveButton = () => {
    const x = Math.random() * (window.innerWidth - 200)
    const y = Math.random() * (window.innerHeight - 100)
    setNoButtonStyle({ position: 'absolute', left: `${x}px`, top: `${y}px` })
  }

  if (accepted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-100 to-purple-100 p-4 success-animation">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-8">
            Yaaay! 🎉
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6">
            Thank you for saying yes! 💖
          </p>
          <p className="text-lg md:text-xl text-gray-600">
            Let's make it a memorable date! 🌹
          </p>
          <div className="mt-8">
            <img
              src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
              alt="Celebration"
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-100 to-purple-100 p-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-4">
          Hey Cutie! 🌸
        </h1>
        <p className="text-xl md:text-2xl text-gray-700">
          I have a question for you...
        </p>
      </div>
      
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full mx-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
          Will you go on a date with me? 🥺
        </h2>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => setAccepted(true)}
            className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-lg"
          >
            Yes! 😊
          </button>
          
          <button
            onClick={moveButton}
            style={noButtonStyle}
            className="moving-button px-8 py-3 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-lg"
          >
            No 😔
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
