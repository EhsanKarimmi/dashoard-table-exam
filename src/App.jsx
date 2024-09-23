import Table from "./components/Table";

function App() {
    return (
        <div className="w-full h-screen overflow-hidden  grid grid-cols-12">
            {/* sidebar component */}
            <aside className="col-span-2 h-full bg-gray-500 text-white flex justify-center items-center">
                <h4 className="font-semibold text-2xl uppercase">Sidebar</h4>
            </aside>
            {/* table component */}
            <div className="col-span-10 flex flex-col justify-between items-start w-full">
                <div className="h-1/6 w-full bg-gray-300 flex justify-center items-center">
                    <h4 className="font-semibold text-2xl uppercase">Options</h4>
                </div>
                <div className="w-full h-5/6 pr-1 overflow-scroll">
                    <Table />
                    {/* buttons */}
                </div>
                <div className="w-full bg-gray-300 flex justify-center items-center">
                    <h4 className="font-semibold text-2xl uppercase py-3">Buttons</h4>
                </div>
            </div>
        </div>
    );
}

export default App;
