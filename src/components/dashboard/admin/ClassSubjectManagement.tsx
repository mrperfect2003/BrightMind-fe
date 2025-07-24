
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, BookOpen, Users, Clock } from 'lucide-react';

const ClassSubjectManagement = () => {
  const classes = [
    { id: '10A', name: 'Class 10A', capacity: 30, enrolled: 28, subjects: ['Math', 'Physics', 'Chemistry'], timing: '8:00 AM - 2:00 PM' },
    { id: '10B', name: 'Class 10B', capacity: 30, enrolled: 25, subjects: ['Math', 'Biology', 'English'], timing: '8:00 AM - 2:00 PM' },
    { id: '11A', name: 'Class 11A', capacity: 25, enrolled: 23, subjects: ['Physics', 'Chemistry', 'Math'], timing: '8:30 AM - 2:30 PM' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Class Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Create New Class
            </Button>
            
            <div className="space-y-3">
              {classes.map((cls) => (
                <div key={cls.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold">{cls.name}</h3>
                    <Badge variant="outline">{cls.id}</Badge>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span>{cls.enrolled}/{cls.capacity} students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>{cls.timing}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {cls.subjects.map((subject) => (
                        <Badge key={subject} variant="secondary" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-3">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="outline" size="sm">Assign Teacher</Button>
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
              Subject Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Add New Subject
            </Button>
            
            <div className="space-y-3">
              {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'History'].map((subject) => (
                <div key={subject} className="flex items-center justify-between p-3 border rounded">
                  <span className="font-medium">{subject}</span>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Active</Badge>
                    <Button variant="outline" size="sm">Edit</Button>
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

export default ClassSubjectManagement;
