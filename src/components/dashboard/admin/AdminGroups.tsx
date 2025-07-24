
import React from 'react';
import GroupManagement from '../../groups/GroupManagement';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, Settings, BarChart3 } from 'lucide-react';

const AdminGroups = () => {
  const groupStats = [
    { label: 'Total Groups', value: '45', icon: Users, color: 'bg-blue-500' },
    { label: 'Active Programs', value: '12', icon: BookOpen, color: 'bg-green-500' },
    { label: 'Total Members', value: '1,234', icon: Users, color: 'bg-purple-500' },
    { label: 'Group Activities', value: '89', icon: BarChart3, color: 'bg-orange-500' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Groups & Programs Management</h2>
        <p className="text-muted-foreground">
          Create, monitor, and manage all school groups and programs
        </p>
      </div>

      {/* Group Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {groupStats.map((stat, index) => (
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

      {/* Admin Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Administration Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button className="h-16 flex-col gap-2">
              <Users className="w-5 h-5" />
              Create Group
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2">
              <BookOpen className="w-5 h-5" />
              New Program
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2">
              <Settings className="w-5 h-5" />
              Assign Teachers
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2">
              <BarChart3 className="w-5 h-5" />
              View Reports
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Group Management Interface */}
      <GroupManagement userRole="Admin" />
    </div>
  );
};

export default AdminGroups;
