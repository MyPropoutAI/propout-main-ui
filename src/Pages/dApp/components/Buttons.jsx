const buttons = [
  { name: "Fund wallet", path: "https://propout.onrender.com/" },
  { name: "Withdraw", path: "" },
  { name: "Stake", path: "" },
  { name: "Swap", path: "/blog" },
];

const Buttons = () => {
  const leftButtons = buttons.slice(0, 2);
  const rightButtons = buttons.slice(2);

  return (
    <div className="p-10 pb-14 flex justify-between border-b border-gray-500">
      <div className=" flex gap-6">
        {leftButtons.map((button) => (
          <button
            key={button.name}
            className=" rounded-full bg-[#e238c1] p-2 px-8 text-white"
            style={{ paddingInline: "30px" }}
          >
            <a href={button.path}>{button.name}</a>
          </button>
        ))}
      </div>

      <div className=" flex gap-6 ">
        {rightButtons.map((button) => (
          <button
            key={button.name}
            className="rounded-full bg-[#e238c1] p-2 text-white px-8"
            style={{ paddingInline: "30px" }}
          >
            <a href={button.path}>{button.name}</a>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Buttons;
