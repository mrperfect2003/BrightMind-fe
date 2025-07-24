
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, BookOpen, Plus, Settings, Upload } from 'lucide-react';

interface GroupManagementProps {
  userRole: string;
}

const GroupManagement = ({ userRole }: GroupManagementProps) => {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  const classGroups = [
    {
      id: '1',
      name: 'Class 10 - B Science',
      type: 'Class Group',
      members: 32,
      teacher: 'Ms. Sarah Johnson',
      subject: 'Mathematics',
      isJoined: true
    },
    {
      id: '2',
      name: 'Physics Lab Group',
      type: 'Subject Group',
      members: 15,
      teacher: 'Dr. Mike Wilson',
      subject: 'Physics',
      isJoined: true
    }
  ];

  const programs = [
    {
      id: '1',
      name: 'Olympiad Prep',
      type: 'Program',
      members: 25,
      coordinator: 'Ms. Lisa Chen',
      status: 'Open Registration',
      isEnrolled: false
    },
    {
      id: '2',
      name: 'Art Club',
      type: 'Program',
      members: 18,
      coordinator: 'Mr. David Brown',
      status: 'Active',
      isEnrolled: true
    }
  ];

  const canCreateGroups = ['teacher', 'admin'].includes(userRole.toLowerCase());
  const canManagePrograms = ['admin'].includes(userRole.toLowerCase());

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Groups & Programs</h2>
        {canCreateGroups && (
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Create New
          </Button>
        )}
      </div>

      <Tabs defaultValue="groups" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="groups">Class Groups</TabsTrigger>
          <TabsTrigger value="programs">Programs</TabsTrigger>
        </TabsList>

        <TabsContent value="groups" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classGroups.map((group) => (
              <Card key={group.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-lg">
                    <span>{group.name}</span>
                    {group.isJoined && (
                      <Badge className="bg-green-100 text-green-800">Joined</Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <BookOpen className="w-4 h-4" />
                      <span>{group.subject}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4" />
                      <span>{group.members} members</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Teacher: {group.teacher}
                    </p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      variant={group.isJoined ? "outline" : "default"}
                      size="sm"
                      className="flex-1"
                    >
                      {group.isJoined ? 'View Chat' : 'Join Group'}
                    </Button>
                    {canCreateGroups && (
                      <Button variant="outline" size="sm">
                        <Settings className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="programs" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <Card key={program.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-lg">
                    <span>{program.name}</span>
                    <Badge variant={program.status === 'Open Registration' ? 'default' : 'secondary'}>
                      {program.status}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4" />
                      <span>{program.members} members</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Coordinator: {program.coordinator}
                    </p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      variant={program.isEnrolled ? "outline" : "default"}
                      size="sm"
                      className="flex-1"
                    >
                      {program.isEnrolled ? 'View Program' : 'Enroll'}
                    </Button>
                    {canManagePrograms && (
                      <Button variant="outline" size="sm">
                        <Settings className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Materials Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Shared Materials</span>
            {(userRole.toLowerCase() === 'teacher' || userRole.toLowerCase() === 'admin') && (
              <Button size="sm" className="gap-2">
                <Upload className="w-4 h-4" />
                Upload Material
              </Button>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { name: 'Mathematics Notes - Chapter 5', type: 'PDF', group: 'Class 10 - B Science', date: '2 days ago' },
              { name: 'Physics Lab Manual', type: 'PDF', group: 'Physics Lab Group', date: '1 week ago' },
              { name: 'Olympiad Practice Sheet', type: 'DOC', group: 'Olympiad Prep', date: '3 days ago' }
            ].map((material, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">{material.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {material.group} • {material.date}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{material.type}</Badge>
                  <Button variant="outline" size="sm">Download</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GroupManagement;
