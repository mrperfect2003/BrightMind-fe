
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Upload, Image, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface MediaUploadFormProps {
  userRole: 'teacher' | 'admin';
  onUploadComplete?: () => void;
}

const MediaUploadForm: React.FC<MediaUploadFormProps> = ({ userRole, onUploadComplete }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    files: [] as File[]
  });
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const categories = ['Events', 'Certificates', 'Cultural', 'Sports', 'Academic', 'Others'];

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter(file => {
      const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4'];
      const maxSize = 10 * 1024 * 1024; // 10MB
      
      if (!validTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: `${file.name} is not a supported format`,
          variant: "destructive"
        });
        return false;
      }
      
      if (file.size > maxSize) {
        toast({
          title: "File too large",
          description: `${file.name} exceeds 10MB limit`,
          variant: "destructive"
        });
        return false;
      }
      
      return true;
    });

    setFormData(prev => ({ ...prev, files: [...prev.files, ...validFiles] }));
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!formData.title || !formData.category || formData.files.length === 0) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields and select at least one file",
        variant: "destructive"
      });
      return;
    }

    setIsUploading(true);

    try {
      // Simulate upload process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Upload successful",
        description: `${formData.files.length} file(s) uploaded successfully`,
      });

      // Reset form
      setFormData({
        title: '',
        description: '',
        category: '',
        files: []
      });

      onUploadComplete?.();
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was an error uploading your files. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="w-5 h-5" />
          Upload New Media
          <Badge variant="outline">{userRole}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="e.g., Annual Day Celebration"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select 
                value={formData.category} 
                onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Add a description for this media..."
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="files">Upload Files *</Label>
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
              <Input
                id="files"
                type="file"
                multiple
                accept="image/*,video/mp4"
                onChange={handleFileSelect}
                className="hidden"
              />
              <Label htmlFor="files" className="cursor-pointer">
                <Image className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Click to select images or videos
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Supports: JPG, PNG, GIF, MP4 (max 10MB each)
                </p>
              </Label>
            </div>
          </div>

          {formData.files.length > 0 && (
            <div className="space-y-2">
              <Label>Selected Files</Label>
              <div className="space-y-2">
                {formData.files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                    <span className="text-sm truncate">{file.name}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(index)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <Button 
              type="submit" 
              disabled={isUploading}
              className="flex-1"
            >
              {isUploading ? 'Uploading...' : 'Upload Media'}
            </Button>
            <Button 
              type="button" 
              variant="outline"
              onClick={() => setFormData({ title: '', description: '', category: '', files: [] })}
            >
              Clear
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default MediaUploadForm;
