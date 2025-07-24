
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, FileText, Upload } from 'lucide-react';

interface AssignmentsSectionProps {
  isCompact?: boolean;
}

const AssignmentsSection = ({ isCompact = false }: AssignmentsSectionProps) => {
  const assignments = [
    {
      id: 1,
      title: 'Physics Lab Report',
      subject: 'Physics',
      dueDate: '2024-01-15',
      status: 'pending',
      description: 'Complete analysis of pendulum experiment'
    },
    {
      id: 2,
      title: 'Mathematics Problem Set',
      subject: 'Mathematics',
      dueDate: '2024-01-18',
      status: 'submitted',
      description: 'Solve calculus problems from chapter 5'
    },
    {
      id: 3,
      title: 'English Essay',
      subject: 'English',
      dueDate: '2024-01-20',
      status: 'pending',
      description: 'Write a 1000-word essay on modern literature'
    },
    {
      id: 4,
      title: 'Chemistry Project',
      subject: 'Chemistry',
      dueDate: '2024-01-25',
      status: 'draft',
      description: 'Research project on organic compounds'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-red-100 text-red-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const displayAssignments = isCompact ? assignments.slice(0, 3) : assignments;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Assignments {isCompact && '(Recent)'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {displayAssignments.map((assignment) => (
            <div key={assignment.id} className="border rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-semibold">{assignment.title}</h4>
                  <p className="text-sm text-muted-foreground">{assignment.subject}</p>
                  {!isCompact && (
                    <p className="text-sm text-muted-foreground mt-1">{assignment.description}</p>
                  )}
                </div>
                <Badge className={getStatusColor(assignment.status)}>
                  {assignment.status.toUpperCase()}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  Due: {new Date(assignment.dueDate).toLocaleDateString()}
                </div>
                
                {assignment.status === 'pending' && (
                  <Button size="sm" className="gap-1">
                    <Upload className="w-4 h-4" />
                    Submit
                  </Button>
                )}
              </div>
            </div>
          ))}
          
          {isCompact && assignments.length > 3 && (
            <Button variant="outline" className="w-full">
              View All Assignments ({assignments.length})
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AssignmentsSection;
