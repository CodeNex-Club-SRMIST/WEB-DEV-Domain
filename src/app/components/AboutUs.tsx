import Image from "next/image";


export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-12 bg-white ">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">About Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Who we Are? Card */}
        <div className="bg-black text-white rounded-3xl overflow-hidden shadow-lg">
          <div className="relative p-6 h-full flex flex-col justify-end">
            {/* SVG Placeholder for Layers Icon */}
            <img
              src="" // Use your SVG file here
              alt="Layers Icon"
              className="text-white/80 absolute top-6 right-6 w-6 h-6"
            />
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Who we Are?</h2>
              <p className="text-gray-300 text-sm">
                A student-driven club under the Network and Comm...
              </p>
              <button className="text-white border-white border-2 px-4 py-2 rounded-md hover:bg-white/10 mt-4">
                Read more
              </button>
            </div>
          </div>
        </div>

        {/* Our Vision and Mission Card */}
        <div className="bg-[#D6F3BA] rounded-3xl overflow-hidden shadow-lg">
          <div className="relative p-6 h-full flex flex-col justify-end">
            {/* SVG Placeholder for Network Icon */}
            <img
              src="" // Use your SVG file here
              alt="Network Icon"
              className="text-black/80 absolute top-6 right-6 w-6 h-6"
            />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-black">Our Vision and Mission?</h2>
              <p className="text-gray-700 text-sm">
                To inspire technological advancements through collabor...
              </p>
              <button className="text-black border-black border-2 px-4 py-2 rounded-md hover:bg-black/10 mt-4">
                Read more
              </button>
            </div>
          </div>
        </div>

        {/* Why Choose Us? Card */}
        <div className="bg-[#FFE17B] rounded-3xl overflow-hidden shadow-lg">
          <div className="relative p-6 h-full flex flex-col justify-end">
            {/* SVG Placeholder for Bookmark Icon */}
            <img
              src="" // Use your SVG file here
              alt="Bookmark Icon"
              className="text-black/80 absolute top-6 right-6 w-6 h-6"
            />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Why Choose Us?</h2>
              <p className="text-gray-700 text-sm">
                We foster a dynamic environm.....
              </p>
              <button className="text-black border-black border-2 px-4 py-2 rounded-md hover:bg-black/10 mt-4">
                Read more
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {/* What we do? Card */}
          <div className="bg-gray-200 rounded-3xl overflow-hidden shadow-lg">
            <div className="relative p-6 h-full flex flex-col justify-end">
              {/* SVG Placeholder for X Icon */}
              <img
                src="" // Use your SVG file here
                alt="X Icon"
                className="text-black/80 absolute top-6 right-6 w-6 h-6"
              />
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">What we do?</h2>
                <p className="text-gray-700 text-sm">
                  We provide a platform for students.....
                </p>
                <button className="text-black border-black border-2 px-4 py-2 rounded-md hover:bg-black/10 mt-4">
                  Read more
                </button>
              </div>
            </div>
          </div>

          {/* Team Photo Card */}
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <div className="p-0 aspect-square relative">
              <Image
                src="/assets/TeamPic.png"
                alt="Team photo"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
