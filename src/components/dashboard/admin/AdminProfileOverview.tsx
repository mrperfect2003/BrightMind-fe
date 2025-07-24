
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, Mail, Phone, Shield, Edit, Crown } from 'lucide-react';

const AdminProfileOverview = () => {
  const adminData = {
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@school.edu',
    phone: '+1 (555) 123-4567',
    role: 'Principal',
    department: 'Administration',
    joinDate: 'January 2018',
    lastLogin: '2 hours ago'
  };

  return (
    <Card className="border-0 shadow-xl bg-gradient-to-r from-white via-blue-50 to-indigo-50">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Shield className="w-6 h-6 text-blue-600" />
                Admin Profile Overview
              </CardTitle>
              <p className="text-muted-foreground">Welcome back, {adminData.name}</p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Edit className="w-4 h-4" />
            Edit Profile
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-white/50 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <User className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Administrator</p>
                <p className="font-semibold text-gray-800">{adminData.name}</p>
                <div className="flex gap-2 mt-1">
                  <Badge variant="default" className="bg-blue-600 hover:bg-blue-700">
                    {adminData.role}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-white/50 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Mail className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Email Address</p>
                <p className="font-medium text-gray-800 break-all">{adminData.email}</p>
                <Badge variant="outline" className="mt-1 text-xs">
                  Verified
                </Badge>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-white/50 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Phone className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Phone Number</p>
                <p className="font-medium text-gray-800">{adminData.phone}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Department: {adminData.department}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-white/50 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Shield className="w-5 h-5 text-orange-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Access Level</p>
                <Badge variant="default" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 mb-1">
                  Full Access
                </Badge>
                <p className="text-xs text-muted-foreground">
                  Since: {adminData.joinDate}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm" className="gap-2">
              <User className="w-4 h-4" />
              View Full Profile
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Shield className="w-4 h-4" />
              Security Settings
            </Button>
            <div className="ml-auto text-right">
              <p className="text-sm text-muted-foreground">Last Login</p>
              <p className="text-sm font-medium text-green-600">{adminData.lastLogin}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminProfileOverview;
