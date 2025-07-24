
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TimetableSection = () => {
  const timeSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  
  // Mock timetable data
  const timetable = {
    Monday: {
      '09:00': { subject: 'Mathematics', teacher: 'Dr. Smith', room: 'A101' },
      '10:00': { subject: 'Physics', teacher: 'Prof. Johnson', room: 'B205' },
      '14:00': { subject: 'Chemistry Lab', teacher: 'Dr. Brown', room: 'Lab1' }
    },
    Tuesday: {
      '09:00': { subject: 'English', teacher: 'Ms. Davis', room: 'C301' },
      '11:00': { subject: 'Computer Science', teacher: 'Mr. Wilson', room: 'D102' },
      '15:00': { subject: 'Biology', teacher: 'Dr. Miller', room: 'B301' }
    },
    // Add more days as needed
  };

  const getCurrentTime = () => {
    const now = new Date();
    return now.getHours().toString().padStart(2, '0') + ':00';
  };

  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  };

  const isCurrentClass = (day: string, time: string) => {
    return day === getCurrentDay() && time === getCurrentTime();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Timetable</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <div className="min-w-full">
            {/* Header */}
            <div className="grid grid-cols-6 gap-2 mb-4">
              <div className="p-2 font-semibold text-center">Time</div>
              {days.map(day => (
                <div key={day} className="p-2 font-semibold text-center">
                  {day}
                </div>
              ))}
            </div>

            {/* Time slots */}
            {timeSlots.map(time => (
              <div key={time} className="grid grid-cols-6 gap-2 mb-2">
                <div className="p-2 text-center font-medium bg-muted rounded">
                  {time}
                </div>
                {days.map(day => {
                  const classInfo = timetable[day as keyof typeof timetable]?.[time];
                  const isCurrent = isCurrentClass(day, time);
                  
                  return (
                    <div key={`${day}-${time}`} className="p-2">
                      {classInfo ? (
                        <div className={`p-2 rounded text-xs ${
                          isCurrent ? 'bg-primary text-primary-foreground' : 'bg-secondary'
                        }`}>
                          <div className="font-semibold">{classInfo.subject}</div>
                          <div className="text-xs opacity-80">{classInfo.teacher}</div>
                          <div className="text-xs opacity-80">{classInfo.room}</div>
                        </div>
                      ) : (
                        <div className="p-2 h-16 border-2 border-dashed border-muted rounded"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-4 flex gap-2 flex-wrap">
          <Badge variant="default">Current Class</Badge>
          <Badge variant="secondary">Scheduled Class</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default TimetableSection;
