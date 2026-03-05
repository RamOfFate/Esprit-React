import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { EXERCISES } from "@/models/Exercice";
import { ModeToggle } from "@/components/mode-toggle";

export function AppSidebar() {
  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>4TWIN5 2026</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Dashboard">
                  <Link title="Home" to="/">
                    <Home />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>


              {EXERCISES.map((ex) => (
                <SidebarMenuItem key={ex.id}>
                  <SidebarMenuButton asChild tooltip={ex.title}>
                    <Link to={ex.path}>
                      <ex.icon className="text-primary" />
                      <span>{ex.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground font-mono italic">
            Appearance
          </span>
          <ModeToggle />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
