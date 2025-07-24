
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { User, IdCard, Calendar, AlertTriangle } from 'lucide-react';

interface ChildOverviewProps {
  selectedChildId: string;
}

const ChildOverview = ({ selectedChildId }: ChildOverviewProps) => {
  // Mock data - replace with actual data based on selectedChildId
  const childData = {
    child1: {
      name: "Emma Johnson",
      avatar: "",
      rollNo: "2024001",
      class: "8th Grade",
      section: "A",
      course: "General Science Stream",
      attendancePercentage: 72, // Below 75% to show alert
    },
    child2: {
      name: "Liam Johnson", 
      avatar: "",
      rollNo: "2024002",
      class: "5th Grade",
      section: "B", 
      course: "Primary Education",
      attendancePercentage: 88,
    }
  };

  const child = childData[selectedChildId as keyof typeof childData];

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Child Avatar */}
          <div className="flex flex-col items-center">
            <Avatar className="w-24 h-24 md:w-32 md:h-32">
              <AvatarImage src={child.avatar} alt={child.name} />
              <AvatarFallback className="text-2xl font-bold">
                {child.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <Badge variant="secondary" className="mt-2">
              {child.class} {child.section}
            </Badge>
          </div>

          {/* Child Info */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div>
              <h2 className="text-2xl font-bold">{child.name}</h2>
              <p className="text-muted-foreground">{child.course}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <IdCard className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Roll No: {child.rollNo}</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Class: {child.class} {child.section}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Attendance: {child.attendancePercentage}%</span>
                </div>
              </div>
            </div>

            {/* Attendance Alert */}
            {child.attendancePercentage < 75 && (
              <Alert className="mt-4 border-red-200 bg-red-50">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  Attendance is below 75%. Please ensure regular attendance to meet academic requirements.
                </AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChildOverview;
