
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Users } from 'lucide-react';

interface Contact {
  id: string;
  name: string;
  role: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  status: 'online' | 'offline';
}

interface ContactListProps {
  contacts: Contact[];
  onContactSelect: (contact: Contact) => void;
  selectedContactId?: string;
  userRole: string;
}

const ContactList = ({ contacts, onContactSelect, selectedContactId, userRole }: ContactListProps) => {
  const getRoleColor = (role: string) => {
    switch (role.toLowerCase()) {
      case 'teacher': return 'bg-blue-100 text-blue-800';
      case 'student': return 'bg-green-100 text-green-800';
      case 'parent': return 'bg-purple-100 text-purple-800';
      case 'admin': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="w-5 h-5" />
          Messages
        </CardTitle>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search contacts..." className="pl-10" />
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-1">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              onClick={() => onContactSelect(contact)}
              className={`p-4 cursor-pointer hover:bg-gray-50 border-b transition-colors ${
                selectedContactId === contact.id ? 'bg-blue-50 border-blue-200' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="relative">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback>{contact.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div
                    className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                      contact.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                    }`}
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium truncate">{contact.name}</h4>
                    <div className="flex items-center gap-1">
                      {contact.unread > 0 && (
                        <Badge className="bg-red-500 text-white text-xs px-2 py-1">
                          {contact.unread}
                        </Badge>
                      )}
                      <span className="text-xs text-muted-foreground">{contact.timestamp}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground truncate flex-1 mr-2">
                      {contact.lastMessage}
                    </p>
                    <Badge className={`${getRoleColor(contact.role)} text-xs`}>
                      {contact.role}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactList;
