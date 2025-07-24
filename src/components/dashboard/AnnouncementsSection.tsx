
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, Calendar, User } from 'lucide-react';

interface AnnouncementsSectionProps {
  isCompact?: boolean;
}

const AnnouncementsSection = ({ isCompact = false }: AnnouncementsSectionProps) => {
  const announcements = [
    {
      id: 1,
      title: 'Mid-term Exam Schedule Released',
      content: 'The mid-term examination schedule for all subjects has been published. Please check your individual timetables and prepare accordingly.',
      date: '2024-01-18',
      author: 'Academic Office',
      priority: 'high',
      category: 'Exam'
    },
    {
      id: 2,
      title: 'Library Extended Hours',
      content: 'Library will remain open until 10 PM during exam week to accommodate students study needs.',
      date: '2024-01-17',
      author: 'Library Administration',
      priority: 'medium',
      category: 'Facility'
    },
    {
      id: 3,
      title: 'Guest Lecture on AI in Education',
      content: 'Join us for an insightful lecture on Artificial Intelligence in Education by Dr. Sarah Chen on January 25th at 2 PM in the main auditorium.',
      date: '2024-01-16',
      author: 'Computer Science Dept',
      priority: 'medium',
      category: 'Event'
    },
    {
      id: 4,
      title: 'Campus Safety Guidelines',
      content: 'Updated safety protocols for campus access. All students must carry their ID cards at all times.',
      date: '2024-01-15',
      author: 'Security Office',
      priority: 'high',
      category: 'Safety'
    },
    {
      id: 5,
      title: 'New Course Registration Open',
      content: 'Registration for next semester elective courses is now open. Deadline is January 30th.',
      date: '2024-01-14',
      author: 'Registrar Office',
      priority: 'medium',
      category: 'Registration'
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
          Announcements {isCompact && '(Recent)'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {displayAnnouncements.map((announcement) => (
            <Card key={announcement.id} className="border-l-4 border-l-primary">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold">{announcement.title}</h4>
                    <div className="flex gap-2">
                      <Badge className={getPriorityColor(announcement.priority)}>
                        {announcement.priority.toUpperCase()}
                      </Badge>
                      <Badge variant="outline">
                        {announcement.category}
                      </Badge>
                    </div>
                  </div>
                  
                  {!isCompact && (
                    <p className="text-sm text-muted-foreground">
                      {announcement.content}
                    </p>
                  )}
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {announcement.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(announcement.date).toLocaleDateString()}
                      </span>
                    </div>
                    
                    {isCompact && (
                      <Button variant="ghost" size="sm">
                        Read More
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {isCompact && announcements.length > 3 && (
            <Button variant="outline" className="w-full">
              View All Announcements ({announcements.length})
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AnnouncementsSection;
