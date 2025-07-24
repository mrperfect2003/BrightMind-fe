
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TeacherProfileOverview from '@/components/dashboard/teacher/TeacherProfileOverview';
import MyClasses from '@/components/dashboard/teacher/MyClasses';
import StudentList from '@/components/dashboard/teacher/StudentList';
import TeacherTimetable from '@/components/dashboard/teacher/TeacherTimetable';
import AttendanceManagement from '@/components/dashboard/teacher/AttendanceManagement';
import AssignmentManagement from '@/components/dashboard/teacher/AssignmentManagement';
import ExamsResults from '@/components/dashboard/teacher/ExamsResults';
import TeacherAnnouncements from '@/components/dashboard/teacher/TeacherAnnouncements';
import TeacherSettings from '@/components/dashboard/teacher/TeacherSettings';
import TeacherGalleryPanel from '@/components/gallery/TeacherGalleryPanel';
import TeacherMessagesNew from '@/components/dashboard/teacher/TeacherMessagesNew';
import TeacherGroups from '@/components/dashboard/teacher/TeacherGroups';
import NavigationBox from '@/components/dashboard/NavigationBox';

const TeacherDashboard = () => {
  const [selectedClass, setSelectedClass] = useState('10A');
  const [activeSection, setActiveSection] = useState('overview');

  const renderContent = () => {
    switch (activeSection) {
      case 'timetable':
        return <TeacherTimetable />;
      case 'subjects':
        return <MyClasses onClassSelect={setSelectedClass} />;
      case 'assignments':
        return <AssignmentManagement />;
      case 'exams':
        return <ExamsResults />;
      case 'messages':
        return <TeacherMessagesNew />;
      case 'groups':
        return <TeacherGroups />;
      case 'gallery':
        return <TeacherGalleryPanel />;
      case 'announcements':
        return <TeacherAnnouncements />;
      case 'settings':
        return <TeacherSettings />;
      default:
        return (
          <div className="space-y-6">
            <NavigationBox 
              onSectionChange={setActiveSection} 
              activeSection={activeSection}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AttendanceManagement selectedClass={selectedClass} />
              <div className="space-y-6">
                <MyClasses onClassSelect={setSelectedClass} />
                <TeacherAnnouncements />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Teacher Dashboard
          </h1>
        </div>

        <TeacherProfileOverview />

        <Card className="shadow-lg">
          <CardContent className="p-6">
            {renderContent()}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeacherDashboard;
