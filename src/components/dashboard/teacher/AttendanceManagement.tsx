
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar, Users, Download } from 'lucide-react';

interface AttendanceManagementProps {
  selectedClass: string;
}

const AttendanceManagement = ({ selectedClass }: AttendanceManagementProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [attendance, setAttendance] = useState<Record<string, boolean>>({
    '001': true,
    '002': true,
    '003': false,
  });

  const students = [
    { rollNo: '001', name: 'Alice Johnson' },
    { rollNo: '002', name: 'Bob Smith' },
    { rollNo: '003', name: 'Carol Davis' }
  ];

  const handleAttendanceChange = (rollNo: string, present: boolean) => {
    setAttendance(prev => ({ ...prev, [rollNo]: present }));
  };

  const saveAttendance = () => {
    console.log('Saving attendance for', selectedClass, 'on', selectedDate, attendance);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Mark Attendance - {selectedClass}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <label htmlFor="date" className="font-medium">Date:</label>
            <input
              id="date"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-3 py-2 border rounded-md"
            />
          </div>

          <div className="space-y-3">
            {students.map((student) => (
              <div key={student.rollNo} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="font-medium">{student.rollNo}</span>
                  <span>{student.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={attendance[student.rollNo] || false}
                    onCheckedChange={(checked) => 
                      handleAttendanceChange(student.rollNo, checked as boolean)
                    }
                  />
                  <span className="text-sm">Present</span>
                </div>
              </div>
            ))}
          </div>

          <Button onClick={saveAttendance} className="w-full">
            Save Attendance
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Attendance Summary
            </span>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-600">28</div>
              <div className="text-sm text-muted-foreground">Present Today</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-600">4</div>
              <div className="text-sm text-muted-foreground">Absent Today</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">87.5%</div>
              <div className="text-sm text-muted-foreground">Average</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AttendanceManagement;
