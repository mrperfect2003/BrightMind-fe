
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Gallery from '@/components/gallery/Gallery';

const StudentGallery = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Student Gallery View
                <Badge variant="secondary">View Only</Badge>
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
          <CardContent>
            <div className="mb-4 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-2">Welcome to the School Gallery!</h3>
              <p className="text-blue-700 text-sm">
                Browse through photos of school events, achievements, and activities. 
                You can view and enjoy all the memories captured throughout the academic year.
              </p>
            </div>
          </CardContent>
        </Card>

        <Gallery userRole="student" showUploadButton={false} />
      </div>
    </div>
  );
};

export default StudentGallery;
