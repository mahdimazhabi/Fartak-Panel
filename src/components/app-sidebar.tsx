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
import { User } from "lucide-react";
import { Home } from "lucide-react";
import { useState, useEffect } from "react";
import { BsFolder2Open } from "react-icons/bs";

// Menu items.

const items = [
  {
    id: 1,
    title: "خونه",
    url: "/dashboard",
    icon: Home,
    summenu: true,
  },
  {
    id: 2,
    title: "اساتید",
    summenu: true,
    url: "/dashboard/professors",
    icon: FaChalkboardTeacher,
    Content: [
      {
        id: 1,
        title: "لیست اساتید",
        url: "/dashboard/professors/lists",
      },
      {
        id: 3,
        title: "نوع تدریس اساتید",
        url: "/dashboard/professors/type",
      },
    ],
  },
  {
    id: 3,
    title: "کاربران",
    summenu: true,
    url: "/dashboard/user",
    icon: User,
    Content: [
      {
        id: 1,
        title: "لیست تمام کاربران",
        url: "/dashboard/user/lists",
      },
    ],
  },
  {
    id: 4,
    title: "پروژه ها",
    summenu: true,
    url: "/dashboard/projects",
    icon: BsFolder2Open,
    Content: [
      {
        id: 1,
        title: "لیست پروژه ها",
        url: "/dashboard/projects/lists",
      },
    ],
  },
];
export function AppSidebar() {
  const [openMenus, setOpenMenus] = useState<{ [key: number]: boolean }>(() => {
    const saved = localStorage.getItem("sidebarState");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("sidebarState", JSON.stringify(openMenus));
  }, [openMenus]);

  const handleMenuToggle = (itemId: number) => {
    setOpenMenus((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

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
                    <Collapsible
                      className="group/collapsible w-full"
                      open={openMenus[item.id]}
                      onOpenChange={() => handleMenuToggle(item.id)}
                    >
                      <SidebarGroup>
                        <SidebarGroupLabel asChild>
                          <CollapsibleTrigger className="w-full  ">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full! flex   [&>div]:w-full  justify-between rounded-sm px-3 mt-2"
                            >
                              <div className="flex items-center gap-2">
                                <item.icon size={18} />
                                {item.title}
                              </div>
                              <ChevronDown
                                className="transition-transform group-data-[state=open]/collapsible:rotate-180"
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
                                  className="w-full flex items-center hover:text-yellow-400  rounded-sm justify-start px-3 mt-2"
                                  variant="ghost"
                                  size="sm"
                                >
                                  <span className="mb-1 ml-2 text-accent-primary font-black text-yellow-400">
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
                        variant={"default"}
                        size="sm"
                        className="  h-auto py-2 flex justify-start   w-full duration-300 rounded-sm text-complement-300 dark:text-complement-300 px-4 text-[12px]"
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
