import Image from "next/image";

type checkbox = {
  checked: boolean;
  text: string;
};

export const Checkbox = async ({
  checkboxesData,
}: {
  checkboxesData: checkbox[];
}) => {
  return (
    <div className="w-full flex flex-wrap items-center px-3">
      {checkboxesData.map((data: checkbox, index: number) => {
        return (
          <div
            key={index}
            className="flex justify-center items-center mr-5 mb-5"
          >
            <div className="bg-white rounded-lg p-2 flex items-center justify-center mr-3">
              {data.checked ? (
                <Image
                  src={"/assets/check.svg"}
                  alt="checkbox icon"
                  width={14}
                  height={14}
                />
              ) : (
                <div className="w-[12px] h-[12px] text-white rounded-lg">.</div>
              )}
            </div>

            <p className="text-white font-extrabold text-base">{data.text}</p>
          </div>
        );
      })}
    </div>
  );
};
