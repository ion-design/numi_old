// Generated with Ion on 1/29/2024, 4:54:38 PM
// Figma Link: https://www.figma.com/file/7qUnuygDS8Mwshhy6TYXa5?node-id=3005:1887
type ProfileCardProps = {
  src: string;
  title: string;
};

function ProfileCard({ src, title }: ProfileCardProps) {
  return (
    <div className="flex h-fit w-full max-w-[360px] flex-col items-start gap-4 rounded-lg bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.08)]">
      <img
        src={src}
        className="flex h-4/5 w-full items-start rounded-lg object-cover"
      />
      <div className="flex w-full items-start bg-white py-2 text-xl font-bold leading-normal text-[#111928]">
        {title}
      </div>
    </div>
  );
}
export default ProfileCard;
