import './App.css'

function App() {
  return (
    <>
      <div className="flex justify-center">
            <div className="w-3/5 mg">
                <header className="mb-18">
                    <a href="https://github.com/koipix" className="inline-flex items-center">
                        <img src="https://avatars.githubusercontent.com/u/92094832?v=4" 
                             alt="pfp"
                             className="h-24 rounded-xl mr-8"/>
                        <span className="text-white text-3xl">
                            Koi
                        </span>
                    </a>
                </header>
                <main>
                    <section>
                        <h1 className="text-white text-2xl">
                            Hi, I'm
                            <div className="mt-2 text-fuchsia-500">
                                <span className="text-sm text-gray-400">(ja) </span>
                                コイピクス
                                <br/>
                                <span className="text-sm text-gray-400">(ch) </span>
                                锦鲤图
                                <br/>
                                <span className="text-sm text-gray-400">(en) </span>
                                Koipix
                            </div>
                        </h1>
                        <p className="mt-5 text-xl text-gray-200">
                            An aspiring student currently working on small projects specially game-dev and also Anime Art!
                        </p>
                    </section>
                </main>
            </div>
        </div>
    </>
  )
}

export default App
