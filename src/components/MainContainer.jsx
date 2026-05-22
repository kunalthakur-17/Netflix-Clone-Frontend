export default function MainContainer() {
  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1600"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-12 max-w-2xl">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg leading-tight">
          Stranger Things
        </h1>
        <p className="mt-4 text-lg text-gray-200 line-clamp-3">
          When a young boy vanishes, a small town uncovers a mystery involving
          secret experiments, terrifying supernatural forces, and one strange
          little girl.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="flex items-center gap-2 bg-white text-black font-bold px-8 py-3 rounded hover:bg-gray-300 transition text-lg">
            ▶ Play
          </button>
          <button className="flex items-center gap-2 bg-gray-500/70 text-white font-bold px-8 py-3 rounded hover:bg-gray-600/70 transition text-lg">
            ℹ More Info
          </button>
        </div>
      </div>
    </div>
  );
}
