
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Users, BookOpen } from 'lucide-react';

const TeacherProfileOverview = () => {
  const teacher = {
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@school.edu',
    phone: '+1 (555) 123-4567',
    subjects: ['Mathematics', 'Physics'],
    classes: ['10A', '10B', '11A'],
    totalStudents: 85
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="w-5 h-5" />
          Teacher Profile
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-start gap-6">
          <Avatar className="w-24 h-24">
            <AvatarImage src="/placeholder.svg" alt={teacher.name} />
            <AvatarFallback className="text-lg">SJ</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 space-y-4">
            <div>
              <h3 className="text-2xl font-semibold">{teacher.name}</h3>
              <div className="flex items-center gap-2 text-muted-foreground mt-1">
                <Mail className="w-4 h-4" />
                <span>{teacher.email}</span>
              </div>
              <div className="text-muted-foreground mt-1">
                Phone: {teacher.phone}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  Subjects Taught
                </h4>
                <div className="flex flex-wrap gap-2">
                  {teacher.subjects.map((subject) => (
                    <Badge key={subject} variant="secondary">{subject}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Classes Assigned</h4>
                <div className="flex flex-wrap gap-2">
                  {teacher.classes.map((className) => (
                    <Badge key={className} variant="outline">{className}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2 flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  Total Students
                </h4>
                <div className="text-2xl font-bold text-blue-600">{teacher.totalStudents}</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeacherProfileOverview;
