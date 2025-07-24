
import React from 'react';
import MessagingInterface from '../messaging/MessagingInterface';

const ParentMessages = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Messages</h2>
        <p className="text-muted-foreground">
          Stay connected with your child's teachers and school administration
        </p>
      </div>
      <MessagingInterface userRole="Parent" />
    </div>
  );
};

export default ParentMessages;
