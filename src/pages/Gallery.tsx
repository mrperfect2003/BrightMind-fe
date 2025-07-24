
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Camera, Users, GraduationCap, Shield } from 'lucide-react';
import StudentGalleryPanel from '@/components/gallery/StudentGalleryPanel';
import TeacherGalleryPanel from '@/components/gallery/TeacherGalleryPanel';
import ParentGalleryPanel from '@/components/gallery/ParentGalleryPanel';
import AdminGalleryPanel from '@/components/gallery/AdminGalleryPanel';

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              School Gallery
            </CardTitle>
            <p className="text-muted-foreground">
              Capturing memories, celebrating achievements, and sharing special moments
            </p>
          </CardHeader>
        </Card>

        <Tabs defaultValue="student" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="student" className="gap-2">
              <GraduationCap className="w-4 h-4" />
              Student
            </TabsTrigger>
            <TabsTrigger value="teacher" className="gap-2">
              <Camera className="w-4 h-4" />
              Teacher
            </TabsTrigger>
            <TabsTrigger value="parent" className="gap-2">
              <Users className="w-4 h-4" />
              Parent
            </TabsTrigger>
            <TabsTrigger value="admin" className="gap-2">
              <Shield className="w-4 h-4" />
              Admin
            </TabsTrigger>
          </TabsList>

          <TabsContent value="student">
            <StudentGalleryPanel />
          </TabsContent>

          <TabsContent value="teacher">
            <TeacherGalleryPanel />
          </TabsContent>

          <TabsContent value="parent">
            <ParentGalleryPanel />
          </TabsContent>

          <TabsContent value="admin">
            <AdminGalleryPanel />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GalleryPage;
