import CardContent from "./CardContent";

function Card() {
  return (
    <div className="flex flex-col bg-DarkGrayishBlue lg:max-w-[500px]  h-[250px] min-h-[250px] m-auto rounded-xl p-7">
      <CardContent />
    </div>
  );
}

export default Card;
