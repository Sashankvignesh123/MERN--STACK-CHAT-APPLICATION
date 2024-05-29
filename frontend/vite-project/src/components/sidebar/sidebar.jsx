 // Ensure the case matches the filename exactly
 import Conversations from "./Conversations";
 import LogoutButton from "./LogoutButton";
import SearchInput from "./searchinput";

const Sidebar = () => {
  return (
    <div className="border-r border-slate p-4 flex flex-col">
    <SearchInput />
      <div className="divider px-3"></div>
       <Conversations />
       <LogoutButton /> 
    </div>
  )
}

export default Sidebar;
