
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Download, FileText, Video } from 'lucide-react';

interface StudyMaterialsProps {
  selectedChildId: string;
}

const StudyMaterials = ({ selectedChildId }: StudyMaterialsProps) => {
  const materials = [
    {
      id: 1,
      title: 'Chapter 5: Algebra Notes',
      subject: 'Mathematics',
      type: 'pdf',
      teacher: 'Mrs. Smith',
      uploadDate: '2024-01-15',
      size: '2.4 MB'
    },
    {
      id: 2,
      title: 'Chemical Reactions Video',
      subject: 'Science',
      type: 'video',
      teacher: 'Mr. Johnson',
      uploadDate: '2024-01-14',
      duration: '15 min'
    },
    {
      id: 3,
      title: 'Essay Writing Guidelines',
      subject: 'English',
      type: 'pdf',
      teacher: 'Ms. Brown',
      uploadDate: '2024-01-13',
      size: '1.2 MB'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'pdf': return <FileText className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-blue-100 text-blue-800';
      case 'pdf': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          Study Materials
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {materials.map((material) => (
            <div key={material.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <h4 className="font-semibold">{material.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {material.subject} • {material.teacher}
                  </p>
                </div>
                <Badge className={getTypeColor(material.type)}>
                  {getTypeIcon(material.type)}
                  {material.type.toUpperCase()}
                </Badge>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  Uploaded: {new Date(material.uploadDate).toLocaleDateString()}
                  {material.size && ` • ${material.size}`}
                  {material.duration && ` • ${material.duration}`}
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StudyMaterials;
