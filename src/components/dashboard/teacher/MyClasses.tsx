
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, BookOpen, Calendar } from 'lucide-react';

interface MyClassesProps {
  onClassSelect: (className: string) => void;
}

const MyClasses = ({ onClassSelect }: MyClassesProps) => {
  const classes = [
    {
      id: '10A',
      name: 'Class 10A',
      subject: 'Mathematics',
      students: 32,
      nextClass: '9:00 AM',
      today: true
    },
    {
      id: '10B',
      name: 'Class 10B',
      subject: 'Mathematics',
      students: 28,
      nextClass: '11:00 AM',
      today: true
    },
    {
      id: '11A',
      name: 'Class 11A',
      subject: 'Physics',
      students: 25,
      nextClass: '2:00 PM',
      today: false
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {classes.map((classItem) => (
        <Card key={classItem.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{classItem.name}</span>
              {classItem.today && (
                <Badge variant="default">Today</Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <BookOpen className="w-4 h-4" />
                <span>{classItem.subject}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4" />
                <span>{classItem.students} students</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4" />
                <span>Next: {classItem.nextClass}</span>
              </div>
            </div>
            
            <Button 
              onClick={() => onClassSelect(classItem.id)}
              className="w-full"
            >
              Open Class Dashboard
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MyClasses;
