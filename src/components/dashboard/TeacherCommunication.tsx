
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageCircle, Phone, Mail, Users } from 'lucide-react';

interface TeacherCommunicationProps {
  selectedChildId: string;
}

const TeacherCommunication = ({ selectedChildId }: TeacherCommunicationProps) => {
  const teachers = [
    {
      id: 1,
      name: 'Mrs. Sarah Smith',
      subject: 'Mathematics',
      email: 'sarah.smith@school.edu',
      phone: '+1 234-567-8901',
      avatar: '',
      isClassTeacher: true
    },
    {
      id: 2,
      name: 'Mr. David Johnson',
      subject: 'Science',
      email: 'david.johnson@school.edu',
      phone: '+1 234-567-8902',
      avatar: '',
      isClassTeacher: false
    },
    {
      id: 3,
      name: 'Ms. Emily Brown',
      subject: 'English',
      email: 'emily.brown@school.edu',
      phone: '+1 234-567-8903',
      avatar: '',
      isClassTeacher: false
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Teacher Communication
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teachers.map((teacher) => (
              <div key={teacher.id} className="border rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={teacher.avatar} alt={teacher.name} />
                    <AvatarFallback>
                      {teacher.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{teacher.name}</h4>
                      {teacher.isClassTeacher && (
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          Class Teacher
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{teacher.subject}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        <MessageCircle className="w-4 h-4" />
                        Message
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Mail className="w-4 h-4" />
                        Email
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Phone className="w-4 h-4" />
                        Call
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Parent-Teacher Meeting Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Parent-Teacher Meeting</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6">
            <h4 className="font-semibold mb-2">Next PTM: January 30, 2024</h4>
            <p className="text-muted-foreground mb-4">2:00 PM - 5:00 PM</p>
            <Button className="gap-2">
              <MessageCircle className="w-4 h-4" />
              Request Meeting Slot
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherCommunication;
