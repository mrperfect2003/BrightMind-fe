
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { User, Phone, Mail, MapPin, Calendar, Edit } from 'lucide-react';

interface StudentProfileContactProps {
  selectedChildId: string;
}

const StudentProfileContact = ({ selectedChildId }: StudentProfileContactProps) => {
  // Mock student profile data
  const studentData = {
    child1: {
      name: 'Emma Johnson',
      avatar: '',
      rollNo: '2024001',
      class: '8th Grade',
      section: 'A',
      dateOfBirth: '2010-05-15',
      bloodGroup: 'O+',
      address: '123 Main Street, Cityville, State 12345',
      parentDetails: {
        father: {
          name: 'John Johnson',
          phone: '+1 234-567-8900',
          email: 'john.johnson@email.com',
          occupation: 'Software Engineer'
        },
        mother: {
          name: 'Jane Johnson',
          phone: '+1 234-567-8901',
          email: 'jane.johnson@email.com',
          occupation: 'Teacher'
        }
      },
      emergencyContact: {
        name: 'Robert Johnson',
        relation: 'Uncle',
        phone: '+1 234-567-8902'
      }
    },
    child2: {
      name: 'Liam Johnson',
      avatar: '',
      rollNo: '2024002',
      class: '5th Grade',
      section: 'B',
      dateOfBirth: '2013-08-22',
      bloodGroup: 'A+',
      address: '123 Main Street, Cityville, State 12345',
      parentDetails: {
        father: {
          name: 'John Johnson',
          phone: '+1 234-567-8900',
          email: 'john.johnson@email.com',
          occupation: 'Software Engineer'
        },
        mother: {
          name: 'Jane Johnson',
          phone: '+1 234-567-8901',
          email: 'jane.johnson@email.com',
          occupation: 'Teacher'
        }
      },
      emergencyContact: {
        name: 'Robert Johnson',
        relation: 'Uncle',
        phone: '+1 234-567-8902'
      }
    }
  };

  const student = studentData[selectedChildId as keyof typeof studentData];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="w-5 h-5" />
          Student Profile & Contact
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Student Info */}
        <div className="flex items-center gap-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={student.avatar} alt={student.name} />
            <AvatarFallback className="text-lg">
              {student.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold">{student.name}</h3>
            <p className="text-muted-foreground">
              {student.class} {student.section} • Roll No: {student.rollNo}
            </p>
          </div>
        </div>

        {/* Basic Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground">Date of Birth</label>
            <div className="flex items-center gap-2 mt-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(student.dateOfBirth).toLocaleDateString()}</span>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Blood Group</label>
            <div className="mt-1">
              <span className="font-medium">{student.bloodGroup}</span>
            </div>
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="text-sm font-medium text-muted-foreground">Address</label>
          <div className="flex items-start gap-2 mt-1">
            <MapPin className="w-4 h-4 mt-0.5" />
            <span className="text-sm">{student.address}</span>
          </div>
        </div>

        {/* Parent Details */}
        <div className="space-y-4">
          <h4 className="font-semibold">Parent Details</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-3">
              <h5 className="font-medium mb-2">Father</h5>
              <div className="space-y-2 text-sm">
                <div>{student.parentDetails.father.name}</div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3 h-3" />
                  {student.parentDetails.father.phone}
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3 h-3" />
                  {student.parentDetails.father.email}
                </div>
                <div className="text-muted-foreground">
                  {student.parentDetails.father.occupation}
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-3">
              <h5 className="font-medium mb-2">Mother</h5>
              <div className="space-y-2 text-sm">
                <div>{student.parentDetails.mother.name}</div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3 h-3" />
                  {student.parentDetails.mother.phone}
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3 h-3" />
                  {student.parentDetails.mother.email}
                </div>
                <div className="text-muted-foreground">
                  {student.parentDetails.mother.occupation}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div>
          <h4 className="font-semibold mb-2">Emergency Contact</h4>
          <div className="border rounded-lg p-3">
            <div className="space-y-2 text-sm">
              <div className="font-medium">{student.emergencyContact.name}</div>
              <div className="text-muted-foreground">{student.emergencyContact.relation}</div>
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3" />
                {student.emergencyContact.phone}
              </div>
            </div>
          </div>
        </div>

        <Button variant="outline" className="w-full gap-2">
          <Edit className="w-4 h-4" />
          Edit Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default StudentProfileContact;
