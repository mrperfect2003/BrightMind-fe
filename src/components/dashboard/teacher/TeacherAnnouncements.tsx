
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Bell, Users, Calendar } from 'lucide-react';

const TeacherAnnouncements = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const announcements = [
    {
      id: 1,
      title: 'Extra Mathematics Class',
      content: 'Additional class scheduled for tomorrow to cover quadratic equations.',
      target: 'Class 10A',
      date: '2024-01-18',
      urgent: false
    },
    {
      id: 2,
      title: 'Physics Lab Safety',
      content: 'Important safety guidelines for next week\'s lab session.',
      target: 'Class 11A',
      date: '2024-01-17',
      urgent: true
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              My Announcements
            </span>
            <Button onClick={() => setShowCreateForm(!showCreateForm)}>
              <Plus className="w-4 h-4 mr-2" />
              New Announcement
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {showCreateForm && (
            <div className="mb-6 p-4 border rounded-lg bg-muted/50">
              <h3 className="font-semibold mb-4">Create Announcement</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Title</label>
                  <input type="text" className="w-full px-3 py-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Target Audience</label>
                  <select className="w-full px-3 py-2 border rounded-md">
                    <option>Class 10A</option>
                    <option>Class 10B</option>
                    <option>Class 11A</option>
                    <option>All my classes</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea className="w-full px-3 py-2 border rounded-md" rows={4}></textarea>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="urgent" />
                  <label htmlFor="urgent" className="text-sm">Mark as urgent</label>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Button>Post Announcement</Button>
                <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          )}

          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold flex items-center gap-2">
                    {announcement.title}
                    {announcement.urgent && (
                      <Badge className="bg-red-100 text-red-800">URGENT</Badge>
                    )}
                  </h4>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {announcement.target}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3">
                  {announcement.content}
                </p>
                
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
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
    </div>
  );
};

export default TeacherAnnouncements;
