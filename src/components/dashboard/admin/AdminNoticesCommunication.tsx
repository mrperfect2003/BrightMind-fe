
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Megaphone, Send, MessageSquare } from 'lucide-react';

const AdminNoticesCommunication = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [target, setTarget] = useState('');

  const announcements = [
    { id: 1, title: 'School Closure Notice', content: 'School will be closed on Jan 26th for Republic Day', target: 'All', date: '2024-01-20' },
    { id: 2, title: 'Parent-Teacher Meeting', content: 'PTM scheduled for all classes on Jan 30th', target: 'Parents', date: '2024-01-19' },
    { id: 3, title: 'Sports Day Preparation', content: 'All students to report for sports practice', target: 'Students', date: '2024-01-18' },
  ];

  const messages = [
    { id: 1, from: 'Parent - Alice Johnson', subject: 'Regarding homework policy', status: 'Unread' },
    { id: 2, from: 'Teacher - John Smith', subject: 'Class schedule change request', status: 'Read' },
    { id: 3, from: 'Student - Bob Wilson', subject: 'Library book return', status: 'Replied' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Megaphone className="w-5 h-5" />
              Create New Announcement
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Announcement title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            
            <Textarea
              placeholder="Announcement content..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
            />
            
            <Select value={target} onValueChange={setTarget}>
              <SelectTrigger>
                <SelectValue placeholder="Select target audience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All (Students, Teachers, Parents)</SelectItem>
                <SelectItem value="students">Students Only</SelectItem>
                <SelectItem value="teachers">Teachers Only</SelectItem>
                <SelectItem value="parents">Parents Only</SelectItem>
                <SelectItem value="class">Specific Class</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="flex gap-2">
              <Button className="flex-1">
                <Send className="w-4 h-4 mr-2" />
                Post Announcement
              </Button>
              <Button variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Schedule
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Recent Messages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {messages.map((message) => (
                <div key={message.id} className="border rounded-lg p-3">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-medium text-sm">{message.from}</p>
                    <Badge variant={
                      message.status === 'Unread' ? 'destructive' : 
                      message.status === 'Replied' ? 'default' : 'secondary'
                    }>
                      {message.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{message.subject}</p>
                  <Button variant="outline" size="sm">Reply</Button>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">View All Messages</Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Announcements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{announcement.title}</h3>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{announcement.target}</Badge>
                    <span className="text-sm text-muted-foreground">{announcement.date}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{announcement.content}</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button variant="outline" size="sm">Delete</Button>
                  <Button variant="outline" size="sm">Resend</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminNoticesCommunication;
