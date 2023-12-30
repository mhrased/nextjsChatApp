"use client";
import Image from "next/image";

export default function Home() {
  return (
    <section className="h-screen gradient-form bg-gray-200 md:h-screen">
      <div className="w-full h-full">
        <div className=" flex justify-center flex-wrap h-full text-gray-800">
          <div className="">
            <div className="block bg-gradient-to-t from-blue-400 to-purple-500 h-full">
              <div className="lg:flex lg:flex-wrap g-0 h-full">
                <div className="px-4 h-full items-center flex">
                  <div className="p-12 mx-6">
                    <div className="text-center">
                      <h4 className="text-xl font-semibold text-yellow-50">
                        Enter your username to join Discord
                      </h4>
                    </div>
                    <form className="mt-4">
                      <div className="flex items-center justify-center">
                        <input
                          type="text"
                          placeholder="username"
                          className="border border-gray-300 px-4 py-2 mr-4 rounded-lg focus:outline-none"
                        />
                        <button className="bg-gradient-to-b from-blue-300 to-purple-400 hover:bg-gradient-to-t text-black font-bold py-2 px-4 rounded transition-all duration-1000 ease-in-out font-Oswald uppercase">
                          Join
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
