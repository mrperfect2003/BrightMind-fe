
import React, { useState } from 'react';
import ContactList from './ContactList';
import MessageThread from './MessageThread';

interface MessagingInterfaceProps {
  userRole: string;
}

const MessagingInterface = ({ userRole }: MessagingInterfaceProps) => {
  const [selectedContact, setSelectedContact] = useState<any>(null);

  // Mock data based on user role
  const getContactsForRole = (role: string) => {
    const allContacts = [
      {
        id: '1',
        name: 'Ms. Sarah Johnson',
        role: 'Teacher',
        lastMessage: 'Assignment submitted successfully',
        timestamp: '10m ago',
        unread: 2,
        status: 'online' as const
      },
      {
        id: '2',
        name: 'John Parent',
        role: 'Parent',
        lastMessage: 'Thank you for the update',
        timestamp: '1h ago',
        unread: 0,
        status: 'offline' as const
      },
      {
        id: '3',
        name: 'Alice Smith',
        role: 'Student',
        lastMessage: 'When is the next class?',
        timestamp: '2h ago',
        unread: 1,
        status: 'online' as const
      },
      {
        id: '4',
        name: 'Dr. Admin',
        role: 'Admin',
        lastMessage: 'Staff meeting tomorrow',
        timestamp: '1d ago',
        unread: 0,
        status: 'online' as const
      }
    ];

    // Filter contacts based on user role permissions
    switch (role.toLowerCase()) {
      case 'student':
        return allContacts.filter(c => ['Teacher', 'Admin'].includes(c.role));
      case 'teacher':
        return allContacts.filter(c => ['Student', 'Parent', 'Admin'].includes(c.role));
      case 'parent':
        return allContacts.filter(c => ['Teacher', 'Admin'].includes(c.role));
      case 'admin':
        return allContacts;
      default:
        return allContacts;
    }
  };

  const contacts = getContactsForRole(userRole);

  const mockMessages = [
    {
      id: '1',
      sender: selectedContact?.name || 'Contact',
      content: 'Hello! How can I help you today?',
      timestamp: '10:30 AM',
      isCurrentUser: false
    },
    {
      id: '2',
      sender: 'You',
      content: 'I have a question about the upcoming assignment.',
      timestamp: '10:32 AM',
      isCurrentUser: true
    },
    {
      id: '3',
      sender: selectedContact?.name || 'Contact',
      content: 'Sure! What would you like to know?',
      timestamp: '10:33 AM',
      isCurrentUser: false
    }
  ];

  return (
    <div className="h-[600px] flex gap-6">
      <div className="w-1/3">
        <ContactList
          contacts={contacts}
          onContactSelect={setSelectedContact}
          selectedContactId={selectedContact?.id}
          userRole={userRole}
        />
      </div>
      
      <div className="flex-1">
        {selectedContact ? (
          <div className="h-full border rounded-lg">
            <MessageThread
              contact={selectedContact}
              messages={mockMessages}
            />
          </div>
        ) : (
          <div className="h-full border rounded-lg flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <h3 className="text-lg font-semibold mb-2">Select a contact</h3>
              <p>Choose a contact from the list to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagingInterface;
