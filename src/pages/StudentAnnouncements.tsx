
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnnouncementsSection from '@/components/dashboard/AnnouncementsSection';

const StudentAnnouncements = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notices & Announcements
              </CardTitle>
              <Button 
                variant="outline" 
                onClick={() => navigate('/student-dashboard')}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Dashboard
              </Button>
            </div>
          </CardHeader>
        </Card>

        <AnnouncementsSection />
      </div>
    </div>
  );
};

export default StudentAnnouncements;
