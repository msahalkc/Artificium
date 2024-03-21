import { NextUIProvider } from "@nextui-org/react";
import SideBar from './components/sidebar/SideBar'
import MainPage from './components/mainpage/MainPage'

function App() {
  return (
    <div className="flex h-screen bg-[#131619]">
      <SideBar />
      <MainPage />
    </div>
  );
}

export default App;
