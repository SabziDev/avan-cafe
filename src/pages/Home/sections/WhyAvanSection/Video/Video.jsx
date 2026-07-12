import Icon from "@/components/Icon/Icon";

const Video = () => {
  return (
    <div className="mt-8 flex-center flex-col">
      <video
        src="/videos/pages/home/why-avan-section/sample-video.webm"
        poster="/videos/pages/home/why-avan-section/sample-video-cover.webp"
        controls
        className="w-200 rounded-4xl border border-primary/20 xl:w-120"
      >
        <track kind="captions" label="زیرنویس در دسترس نیست" default />
      </video>
      <div className="mt-6 flex-items-center h-15 w-80 justify-between gap-2 rounded-full bg-[#D7CCC8] px-6 min-[502px]:h-20 min-[502px]:w-full">
        <img
          src="/images/pictures/pages/home/why-avan-section/insta.webp"
          alt="insta"
          className="scale-80 pb-7"
        />
        <div className="flex-center gap-4">
          <a
            href="https://t.me/SabziDev"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src="/images/pictures/pages/home/why-avan-section/telegram.webp"
              alt="telegram"
              className="cursor-pointer"
            />
          </a>
          <a
            href="https://SabziDev.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src="/images/pictures/pages/home/why-avan-section/youtube.webp"
              alt="youtube"
              className="cursor-pointer"
            />
          </a>
        </div>
        <a
          href="https://instagram.com/SabziDev"
          target="_blank"
          rel="noreferrer noopener"
          className="hidden cursor-pointer rounded-full bg-white px-4 py-2 text-caramel min-[502px]:flex-center min-[502px]:gap-2"
        >
          <span>صفحه اینستاگرام</span>
          <Icon id="insta" className="size-6.5" />
        </a>
      </div>
    </div>
  );
};

export default Video;
