import { useState } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { useAuthStore } from "@/hooks/use-auth";
import { useTheme } from "next-themes";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function Settings() {
  const { t, lang } = useTranslation();
  const { theme, setTheme } = useTheme();
  const { user } = useAuthStore();
  const [isReloading, setIsReloading] = useState(false);

  const handleLanguageChange = (val: string) => {
    if (val === lang) return;
    setIsReloading(true);
    setTimeout(() => {
      localStorage.setItem("madrasa_lang", val);
      window.location.reload();
    }, 900);
  };

  const handleThemeChange = (val: string) => {
    setTheme(val);
  };

  const initials = user?.name
    ?.split(/\s+/)
    .filter(Boolean)
    .map((n: string) => n[0])
    .join("")
    .toUpperCase() || "U";

  return (
    <div className="space-y-6 max-w-4xl mx-auto relative">
      {isReloading && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", backgroundColor: "rgba(255,255,255,0.55)" }}
        >
          <div className="flex flex-col items-center gap-5 rounded-2xl bg-white/90 border border-border shadow-2xl px-12 py-10 dark:bg-card/90">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <div className="flex flex-col items-center gap-1 text-center">
              <p className="text-lg font-semibold text-foreground">{t("changingLanguage")}</p>
              <p className="text-sm text-muted-foreground">{t("pleaseWait")}</p>
            </div>
          </div>
        </div>
      )}
      <h1 className="text-3xl font-bold tracking-tight text-primary">{t("settings")}</h1>

      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>Your personal account details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6">
            <Avatar className="h-20 w-20 border-2 border-primary/20">
              <AvatarFallback className="text-2xl bg-primary/10 text-primary">{initials}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h3 className="text-xl font-medium">{user?.name || "User"}</h3>
              <p className="text-sm text-muted-foreground">{user?.email || "user@example.com"}</p>
              <div className="inline-flex items-center mt-2 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary capitalize">
                {user?.role || "Role"}
              </div>
            </div>
            <div className="ml-auto">
              <Button variant="outline">Edit Profile</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
          <CardDescription>Manage your app experience</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Language</Label>
              <p className="text-sm text-muted-foreground">Select your preferred language.</p>
            </div>
            <Select value={lang} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English (LTR)</SelectItem>
                <SelectItem value="ur">اردو (RTL)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Theme</Label>
              <p className="text-sm text-muted-foreground">Customize the appearance of the app.</p>
            </div>
            <Select value={theme} onValueChange={handleThemeChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System Default</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive alerts for important updates.</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
