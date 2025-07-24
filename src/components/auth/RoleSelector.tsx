
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Users, BookOpen, Shield } from 'lucide-react';
import { UserRole } from '@/pages/SignUp';

interface RoleSelectorProps {
  onRoleSelect: (role: UserRole) => void;
}

const RoleSelector = ({ onRoleSelect }: RoleSelectorProps) => {
  const roles = [
    {
      id: 'student' as UserRole,
      title: 'Student',
      description: 'I want to learn and access courses',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'parent' as UserRole,
      title: 'Parent',
      description: 'I want to monitor my child\'s progress',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 'teacher' as UserRole,
      title: 'Teacher',
      description: 'I want to create courses and teach',
      icon: BookOpen,
      color: 'from-purple-500 to-violet-500',
    },
    {
      id: 'admin' as UserRole,
      title: 'Admin',
      description: 'I want to manage the platform',
      icon: Shield,
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {roles.map((role) => {
        const Icon = role.icon;
        return (
          <Card
            key={role.id}
            className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 border-2 border-transparent hover:border-primary/20"
            onClick={() => onRoleSelect(role.id)}
          >
            <CardContent className="p-6 text-center space-y-4">
              <div className={`mx-auto w-16 h-16 bg-gradient-to-r ${role.color} rounded-full flex items-center justify-center`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{role.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{role.description}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default RoleSelector;
