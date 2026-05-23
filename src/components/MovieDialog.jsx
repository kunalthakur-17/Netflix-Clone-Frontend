import { useSelector, useDispatch } from "react-redux";
import { setOpenAction } from '../redux/movie/actions';
import VideoBackground from './VideoBackground';

export default function MovieDialog() {
  const open = useSelector(store => store.movieUIReducer?.open);
  const id = useSelector(store => store.movieUIReducer?.id);
  const dispatch = useDispatch();

  if (!open) return null;

  const handleClose = () => {
    dispatch(setOpenAction(false));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={handleClose}>
      <div className="relative w-[90%] max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={handleClose}
          className="absolute -top-8 right-0 text-white text-2xl font-bold hover:text-red-500"
        >
          ✕
        </button>
        <VideoBackground movieId={id} bool={true} />
      </div>
    </div>
  );
}
