import Navbar from "@/components/navBar/Navbar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
      <Navbar/>
      <main className='flex flex-col items-center p-24'>
        {children}
      </main>
    </>
  );
}
