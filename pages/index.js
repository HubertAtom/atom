export default function Home() {
  return (
    <section className="container">
      <div className="text-center lg:w-3/4 xl:w-2/3 mx-auto my-20 xl:my-40">

      <p className='text-2xl font-semibold antialiased my-6 max-w-prose mx-auto'>Bienvenue chez atom!</p>
      <h1 className="mb-10">Je crée les sites web que vos clients vont adorer</h1>
      <button><a className="bg-pink hover:bg-orange focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto" href="/contact">Contactez-moi</a></button>
      </div>
    </section>
  )
}
