import Header from "./Header";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";

export default function Browse() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <MainContainer />
      <div className="px-6">
        <MovieContainer />
      </div>
    </div>
  );
}
