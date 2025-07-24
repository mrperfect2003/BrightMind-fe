
import React from 'react';
import GroupManagement from '../groups/GroupManagement';

const StudentGroups = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">My Groups & Programs</h2>
        <p className="text-muted-foreground">
          Join class groups and participate in optional programs
        </p>
      </div>
      <GroupManagement userRole="Student" />
    </div>
  );
};

export default StudentGroups;
