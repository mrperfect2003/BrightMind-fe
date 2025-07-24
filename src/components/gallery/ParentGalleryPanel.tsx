
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Download, Heart } from 'lucide-react';
import Gallery from './Gallery';

const ParentGalleryPanel = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Parent Gallery View
            <Badge variant="outline">View & Download</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 p-4 bg-purple-50 rounded-lg">
            <h3 className="font-medium text-purple-900 mb-2">Parent Access Gallery</h3>
            <p className="text-purple-700 text-sm mb-3">
              View your child's school activities, achievements, and special moments. 
              You can download photos to keep memories of your child's educational journey.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="w-4 h-4" />
                Download Selected
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Heart className="w-4 h-4" />
                Favorites
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Gallery userRole="parent" showUploadButton={false} />
    </div>
  );
};

export default ParentGalleryPanel;
