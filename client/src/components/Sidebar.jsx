import { grey } from "@mui/material/colors";
import assets, { userDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ selectedUser, setSelectedUser }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`bg-[#8185B2]/10 h-full p-5 rounded-r-xl overflow-y-scroll text-white ${
        selectedUser ? "max-md:hidden" : ""
      }`}
    >
      <div className="pb-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <img src={assets.logo} alt="logo" className="max-w-40" />

          {/* Menu */}
          <div className="relative py-2 group">
            <img
              src={assets.menu_icon}
              alt="menu_icon"
              className="max-h-5 cursor-pointer"
            />

            <div
              className="absolute top-full right-0 z-20 w-32 p-5 rounded-md
              bg-[#282142] border border-gray-600 text-gray-100 hidden
              group-hover:block"
            >
              <p
                onClick={() => navigate("/profile")}
                className="cursor-pointer text-sm"
              >
                EditProfile
              </p>
              <hr className="my-2 border-t border-gray-600" />
              <p className="cursor-pointer text-sm">Logout</p>
            </div>
          </div>
        </div>

        <div
          className="bg-[#282142] rounded-full flex items-center gap-2
        py-3 px-4"
        >
          <img src={assets.search_icon} alt="search_icon" className="w-3" />
          <input
            type="text"
            placeholder="Search user"
            className="bg-transparent outline-none ml-2 w-full text-sm placeholder-gray-400"
          />
        </div>
      </div>

      <div className="flex flex-col">
        {userDummyData.map((user, index) => (
          <div
            onClick={() => {
              setSelectedUser(user);
            }}
            key={index}
            className={`relative flex items-center gap-2 p-2 pl-4 rounded cursor-pointer max-sm:text-sm
        ${selectedUser?._id === user._id ? "bg-[#635FFA]/30" : ""}`}
          >
            <img
              src={user?.profilePic || assets.avatar_icon}
              alt=""
              className="w-[35px] aspect-[1/1] rounded-full"
            />
            <div className="flex flex-col leading-5">
              <p>{user.fullName}</p>
              {index < 3 ? (
                <span className="text-green-500 text-xs">Online</span>
              ) : (
                <span className="text-neutral-400 text-xs">Offline</span>
              )}
            </div>
            {index > 2 && (
              <p className="absolute top-4 right-4 text-xs h-5 w-5 flex justify-center items-center rounded-full bg-violet-500/50">
                {index}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
