import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { FormSchema } from "@/validation/zodV";
import { useSongs } from "@/context/SongContext";

type Props = {
  setOpen: (isOpen: boolean) => void;
};
export function SongForm({ setOpen }: Props) {
  const { setData, data } = useSongs();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      song: "",
      artist: "",
      year: "",
    },
  });
  const { toast } = useToast();
  function onSubmit(newSong: z.infer<typeof FormSchema>) {
    setData([
      ...data,
      { ...newSong, id: Number(Math.ceil(Math.random() * 100)) },
    ]);
    setOpen(false);
    toast({
      title: "Song has been added",
      variant: "default",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="song"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Song name" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="artist"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Username</FormLabel> */}
              <FormControl>
                <Input placeholder="Artist name" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="year"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Username</FormLabel> */}
              <FormControl>
                <Input placeholder="1999" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
        <Button
          className="ml-3"
          variant={"outline"}
          onClick={() => setOpen(false)}
          type="button"
        >
          Cancel
        </Button>
      </form>
    </Form>
  );
}
