"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { AiFillFolderAdd } from "react-icons/ai"
import { FolderCreate } from "./action"

export default function Albumdialog({ imageData }: { imageData: string }) {
  const [album, setAlbum] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" className="p-0 m-0">
            <AiFillFolderAdd className="w-7 h-7 cursor-pointer text-white hover:text-red-500" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add to Album</DialogTitle>
            <DialogDescription>
              Enter the album name for the pictures you want to add. Click Add to Album when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="album-name" className="text-right">
                Name
              </Label>
              <Input
                id="nalbum-name"
                placeholder="Album Name Here"
                value={album}

                onChange={(e: any) => { setAlbum(e.target.value) }}
                className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={async () => {
                  setOpen(false);
                  await FolderCreate(album, imageData)
              }}
              type="submit">Add to Album</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
