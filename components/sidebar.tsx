import Link from "next/link"
import { BarChart3, Home, Package, Settings, ShoppingCart, Users } from "lucide-react"

export function Sidebar() {
  return (
    <div className="hidden md:flex h-screen w-64 flex-col border-r bg-white">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center font-semibold">
          <Package className="h-6 w-6 mr-2" />
          <span>Acme Inc</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-2 text-sm font-medium">
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all"
          >
            <Home className="h-4 w-4" />
            Dashboard
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900 transition-all hover:bg-gray-100"
          >
            <ShoppingCart className="h-4 w-4" />
            Orders
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900 transition-all hover:bg-gray-100"
          >
            <Users className="h-4 w-4" />
            Customers
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900 transition-all hover:bg-gray-100"
          >
            <BarChart3 className="h-4 w-4" />
            Analytics
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900 transition-all hover:bg-gray-100"
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>
        </nav>
      </div>
      <div className="mt-auto p-4 border-t">
        <div className="flex items-center gap-3 rounded-lg px-3 py-2">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <div className="font-medium">John Doe</div>
            <div className="text-gray-500">john@example.com</div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
