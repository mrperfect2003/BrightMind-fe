
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  BookOpen, 
  ClipboardList, 
  GraduationCap, 
  MessageSquare, 
  Users, 
  Image, 
  FolderOpen, 
  Bell, 
  HelpCircle, 
  Settings 
} from 'lucide-react';

interface NavigationBoxProps {
  onSectionChange: (section: string) => void;
  activeSection: string;
}

const NavigationBox = ({ onSectionChange, activeSection }: NavigationBoxProps) => {
  const navigationItems = [
    { id: 'timetable', label: 'Timetable', icon: Calendar, color: 'bg-blue-100 text-blue-700' },
    { id: 'subjects', label: 'Subjects', icon: BookOpen, color: 'bg-green-100 text-green-700' },
    { id: 'assignments', label: 'Assignments', icon: ClipboardList, color: 'bg-orange-100 text-orange-700', badge: '3' },
    { id: 'exams', label: 'Exams', icon: GraduationCap, color: 'bg-purple-100 text-purple-700' },
    { id: 'messages', label: 'Messages', icon: MessageSquare, color: 'bg-pink-100 text-pink-700', badge: '2' },
    { id: 'groups', label: 'Groups', icon: Users, color: 'bg-indigo-100 text-indigo-700' },
    { id: 'gallery', label: 'Gallery', icon: Image, color: 'bg-cyan-100 text-cyan-700' },
    { id: 'resources', label: 'Resources', icon: FolderOpen, color: 'bg-teal-100 text-teal-700' },
    { id: 'announcements', label: 'Notices', icon: Bell, color: 'bg-red-100 text-red-700', badge: '1' },
    { id: 'support', label: 'Support', icon: HelpCircle, color: 'bg-amber-100 text-amber-700' },
    { id: 'settings', label: 'Settings', icon: Settings, color: 'bg-gray-100 text-gray-700' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          Quick Navigation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {navigationItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "outline"}
              className={`h-auto p-4 flex flex-col items-center gap-2 relative ${
                activeSection === item.id ? '' : 'hover:bg-accent'
              }`}
              onClick={() => onSectionChange(item.id)}
            >
              <div className={`p-2 rounded-lg ${item.color}`}>
                <item.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-center">{item.label}</span>
              {item.badge && (
                <Badge className="absolute -top-1 -right-1 px-1.5 py-0.5 text-xs">
                  {item.badge}
                </Badge>
              )}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NavigationBox;
