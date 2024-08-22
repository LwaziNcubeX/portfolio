import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function Componen() {
  return (
    <div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="rounded-full bg-green-500 hover:bg-green-600 text-black">Contact me</Button>
        </DrawerTrigger>
        <DrawerContent className="bg-white text-black p-3 max-w-md mx-auto">
          <DrawerHeader className="px-0">
            <DrawerTitle className="text-3xl font-bold mb-2">We'd love to help</DrawerTitle>
            <p className="text-gray-600 text-sm">
              We're a full service agency with experts ready to help. We'll get in touch within 24 hours.
            </p>
          </DrawerHeader>
          <div className="space-y-4 mt-6">
            <div className="grid grid-cols-2 gap-4">
                <div>
                <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" placeholder="First name" className="bg-gray-100 border-gray-300" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" placeholder="Last name" className="bg-gray-100 border-gray-300" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@company.com" className="bg-gray-100 border-gray-300" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="bg-gray-100 border-gray-300" />
            </div>
                </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Leave us a message..." className="bg-gray-100 border-gray-300" />
            </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="privacy" />
              <Label htmlFor="privacy" className="text-sm text-gray-600">
                You agree to our friendly privacy policy.
              </Label>
            </div>
          </div>
          <DrawerFooter className="px-0 mt-6 grid grid-cols-2 gap-4">
            <Button className="w-full bg-black text-white hover:bg-gray-800">Send message</Button>
            <DrawerClose asChild>
              <Button variant="outline" className="w-full">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}