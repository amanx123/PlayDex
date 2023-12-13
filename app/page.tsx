import GameCard from '@/components/GameCard'

export default function Home() {
  const games = [
    { name: "Chess", image: "https://images.unsplash.com/photo-1560174038-da43ac74f01b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2657&q=80" },
    { name: "Wordle", image: "https://nytco-assets.nytimes.com/2022/01/Screen-Shot-2022-01-30-at-10.05.09-PM.png" },
    { name: "Pong", image: "https://images.unsplash.com/photo-1584813539806-2538b8d918c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" },
    { name: "Tic Tac Toe", image: "https://images.unsplash.com/photo-1668901382969-8c73e450a1f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80" },
    { name: "Ludo", image: "https://cdn.pixabay.com/photo/2023/01/21/16/14/dice-7734660_1280.jpg" },
    { name: "Lango", image: "https://images.unsplash.com/photo-1565022536102-f7645c84354a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2673&q=80" }
  ]

  return (
    <>
      {/* <header className='h-20 py-10 flex items-center justify-center bg-orange-600 text-5xl tracking-wider font-extrabold text-amber-200'>
        PLAYDEX
      </header>
      <span className='flex items-center justify-center mt-10 text-2xl font-bold font-mono'>
        All Games
      </span>
      <main className='max-w-[1300px] mx-auto p-10 flex gap-10 items-center justify-center flex-wrap'>
        {games.map((game, key) => (
          <GameCard key={key} name={game.name} image={game.image} />
        ))}
      </main> */}
      {/* Maintenance */}
      <div className='flex items-center justify-center text-4xl font-bold mx-auto h-screen flex-wrap px-8'>
        Under Maintenance , will launch soon.
      </div>

    </>
  )
}
