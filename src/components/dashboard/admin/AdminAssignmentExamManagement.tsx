
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Calendar, FileText, Clock } from 'lucide-react';

const AdminAssignmentExamManagement = () => {
  const assignments = [
    { id: 1, title: 'Algebra Problem Set', subject: 'Math', class: '10A', dueDate: '2024-01-15', submitted: 25, total: 30 },
    { id: 2, title: 'Physics Lab Report', subject: 'Physics', class: '11A', dueDate: '2024-01-18', submitted: 20, total: 25 },
    { id: 3, title: 'Essay on Literature', subject: 'English', class: '10B', dueDate: '2024-01-20', submitted: 18, total: 28 },
  ];

  const exams = [
    { id: 1, title: 'Mid-term Mathematics', class: '10A', date: '2024-01-25', duration: '2 hours', status: 'Scheduled' },
    { id: 2, title: 'Physics Unit Test', class: '11A', date: '2024-01-22', duration: '1.5 hours', status: 'Completed' },
    { id: 3, title: 'Chemistry Practical', class: '11A', date: '2024-01-28', duration: '3 hours', status: 'Scheduled' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Assignment Monitor
              </div>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                New Assignment
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {assignments.map((assignment) => (
                <div key={assignment.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{assignment.title}</h3>
                    <Badge variant="outline">{assignment.class}</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{assignment.subject}</Badge>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{assignment.dueDate}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Submitted: {assignment.submitted}/{assignment.total}</span>
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(assignment.submitted / assignment.total) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Exam Schedule
              </div>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Schedule Exam
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {exams.map((exam) => (
                <div key={exam.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{exam.title}</h3>
                    <Badge variant={exam.status === 'Completed' ? 'default' : 'secondary'}>
                      {exam.status}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{exam.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{exam.duration}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline">{exam.class}</Badge>
                      <Button variant="outline" size="sm">
                        {exam.status === 'Completed' ? 'View Results' : 'Edit'}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Assignment Deadlines Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Assignment</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Submission Rate</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assignments.map((assignment) => (
                <TableRow key={assignment.id}>
                  <TableCell className="font-medium">{assignment.title}</TableCell>
                  <TableCell>{assignment.subject}</TableCell>
                  <TableCell>{assignment.class}</TableCell>
                  <TableCell>{assignment.dueDate}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span>{assignment.submitted}/{assignment.total}</span>
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full" 
                          style={{ width: `${(assignment.submitted / assignment.total) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">View Details</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAssignmentExamManagement;
