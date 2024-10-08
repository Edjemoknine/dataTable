import { fakedata } from "@/consatnt/data";
import TableRow from "./TableRow";
import { useCallback, useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import useDebounce from "@/utils/useDebounce";
import { PaginationComp } from "./Pagination";
import { useSongs } from "@/context/SongContext";
import { TabaleItemProps } from "@/types/Song";

console.log(fakedata);
const Table2 = () => {
  const { data, term } = useSongs();
  const haeders = Object.keys(data[0]);

  const [filtredData, setfiltredData] = useState(data);
  const debterm = useDebounce(term, 500);

  // Pagination
  const ItemPerpage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * ItemPerpage;
  const indexOfFirstItem = indexOfLastItem - ItemPerpage;
  const currentItems = filtredData.slice(indexOfFirstItem, indexOfLastItem);
  const pageCount = Math.ceil(filtredData.length / ItemPerpage);
  //

  const filtredSearch = useCallback(() => {
    setfiltredData(
      data.filter(
        (item: TabaleItemProps) =>
          item.song.toLowerCase().includes(debterm.toLowerCase()) ||
          item.artist.toLowerCase().includes(debterm.toLowerCase())
      )
    );
  }, [debterm, data]);

  useEffect(() => {
    filtredSearch();
    setCurrentPage(1);
  }, [term, filtredSearch]);

  return (
    <>
      <TableHeader />
      <div className="table w-full rounded-xl overflow-hidden shadow  border table-auto  border-collapse  border-spacing-2">
        <div className="table-header-group p-4">
          <div className="table-row border-b bg-gray-100">
            {haeders.map((item: string) => (
              <div
                key={item}
                className="table-cell text-left p-3 font-medium capitalize"
              >
                {item}
              </div>
            ))}
            <div className="table-cell text-left p-3 font-medium capitalize">
              Actions
            </div>
          </div>
        </div>
        <div className="table-row-group p-4">
          {currentItems.map((item: TabaleItemProps) => (
            <TableRow item={item} key={item.song} />
          ))}
        </div>
      </div>
      {filtredData.length > ItemPerpage && (
        <div className="my-6">
          <PaginationComp
            currentPage={currentPage}
            pageCount={pageCount}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </>
  );
};

export default Table2;
