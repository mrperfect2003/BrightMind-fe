
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ClipboardList, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AssignmentsSection from '@/components/dashboard/AssignmentsSection';

const StudentAssignments = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <ClipboardList className="w-5 h-5" />
                My Assignments
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

        <AssignmentsSection />
      </div>
    </div>
  );
};

export default StudentAssignments;
