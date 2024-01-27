const links = [
  { name: "Home", path: "/" },
  { name: "List", path: "/list" },
  { name: "Marketplace", path: "/marketplace" },
  { name: "Blog", path: "/blog" },
];

const Sidebar = () => {
  return (
    <div className="min-h-screen overflow-auto bg-[#320051] w-60 pt-10 hidden md:block">
      {links.map((link) => (
        <div
          key={link.name}
          className="px-4 py-3 text-lg text-gray-200 fon-semibold border-b"
        >
          <a href={link.path} className="block h-full">
            {link.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
