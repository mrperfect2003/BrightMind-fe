
import React from 'react';
import MessagingInterface from '../messaging/MessagingInterface';

const StudentMessages = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Messages</h2>
        <p className="text-muted-foreground">
          Communicate with your teachers and get support from administrators
        </p>
      </div>
      <MessagingInterface userRole="Student" />
    </div>
  );
};

export default StudentMessages;
