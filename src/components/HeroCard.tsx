interface Card {
  title: string;
  desc: string;
}

export const HeroCard = async ({ advantages }: { advantages: Card[] }) => {
  const cardsData = advantages;

  return (
    <div className="fade-in-5s w-full hidden lg:flex items-center pt-10 text-white font-extrabold space-x-5 z-10">
      {cardsData &&
        cardsData.map((card: Card, index: number) => {
          return (
            <div
              key={index}
              className="w-1/4 flex flex-col space-y-2 py-5 mr-5 "
            >
              <h3 className="border-t-2 border-white pt-3 w-fit">
                {card.title}
              </h3>
              <h4 className="text-white/80">{card.desc}</h4>
            </div>
          );
        })}
    </div>
  );
};
