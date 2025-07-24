
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { Search, Filter, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category: 'Events' | 'Certificates' | 'Cultural' | 'Sports' | 'Academic' | 'Others';
  date: string;
  uploadedBy: string;
}

interface GalleryProps {
  userRole?: 'student' | 'teacher' | 'parent' | 'admin';
  showUploadButton?: boolean;
}

const mockGalleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Annual Day Celebration',
    description: 'Students performing cultural dance',
    imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop',
    category: 'Events',
    date: '2024-06-15',
    uploadedBy: 'Admin'
  },
  {
    id: '2',
    title: 'Science Fair Winner',
    description: 'Best Science Project Certificate',
    imageUrl: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop',
    category: 'Certificates',
    date: '2024-06-10',
    uploadedBy: 'Teacher'
  },
  {
    id: '3',
    title: 'Sports Day',
    description: 'Athletic competitions and team spirit',
    imageUrl: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop',
    category: 'Sports',
    date: '2024-06-05',
    uploadedBy: 'Admin'
  },
  {
    id: '4',
    title: 'Cultural Performance',
    description: 'Traditional dance performance',
    imageUrl: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=400&h=300&fit=crop',
    category: 'Cultural',
    date: '2024-06-01',
    uploadedBy: 'Teacher'
  }
];

const Gallery: React.FC<GalleryProps> = ({ userRole = 'student', showUploadButton = false }) => {
  const [items, setItems] = useState<GalleryItem[]>(mockGalleryItems);
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>(mockGalleryItems);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = ['all', 'Events', 'Certificates', 'Cultural', 'Sports', 'Academic', 'Others'];

  React.useEffect(() => {
    let filtered = items;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredItems(filtered);
  }, [selectedCategory, searchTerm, items]);

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
    const index = filteredItems.findIndex(i => i.id === item.id);
    setLightboxIndex(index);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev'
      ? (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
      : (lightboxIndex + 1) % filteredItems.length;
    
    setLightboxIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setLightboxIndex(0);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <CardTitle className="flex items-center gap-2">
              <span>School Gallery</span>
              <Badge variant="outline">{userRole}</Badge>
            </CardTitle>
            {showUploadButton && (
              <Button>Upload Media</Button>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
              <Input
                placeholder="Search by title or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="cursor-pointer hover:shadow-lg transition-shadow overflow-hidden"
                onClick={() => openLightbox(item)}
              >
                <div className="aspect-square relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="text-xs">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-3">
                  <h3 className="font-medium text-sm mb-1 line-clamp-1">{item.title}</h3>
                  {item.description && (
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                      {item.description}
                    </p>
                  )}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No images found matching your criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Lightbox Modal */}
      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => closeLightbox()}>
          <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
            <DialogHeader className="sr-only">
              <DialogTitle>{selectedImage.title}</DialogTitle>
              <DialogDescription>
                View {selectedImage.title} - {selectedImage.category} from {selectedImage.date}
              </DialogDescription>
            </DialogHeader>
            <div className="relative w-full h-full">
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm"
                onClick={closeLightbox}
              >
                <X className="w-4 h-4" />
              </Button>

              {filteredItems.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm"
                    onClick={() => navigateLightbox('prev')}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm"
                    onClick={() => navigateLightbox('next')}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </>
              )}

              <div className="w-full h-full flex flex-col">
                <div className="flex-1 flex items-center justify-center bg-black">
                  <img
                    src={selectedImage.imageUrl}
                    alt={selectedImage.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="p-4 bg-white border-t">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{selectedImage.title}</h3>
                    <Badge variant="outline">{selectedImage.category}</Badge>
                  </div>
                  {selectedImage.description && (
                    <p className="text-muted-foreground mb-2">{selectedImage.description}</p>
                  )}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(selectedImage.date).toLocaleDateString()}</span>
                    </div>
                    <span>Uploaded by: {selectedImage.uploadedBy}</span>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Gallery;
