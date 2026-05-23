export const MovieCardSkeleton = () => (
  <div className="w-48 pr-2 flex-shrink-0 animate-pulse">
    <div className="w-full h-72 bg-zinc-700 rounded-md" />
  </div>
);

export const MovieListSkeleton = () => (
  <div className="px-8 mb-6">
    <div className="h-8 w-40 bg-zinc-700 rounded mb-3 animate-pulse" />
    <div className="flex gap-2 overflow-hidden">
      {Array.from({ length: 8 }).map((_, i) => (
        <MovieCardSkeleton key={i} />
      ))}
    </div>
  </div>
);

export const MovieDetailSkeleton = () => (
  <div className="min-h-screen bg-black flex flex-col md:flex-row animate-pulse">
    {/* Left */}
    <div className="w-full md:w-1/2 bg-zinc-800 min-h-screen" />
    {/* Right */}
    <div className="w-full md:w-1/2 bg-zinc-900 px-10 py-16 flex flex-col gap-4">
      <div className="h-6 w-24 bg-zinc-700 rounded-full" />
      <div className="h-10 w-3/4 bg-zinc-700 rounded" />
      <div className="h-4 w-1/2 bg-zinc-700 rounded" />
      <div className="flex gap-3 mt-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-6 w-16 bg-zinc-700 rounded" />
        ))}
      </div>
      <div className="mt-4 space-y-2">
        <div className="h-4 w-full bg-zinc-700 rounded" />
        <div className="h-4 w-full bg-zinc-700 rounded" />
        <div className="h-4 w-3/4 bg-zinc-700 rounded" />
      </div>
      <div className="flex gap-2 mt-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-7 w-20 bg-zinc-700 rounded-full" />
        ))}
      </div>
    </div>
  </div>
);
