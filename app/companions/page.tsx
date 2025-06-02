import CompanionCard from "@/components/CompanionCard";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";
import { getAllCompanions } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import Image from "next/image";

const CompanionsLibrary = async({searchParams}:SearchParams) => {
  
  const filters = await searchParams
  const subject = filters?.subject ? filters.subject : "";
  const topic = filters?.topic ? filters.topic : "";

  const companions = await getAllCompanions({ subject, topic });

  return (
    <main>
      <section className="flex justify-between gap-4 max-sm:flex-col"> 
        <h1>Companion Library</h1>
        <div className="flex gap-4">
          <SearchInput/>
          <SubjectFilter/>
          
        </div>
      </section>
      <section className="companions-grid">
        {companions.length === 0 ? 
        (<div className="w-full items-center flex flex-col justify-center max-h-[100vh] h-100">
          <Image src={"/icons/sad.png"} alt="sad" width={100} height={100} />
        <h1 className="font-bold ">Sorry For That...</h1>
        </div>
        )
        :(companions.map((companion)=>(
          <CompanionCard key={companion.id} bookmarked={companion.isBookmarked} {...companion} color={getSubjectColor(companion.subject)}/>

        )))
        }
      </section>
    </main>
  )
}
export default CompanionsLibrary