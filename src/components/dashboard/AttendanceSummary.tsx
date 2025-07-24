
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Calendar, TrendingUp } from 'lucide-react';

interface AttendanceSummaryProps {
  selectedChildId: string;
  isCompact?: boolean;
}

const AttendanceSummary = ({ selectedChildId, isCompact = false }: AttendanceSummaryProps) => {
  // Mock data based on child
  const attendanceData = {
    child1: {
      overall: 72,
      subjects: [
        { name: 'Mathematics', percentage: 75, classes: 32, attended: 24 },
        { name: 'Science', percentage: 68, classes: 28, attended: 19 },
        { name: 'English', percentage: 80, classes: 30, attended: 24 },
        { name: 'History', percentage: 70, classes: 25, attended: 18 },
        { name: 'Geography', percentage: 85, classes: 20, attended: 17 }
      ]
    },
    child2: {
      overall: 88,
      subjects: [
        { name: 'Mathematics', percentage: 90, classes: 30, attended: 27 },
        { name: 'Science', percentage: 85, classes: 28, attended: 24 },
        { name: 'English', percentage: 92, classes: 30, attended: 28 },
        { name: 'Social Studies', percentage: 80, classes: 25, attended: 20 },
        { name: 'Hindi', percentage: 90, classes: 20, attended: 18 }
      ]
    }
  };

  const data = attendanceData[selectedChildId as keyof typeof attendanceData];

  const getColorByPercentage = (percentage: number) => {
    if (percentage >= 85) return 'text-green-600';
    if (percentage >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Attendance Summary
        </CardTitle>
      </CardHeader>
      <CardContent className={`space-y-${isCompact ? '4' : '6'}`}>
        {/* Overall Attendance */}
        <div className="text-center">
          <div className={`text-3xl font-bold ${getColorByPercentage(data.overall)}`}>
            {data.overall}%
          </div>
          <p className="text-muted-foreground">Overall Attendance</p>
          <Progress value={data.overall} className="mt-2" />
        </div>

        {/* Subject-wise Attendance */}
        <div className="space-y-3">
          <h4 className="font-semibold flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Subject-wise Attendance
          </h4>
          {(isCompact ? data.subjects.slice(0, 3) : data.subjects).map((subject, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{subject.name}</span>
                <div className="text-right">
                  <span className={`text-sm font-semibold ${getColorByPercentage(subject.percentage)}`}>
                    {subject.percentage}%
                  </span>
                  <div className="text-xs text-muted-foreground">
                    {subject.attended}/{subject.classes} classes
                  </div>
                </div>
              </div>
              <Progress value={subject.percentage} className="h-2" />
            </div>
          ))}
        </div>

        {!isCompact && (
          <div className="flex gap-4 text-xs pt-2 border-t">
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
        )}
      </CardContent>
    </Card>
  );
};

export default AttendanceSummary;
