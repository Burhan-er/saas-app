import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import Cta from '@/components/CTA'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.actions'
import { getSubjectColor } from '@/lib/utils'

const Page = async  () => {
  const companionCard = await getAllCompanions({limit:3})
  const companionList = await getRecentSessions(6) 

  return (
    <main>
      <h1>Welcome to My Saas App</h1>
      <section className='home-section'>
        {companionCard.map((companion,index)=>(
          <CompanionCard key={index} {...companion} bookmarked={companion.isBookmarked} color={getSubjectColor(companion?.subject)} />
        ))}
        
      </section>
      <section className='home-section'>
        <CompanionList
        title="Recent Sessions"
        companions={companionList}
        classNames="w-2/3 max-lg:w-full"
        />
        <Cta/>
      </section>
      
    </main>
  )
}

export default Page