
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import RoleSelector from '@/components/auth/RoleSelector';
import SignUpForm from '@/components/auth/SignUpForm';
import SocialAuth from '@/components/auth/SocialAuth';

export type UserRole = 'student' | 'parent' | 'teacher' | 'admin';

const SignUp = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mb-4">
            <span className="text-white font-bold text-xl">LW</span>
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Join Learnwise
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Create your account and start learning
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {!selectedRole ? (
            <>
              <SocialAuth />
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-muted" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-muted-foreground">Or select your role</span>
                </div>
              </div>
              <RoleSelector onRoleSelect={setSelectedRole} />
            </>
          ) : (
            <SignUpForm role={selectedRole} onBack={() => setSelectedRole(null)} />
          )}

          <div className="text-center text-sm">
            <span className="text-muted-foreground">Already have an account? </span>
            <Link to="/signin" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
