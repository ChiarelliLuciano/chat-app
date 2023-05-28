"use client";
import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";

function MobileFooter() {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) {
    return null;
  }

  return (
    <div className="lg:hidden fixed justify-between w-full bottom-0 z-40 flex items-center bg-white border-t-[2px]">
      {routes.map((item) => (
        <MobileItem
          key={item.label}
          href={item.href}
          active={item.active}
          icon={item.icon}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
}

export default MobileFooter;
