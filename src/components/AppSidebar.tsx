import { Home, User, Code2, Award, GraduationCap, Mail, Wrench } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ThemeToggle } from "./ThemeToggle"

const items = [
  { title: "Home", icon: Home, section: 0 },
  { title: "About", icon: User, section: 1 },
  { title: "Skills", icon: Wrench, section: 2 },
  { title: "Projects", icon: Code2, section: 3 },
  { title: "Achievements", icon: Award, section: 4 },
  { title: "Education", icon: GraduationCap, section: 5 },
  { title: "Contact", icon: Mail, section: 6 },
]

export function AppSidebar() {
  const scrollToSection = (sectionIndex: number) => {
    const container = document.querySelector('.horizontal-scroll')
    if (container) {
      container.scrollTo({
        left: sectionIndex * window.innerWidth,
        behavior: 'smooth'
      })
    }
  }

  return (
    <Sidebar className="w-16" collapsible="none">
      <SidebarContent>
        <div className="p-3 flex items-center justify-center border-b border-border">
          <ThemeToggle />
        </div>
        
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => scrollToSection(item.section)}
                    className="hover:bg-primary/10 transition-colors justify-center h-14"
                    tooltip={item.title}
                  >
                    <item.icon className="h-7 w-7 text-primary" />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
