import { useGetClasses } from "@workspace/api-client-react";
import { useTranslation } from "@/hooks/use-translation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Users, User, Clock, Book } from "lucide-react";

export default function Classes() {
  const { t, lang } = useTranslation();
  const { data: classes, isLoading } = useGetClasses();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-primary">{t("classes")}</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isLoading ? (
          Array.from({ length: 8 }).map((_, i) => (
            <Card key={i}>
              <CardHeader className="pb-2"><Skeleton className="h-6 w-2/3" /></CardHeader>
              <CardContent className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-1/2" />
              </CardContent>
            </Card>
          ))
        ) : classes?.length ? (
          classes.map((cls) => (
            <Card key={cls.id} className="hover:border-primary/50 transition-colors">
              <CardHeader className="pb-3 flex flex-row items-start justify-between space-y-0">
                <CardTitle className="text-xl font-bold text-primary">
                  {lang === 'ur' && cls.nameUr ? cls.nameUr : cls.name}
                </CardTitle>
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                  <Users className="h-3 w-3 mr-1" />
                  {cls.studentCount}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span>{cls.teacherName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{cls.schedule}</span>
                </div>
                {cls.subject && (
                  <div className="flex items-center gap-2">
                    <Book className="h-4 w-4 text-muted-foreground" />
                    <span>{cls.subject}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-muted-foreground border-2 border-dashed rounded-lg">
            No classes found
          </div>
        )}
      </div>
    </div>
  );
}
