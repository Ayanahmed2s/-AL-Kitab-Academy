import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { useAuthStore } from "@/hooks/use-auth";
import { useEffect } from "react";
import { AppLayout } from "@/components/layout";

import Login from "@/pages/login";
import Dashboard from "@/pages/dashboard";
import Students from "@/pages/students";
import StudentDetails from "@/pages/student-details";
import Teachers from "@/pages/teachers";
import TeacherDetails from "@/pages/teacher-details";
import Assignments from "@/pages/assignments";
import Lessons from "@/pages/lessons";
import Classes from "@/pages/classes";
import Settings from "@/pages/settings";
import NotFound from "@/pages/not-found";

const ProtectedRoute = ({ component: Component }: { component: any }) => {
  const { user } = useAuthStore();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!user) setLocation("/login");
  }, [user, setLocation]);

  if (!user) return null;
  return (
    <AppLayout>
      <Component />
    </AppLayout>
  );
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function Router() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      
      {/* Protected Routes */}
      <Route path="/" component={() => <ProtectedRoute component={Dashboard} />} />
      <Route path="/dashboard" component={() => <ProtectedRoute component={Dashboard} />} />
      
      <Route path="/students" component={() => <ProtectedRoute component={Students} />} />
      <Route path="/students/:id" component={() => <ProtectedRoute component={StudentDetails} />} />
      
      <Route path="/teachers" component={() => <ProtectedRoute component={Teachers} />} />
      <Route path="/teachers/:id" component={() => <ProtectedRoute component={TeacherDetails} />} />
      
      <Route path="/assignments" component={() => <ProtectedRoute component={Assignments} />} />
      <Route path="/lessons" component={() => <ProtectedRoute component={Lessons} />} />
      <Route path="/classes" component={() => <ProtectedRoute component={Classes} />} />
      <Route path="/settings" component={() => <ProtectedRoute component={Settings} />} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
