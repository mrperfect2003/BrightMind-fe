
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FolderOpen, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ResourcesSection from '@/components/dashboard/ResourcesSection';

const StudentResources = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <FolderOpen className="w-5 h-5" />
                Resources
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

        <ResourcesSection />
      </div>
    </div>
  );
};

export default StudentResources;
