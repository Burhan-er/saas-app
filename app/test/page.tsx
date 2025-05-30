import { auth } from "@clerk/nextjs/server";
import { cookies } from "next/headers"

const page = async () => {
  const cookieStore = await cookies();
  const session = cookieStore.get('__session');

  return (
    <main className="flex flex-col bg-black justify-center h-[80vh]">
      <h1 className="text-red-900 text-left">console log:</h1>
      <h2 className="text-white overflow-clip">{JSON.stringify(session)}</h2>
      <h2 className="text-white overflow-clip">{(await auth()).getToken()}</h2>
    </main>
  );
};

export default page