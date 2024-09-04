import { TabaleItemProps } from "@/types/Song";
import { Button } from "../ui/button";
import { useSongs } from "@/context/SongContext";
import { AlerSongtDialog } from "./AddSongDialog";

import { SongForm } from "./SongForm";

const TableRow = ({ item }: { item: TabaleItemProps }) => {
  const { setOpen, open, deleteSong, setSelected } = useSongs();

  const handleEdite = () => {
    setOpen(true);
    setSelected(item);
  };

  return (
    <div className="table-row text-left h-8 hover:bg-gray-50 border-b border-gray-200">
      <div className="table-cell p-3">{item.id}</div>
      <div className="table-cell  p-3 ">{item.song}</div>
      <div className="table-cell  p-3">{item.artist}</div>
      <div className="table-cell  p-3">{item.year}</div>
      <div className="table-cell  p-3">
        <Button onClick={handleEdite} className="btn btn-primary mr-3">
          Edit
        </Button>
        <AlerSongtDialog setOpen={setOpen} open={open}>
          <SongForm setOpen={setOpen} />
        </AlerSongtDialog>
        <Button
          onClick={() => deleteSong(item.id)}
          variant={"destructive"}
          className=""
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TableRow;
