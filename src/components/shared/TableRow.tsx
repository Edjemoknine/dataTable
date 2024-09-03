import { TabaleItemProps } from "@/types/Song";

const TableRow = ({ item }: { item: TabaleItemProps }) => {
  return (
    <div
      key={item.id}
      className="table-row text-left h-8 hover:bg-gray-50 border-b border-gray-200"
    >
      <div className="table-cell p-3">{item.id}</div>
      <div className="table-cell  p-3 ">{item.song}</div>
      <div className="table-cell  p-3">{item.artist}</div>
      <div className="table-cell  p-3">{item.year}</div>
    </div>
  );
};

export default TableRow;
