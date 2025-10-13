export default function EventCard() {
  return (
    <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
      <div class="h-48 bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center">
        <span class="text-6xl">🎵</span>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold mb-2">Summer Music Festival</h3>
        <p class="text-gray-600 mb-4">
          Join us for an unforgettable night of music with top artists from
          around the world.
        </p>
        <div class="flex justify-between items-center mb-4">
          <span class="text-purple-600 font-semibold">📅 July 15, 2024</span>
          <span class="text-green-600 font-bold text-xl">$89</span>
        </div>
        <button
          onclick="showEventDetails(1)"
          class="w-full btn-primary cursor-pointer bg-gradient-to-br from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
