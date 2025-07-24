
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Mail, User } from 'lucide-react';

interface StudentListProps {
  selectedClass: string;
}

const StudentList = ({ selectedClass }: StudentListProps) => {
  const students = [
    {
      id: 1,
      name: 'Alice Johnson',
      rollNo: '001',
      attendance: 95,
      parentEmail: 'alice.parent@email.com',
      lastSeen: '2024-01-18'
    },
    {
      id: 2,
      name: 'Bob Smith',
      rollNo: '002',
      attendance: 88,
      parentEmail: 'bob.parent@email.com',
      lastSeen: '2024-01-18'
    },
    {
      id: 3,
      name: 'Carol Davis',
      rollNo: '003',
      attendance: 92,
      parentEmail: 'carol.parent@email.com',
      lastSeen: '2024-01-17'
    }
  ];

  const getAttendanceColor = (attendance: number) => {
    if (attendance >= 90) return 'bg-green-100 text-green-800';
    if (attendance >= 75) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="w-5 h-5" />
          Students in {selectedClass}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Roll No</TableHead>
              <TableHead>Student Name</TableHead>
              <TableHead>Attendance</TableHead>
              <TableHead>Parent Contact</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell className="font-medium">{student.rollNo}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>
                  <Badge className={getAttendanceColor(student.attendance)}>
                    {student.attendance}%
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {student.parentEmail}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <User className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default StudentList;
