import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex mt-10">
        <Sidebar />
        <main className="flex-1">
          <Header />
          <Buttons />
          <div className="mb-20 md:mb-0">
            <div className="p-3 border-b border-gray-500 text-lg py-6">
              Transaction History
            </div>
            <div className="p-3 border-b border-gray-500 text-lg py-6">
              Notification
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
