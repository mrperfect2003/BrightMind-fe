import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, FileText, BarChart3 } from 'lucide-react';

const ExamsResults = () => {
  const upcomingExams = [
    {
      id: 1,
      subject: 'Mathematics',
      date: '2024-01-22',
      time: '10:00 AM',
      duration: '3 hours',
      type: 'Final Exam'
    },
    {
      id: 2,
      subject: 'Physics',
      date: '2024-01-25',
      time: '2:00 PM',
      duration: '2 hours',
      type: 'Mid-term'
    },
    {
      id: 3,
      subject: 'Chemistry',
      date: '2024-01-28',
      time: '9:00 AM',
      duration: '2.5 hours',
      type: 'Final Exam'
    }
  ];

  const pastResults = [
    {
      id: 1,
      subject: 'English Literature',
      marks: 85,
      totalMarks: 100,
      grade: 'A',
      date: '2023-12-15',
      type: 'Final Exam'
    },
    {
      id: 2,
      subject: 'Computer Science',
      marks: 92,
      totalMarks: 100,
      grade: 'A+',
      date: '2023-12-10',
      type: 'Mid-term'
    },
    {
      id: 3,
      subject: 'Biology',
      marks: 78,
      totalMarks: 100,
      grade: 'B+',
      date: '2023-12-08',
      type: 'Final Exam'
    },
    {
      id: 4,
      subject: 'History',
      marks: 88,
      totalMarks: 100,
      grade: 'A',
      date: '2023-12-05',
      type: 'Mid-term'
    }
  ];

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A+': return 'bg-green-100 text-green-800';
      case 'A': return 'bg-green-100 text-green-700';
      case 'B+': return 'bg-blue-100 text-blue-800';
      case 'B': return 'bg-blue-100 text-blue-700';
      case 'C+': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const calculateAverage = () => {
    const total = pastResults.reduce((sum, result) => sum + (result.marks / result.totalMarks) * 100, 0);
    return (total / pastResults.length).toFixed(1);
  };

  return (
    <div className="space-y-6">
      {/* Performance Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Performance Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">{calculateAverage()}%</div>
              <p className="text-sm text-muted-foreground">Average Score</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{pastResults.length}</div>
              <p className="text-sm text-muted-foreground">Exams Completed</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">{upcomingExams.length}</div>
              <p className="text-sm text-muted-foreground">Upcoming Exams</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Exams */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Upcoming Exams
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingExams.map((exam) => (
                <div key={exam.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{exam.subject}</h4>
                    <Badge variant="outline">{exam.type}</Badge>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(exam.date).toLocaleDateString()} at {exam.time}
                    </div>
                    <div>Duration: {exam.duration}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Past Results */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Recent Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pastResults.map((result) => (
                <div key={result.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{result.subject}</h4>
                    <Badge className={getGradeColor(result.grade)}>
                      {result.grade}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Score:</span>
                      <span className="font-medium">{result.marks}/{result.totalMarks}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>{result.type}</span>
                      <span>{new Date(result.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExamsResults;
