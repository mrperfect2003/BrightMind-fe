
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ChildOverview from '@/components/dashboard/ChildOverview';
import AttendanceSummary from '@/components/dashboard/AttendanceSummary';
import AcademicPerformance from '@/components/dashboard/AcademicPerformance';
import AssignmentsHomework from '@/components/dashboard/AssignmentsHomework';
import AnnouncementsNotices from '@/components/dashboard/AnnouncementsNotices';
import StudyMaterials from '@/components/dashboard/StudyMaterials';
import TeacherCommunication from '@/components/dashboard/TeacherCommunication';
import FeesSection from '@/components/dashboard/FeesSection';
import StudentProfileContact from '@/components/dashboard/StudentProfileContact';
import ParentSettings from '@/components/dashboard/ParentSettings';
import ParentGalleryPanel from '@/components/gallery/ParentGalleryPanel';
import ParentMessages from '@/components/dashboard/ParentMessages';
import ParentGroups from '@/components/dashboard/ParentGroups';
import NavigationBox from '@/components/dashboard/NavigationBox';

const ParentDashboard = () => {
  const [selectedChild, setSelectedChild] = useState('child1');
  const [activeSection, setActiveSection] = useState('overview');
  
  // Mock data for multiple children
  const children = [
    { id: 'child1', name: 'Emma Johnson', class: '8th Grade', section: 'A' },
    { id: 'child2', name: 'Liam Johnson', class: '5th Grade', section: 'B' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'attendance':
        return <AttendanceSummary selectedChildId={selectedChild} />;
      case 'academic':
        return <AcademicPerformance selectedChildId={selectedChild} />;
      case 'assignments':
        return <AssignmentsHomework selectedChildId={selectedChild} />;
      case 'notices':
        return <AnnouncementsNotices />;
      case 'messages':
        return <ParentMessages />;
      case 'groups':
        return <ParentGroups />;
      case 'gallery':
        return <ParentGalleryPanel />;
      case 'materials':
        return <StudyMaterials selectedChildId={selectedChild} />;
      case 'teachers':
        return <TeacherCommunication selectedChildId={selectedChild} />;
      case 'fees':
        return <FeesSection selectedChildId={selectedChild} />;
      case 'settings':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <StudentProfileContact selectedChildId={selectedChild} />
            <ParentSettings />
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            <NavigationBox 
              onSectionChange={setActiveSection} 
              activeSection={activeSection}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AttendanceSummary selectedChildId={selectedChild} isCompact />
              <div className="space-y-6">
                <AssignmentsHomework selectedChildId={selectedChild} isCompact />
                <AnnouncementsNotices isCompact />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="mx-auto max-w-7xl">
        <Card className="shadow-lg">
          <CardHeader className="border-b">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <CardTitle className="text-2xl font-bold">
                Parent Dashboard
              </CardTitle>
              
              {/* Child Selector */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Viewing:</span>
                <Select value={selectedChild} onValueChange={setSelectedChild}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {children.map((child) => (
                      <SelectItem key={child.id} value={child.id}>
                        {child.name} - {child.class} {child.section}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-6">
            {/* Child Overview - Always visible */}
            <div className="mb-6">
              <ChildOverview selectedChildId={selectedChild} />
            </div>

            {/* Dynamic Content Based on Active Section */}
            {renderContent()}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ParentDashboard;
