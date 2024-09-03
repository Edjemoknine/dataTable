import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { SongForm } from "./SongForm";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};
export function AlerSongtDialog({ open, setOpen }: Props) {
  return (
    <AlertDialog onOpenChange={setOpen} open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add new song to your data</AlertDialogTitle>
          <SongForm setOpen={setOpen} />
        </AlertDialogHeader>
        {/* <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter> */}
      </AlertDialogContent>
    </AlertDialog>
  );
}
