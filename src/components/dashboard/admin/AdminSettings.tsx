
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Settings, Shield, Download, Upload, School } from 'lucide-react';

const AdminSettings = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Admin Profile Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="admin-name">Name</Label>
              <Input id="admin-name" defaultValue="Dr. Sarah Johnson" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="admin-email">Email</Label>
              <Input id="admin-email" type="email" defaultValue="sarah.johnson@school.edu" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="admin-phone">Phone</Label>
              <Input id="admin-phone" defaultValue="+1 (555) 123-4567" />
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input id="confirm-password" type="password" />
            </div>
            
            <Button className="w-full">Update Profile</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <School className="w-5 h-5" />
              School Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="school-name">School Name</Label>
              <Input id="school-name" defaultValue="Springfield High School" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="school-address">Address</Label>
              <Input id="school-address" defaultValue="123 Education Street, Springfield" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="school-phone">School Phone</Label>
              <Input id="school-phone" defaultValue="+1 (555) 987-6543" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="school-email">School Email</Label>
              <Input id="school-email" type="email" defaultValue="info@springfield.edu" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="academic-year">Current Academic Year</Label>
              <Input id="academic-year" defaultValue="2023-2024" />
            </div>
            
            <Button className="w-full">Update School Info</Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            System Settings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium">Data Management</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Backup All Data
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Upload className="w-4 h-4 mr-2" />
                  Import Data
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Export Student Records
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">System Configuration</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Email Settings
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  SMS Configuration
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Holiday Calendar
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Branding & Appearance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>School Logo</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-500">Click to upload school logo</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="primary-color">Primary Color</Label>
                <Input id="primary-color" type="color" defaultValue="#3b82f6" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="secondary-color">Secondary Color</Label>
                <Input id="secondary-color" type="color" defaultValue="#8b5cf6" />
              </div>
              
              <Button className="w-full">Update Branding</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSettings;
