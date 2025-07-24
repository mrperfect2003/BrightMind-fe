
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Clock, CheckCircle, AlertCircle } from 'lucide-react';

interface AssignmentsHomeworkProps {
  selectedChildId: string;
  isCompact?: boolean;
}

const AssignmentsHomework = ({ selectedChildId, isCompact = false }: AssignmentsHomeworkProps) => {
  // Mock assignments data
  const assignmentsData = {
    child1: [
      {
        id: 1,
        subject: 'Mathematics',
        title: 'Algebra Problem Set 3',
        teacher: 'Mrs. Smith',
        dueDate: '2024-01-25',
        status: 'pending',
        marks: null,
        description: 'Complete exercises 1-15 from chapter 5'
      },
      {
        id: 2,
        subject: 'Science',
        title: 'Lab Report - Chemical Reactions',
        teacher: 'Mr. Johnson',
        dueDate: '2024-01-20',
        status: 'overdue',
        marks: null,
        description: 'Write a detailed report on the chemical reaction experiment'
      },
      {
        id: 3,
        subject: 'English',
        title: 'Essay on Climate Change',
        teacher: 'Ms. Brown',
        dueDate: '2024-01-15',
        status: 'submitted',
        marks: 88,
        description: '500-word essay on environmental impact'
      }
    ],
    child2: [
      {
        id: 1,
        subject: 'Mathematics',
        title: 'Multiplication Tables Practice',
        teacher: 'Mrs. Davis',
        dueDate: '2024-01-23',
        status: 'pending',
        marks: null,
        description: 'Practice tables 12-15'
      },
      {
        id: 2,
        subject: 'Science',
        title: 'Plant Growth Observation',
        teacher: 'Mr. Wilson',
        dueDate: '2024-01-18',
        status: 'submitted',
        marks: 95,
        description: 'Weekly observation journal'
      }
    ]
  };

  const assignments = assignmentsData[selectedChildId as keyof typeof assignmentsData];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'submitted': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'overdue': return <AlertCircle className="w-4 h-4 text-red-600" />;
      default: return <Clock className="w-4 h-4 text-yellow-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'submitted': return <Badge className="bg-green-100 text-green-800">Submitted</Badge>;
      case 'overdue': return <Badge className="bg-red-100 text-red-800">Overdue</Badge>;
      default: return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
    }
  };

  const displayAssignments = isCompact ? assignments.slice(0, 3) : assignments;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Assignments & Homework
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {displayAssignments.map((assignment) => (
            <div key={assignment.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <h4 className="font-semibold">{assignment.title}</h4>
                  <p className="text-sm text-muted-foreground">{assignment.subject} • {assignment.teacher}</p>
                </div>
                {getStatusBadge(assignment.status)}
              </div>
              
              {!isCompact && (
                <p className="text-sm text-muted-foreground mb-3">
                  {assignment.description}
                </p>
              )}
              
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  {getStatusIcon(assignment.status)}
                  <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                </div>
                {assignment.marks && (
                  <span className="font-medium text-green-600">
                    Marks: {assignment.marks}/100
                  </span>
                )}
              </div>
            </div>
          ))}
          
          {assignments.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No assignments at the moment
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AssignmentsHomework;
