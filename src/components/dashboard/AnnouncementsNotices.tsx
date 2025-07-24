
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bell, Calendar, User } from 'lucide-react';

interface AnnouncementsNoticesProps {
  isCompact?: boolean;
}

const AnnouncementsNotices = ({ isCompact = false }: AnnouncementsNoticesProps) => {
  const announcements = [
    {
      id: 1,
      title: 'Mid-term Exam Schedule Released',
      content: 'The mid-term examination schedule for all subjects has been published.',
      date: '2024-01-18',
      author: 'Academic Office',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Library Extended Hours',
      content: 'Library will remain open until 10 PM during exam week.',
      date: '2024-01-17',
      author: 'Library Administration',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Guest Lecture on AI',
      content: 'Join us for an insightful lecture on January 25th at 2 PM.',
      date: '2024-01-16',
      author: 'Computer Science Dept',
      priority: 'medium'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const displayAnnouncements = isCompact ? announcements.slice(0, 3) : announcements;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="w-5 h-5" />
          Announcements & Notices
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {displayAnnouncements.map((announcement) => (
            <div key={announcement.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold">{announcement.title}</h4>
                <Badge className={getPriorityColor(announcement.priority)}>
                  {announcement.priority.toUpperCase()}
                </Badge>
              </div>
              
              {!isCompact && (
                <p className="text-sm text-muted-foreground mb-3">
                  {announcement.content}
                </p>
              )}
              
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {announcement.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(announcement.date).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AnnouncementsNotices;
