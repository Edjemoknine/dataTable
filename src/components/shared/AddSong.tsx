import { useState } from "react";
import { Button } from "../ui/button";
import { AlerSongtDialog } from "./AddSongDialog";

const AddSong = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen((prev) => !prev)}>Add New Song</Button>
      <AlerSongtDialog setOpen={setOpen} open={open} />
    </div>
  );
};

export default AddSong;
