import './App.css'

function App() {
  return (
    <>
      <div className="flex justify-center">
            <div className="w-4/5 mt-20 max-w-4xl">
                <header className="mb-18">
                  <div className='flex justify-between'>
                    <a href="https://github.com/koipix" className="inline-flex items-center">
                        <img src="https://avatars.githubusercontent.com/u/92094832?v=4" 
                             alt="miii"
                             className="h-28 rounded-xl mr-8"/>
                        <span className="text-gray-200 text-3xl">
                            Koi :3
                        </span>
                    </a>
                    <nav className='flex items-center'>
                      <ul className='flex flex-inline text-xl font-medium gap-x-3'>
                        <li><a href="" className='text-pink-300'>Home</a> |</li>
                        <li><a href="" className='text-pink-300'>About</a> |</li>
                        <li><a href="" className='text-pink-300'>Projects</a></li>
                      </ul>
                    </nav>
                  </div>
                </header>
                <main>
                    <section>
                        <h1 className="text-white text-3xl font-semibold">
                            Hi, I'm
                            <div className="mt-3 text-pink-300">
                                <span className="text-base text-gray-400">(ja) </span>
                                コイ
                                <br/>
                                <span className="text-base text-gray-400">(ch) </span>
                                鲤
                                <br/>
                                <span className="text-base text-gray-400">(en) </span>
                                Koi
                            </div>
                        </h1>
                        <p className="text-2xl text-gray-200 mt-10 font-medium">
                            An aspiring student currently working on small projects specially game-dev and also anime art!
                        </p>
                    </section>
                </main>
            </div>
        </div>
    </>
  )
}

export default App
