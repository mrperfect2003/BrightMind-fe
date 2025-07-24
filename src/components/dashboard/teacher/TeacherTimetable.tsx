
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';

const TeacherTimetable = () => {
  const schedule = [
    { day: 'Monday', periods: [
      { time: '9:00-10:00', subject: 'Mathematics', class: '10A' },
      { time: '11:00-12:00', subject: 'Mathematics', class: '10B' },
      { time: '2:00-3:00', subject: 'Physics', class: '11A' }
    ]},
    { day: 'Tuesday', periods: [
      { time: '9:00-10:00', subject: 'Mathematics', class: '10A' },
      { time: '10:00-11:00', subject: 'Physics', class: '11A' }
    ]},
    { day: 'Wednesday', periods: [
      { time: '11:00-12:00', subject: 'Mathematics', class: '10B' },
      { time: '1:00-2:00', subject: 'Physics', class: '11A' }
    ]}
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Weekly Timetable
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {schedule.map((day) => (
            <div key={day.day} className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-4">{day.day}</h3>
              <div className="grid gap-3">
                {day.periods.map((period, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">{period.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{period.subject}</Badge>
                      <Badge variant="outline">{period.class}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeacherTimetable;
