
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Download, DollarSign, AlertCircle, CheckCircle } from 'lucide-react';

const FeesManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const feeData = [
    { studentId: 'STU001', name: 'Alice Johnson', class: '10A', total: 5000, paid: 5000, due: 0, status: 'Paid' },
    { studentId: 'STU002', name: 'Bob Smith', class: '10B', total: 5000, paid: 3000, due: 2000, status: 'Partial' },
    { studentId: 'STU003', name: 'Charlie Brown', class: '11A', total: 5500, paid: 0, due: 5500, status: 'Pending' },
  ];

  const filteredFees = feeData.filter(fee => 
    fee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fee.studentId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalFees = feeData.reduce((sum, fee) => sum + fee.total, 0);
  const totalPaid = feeData.reduce((sum, fee) => sum + fee.paid, 0);
  const totalDue = feeData.reduce((sum, fee) => sum + fee.due, 0);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Fees</p>
                <p className="text-2xl font-bold">${totalFees.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Collected</p>
                <p className="text-2xl font-bold">${totalPaid.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Due</p>
                <p className="text-2xl font-bold">${totalDue.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Fee Management
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Button size="sm">Add Payment</Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
              <Input
                placeholder="Search by student name or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Class</TableHead>
                  <TableHead>Total Fees</TableHead>
                  <TableHead>Paid</TableHead>
                  <TableHead>Due</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredFees.map((fee) => (
                  <TableRow key={fee.studentId}>
                    <TableCell className="font-medium">{fee.studentId}</TableCell>
                    <TableCell>{fee.name}</TableCell>
                    <TableCell>{fee.class}</TableCell>
                    <TableCell>${fee.total}</TableCell>
                    <TableCell>${fee.paid}</TableCell>
                    <TableCell>${fee.due}</TableCell>
                    <TableCell>
                      <Badge variant={
                        fee.status === 'Paid' ? 'default' : 
                        fee.status === 'Partial' ? 'secondary' : 'destructive'
                      }>
                        {fee.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Add Payment</Button>
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pending Payments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {feeData.filter(fee => fee.due > 0).map((fee) => (
              <div key={fee.studentId} className="flex items-center justify-between p-3 border rounded">
                <div>
                  <p className="font-medium">{fee.name} - {fee.class}</p>
                  <p className="text-sm text-muted-foreground">Due: ${fee.due}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Send Reminder</Button>
                  <Button size="sm">Collect Payment</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeesManagement;
