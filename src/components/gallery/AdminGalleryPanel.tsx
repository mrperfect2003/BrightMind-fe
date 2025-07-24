
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Upload, Settings, Trash2, Edit } from 'lucide-react';
import Gallery from './Gallery';
import MediaUploadForm from './MediaUploadForm';

const AdminGalleryPanel = () => {
  const [showUploadForm, setShowUploadForm] = useState(false);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Admin Gallery Management
            <Badge variant="destructive">Full Access</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="gallery" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="gallery">Gallery View</TabsTrigger>
              <TabsTrigger value="upload">Upload Media</TabsTrigger>
              <TabsTrigger value="management">Manage Content</TabsTrigger>
            </TabsList>

            <TabsContent value="gallery" className="space-y-4">
              <div className="p-4 bg-red-50 rounded-lg">
                <h3 className="font-medium text-red-900 mb-2">Admin Gallery Access</h3>
                <p className="text-red-700 text-sm">
                  Full administrative access to view, upload, edit, and delete all gallery content. 
                  Monitor uploads from teachers and manage the entire school gallery.
                </p>
              </div>
              <Gallery userRole="admin" showUploadButton={true} />
            </TabsContent>

            <TabsContent value="upload" className="space-y-4">
              <MediaUploadForm userRole="admin" />
            </TabsContent>

            <TabsContent value="management" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <Edit className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                    <h3 className="font-medium mb-1">Edit Content</h3>
                    <p className="text-sm text-muted-foreground">
                      Modify titles, descriptions, and categories
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Trash2 className="w-8 h-8 mx-auto mb-2 text-red-500" />
                    <h3 className="font-medium mb-1">Delete Content</h3>
                    <p className="text-sm text-muted-foreground">
                      Remove inappropriate or outdated media
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Settings className="w-8 h-8 mx-auto mb-2 text-gray-500" />
                    <h3 className="font-medium mb-1">Settings</h3>
                    <p className="text-sm text-muted-foreground">
                      Configure gallery permissions and policies
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminGalleryPanel;
