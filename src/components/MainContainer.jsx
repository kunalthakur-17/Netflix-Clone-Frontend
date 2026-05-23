import VideoBackGround from "./VideoBackGround";
import VideoTitle from "./VideoTitle";

export default function MainContainer() {
  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      <VideoTitle />
      <VideoBackGround/>

    </div>
  );
}
