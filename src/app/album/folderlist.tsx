import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FolderType } from "./page"
import Link from "next/link"


export default function Folderlist({folder}:{folder:FolderType}) {
  return (
    <div>
       <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{folder.name}</CardTitle>
        <CardDescription>Click on View button to view the pictures present in {folder.name}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end">
        <Link href={`/album/${folder.name}`}>
        <Button>View Album</Button>
        </Link>
      </CardFooter>
    </Card>
    </div>
  )
}
