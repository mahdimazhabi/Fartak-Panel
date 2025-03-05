import { Outlet } from "react-router-dom";
import { cn } from "@/shared/lib/utils";
import Container from "../common/Container";
import Header from "./dashboard/Header";
import { AppSidebar } from "@/components/app-sidebar";
import { Toaster } from "@/components/ui/sonner";
const PanelLayout = () => {
  return (
    <div className="  flex flex-col w-screen h-screen max-h-screen overflow-hidden max-w-screen  bg-sidebar  ">
      <Toaster />
      {/*  */}
      <Header />
      <main className="relative flex items-stretch justify-end flex-1 overflow-hidden">
        {/* SideBar */}

        <AppSidebar />
        <div
          className={cn(
            "flex-1 h-full transition-all duration-300 overflow-y-auto scrollbar-thin",
            ""
          )}
        >
          {/* Status Bar */}
          <div className="w-full h-12 bg-accent-primary text-gray-50 lg:hidden">
            <Container className="flex items-center justify-between h-full">
              {/* Profile */}
              <div className="flex items-center gap-3"></div>

              {/* <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 ml-10">
                  <ClaenderIcon className="w-6 h-6" />
                  <Typography variant="default" size="footer" weight="medium">
                    {date}
                  </Typography>
                </div>
                <Typography variant="default" size="footer" weight="medium">
                  {time}
                </Typography>
              </div> */}
            </Container>
          </div>

          <Container className="py-4 lg:w-full lg:max-w-full">
            <Outlet />
          </Container>
        </div>
      </main>
    </div>
  );
};

export default PanelLayout;
