
import React from 'react';
import GroupManagement from '../../groups/GroupManagement';

const TeacherGroups = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Manage Groups & Programs</h2>
        <p className="text-muted-foreground">
          Create and manage class groups, upload materials, and coordinate programs
        </p>
      </div>
      <GroupManagement userRole="Teacher" />
    </div>
  );
};

export default TeacherGroups;
