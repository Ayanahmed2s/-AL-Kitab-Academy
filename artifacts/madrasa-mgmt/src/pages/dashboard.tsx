import { useGetDashboardSummary, useGetRecentActivity } from "@workspace/api-client-react";
import { useTranslation } from "@/hooks/use-translation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCog, ClipboardList, BookOpen, Book, CheckCircle, Clock } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Dashboard() {
  const { t, lang } = useTranslation();
  const { data: summary, isLoading: isSummaryLoading } = useGetDashboardSummary();
  const { data: activities, isLoading: isActivitiesLoading } = useGetRecentActivity();

  const stats = [
    { title: t("totalStudents"), value: summary?.totalStudents, icon: Users, color: "text-blue-500" },
    { title: t("totalTeachers"), value: summary?.totalTeachers, icon: UserCog, color: "text-purple-500" },
    { title: t("activeStudents"), value: summary?.activeStudents, icon: CheckCircle, color: "text-green-500" },
    { title: "Classes", value: summary?.totalClasses, icon: Book, color: "text-orange-500" },
    { title: "Ongoing Lessons", value: summary?.ongoingLessons, icon: BookOpen, color: "text-teal-500" },
    { title: "Pending Assignments", value: summary?.pendingAssignments, icon: ClipboardList, color: "text-yellow-500" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-primary">{t("dashboard")}</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              {isSummaryLoading ? (
                <Skeleton className="h-8 w-20" />
              ) : (
                <div className="text-2xl font-bold">{stat.value || 0}</div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{t("recentActivity")}</CardTitle>
          </CardHeader>
          <CardContent>
            {isActivitiesLoading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => <Skeleton key={i} className="h-12 w-full" />)}
              </div>
            ) : (
              <div className="space-y-4">
                {activities?.length ? activities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-4 border-b last:border-0 pb-4 last:pb-0">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {lang === "ur" && activity.messageUr ? activity.messageUr : activity.message}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(activity.timestamp).toLocaleString(lang === "ur" ? "ur-PK" : "en-US")}
                        {' • '}
                        {activity.actor}
                      </p>
                    </div>
                  </div>
                )) : (
                  <div className="text-sm text-muted-foreground text-center py-4">No recent activity</div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
