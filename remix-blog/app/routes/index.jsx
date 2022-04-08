export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <div class="container mx-auto my-20 w-1/3 border border-purple-500 bg-white">
        <div class="p-5 space-y-5 shadow-xl">
          <h4 class="text-center text-3xl text-purple-500">
            A Remix comtact form styled with Tailwind
          </h4>

          <form>
            <div class="grid grid-cols-2 gap-5">
              <input
                type="text"
                class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                placeholder="First Name"
              />
              <input
                type="text"
                class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                placeholder="Last Name"
              />
              <input
                type="email"
                class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                placeholder="Email"
              />
              <input
                type="tel"
                class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                placeholder="Phone"
              />
              <textarea
                cols="10"
                rows="5"
                class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <input
              type="submit"
              value="Send Message"
              class="focus:outline-none mt-5 bg-purple-500 px-4 py-2 text-white font-bold w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
