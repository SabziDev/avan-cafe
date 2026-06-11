import Img from "@/components/Img/Img";

const UserStory = ({ user }) => {
  return (
    <a
      href="https://instagram.com/SabziDev"
      target="_blank"
      rel="noreferrer noopener"
      className="flex-center size-22 flex-col gap-1 p-4 md:size-26 lg:size-max"
    >
      <div
        className="size-full cursor-pointer rounded-full p-1"
        style={{
          background:
            "linear-gradient(-136deg, rgb(105, 50, 197) 0%, rgb(163, 58, 163) 25%, rgb(220, 64, 129) 45%, rgb(231, 82, 110) 75%, rgb(253, 128, 64) 100%)",
        }}
      >
        <Img
          src={user.userImg}
          className="size-full rounded-full bg-caramel p-1"
        />
      </div>
      <span className="text-xs text-white/80">{user.username}</span>
    </a>
  );
};

export default UserStory;
