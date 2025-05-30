import { SignIn } from '@clerk/nextjs'

const page = () => {
  return (
    <main>
      <section className='flex justify-center items-center h-[70vh]'>
      <SignIn/>

      </section>
    </main>
  )
}

export default page 