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

const FormSchema = z.object({
  song: z.string().min(2, {
    message: "Song name must be at least 2 characters.",
  }),
  artist: z.string().min(2, {
    message: "Artist name must be at least 2 characters.",
  }),
  date: z.string(),
});
type Props = {
  setOpen: (isOpen: boolean) => void;
};
export function SongForm({ setOpen }: Props) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      song: "",
      artist: "",
      date: "",
    },
  });
  const { toast } = useToast();
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
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
          name="date"
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
      </form>
    </Form>
  );
}
