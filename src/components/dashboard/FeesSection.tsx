
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Download, DollarSign, Calendar } from 'lucide-react';

interface FeesSectionProps {
  selectedChildId: string;
}

const FeesSection = ({ selectedChildId }: FeesSectionProps) => {
  const feesData = {
    totalFees: 12000,
    paidAmount: 8000,
    pendingAmount: 4000,
    nextDueDate: '2024-02-15',
    installments: [
      {
        id: 1,
        term: 'First Term',
        amount: 4000,
        dueDate: '2023-09-15',
        status: 'paid',
        paidDate: '2023-09-10',
        receiptUrl: '#'
      },
      {
        id: 2,
        term: 'Second Term',
        amount: 4000,
        dueDate: '2024-01-15',
        status: 'paid',
        paidDate: '2024-01-12',
        receiptUrl: '#'
      },
      {
        id: 3,
        term: 'Third Term',
        amount: 4000,
        dueDate: '2024-02-15',
        status: 'pending',
        paidDate: null,
        receiptUrl: null
      }
    ]
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid': return <Badge className="bg-green-100 text-green-800">Paid</Badge>;
      case 'pending': return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'overdue': return <Badge className="bg-red-100 text-red-800">Overdue</Badge>;
      default: return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Fee Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-5 h-5" />
            Fee Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">${feesData.totalFees}</div>
              <p className="text-sm text-muted-foreground">Total Fees</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">${feesData.paidAmount}</div>
              <p className="text-sm text-muted-foreground">Amount Paid</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-600">${feesData.pendingAmount}</div>
              <p className="text-sm text-muted-foreground">Pending Amount</p>
            </div>
          </div>
          
          {feesData.pendingAmount > 0 && (
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-yellow-600" />
                <span className="font-medium">Next Payment Due</span>
              </div>
              <p className="text-sm">
                ${feesData.pendingAmount} due by {new Date(feesData.nextDueDate).toLocaleDateString()}
              </p>
              <Button className="mt-3 gap-2">
                <CreditCard className="w-4 h-4" />
                Pay Now
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Payment History */}
      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {feesData.installments.map((installment) => (
              <div key={installment.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold">{installment.term}</h4>
                    <p className="text-sm text-muted-foreground">
                      Due: {new Date(installment.dueDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">${installment.amount}</div>
                    {getStatusBadge(installment.status)}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">
                    {installment.paidDate && (
                      <span>Paid on: {new Date(installment.paidDate).toLocaleDateString()}</span>
                    )}
                  </div>
                  
                  {installment.status === 'paid' && (
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="w-4 h-4" />
                      Receipt
                    </Button>
                  )}
                  
                  {installment.status === 'pending' && (
                    <Button size="sm" className="gap-2">
                      <CreditCard className="w-4 h-4" />
                      Pay Now
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeesSection;
