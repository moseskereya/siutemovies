import Nav from "../Header/Nav"
import Footer from "../Footer/Footer"
export default function Example() {
  return (
    <>
    <Nav />
      <main className="relative min-h-screen"> {/* Set to min-h-screen for larger screens, min-h-0 for smaller screens */}
      <img
        src="https://r4.wallpaperflare.com/wallpaper/951/583/798/fantasy-art-warrior-dark-souls-iii-dark-souls-wallpaper-5930c82d514a9d8bd637b87f30d1e6dd.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
      />
    <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:py-24 lg:py-32"> {/* Adjusted padding for smaller height */}
      <p className="text-base font-semibold leading-8 text-white">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
      <p className="mt-4 text-base text-white/70 sm:mt-6">Sorry, we couldn’t find the page you’re looking for.</p>
      <div className="mt-10 flex justify-center">
        <a href="/" className="text-sm font-semibold leading-7 text-white">
          <span aria-hidden="true">&larr;</span> Back to home
        </a>
      </div>
    </div>
    </main>
    <Footer />
    </>
  )
}
