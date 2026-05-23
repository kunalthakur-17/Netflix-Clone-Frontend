import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground';
import {useSelector} from "react-redux";

const MainContainer = () => {
  const movie = useSelector(store => store.nowPlayingMoviesReducer?.data);
  if(!movie) return; // early return in react
 
  const {overview, id, title} = movie[4];
  
  return (
    <div>
        <VideoTitle title={title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer