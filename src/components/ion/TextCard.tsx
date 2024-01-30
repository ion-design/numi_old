// Generated with Ion on 1/29/2024, 5:55:36 PM
// Figma Link: https://www.figma.com/file/7qUnuygDS8Mwshhy6TYXa5?node-id=3005:2376
type TextCardProps = {
  text?: string;
};

function TextCard({ text = "" }: TextCardProps) {
  return (
    <div className="flex h-fit w-[358px] flex-col items-center justify-center rounded-lg bg-white p-4 text-base text-gray-500 shadow-[0_1px_2px_0_rgba(0,0,0,0.08)]">
      <div>{text}</div>
    </div>
  );
}
export default TextCard;
