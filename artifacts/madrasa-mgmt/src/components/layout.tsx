import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  BookOpen,
  LayoutDashboard,
  Users,
  UserCog,
  ClipboardList,
  Book,
  Settings,
  LogOut,
  Moon,
  Sun,
  Languages,
  Loader2,
} from "lucide-react";
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
  const { lang, t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [location, setLocation] = useLocation();
  const [isReloading, setIsReloading] = useState(false);

  const isRtl = lang === "ur";
  const nextLang = isRtl ? "en" : "ur";

  const handleLanguageSwitch = () => {
    setIsReloading(true);
    // Save the new language, then reload after a moment so the overlay is visible
    setTimeout(() => {
      localStorage.setItem("madrasa_lang", nextLang);
      window.location.reload();
    }, 900);
  };

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
      <div className="flex min-h-screen w-full bg-background relative">
        <Sidebar side={isRtl ? "right" : "left"}>
          <SidebarHeader className="p-4 border-b border-sidebar-border">
            <div className="flex items-center gap-3 font-bold text-xl text-sidebar-foreground">
              <BookOpen className="h-6 w-6 shrink-0" />
              <span className="truncate">Madrasa</span>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarMenu className="p-2 gap-1">
              {navItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    asChild
                    isActive={
                      location === item.path ||
                      (item.path !== "/" && location.startsWith(item.path))
                    }
                    tooltip={item.label}
                  >
                    <Link
                      href={item.path}
                      className="flex items-center gap-3 w-full"
                    >
                      <item.icon className="h-5 w-5 shrink-0" />
                      <span className="truncate">{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter className="p-4 border-t border-sidebar-border flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1.5 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-2"
                onClick={handleLanguageSwitch}
                disabled={isReloading}
                title={t("language")}
                data-testid="button-toggle-language"
              >
                <Languages className="h-4 w-4 shrink-0" />
                <span className="text-xs font-semibold">{isRtl ? "EN" : "UR"}</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground relative"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                title={t("theme")}
                data-testid="button-toggle-theme"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>

            {user && (
              <div className="flex items-center justify-between gap-2 bg-sidebar-accent rounded-md px-2 py-2">
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="text-sm font-medium text-sidebar-accent-foreground truncate">
                    {user.name}
                  </span>
                  <span className="text-xs text-sidebar-accent-foreground/70 capitalize truncate">
                    {user.role}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleLogout}
                  className="text-destructive hover:text-destructive shrink-0"
                  data-testid="button-logout"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            )}
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 flex flex-col overflow-hidden min-w-0">
          <header className="h-14 border-b border-border flex items-center px-4 md:hidden bg-background">
            <SidebarTrigger />
            <div className="flex-1 text-center font-bold text-lg text-foreground">
              Madrasa
            </div>
          </header>
          <div className="flex-1 overflow-auto p-4 md:p-6">{children}</div>
        </main>
      </div>

      {/* Full-page language-switch overlay */}
      {isReloading && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", backgroundColor: "rgba(255,255,255,0.55)" }}
        >
          <div className="flex flex-col items-center gap-5 rounded-2xl bg-white/90 border border-border shadow-2xl px-12 py-10 dark:bg-card/90">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <div className="flex flex-col items-center gap-1 text-center">
              <p className="text-lg font-semibold text-foreground">
                {t("changingLanguage")}
              </p>
              <p className="text-sm text-muted-foreground">
                {t("pleaseWait")}
              </p>
            </div>
          </div>
        </div>
      )}
    </SidebarProvider>
  );
}
