
import React from 'react';
import MessagingInterface from '../../messaging/MessagingInterface';

const TeacherMessagesNew = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Messages & Communication</h2>
        <p className="text-muted-foreground">
          Communicate with students, parents, and administrators
        </p>
      </div>
      <MessagingInterface userRole="Teacher" />
    </div>
  );
};

export default TeacherMessagesNew;
