import { useParams, Link } from "wouter";
import { useGetStudent } from "@workspace/api-client-react";
import { useTranslation } from "@/hooks/use-translation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, Phone, Mail, GraduationCap, Calendar, Users, MapPin } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

export default function StudentDetails() {
  const params = useParams();
  const id = params.id as string;
  const { lang } = useTranslation();
  
  const { data: student, isLoading } = useGetStudent(id, {
    query: { enabled: !!id }
  });

  if (isLoading) {
    return <div className="space-y-6"><Skeleton className="h-32 w-full" /><Skeleton className="h-64 w-full" /></div>;
  }

  if (!student) {
    return <div>Student not found</div>;
  }

  const name = lang === 'ur' && student.nameUr ? student.nameUr : student.name;
  const initials = student.name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/students">
          <Button variant="outline" size="icon"><ArrowLeft className="h-4 w-4" /></Button>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-primary">Student Profile</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1 border-primary/20">
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <Avatar className="h-24 w-24 mb-4 border-2 border-primary/20">
              <AvatarFallback className="text-xl bg-primary/10 text-primary">{initials}</AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-muted-foreground mb-4">{student.email}</p>
            <Badge className={student.status === 'active' ? 'bg-green-500' : ''}>
              {student.status.toUpperCase()}
            </Badge>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Academic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-md text-primary"><GraduationCap className="h-5 w-5" /></div>
                <div>
                  <div className="text-sm font-medium">Class</div>
                  <div className="text-sm text-muted-foreground">{student.className}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-md text-primary"><Calendar className="h-5 w-5" /></div>
                <div>
                  <div className="text-sm font-medium">Enrolled</div>
                  <div className="text-sm text-muted-foreground">{new Date(student.enrollDate).toLocaleDateString()}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-md text-primary"><User className="h-5 w-5" /></div>
                <div>
                  <div className="text-sm font-medium">Student ID</div>
                  <div className="text-sm text-muted-foreground">{student.id}</div>
                </div>
              </div>
              {student.grade && (
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-md text-primary"><GraduationCap className="h-5 w-5" /></div>
                  <div>
                    <div className="text-sm font-medium">Grade</div>
                    <div className="text-sm text-muted-foreground">{student.grade}</div>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-2 pt-4 border-t">
              <div className="flex justify-between items-center text-sm font-medium">
                <span>Attendance</span>
                <span>{student.attendance}%</span>
              </div>
              <Progress value={student.attendance} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Contact & Guardian Info</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{student.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{student.email}</span>
                </div>
                {student.address && (
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{student.address}</span>
                  </div>
                )}
              </div>
              <div className="space-y-4 border-l pl-6">
                <div className="flex items-center gap-3">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Guardian: {student.guardianName}</span>
                </div>
                {student.guardianPhone && (
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{student.guardianPhone}</span>
                  </div>
                )}
              </div>
            </div>
            {student.notes && (
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-medium mb-2 text-sm">Notes</h4>
                <p className="text-sm text-muted-foreground bg-muted p-3 rounded-md">{student.notes}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
