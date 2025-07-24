
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart3, TrendingUp, FileText } from 'lucide-react';

interface AcademicPerformanceProps {
  selectedChildId: string;
}

const AcademicPerformance = ({ selectedChildId }: AcademicPerformanceProps) => {
  // Mock academic data
  const academicData = {
    child1: {
      recentExams: [
        { subject: 'Mathematics', marks: 78, total: 100, grade: 'B+', date: '2024-01-15', teacher: 'Mrs. Smith' },
        { subject: 'Science', marks: 85, total: 100, grade: 'A', date: '2024-01-12', teacher: 'Mr. Johnson' },
        { subject: 'English', marks: 92, total: 100, grade: 'A+', date: '2024-01-10', teacher: 'Ms. Brown' }
      ],
      teacherFeedback: [
        { subject: 'Mathematics', feedback: 'Good improvement in problem-solving skills', teacher: 'Mrs. Smith' },
        { subject: 'Science', feedback: 'Excellent understanding of concepts', teacher: 'Mr. Johnson' }
      ],
      averageMarks: 85
    },
    child2: {
      recentExams: [
        { subject: 'Mathematics', marks: 95, total: 100, grade: 'A+', date: '2024-01-14', teacher: 'Mrs. Davis' },
        { subject: 'Science', marks: 88, total: 100, grade: 'A', date: '2024-01-11', teacher: 'Mr. Wilson' },
        { subject: 'English', marks: 90, total: 100, grade: 'A', date: '2024-01-09', teacher: 'Ms. Taylor' }
      ],
      teacherFeedback: [
        { subject: 'Mathematics', feedback: 'Outstanding performance, keep it up!', teacher: 'Mrs. Davis' },
        { subject: 'English', feedback: 'Great creativity in writing assignments', teacher: 'Ms. Taylor' }
      ],
      averageMarks: 91
    }
  };

  const data = academicData[selectedChildId as keyof typeof academicData];

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A+': return 'bg-green-100 text-green-800';
      case 'A': return 'bg-green-100 text-green-700';
      case 'B+': return 'bg-blue-100 text-blue-800';
      case 'B': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Performance Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Academic Performance Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">{data.averageMarks}%</div>
              <p className="text-sm text-muted-foreground">Average Score</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{data.recentExams.length}</div>
              <p className="text-sm text-muted-foreground">Recent Exams</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">
                {data.recentExams.filter(exam => exam.grade.includes('A')).length}
              </div>
              <p className="text-sm text-muted-foreground">A Grades</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Exam Results */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Recent Exam Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.recentExams.map((exam, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{exam.subject}</h4>
                    <Badge className={getGradeColor(exam.grade)}>
                      {exam.grade}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Score:</span>
                      <span className="font-medium">{exam.marks}/{exam.total}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>Teacher: {exam.teacher}</span>
                      <span>{new Date(exam.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Teacher Feedback */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Teacher Feedback
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.teacherFeedback.map((feedback, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{feedback.subject}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    "{feedback.feedback}"
                  </p>
                  <p className="text-xs text-muted-foreground">
                    - {feedback.teacher}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AcademicPerformance;
