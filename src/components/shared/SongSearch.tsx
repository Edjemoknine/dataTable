import { useSongs } from "@/context/SongContext";
import { Input } from "../ui/input";

const SongSearch = () => {
  const { setTerm, term } = useSongs();
  return (
    <div className="w-1/3">
      <Input
        type="text"
        placeholder="Search "
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </div>
  );
};

export default SongSearch;
