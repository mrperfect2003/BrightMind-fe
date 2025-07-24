
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, BookOpen, Calendar } from 'lucide-react';

const ParentGroups = () => {
  const childGroups = [
    {
      id: '1',
      name: 'Class 10 - B Science',
      type: 'Class Group',
      members: 32,
      teacher: 'Ms. Sarah Johnson',
      subject: 'Mathematics',
      childParticipation: 'Active'
    },
    {
      id: '2',
      name: 'Physics Lab Group',
      type: 'Subject Group',
      members: 15,
      teacher: 'Dr. Mike Wilson',
      subject: 'Physics',
      childParticipation: 'Active'
    }
  ];

  const enrolledPrograms = [
    {
      id: '1',
      name: 'Olympiad Prep',
      coordinator: 'Ms. Lisa Chen',
      status: 'Enrolled',
      nextActivity: 'Practice Test - Jan 25'
    },
    {
      id: '2',
      name: 'Art Club',
      coordinator: 'Mr. David Brown',
      status: 'Enrolled',
      nextActivity: 'Exhibition - Feb 10'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">My Child's Groups & Programs</h2>
        <p className="text-muted-foreground">
          Monitor your child's participation in class groups and programs
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Class Groups
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {childGroups.map((group) => (
                <div key={group.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">{group.name}</h4>
                    <Badge className="bg-green-100 text-green-800">
                      {group.childParticipation}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span>{group.subject}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{group.members} students</span>
                    </div>
                    <p className="text-muted-foreground">
                      Teacher: {group.teacher}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Enrolled Programs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {enrolledPrograms.map((program) => (
                <div key={program.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">{program.name}</h4>
                    <Badge className="bg-blue-100 text-blue-800">
                      {program.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">
                      Coordinator: {program.coordinator}
                    </p>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{program.nextActivity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ParentGroups;
