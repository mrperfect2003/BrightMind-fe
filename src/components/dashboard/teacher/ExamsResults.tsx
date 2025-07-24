
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, BarChart, TrendingUp } from 'lucide-react';

const ExamsResults = () => {
  const exams = [
    {
      id: 1,
      name: 'Mid-term Mathematics',
      class: '10A',
      date: '2024-01-15',
      totalStudents: 32,
      average: 78.5,
      highest: 95,
      lowest: 45
    },
    {
      id: 2,
      name: 'Physics Unit Test',
      class: '11A',
      date: '2024-01-12',
      totalStudents: 25,
      average: 82.3,
      highest: 98,
      lowest: 58
    }
  ];

  const topPerformers = [
    { name: 'Alice Johnson', score: 95, class: '10A' },
    { name: 'Bob Smith', score: 92, class: '10A' },
    { name: 'Carol Davis', score: 88, class: '10A' }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <BarChart className="w-5 h-5" />
                Exam Results
              </span>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Results
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Exam</TableHead>
                  <TableHead>Class</TableHead>
                  <TableHead>Average</TableHead>
                  <TableHead>Range</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {exams.map((exam) => (
                  <TableRow key={exam.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{exam.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {new Date(exam.date).toLocaleDateString()}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{exam.class}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{exam.average}%</Badge>
                    </TableCell>
                    <TableCell className="text-sm">
                      {exam.lowest}% - {exam.highest}%
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Top Performers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topPerformers.map((student, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium">{student.name}</div>
                      <div className="text-sm text-muted-foreground">{student.class}</div>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">
                    {student.score}%
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Performance Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 border rounded-lg">
              <div className="text-2xl font-bold text-blue-600">78.5%</div>
              <div className="text-sm text-muted-foreground">Class Average</div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="text-2xl font-bold text-green-600">85%</div>
              <div className="text-sm text-muted-foreground">Pass Rate</div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="text-2xl font-bold text-purple-600">12</div>
              <div className="text-sm text-muted-foreground">A Grades</div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="text-2xl font-bold text-orange-600">3</div>
              <div className="text-sm text-muted-foreground">Need Support</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExamsResults;
