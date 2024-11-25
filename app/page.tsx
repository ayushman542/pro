import FeedCard from "@/component/feed";
import { FaTwitter } from "react-icons/fa";
import { FaSearch, FaHome } from "react-icons/fa";

interface TwitterSidebutton {
  title: string;
  icon: React.ReactNode;
}

const SidebarMenuItems: TwitterSidebutton[] = [
  {
    title: "Home",
    icon: <FaHome />,
  },
  {
    title: "Search",
    icon: <FaSearch />,
  },
  {
    title: "Notifications",
    icon: <FaHome />, // Replace with appropriate icon for "Notifications"
  },
  {
    title: "Messages",
    icon: <FaHome />, // Replace with appropriate icon for "Messages"
  },
  {
    title: "Bookmarks",
    icon: <FaHome />, // Replace with appropriate icon for "Bookmarks"
  },
];

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen px-6 sm:px-16 lg:px-56">
      <div className="col-span-3 pt-8">
        {/* Twitter Icon */}
        <div className="text-4xl h-fit hover:bg-red-600 rounded-full p-2 cursor-pointer transition-all">
          <FaTwitter />
        </div>

        {/* Sidebar Menu */}
        <nav className="mt-4 text-2xl">
          <ul className="space-y-4"> {/* Added space-y-4 for vertical spacing */}
            {SidebarMenuItems.map((item) => (
              <li
                className="flex items-center gap-4 px-4 py-4 rounded-lg cursor-pointer hover:bg-gray-300 transition-all"
                key={item.title}
              >
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Button with rounded corners */}
        <button className="bg-blue-500 text-white py-2 px-4 rounded-sm mt-6">
          Small Rounded Button
        </button>
      </div>

      {/* Main Content Area */}
      <div className="col-span-6 border-r-2 border-slate-900 px-4 py-8">
        <h1 className="text-3xl font-semibold"><FeedCard/></h1>
      </div>

      {/* Right Sidebar */}
      <div className="col-span-3 bg-blue-500 p-4">
        <h2 className="text-white">Trending</h2>
      </div>
    </div>
  );
}
