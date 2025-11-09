function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-[25vh] px-8 pb-12">
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
          A maze game developed at UoY
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
        
        {/* Download Buttons */}
        <div className="flex gap-4 mt-4">
          <a 
            href="uni-maze.jar" 
            download="uni-maze.jar"
            className="px-8 py-3 bg-gray-900 text-white font-bold text-lg tracking-wide hover:bg-gray-700 transition-colors"
          >
            DOWNLOAD JAR
          </a>
          <a 
            href="uni-maze-zip.zip" 
            download="uni-maze-zip.zip"
            className="px-8 py-3 bg-gray-900 text-white font-bold text-lg tracking-wide hover:bg-gray-700 transition-colors"
          >
            DOWNLOAD ZIP
          </a>
        </div>
        
      </div>
      
      {/* UML Diagram Section */}
      <div className="w-full max-w-6xl mt-16">
        <h3 className="text-xl font-bold text-gray-900 mb-3">UML Diagram</h3>
        <div className="w-full border border-gray-300 bg-white p-4">
          <img 
            src="UML_DIAGRAM.png" 
            alt="UML Diagram" 
            className="w-full h-auto"
          />
        </div>
      </div>
      
      {/* PDF Viewers - Wider Section */}
      <div className="w-full max-w-6xl mt-16 space-y-8">
        {/* Req1.pdf */}
        <div className="w-full">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Requirements</h3>
          <iframe 
            src="req1.pdf" 
            className="w-full h-[800px] border border-gray-300"
            title="Requirements Document"
          />
        </div>

        {/* Arch1.pdf */}
        <div className="w-full">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Architecture</h3>
          <iframe 
            src="arch1.pdf" 
            className="w-full h-[800px] border border-gray-300"
            title="Architecture Document"
          />
        </div>

        {/* Plan1.pdf */}
        <div className="w-full">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Planning</h3>
          <iframe 
            src="plan1.pdf" 
            className="w-full h-[800px] border border-gray-300"
            title="Planning Document"
          />
        </div>

        {/* Risk1.pdf */}
        <div className="w-full">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Risk Assessment</h3>
          <iframe 
            src="risk1.pdf" 
            className="w-full h-[800px] border border-gray-300"
            title="Risk Assessment Document"
          />
        </div>

        {/* Impl1.pdf */}
        <div className="w-full">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation</h3>
          <iframe 
            src="impl1.pdf" 
            className="w-full h-[800px] border border-gray-300"
            title="Implementation Document"
          />
        </div>
      </div>
    </div>
  )
}

export default App
