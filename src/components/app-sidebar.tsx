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
import { FaChalkboardTeacher } from "react-icons/fa";

// Menu items.
const items = [
  {
    id: 1,
    title: "اساتید",
    summenu: true,
    url: "/Professors",
    icon: FaChalkboardTeacher,
    Content: [
      {
        id: 1,
        title: "لیست اساتید",
        url: "/Professors/lists",
      },
      {
        id: 2,
        title: "اضافه کردن استاد",
        url: "/Professors/add",
      },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="flex flex-col justify-between  border-b border-l bg-complement-primary">
        <SidebarGroup>
          <div className="flex items-center justify-between px-3 my-3 gap-4 text-xs">
            <div className="flex items-center gap-1">
              {persianDate(new Date())}
            </div>
            {timeDate(new Date())}
          </div>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col items-end">
              {items.map((item) => (
                <SidebarMenuItem key={item.id} className="w-full text-right">
                  {item.summenu ? (
                    <Collapsible className="group/collapsible w-full">
                      <SidebarGroup>
                        <SidebarGroupLabel asChild>
                          <CollapsibleTrigger>
                            <Button
                              className="flex justify-start w-full h-auto py-2 px-2 duration-300 rounded-sm text-complement-300 dark:text-complement-300 text-[12px]"
                              variant={"default"}
                            >
                              <item.icon size={18} />
                              {item.title}
                              <ChevronDown
                                className="mr-auto transition-transform group-data-[state=open]/collapsible:rotate-180"
                                size={18}
                              />
                            </Button>
                          </CollapsibleTrigger>
                        </SidebarGroupLabel>
                        <CollapsibleContent>
                          <SidebarGroupContent className="px-3">
                            {item.Content?.map((contentItem) => (
                              <Link to={contentItem.url} key={contentItem.id}>
                                <Button
                                  className="w-full flex items-center  rounded-sm justify-start px-3 mt-2"
                                  variant="ghost"
                                  size="sm"
                                >
                                  <span className="mb-1 ml-2 text-accent-primary font-black">
                                    .
                                  </span>
                                  {contentItem.title}
                                </Button>
                              </Link>
                            ))}
                          </SidebarGroupContent>
                        </CollapsibleContent>
                      </SidebarGroup>
                    </Collapsible>
                  ) : (
                    <Link to={item.url}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex justify-start w-full h-auto py-1.5 duration-300 rounded-sm text-complement-300 dark:text-complement-300 text-[12px] hover:bg-gray-100 hover:text-black dark:hover:text-stone-50"
                      >
                        <item.icon size={18} />
                        {item.title}
                      </Button>
                    </Link>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
