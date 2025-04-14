import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faXTwitter, faItchIo } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Home() {
    return (
      <>
        <section>
            <h1 className="text-white text-3xl font-semibold">
                Hi, I'm
                <div className="mt-3 text-pink-200">
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
                An aspiring student currently working on small projects as indie game-dev, research and also anime art!
            </p>
            <div className='mt-15'>
                <ul className='flex flex-row gap-x-10 text-5xl font-normal'>
                    <li className='flex flex-col'>
                        <a href="https://github.com/koipix" className='flex flex-col hover:text-pink-300'>
                            <FontAwesomeIcon icon={faGithubAlt}/>
                        </a>
                        <p className='text-xl mt-2'>Github</p>
                    </li>
                    <li className='flex flex-col'>
                    <a href="https://x.com/Koipixu" className='flex flex-col hover:text-pink-300'>
                            <FontAwesomeIcon icon={faXTwitter}/>
                        </a>
                        <p className='text-xl mt-2'>Twitter</p>
                    </li>
                    <li className='flex flex-col'>
                    <a href="https://koipix.itch.io/" className='flex flex-col hover:text-pink-300'>
                            <FontAwesomeIcon icon={faItchIo}/>
                        </a>
                        <p className='text-xl mt-2'>Itch.io</p>
                    </li>
                    <li className='flex flex-col'>
                    <a href="mailto:koi.devt@gmail.com" className='flex flex-col hover:text-pink-300'>
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </a>
                        <p className='text-xl mt-2'>Email</p>
                    </li>
                </ul>
            </div>
        </section>
        <section className="mt-15">
          <h1 className="text-3xl mb-5"> Projects </h1>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-mantle p-4 text-accent shadow-md transition-shadow">
              <dt>
                <span className="underline underline-offset-3 hover:decoration-2">
                  <a href="https://koipix.itch.io/inevitable-fate" className="text-2xl text-pink-200">
                    Inevatable Fate
                  </a>
                </span>
              </dt>
              <dd className="mt-3 text-gray-200 text-lg">
                A rougelite game project we made as a team in submission for Brackey's Game Jam
              </dd>
            </div>
            <div className="rounded-lg bg-mantle p-4 text-accent shadow-md transition-shadow">
              <dt>
                <span className="underline underline-offset-3 hover:decoration-2">
                  <a href="https://github.com/Koipix/Arona" className="text-2xl text-pink-200">
                    Arona
                  </a>
                </span>
              </dt>
              <dd className="mt-3 text-gray-200 text-lg">
                Arona is a flexible discord bot with fun features like minigames and integrated language model
              </dd>
            </div>
            <div className="rounded-lg bg-mantle p-4 text-accent shadow-md transition-shadow">
              <dt>
                <span className="underline underline-offset-3 hover:decoration-2">
                  <a href="https://github.com/Koipix/todo" className="text-2xl text-pink-200">
                    Todo
                  </a>
                </span>
              </dt>
              <dd className="mt-3 text-gray-200 text-lg">
                A simple lightweight todo cli program written in RUST for the sillies
              </dd>
            </div>
            <div className="rounded-lg bg-mantle p-4 text-accent shadow-md transition-shadow">
              <dt>
                <span className="underline underline-offset-3 hover:decoration-2">
                  <a href="https://github.com/Koipix/4cboard" className="text-2xl text-pink-200">
                    4cboard
                  </a>
                </span>
              </dt>
              <dd className="mt-3 text-gray-200 text-lg">
                A anonymous confession bulletin board inspired by 4chan's anonymity system for my school project
              </dd>
            </div>
          </dl>
        </section>
      </>
    )
}

export default Home
