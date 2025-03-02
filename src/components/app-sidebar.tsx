import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { persianDate, timeDate } from "@/shared/lib/date";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import { SidebarGroupLabel } from "@/components/ui/sidebar";
import { ChevronDown } from "lucide-react";
// Menu items.
// const items = [];

export function AppSidebar() {
  return (
    <Sidebar className="min-w-[10rem]">
      <SidebarContent className="flex flex-col justify-between h-full border-b border-l bg-complement-primary">
        <SidebarGroup>
          <div className="flex items-center justify-between px-3 my-3 gap-4 text-xs">
            <div className="flex items-center gap-1">
              {persianDate(new Date())}
            </div>
            {timeDate(new Date())}
          </div>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col items-end">
              <SidebarMenuItem className="w-full text-right">
                <Link to={""}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`flex justify-start w-full h-auto py-1.5 duration-300 rounded-sm text-complement-300 dark:text-complement-300 text-[12px] hover:bg-gray-100 hover:text-black dark:hover:text-stone-50`}
                  ></Button>
                  <Collapsible className="group/collapsible w-full ">
                    <SidebarGroup>
                      <SidebarGroupLabel asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`flex justify-start w-full! h-auto py-2 px-2   [&>div]:w-full  duration-300 rounded-sm text-complement-300 dark:text-complement-300 text-[12px] hover:bg-gray-100 hover:text-black dark:hover:text-stone-50`}
                        >
                          <CollapsibleTrigger className="flex items-center w-full">
                            <ChevronDown
                              className="mr-auto transition-transform group-data-[state=open]/collapsible:rotate-180 "
                              size={18}
                            />
                          </CollapsibleTrigger>
                        </Button>
                      </SidebarGroupLabel>
                      <CollapsibleContent>
                        <SidebarGroupContent>
                          <Button
                            className="w-full flex items-center  justify-start px-3"
                            variant="ghost"
                            size="sm"
                          >
                            <span className="mb-1 ml-2 text-accent-primary font-black"></span>
                          </Button>
                        </SidebarGroupContent>
                      </CollapsibleContent>
                    </SidebarGroup>
                  </Collapsible>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
