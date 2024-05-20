import MobileNav from "@/components/MobileNav";
import SideBAr from "@/components/SideBAr";
import Image from "next/image";

 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstname: 'Usaamah', lastName: 'Ishola'};
  return (
        <main className="flex h-screen w-full font-inter" >
            <SideBAr user={loggedIn}/>
            <div className="flex size-full flex-col">
              <div className="root-layout">
                <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon"/>
                <div className="">
                  <MobileNav user={loggedIn}/>
                </div>
              </div>
               {children}
            </div>
        </main>
  );
}
