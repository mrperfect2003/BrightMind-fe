
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Users, GraduationCap, BookOpen, Calendar, BarChart3, FileText, Bell, CreditCard, Camera, Bot, Settings, Shield } from 'lucide-react';
import AdminProfileOverview from '@/components/dashboard/admin/AdminProfileOverview';
import StudentManagement from '@/components/dashboard/admin/StudentManagement';
import TeacherManagement from '@/components/dashboard/admin/TeacherManagement';
import ClassSubjectManagement from '@/components/dashboard/admin/ClassSubjectManagement';
import AdminAttendanceOverview from '@/components/dashboard/admin/AdminAttendanceOverview';
import PerformanceAnalytics from '@/components/dashboard/admin/PerformanceAnalytics';
import AdminAssignmentExamManagement from '@/components/dashboard/admin/AdminAssignmentExamManagement';
import AdminNoticesCommunication from '@/components/dashboard/admin/AdminNoticesCommunication';
import FeesManagement from '@/components/dashboard/admin/FeesManagement';
import AdminSettings from '@/components/dashboard/admin/AdminSettings';
import AdminGalleryPanel from '@/components/gallery/AdminGalleryPanel';
import NavigationBox from '@/components/dashboard/NavigationBox';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Quick stats data
  const stats = [
    { title: 'Total Students', value: '1,234', icon: Users, color: 'bg-blue-500', change: '+12%' },
    { title: 'Total Teachers', value: '89', icon: GraduationCap, color: 'bg-green-500', change: '+3%' },
    { title: 'Active Classes', value: '45', icon: BookOpen, color: 'bg-purple-500', change: '+2%' },
    { title: 'Events This Month', value: '18', icon: Calendar, color: 'bg-orange-500', change: '+25%' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'timetable':
        return <AdminAttendanceOverview />;
      case 'subjects':
        return <ClassSubjectManagement />;
      case 'assignments':
        return <AdminAssignmentExamManagement />;
      case 'exams':
        return <PerformanceAnalytics />;
      case 'messages':
        return <AdminNoticesCommunication />;
      case 'groups':
        return <StudentManagement />;
      case 'gallery':
        return <AdminGalleryPanel />;
      case 'resources':
        return <TeacherManagement />;
      case 'announcements':
        return <AdminNoticesCommunication />;
      case 'support':
        return <FeesManagement />;
      case 'settings':
        return <AdminSettings />;
      default:
        return (
          <div className="space-y-6">
            <NavigationBox 
              onSectionChange={setActiveTab} 
              activeSection={activeTab}
            />
            <AdminAttendanceOverview />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground text-lg">
              Manage your school's operations and monitor performance
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
              <Shield className="w-4 h-4 mr-2" />
              Administrator
            </Badge>
          </div>
        </div>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <Badge variant="secondary" className="text-xs px-2 py-1">
                      {stat.change} from last month
                    </Badge>
                  </div>
                  <div className={`p-3 rounded-full ${stat.color} text-white shadow-lg`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Profile Overview */}
        <AdminProfileOverview />

        {/* Main Content */}
        <Card className="border-0 shadow-xl">
          <CardHeader className="border-b bg-gradient-to-r from-white to-slate-50">
            <CardTitle className="text-2xl font-semibold text-gray-800">
              School Management
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {renderContent()}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
