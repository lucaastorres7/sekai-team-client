import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Image
                src={"/mizuki.jpg"}
                height={40}
                width={40}
                alt="Mizuki logo"
              />

              <div>
                <h3 className="text-gray-900 font-semibold">Project SEKAI</h3>
                <p className="text-gray-500 text-sm -mt-1">Team builder</p>
              </div>
            </div>
          </div>

          <div>
            <Link href={"https://github.com/lucaastorres7"}>
              <Image src={"/github.svg"} height={30} width={30} alt="github" />
            </Link>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-center text-gray-500">Made by Lucas Torres 🎶</p>
        </div>
      </div>
    </footer>
  );
}

/*  */

//   <footer className="bg-gray-50 border-t border-gray-200">
//   <div className="flex container items-center py-8">
//     <div className="flex justify-between">
//       <div className="flex gap-2 items-center">
//         <Image
//           src={"/mizuki.jpg"}
//           height={40}
//           width={40}
//           alt="Mizuki logo"
//         />

//         <h3 className="text-lg font-bold text-gray-900">Project Sekai</h3>

//         <p className="text-s text-gray-500">Team builder</p>
//       </div>

//       <div className="flex">
//         <Link href={"https://github.com/lucaastorres7"}>
//           <Image src={"/github.svg"} height={30} width={30} alt="github" />
//         </Link>
//       </div>
//     </div>
//     <div></div>
//   </div>
// </footer>
