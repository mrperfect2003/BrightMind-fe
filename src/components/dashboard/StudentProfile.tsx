
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, User, IdCard } from 'lucide-react';

const StudentProfile = () => {
  // Mock data - replace with actual student data
  const studentData = {
    name: "John Doe",
    avatar: "",
    schoolId: "STU2024001",
    course: "Computer Science",
    year: "3rd Year",
    email: "john.doe@school.edu",
    mobile: "+1 234 567 8900",
    parentName: "Jane Doe",
    parentEmail: "jane.doe@email.com"
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Avatar */}
          <div className="flex flex-col items-center">
            <Avatar className="w-24 h-24 md:w-32 md:h-32">
              <AvatarImage src={studentData.avatar} alt={studentData.name} />
              <AvatarFallback className="text-2xl font-bold">
                {studentData.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <Badge variant="secondary" className="mt-2">
              {studentData.course}
            </Badge>
          </div>

          {/* Student Info */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div>
              <h2 className="text-2xl font-bold">{studentData.name}</h2>
              <p className="text-muted-foreground">{studentData.year}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <IdCard className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">ID: {studentData.schoolId}</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{studentData.email}</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{studentData.mobile}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Parent: {studentData.parentName}</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{studentData.parentEmail}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentProfile;
