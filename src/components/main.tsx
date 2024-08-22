import { Github, Linkedin, me, Telegram, Twitter } from "@/assets"
import { Button } from "@/components/ui/button"
import Componen from "./contact"

export default function Component() {
  return (
    <div className="bg-black text-white">
      <main className="flex-1 p-6 md:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Hey, I'm Lwazi Ncube, a product designer with 7 years of experience
              </h1>
              <p className="text-gray-400 mb-8">
                I care a lot about using design for positive impact, and enjoy creating user-centric, delightful, and human experiences.
              </p>
              <div className="flex space-x-4">
                <Componen/>
                <Button variant="link" size="icon">
                  <img src={Github} className="h-8 w-8" alt="Github" />
                </Button>
                <Button variant="link" size="icon">
                  <img src={Telegram} className="h-8 w-8" alt="Telegram" />
                </Button>
                <Button variant="link" size="icon">
                  <img src={Twitter} className="h-8 w-8" alt="Twitter" />
                </Button>
                <Button variant="link" size="icon">
                  <img src={Linkedin} className="h-8 w-8" alt="LinkedIn" />
                </Button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative w-[400px] h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-gray-700 rounded-3xl transform rotate-3"></div>
                <img
                  src={me}
                  alt="Lwazi Ncube"
                  className="rounded-3xl relative z-10 w-full h-full object-cover"
                  width="400"
                  height="400"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}