import tableData from "../db/tableData.json";
function Table() {
    console.log(tableData);

    return (
        <table className="">
            <thead className=" ">
                <tr className="w-full flex justify-start items-start border-b-2 border-zinc-950 border-opacity-50">
                    {tableData.Entity.columns.map((column) => {
                        return (
                            <th
                                key={column.columnID}
                                className="bg-gray-200  py-2 w-[13rem] flex justify-center items-center border border-zinc-950 border-opacity-50 font-medium text-sm hover:bg-gray-300 cursor-pointer"
                            >
                                {column.title}
                            </th>
                        );
                    })}
                </tr>
            </thead>
            <tbody className="pt-10">
                <tr className="flex justify-between items-center border-b-2 border-gray-900 border-opacity-30 bg-gray-300 py-3">
                    {tableData.Entity.columns.map((column) => {
                        return (
                            <td
                                key={column.columnID}
                                className="w-[13rem] flex justify-center items-center"
                            >
                                Data
                            </td>
                        );
                    })}
                </tr>
            </tbody>
        </table>
    );
}

export default Table;
