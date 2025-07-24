
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Image } from 'lucide-react';
import Gallery from './Gallery';

interface StudentGalleryModalProps {
  trigger?: React.ReactNode;
}

const StudentGalleryModal = ({ trigger }: StudentGalleryModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const defaultTrigger = (
    <Button variant="outline" className="gap-2">
      <Image className="w-4 h-4" />
      View Gallery
    </Button>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="max-w-6xl w-full h-[90vh] p-0">
        <DialogHeader className="p-6 border-b">
          <DialogTitle className="flex items-center gap-2">
            <Eye className="w-5 h-5" />
            Student Gallery View
            <Badge variant="secondary">View Only</Badge>
          </DialogTitle>
          <DialogDescription>
            Browse through photos of school events, achievements, and activities.
          </DialogDescription>
        </DialogHeader>
        <div className="p-6 overflow-y-auto flex-1">
          <div className="mb-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-blue-900 mb-2">Welcome to the School Gallery!</h3>
            <p className="text-blue-700 text-sm">
              Browse through photos of school events, achievements, and activities. 
              You can view and enjoy all the memories captured throughout the academic year.
            </p>
          </div>
          <Gallery userRole="student" showUploadButton={false} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StudentGalleryModal;
