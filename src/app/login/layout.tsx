import Image from "next/image";

export default async function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="grid grid-cols-2 grow gap-32 max-lg:gap-0 max-lg:grid-cols-1">
      <div className="max-lg:hidden bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-500 relative overflow-hidden">
        <div className="flex items-center justify-center p-8">
          <div className="pt-48 text-center">
            <Image
              src="/kanade.jpg"
              alt="Project SEKAI Characters"
              width={320}
              height={400}
              className=" w-full h-full object-cover rounded-2xl"
            />

            <h2 className="text-2xl pt-2 font-bold text-white mb-2">
              Welcome to SEKAI!
            </h2>
            <p className="text-cyan-100 text-lg">Build your teams!</p>
          </div>
        </div>
      </div>

      <div className="max-w-[30rem] p-4 max-lg:ml-[20vw] mt-[10vh]">
        {children}
      </div>
    </section>
  );
}

/* 
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="text-center">
              <div className="w-80 h-96 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-2xl">
                <img
                  src="/placeholder.svg?height=400&width=320"
                  alt="Project SEKAI Characters"
                  className="w-full h-full object-cover rounded-2xl opacity-80"
                />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Welcome to SEKAI!</h2>
              <p className="text-cyan-100 text-lg">Join the colorful music world</p>
            </div>
          </div>
        </div>
        */
