function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-[25vh] px-8">
      <div className="flex flex-col">
        
        {/* Game Title */}
        <div className="flex items-center gap-4">
          <img src="enemy.png" alt="Enemy" className="w-10 h-10" />
          <h1 className="text-5xl font-bold tracking-wide text-gray-900">
            UNI MAZE
          </h1>
        </div>
        
        {/* Subtitle */}
        <p className="text-lg text-gray-700 tracking-wide mt-2">
          A maze game developed at UoY!
        </p>
        
        {/* Instructions Section */}
        <div className="flex flex-col mt-10">
          <h2 className="text-2xl font-bold tracking-wide text-gray-900">
            INSTRUCTIONS
          </h2>
          
          <ul className="list-disc list-inside space-y-2 text-base text-gray-800 tracking-wide mt-3">
            <li className="leading-relaxed">
              <span className="font-semibold">Navigate the maze</span> using arrow keys or WASD controls
            </li>
            <li className="leading-relaxed">
              <span className="font-semibold">Find the exit</span> before time runs out
            </li>
            <li className="leading-relaxed">
              <span className="font-semibold">Avoid enemies</span> who live throughout the university
            </li>
          </ul>
        </div>
        
        {/* System Requirements */}
        <p className="text-lg text-gray-700 tracking-wide mt-8">
          Java 8+
        </p>
        
        <div className="text-base text-gray-600 tracking-wide mt-2 max-w-xl">
          <p>MacOS has security controls against Java files - to run use:</p>
          <p className="font-mono mt-1">'java -jar ~/Downloads/uni-maze.jar'</p>
          <p className="mt-1">in the terminal</p>
        </div>
        
        {/* Download Button */}
        <a 
          href="/uni-maze.jar" 
          download="uni-maze.jar"
          className="mt-4 px-8 py-3 bg-gray-900 text-white font-bold text-lg tracking-wide hover:bg-gray-700 transition-colors self-start"
        >
          DOWNLOAD NOW
        </a>
        
      </div>
    </div>
  )
}

export default App
