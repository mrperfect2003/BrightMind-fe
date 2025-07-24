
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Book, User, Clock } from 'lucide-react';

const SubjectsEnrolled = () => {
  const subjects = [
    {
      id: 1,
      name: 'Advanced Mathematics',
      code: 'MATH301',
      teacher: 'Dr. Smith',
      credits: 4,
      schedule: 'Mon, Wed, Fri - 9:00 AM',
      progress: 75
    },
    {
      id: 2,
      name: 'Physics Laboratory',
      code: 'PHYS201',
      teacher: 'Prof. Johnson',
      credits: 3,
      schedule: 'Tue, Thu - 2:00 PM',
      progress: 82
    },
    {
      id: 3,
      name: 'Organic Chemistry',
      code: 'CHEM202',
      teacher: 'Dr. Brown',
      credits: 4,
      schedule: 'Mon, Wed - 11:00 AM',
      progress: 68
    },
    {
      id: 4,
      name: 'English Literature',
      code: 'ENG101',
      teacher: 'Ms. Davis',
      credits: 3,
      schedule: 'Tue - 10:00 AM',
      progress: 90
    },
    {
      id: 5,
      name: 'Computer Programming',
      code: 'CS102',
      teacher: 'Mr. Wilson',
      credits: 4,
      schedule: 'Wed, Fri - 3:00 PM',
      progress: 85
    }
  ];

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Book className="w-5 h-5" />
          Subjects Enrolled
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subjects.map((subject) => (
            <Card key={subject.id} className="border-2 hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">{subject.name}</h4>
                    <p className="text-sm text-muted-foreground">{subject.code}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span>{subject.teacher}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>{subject.schedule}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">
                      {subject.credits} Credits
                    </Badge>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${getProgressColor(subject.progress)}`}></div>
                      <span className="text-sm font-medium">{subject.progress}%</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SubjectsEnrolled;
