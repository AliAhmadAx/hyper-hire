import Image from "next/image";

const CustomCheckbox = () => {
  return (
    <div className="w-full flex space-x-3 items-center">
      <div className="bg-gray-200 rounded-lg p-2 flex items-center justify-center">
        <Image
          src={"/assets/Check.svg"}
          alt="checkbox icon"
          width={14}
          height={14}
        />
      </div>

      <p>random text</p>
    </div>
  );
};

export default CustomCheckbox;
