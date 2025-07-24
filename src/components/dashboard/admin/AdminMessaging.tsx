
import React from 'react';
import MessagingInterface from '../../messaging/MessagingInterface';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageSquare, Users, TrendingUp, Bell } from 'lucide-react';

const AdminMessaging = () => {
  const messageStats = [
    { label: 'Total Messages Today', value: '143', icon: MessageSquare, color: 'bg-blue-500' },
    { label: 'Active Conversations', value: '27', icon: Users, color: 'bg-green-500' },
    { label: 'Response Rate', value: '94%', icon: TrendingUp, color: 'bg-purple-500' },
    { label: 'Urgent Messages', value: '3', icon: Bell, color: 'bg-red-500' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Communication Center</h2>
        <p className="text-muted-foreground">
          Monitor and manage all school communications
        </p>
      </div>

      {/* Message Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {messageStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.color} text-white`}>
                  <stat.icon className="w-5 h-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button className="h-16 flex-col gap-2">
              <Bell className="w-5 h-5" />
              Send Announcement
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2">
              <Users className="w-5 h-5" />
              Message All Teachers
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2">
              <MessageSquare className="w-5 h-5" />
              Urgent Broadcast
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2">
              <TrendingUp className="w-5 h-5" />
              View Reports
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Messaging Interface */}
      <MessagingInterface userRole="Admin" />
    </div>
  );
};

export default AdminMessaging;
