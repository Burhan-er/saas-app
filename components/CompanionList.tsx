"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { addBookmark } from "@/lib/actions/companion.actions";
import { cn, getSubjectColor } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CompanionListProps {
  title: string;
  companions?: Companion[];
  classNames?: string;
}

const CompanionList = ({
  title,
  companions,
  classNames,
}: CompanionListProps) => {
  const pathname = usePathname()
  return (
    <section className={cn("companion-list", classNames)}>
      <h2 className="font-bold text-3xl">{title}</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg col-span-4">Lessons</TableHead>
            <TableHead className="text-lg ">Status</TableHead>
            <TableHead className="text-lg text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions?.map(({id,subject,name,topic,duration,isBookmarked}) => (
            <TableRow key={id}>
              <TableCell>
                <Link href={`companions/${id}`}>
                  <div className="flex items-center gap-2">
                    <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden"
                    style={{backgroundColor: getSubjectColor(subject)}}>
                      <Image
                      src={`/icons/${subject}.svg`}
                      alt={subject}
                      width={35}
                      height={35}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="font-bold text-2xl">{name}</p>
                      <p className="text-lg">{topic}</p>
                    </div>
                  </div>
                </Link>
              </TableCell>
              <TableCell>
                <div className="w-full flex justify-around max-md:hidden">
                  <div className="subject-badge w-fit">
                  {subject}
                  </div>
                </div>
                <div className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden" 
                style={{backgroundColor: getSubjectColor(subject)}}>
                  <Image src={`/icons/${subject}.svg`} alt="Subject Icon" width={18} height={18}/>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2 w-full justify-end">
                  <p className="text-2xl">
                    {duration}{" "}
                    <span className="max-md:hidden">min</span>
                  </p>
                <Image onClick={()=>{addBookmark(id,pathname)}} src={isBookmarked ? "/icons/filled.svg":"/icons/clock.svg"} alt="Clock Icon" width={15} height={15} className="md:hidden"/> 
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default CompanionList;
