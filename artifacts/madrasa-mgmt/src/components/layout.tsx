import { Link, useLocation } from "wouter";
import { BookOpen, LayoutDashboard, Users, UserCog, ClipboardList, Book, Settings, LogOut, Moon, Sun, Languages, Menu } from "lucide-react";
import { useAuthStore } from "@/hooks/use-auth";
import { useTranslation } from "@/hooks/use-translation";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuthStore();
  const { lang, setLang, t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [location, setLocation] = useLocation();

  const handleLogout = () => {
    logout();
    setLocation("/login");
  };

  const navItems = [
    { icon: LayoutDashboard, label: t("dashboard"), path: "/" },
    { icon: Users, label: t("students"), path: "/students" },
    { icon: UserCog, label: t("teachers"), path: "/teachers" },
    { icon: ClipboardList, label: t("assignments"), path: "/assignments" },
    { icon: BookOpen, label: t("lessons"), path: "/lessons" },
    { icon: Book, label: t("classes"), path: "/classes" },
    { icon: Settings, label: t("settings"), path: "/settings" },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <Sidebar>
          <SidebarHeader className="p-4 border-b">
            <div className="flex items-center gap-2 font-bold text-xl text-primary">
              <BookOpen className="h-6 w-6" />
              <span>Madrasa</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu className="p-2 gap-1">
              {navItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    asChild
                    isActive={location === item.path || (item.path !== "/" && location.startsWith(item.path))}
                    tooltip={item.label}
                  >
                    <Link href={item.path} className="flex items-center gap-3 w-full p-2 rounded-md">
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="p-4 border-t gap-4 flex flex-col">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setLang(lang === "en" ? "ur" : "en")}
                title={t("language")}
              >
                <Languages className="h-5 w-5" />
                <span className="sr-only">Toggle Language</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                title={t("theme")}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
            {user && (
              <div className="flex items-center justify-between bg-muted p-2 rounded-md">
                <div className="flex flex-col overflow-hidden">
                  <span className="text-sm font-medium truncate">{user.name}</span>
                  <span className="text-xs text-muted-foreground capitalize truncate">{user.role}</span>
                </div>
                <Button variant="ghost" size="icon" onClick={handleLogout} className="text-destructive">
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            )}
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 flex flex-col overflow-hidden">
          <header className="h-14 border-b flex items-center px-4 md:hidden">
            <SidebarTrigger />
            <div className="flex-1 text-center font-bold text-lg">Madrasa</div>
          </header>
          <div className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
