
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Download, FileText, User, Calendar, Search } from 'lucide-react';

const ResourcesSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');

  const resources = [
    {
      id: 1,
      title: 'Calculus Chapter 5 Notes',
      subject: 'Mathematics',
      type: 'PDF',
      uploadedBy: 'Dr. Smith',
      uploadDate: '2024-01-10',
      size: '2.5 MB',
      downloads: 45
    },
    {
      id: 2,
      title: 'Physics Lab Manual',
      subject: 'Physics',
      type: 'PDF',
      uploadedBy: 'Prof. Johnson',
      uploadDate: '2024-01-08',
      size: '5.2 MB',
      downloads: 78
    },
    {
      id: 3,
      title: 'Organic Chemistry Video Lecture',
      subject: 'Chemistry',
      type: 'Video',
      uploadedBy: 'Dr. Brown',
      uploadDate: '2024-01-12',
      size: '150 MB',
      downloads: 32
    },
    {
      id: 4,
      title: 'Shakespeare Essay Guidelines',
      subject: 'English',
      type: 'PDF',
      uploadedBy: 'Ms. Davis',
      uploadDate: '2024-01-05',
      size: '1.8 MB',
      downloads: 67
    },
    {
      id: 5,
      title: 'Java Programming Examples',
      subject: 'Computer Science',
      type: 'ZIP',
      uploadedBy: 'Mr. Wilson',
      uploadDate: '2024-01-15',
      size: '3.7 MB',
      downloads: 89
    },
    {
      id: 6,
      title: 'Biology Cell Structure Diagrams',
      subject: 'Biology',
      type: 'PDF',
      uploadedBy: 'Dr. Miller',
      uploadDate: '2024-01-07',
      size: '4.1 MB',
      downloads: 56
    }
  ];

  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'English', 'Computer Science', 'Biology'];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || resource.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return <FileText className="w-5 h-5 text-red-500" />;
      case 'video':
        return <FileText className="w-5 h-5 text-blue-500" />;
      case 'zip':
        return <FileText className="w-5 h-5 text-green-500" />;
      default:
        return <FileText className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Study Resources</CardTitle>
        
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedSubject} onValueChange={setSelectedSubject}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Filter by subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Subjects</SelectItem>
              {subjects.map(subject => (
                <SelectItem key={subject} value={subject}>{subject}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="border-2 hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    {getFileIcon(resource.type)}
                    <div className="space-y-1">
                      <h4 className="font-semibold">{resource.title}</h4>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <Badge variant="secondary">{resource.subject}</Badge>
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {resource.uploadedBy}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(resource.uploadDate).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex gap-4 text-xs text-muted-foreground">
                        <span>Size: {resource.size}</span>
                        <span>Downloads: {resource.downloads}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button size="sm" className="gap-1">
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {filteredResources.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No resources found matching your search criteria.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourcesSection;
