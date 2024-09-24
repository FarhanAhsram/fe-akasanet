import { ArrowLeftToLine, MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Sidebar, SidebarResponsive, Title } from "./Sidebar";
import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */

export default function AdminLayout({ children }) {
  return (
    <>
      <div className="grid min-h-screen w-full lg:grid-cols-[284px_1fr]">
        <div className="hidden border-r h-screen lg:block sticky top-0">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex justify-center items-center pt-8">
              <h1 className="font-bold text-4xl font-cursive text-[#77E4C8]">
                Online Shop
              </h1>
            </div>
            <div className="flex-1">
              <Sidebar />
            </div>
            <div className="flex justify-center items-center py-4 border-t-4">
              <Link
                to="/login"
                className="flex items-center text-xl font-bold rounded-lg gap-3 px-3 py-4 text-muted-foreground transition-all hover:text-primary hover:bg-[#77e4c936]"
              >
                <ArrowLeftToLine className="h-7 w-7" />
                Logout
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <header className="flex items-center border-b pt-4 pb-6 px-6">
            {/* Responsive Sidebar */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 bg-transparent border-none hover:bg-gray-200 mr-2 lg:hidden"
                >
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col w-80 bg-white">
                <div className="flex justify-center items-center pt-8">
                  <h1 className="font-bold text-4xl font-cursive text-[#77E4C8] pb-8">
                    Online Shop
                  </h1>
                </div>
                <div className="flex-1">
                  <SidebarResponsive />
                </div>
                <div className="flex justify-center items-center pb-8">
                  <Link to="/login">
                    <Button variant="primary" className="w-full">
                      Logout
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>

            <div className="text-2xl w-full font-semibold">
              <Title />
            </div>
          </header>

          <main className="flex flex-1 flex-col py-4 px-6 bg-gray-100">
            <div className="">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
