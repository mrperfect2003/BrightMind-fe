
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Heart, Share2 } from 'lucide-react';
import Gallery from './Gallery';

const StudentGalleryPanel = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="w-5 h-5" />
            Student Gallery View
            <Badge variant="secondary">View Only</Badge>
          </CardTitle>
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
  );
};

export default StudentGalleryPanel;
