
export default function VideoBackGround() {
  return (
    <div className="absolute inset-0 -z-10">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/4eeoleNpEL8?si=Z2lVV3VfwQkAp2kM&autoplay=1&mute=1&controls=0&loop=1&playlist=4eeoleNpEL8"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
