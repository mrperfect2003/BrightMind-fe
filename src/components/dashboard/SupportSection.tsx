
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MessageCircle, Phone, Mail, Send, Clock } from 'lucide-react';

const SupportSection = () => {
  const [queryForm, setQueryForm] = useState({
    category: '',
    subject: '',
    message: ''
  });

  const [queries] = useState([
    {
      id: 1,
      subject: 'Assignment Submission Issue',
      category: 'Technical',
      status: 'Open',
      date: '2024-01-18',
      response: 'We are looking into this issue and will get back to you soon.'
    },
    {
      id: 2,
      subject: 'Grade Inquiry',
      category: 'Academic',
      status: 'Resolved',
      date: '2024-01-15',
      response: 'Your grade has been updated. Please check your dashboard.'
    }
  ]);

  const contactInfo = [
    {
      type: 'Academic Support',
      email: 'academic@school.edu',
      phone: '+1 234 567 8901',
      hours: '9:00 AM - 5:00 PM'
    },
    {
      type: 'Technical Support',
      email: 'tech@school.edu',
      phone: '+1 234 567 8902',
      hours: '24/7'
    },
    {
      type: 'Administrative',
      email: 'admin@school.edu',
      phone: '+1 234 567 8900',
      hours: '8:00 AM - 6:00 PM'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Query submitted:', queryForm);
    // Reset form
    setQueryForm({ category: '', subject: '', message: '' });
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'open': return 'bg-yellow-100 text-yellow-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'in progress': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Submit New Query */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Submit New Query
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium">Category</label>
                <Select 
                  value={queryForm.category} 
                  onValueChange={(value) => setQueryForm({...queryForm, category: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="academic">Academic</SelectItem>
                    <SelectItem value="technical">Technical</SelectItem>
                    <SelectItem value="administrative">Administrative</SelectItem>
                    <SelectItem value="financial">Financial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium">Subject</label>
                <Input
                  placeholder="Brief description of your issue"
                  value={queryForm.subject}
                  onChange={(e) => setQueryForm({...queryForm, subject: e.target.value})}
                />
              </div>
              
              <div>
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  placeholder="Provide detailed information about your query..."
                  rows={4}
                  value={queryForm.message}
                  onChange={(e) => setQueryForm({...queryForm, message: e.target.value})}
                />
              </div>
              
              <Button type="submit" className="w-full gap-2">
                <Send className="w-4 h-4" />
                Submit Query
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {contactInfo.map((contact, index) => (
              <div key={index}>
                <h4 className="font-semibold">{contact.type}</h4>
                <div className="space-y-2 mt-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span>{contact.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span>{contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{contact.hours}</span>
                  </div>
                </div>
                {index < contactInfo.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Previous Queries */}
      <Card>
        <CardHeader>
          <CardTitle>Your Previous Queries</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {queries.map((query) => (
              <Card key={query.id} className="border-2">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold">{query.subject}</h4>
                    <div className="flex gap-2">
                      <Badge variant="outline">{query.category}</Badge>
                      <Badge className={getStatusColor(query.status)}>
                        {query.status}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{query.response}</p>
                  <div className="text-xs text-muted-foreground">
                    Submitted: {new Date(query.date).toLocaleDateString()}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupportSection;
