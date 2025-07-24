import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import StudentProfile from '@/components/dashboard/StudentProfile';
import TimetableSection from '@/components/dashboard/TimetableSection';
import SubjectsEnrolled from '@/components/dashboard/SubjectsEnrolled';
import AttendanceOverview from '@/components/dashboard/AttendanceOverview';
import AssignmentsSection from '@/components/dashboard/AssignmentsSection';
import ExamsResults from '@/components/dashboard/ExamsResults';
import ResourcesSection from '@/components/dashboard/ResourcesSection';
import AnnouncementsSection from '@/components/dashboard/AnnouncementsSection';
import SupportSection from '@/components/dashboard/SupportSection';
import SettingsSection from '@/components/dashboard/SettingsSection';
import StudentGalleryModal from '@/components/gallery/StudentGalleryModal';
import StudentMessages from '@/components/dashboard/StudentMessages';
import StudentGroups from '@/components/dashboard/StudentGroups';
import NavigationBox from '@/components/dashboard/NavigationBox';

const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const navigate = useNavigate();

  const renderContent = () => {
    switch (activeSection) {
      case 'timetable':
        navigate('/student-timetable');
        return null;
      case 'subjects':
        navigate('/student-subjects');
        return null;
      case 'assignments':
        navigate('/student-assignments');
        return null;
      case 'exams':
        navigate('/student-exams');
        return null;
      case 'messages':
        navigate('/student-messages');
        return null;
      case 'groups':
        navigate('/student-groups');
        return null;
      case 'gallery':
        navigate('/student-gallery');
        return null;
      case 'resources':
        navigate('/student-resources');
        return null;
      case 'announcements':
        navigate('/student-announcements');
        return null;
      case 'support':
        navigate('/student-support');
        return null;
      case 'settings':
        navigate('/student-settings');
        return null;
      default:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AttendanceOverview />
              <div className="space-y-6">
                <AssignmentsSection isCompact />
              </div>
            </div>
            <AnnouncementsSection isCompact />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="mx-auto max-w-7xl">
        <Card className="shadow-lg">
          <CardHeader className="border-b">
            <CardTitle className="text-2xl font-bold text-center md:text-left">
              Student Dashboard
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {/* Student Profile - Always visible at top */}
            <div className="mb-6">
              <StudentProfile />
            </div>

            {/* Navigation Box - Below Profile */}
            <div className="mb-6">
              <NavigationBox 
                onSectionChange={setActiveSection} 
                activeSection={activeSection}
              />
            </div>

            {/* Dynamic Content Based on Active Section */}
            {renderContent()}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;
