import { useGetLessons } from "@workspace/api-client-react";
import { useTranslation } from "@/hooks/use-translation";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Plus, Clock, Users, BookOpen } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Lessons() {
  const { t, lang } = useTranslation();
  const { data: lessons, isLoading } = useGetLessons();

  const getStatusBadge = (status: string) => {
    switch(status.toLowerCase()) {
      case 'ongoing': return <Badge className="bg-blue-500 animate-pulse">Ongoing</Badge>;
      case 'scheduled': return <Badge variant="outline" className="text-orange-500 border-orange-500">Scheduled</Badge>;
      case 'completed': return <Badge className="bg-green-500">Completed</Badge>;
      default: return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-primary">{t("lessons")}</h1>
        <Button className="gap-2">
          <Plus className="h-4 w-4" /> {t("addLesson")}
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <Card key={i}>
              <CardHeader><Skeleton className="h-6 w-3/4" /></CardHeader>
              <CardContent className="space-y-4">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-2 w-full mt-4" />
              </CardContent>
            </Card>
          ))
        ) : lessons?.length ? (
          lessons.map((lesson) => (
            <Card key={lesson.id} className="flex flex-col h-full hover:shadow-md transition-shadow border-t-4 border-t-primary">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start gap-4">
                  <CardTitle className="text-lg leading-tight">
                    {lang === 'ur' && lesson.titleUr ? lesson.titleUr : lesson.title}
                  </CardTitle>
                  {getStatusBadge(lesson.status)}
                </div>
                <div className="text-sm font-medium text-muted-foreground">{lesson.subject || lesson.className}</div>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <div className="grid grid-cols-2 gap-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span className="truncate">{lesson.teacherName}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{lesson.students?.length || 0} Students</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {new Date(lesson.schedule).toLocaleString(lang === 'ur' ? 'ur-PK' : 'en-US', {
                        weekday: 'short', hour: 'numeric', minute: '2-digit'
                      })} ({lesson.duration}m)
                    </span>
                  </div>
                </div>
                
                {lesson.progress !== undefined && lesson.progress !== null && (
                  <div className="space-y-1.5 pt-2">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Progress</span>
                      <span>{lesson.progress}%</span>
                    </div>
                    <Progress value={lesson.progress} className="h-1.5" />
                  </div>
                )}
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="secondary" className="w-full text-xs h-8">View Details</Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-muted-foreground border-2 border-dashed rounded-lg">
            No lessons found
          </div>
        )}
      </div>
    </div>
  );
}
