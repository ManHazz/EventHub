import Navbar from "./blocks/header";
import "./index.css";
import EventCard from "./blocks/eventcard";

function App() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-br from-blue-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl py-15 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Amazing Events
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Book tickets for concerts, workshops, conferences and more
          </p>

          <div className="max-w-2xl mx-auto bg-white rounded-full p-2 shadow-2xl">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search events, artists, venues..."
                className="flex-1 px-6 py-4 text-gray-700 bg-transparent outline-none text-lg"
              />
              <button className="bg-gradient-to-br from-blue-500 to-purple-600 btn-primary text-white px-8 py-4 rounded-full font-semibold">
                🔍 Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-gradient-to-br from-blue-100 to-blue-200 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">
            Featured Events
          </h2>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
