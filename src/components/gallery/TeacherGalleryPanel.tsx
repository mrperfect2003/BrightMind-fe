
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Upload, Camera, Users } from 'lucide-react';
import Gallery from './Gallery';
import MediaUploadForm from './MediaUploadForm';

const TeacherGalleryPanel = () => {
  const [showUploadForm, setShowUploadForm] = useState(false);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="w-5 h-5" />
            Teacher Gallery Panel
            <Badge variant="default">Upload & View</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 p-4 bg-green-50 rounded-lg">
            <h3 className="font-medium text-green-900 mb-2">Teacher Gallery Access</h3>
            <p className="text-green-700 text-sm mb-3">
              As a teacher, you can upload photos of class activities, student achievements, 
              and educational events to share with students and parents.
            </p>
            <Button 
              onClick={() => setShowUploadForm(!showUploadForm)}
              className="gap-2"
            >
              <Upload className="w-4 h-4" />
              {showUploadForm ? 'Hide Upload Form' : 'Upload New Media'}
            </Button>
          </div>

          {showUploadForm && (
            <div className="mb-6">
              <MediaUploadForm 
                userRole="teacher" 
                onUploadComplete={() => setShowUploadForm(false)}
              />
            </div>
          )}
        </CardContent>
      </Card>

      <Gallery userRole="teacher" showUploadButton={true} />
    </div>
  );
};

export default TeacherGalleryPanel;
