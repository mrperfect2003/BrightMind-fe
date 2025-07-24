
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Mail, User, Users } from 'lucide-react';

const TeacherMessages = () => {
  const messages = [
    {
      id: 1,
      from: 'John Parent',
      subject: 'Question about homework',
      preview: 'Could you please clarify the assignment for tomorrow?',
      time: '2 hours ago',
      unread: true,
      type: 'parent'
    },
    {
      id: 2,
      from: 'School Admin',
      subject: 'Meeting reminder',
      preview: 'Staff meeting tomorrow at 3 PM in the conference room.',
      time: '1 day ago',
      unread: false,
      type: 'admin'
    },
    {
      id: 3,
      from: 'Alice Johnson',
      subject: 'Absent today',
      preview: 'I will be absent today due to illness.',
      time: '2 days ago',
      unread: false,
      type: 'student'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'parent': return 'bg-blue-100 text-blue-800';
      case 'admin': return 'bg-purple-100 text-purple-800';
      case 'student': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'parent': return <Users className="w-3 h-3" />;
      case 'admin': return <User className="w-3 h-3" />;
      case 'student': return <User className="w-3 h-3" />;
      default: return <Mail className="w-3 h-3" />;
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Messages & Communication
            </span>
            <Button>
              New Message
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`border rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow ${
                  message.unread ? 'bg-blue-50 border-blue-200' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback>
                      {message.from.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{message.from}</span>
                        <Badge className={getTypeColor(message.type)}>
                          {getTypeIcon(message.type)}
                          {message.type.toUpperCase()}
                        </Badge>
                        {message.unread && (
                          <Badge className="bg-red-100 text-red-800">NEW</Badge>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground">{message.time}</span>
                    </div>
                    
                    <h4 className="font-semibold text-sm mb-1">{message.subject}</h4>
                    <p className="text-sm text-muted-foreground truncate">{message.preview}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-16 flex-col gap-2">
              <Users className="w-5 h-5" />
              Message Parents
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2">
              <User className="w-5 h-5" />
              Contact Admin
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2">
              <Mail className="w-5 h-5" />
              Send Reminder
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherMessages;
