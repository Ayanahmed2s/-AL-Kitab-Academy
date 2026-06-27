import { useParams, Link } from "wouter";
import { useGetTeacher } from "@workspace/api-client-react";
import { useTranslation } from "@/hooks/use-translation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, Phone, Mail, Award, Calendar, Book, Clock } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function TeacherDetails() {
  const params = useParams();
  const id = params.id as string;
  const { lang } = useTranslation();
  
  const { data: teacher, isLoading } = useGetTeacher(id, {
    query: { enabled: !!id }
  });

  if (isLoading) {
    return <div className="space-y-6"><Skeleton className="h-32 w-full" /><Skeleton className="h-64 w-full" /></div>;
  }

  if (!teacher) {
    return <div>Teacher not found</div>;
  }

  const name = lang === 'ur' && teacher.nameUr ? teacher.nameUr : teacher.name;
  const initials = teacher.name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/teachers">
          <Button variant="outline" size="icon"><ArrowLeft className="h-4 w-4" /></Button>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-primary">Teacher Profile</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1 border-primary/20">
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <Avatar className="h-24 w-24 mb-4 border-2 border-primary/20">
              <AvatarFallback className="text-xl bg-primary/10 text-primary">{initials}</AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-muted-foreground mb-4">{teacher.email}</p>
            <Badge className={teacher.status === 'active' ? 'bg-green-500' : ''}>
              {teacher.status.toUpperCase()}
            </Badge>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Professional Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-md text-primary"><Award className="h-5 w-5" /></div>
                <div>
                  <div className="text-sm font-medium">Qualification</div>
                  <div className="text-sm text-muted-foreground">{teacher.qualification}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-md text-primary"><Calendar className="h-5 w-5" /></div>
                <div>
                  <div className="text-sm font-medium">Hired On</div>
                  <div className="text-sm text-muted-foreground">{new Date(teacher.hireDate).toLocaleDateString()}</div>
                </div>
              </div>
              {teacher.specialization && (
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-md text-primary"><Book className="h-5 w-5" /></div>
                  <div>
                    <div className="text-sm font-medium">Specialization</div>
                    <div className="text-sm text-muted-foreground">{teacher.specialization}</div>
                  </div>
                </div>
              )}
              {teacher.experience && (
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-md text-primary"><Clock className="h-5 w-5" /></div>
                  <div>
                    <div className="text-sm font-medium">Experience</div>
                    <div className="text-sm text-muted-foreground">{teacher.experience} Years</div>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4 pt-4 border-t">
              <h3 className="font-medium">Subjects</h3>
              <div className="flex flex-wrap gap-2">
                {teacher.subjects.map(sub => (
                  <Badge key={sub} variant="secondary" className="px-3 py-1 bg-secondary/20 text-secondary-foreground">{sub}</Badge>
                ))}
              </div>
            </div>
            
            {teacher.classes && teacher.classes.length > 0 && (
              <div className="space-y-4 pt-4 border-t">
                <h3 className="font-medium">Assigned Classes</h3>
                <div className="flex flex-wrap gap-2">
                  {teacher.classes.map(cls => (
                    <Badge key={cls} variant="outline" className="px-3 py-1">{cls}</Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Contact Info</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-8">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{teacher.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{teacher.email}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
