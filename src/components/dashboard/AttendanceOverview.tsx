
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const AttendanceOverview = () => {
  const attendanceData = {
    overall: 85,
    subjects: [
      { name: 'Mathematics', percentage: 90, color: 'bg-green-500' },
      { name: 'Physics', percentage: 78, color: 'bg-yellow-500' },
      { name: 'Chemistry', percentage: 65, color: 'bg-red-500' },
      { name: 'English', percentage: 92, color: 'bg-green-500' },
      { name: 'Computer Science', percentage: 88, color: 'bg-green-500' }
    ]
  };

  const getColorByPercentage = (percentage: number) => {
    if (percentage >= 85) return 'text-green-600';
    if (percentage >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Attendance Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overall Attendance */}
        <div className="text-center">
          <div className={`text-4xl font-bold ${getColorByPercentage(attendanceData.overall)}`}>
            {attendanceData.overall}%
          </div>
          <p className="text-muted-foreground">Overall Attendance</p>
          <Progress value={attendanceData.overall} className="mt-2" />
        </div>

        {/* Subject-wise Attendance */}
        <div className="space-y-4">
          <h4 className="font-semibold">Subject-wise Attendance</h4>
          {attendanceData.subjects.map((subject, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{subject.name}</span>
                <span className={`text-sm font-semibold ${getColorByPercentage(subject.percentage)}`}>
                  {subject.percentage}%
                </span>
              </div>
              <Progress 
                value={subject.percentage} 
                className="h-2"
              />
            </div>
          ))}
        </div>

        {/* Attendance Status */}
        <div className="flex gap-4 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span>Good (≥85%)</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-yellow-500 rounded"></div>
            <span>Average (75-84%)</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-red-500 rounded"></div>
            <span>Low (&lt;75%)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AttendanceOverview;
