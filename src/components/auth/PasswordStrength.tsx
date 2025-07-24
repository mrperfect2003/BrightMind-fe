
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface PasswordStrengthProps {
  password: string;
}

const PasswordStrength = ({ password }: PasswordStrengthProps) => {
  const calculateStrength = (password: string): { score: number; text: string; color: string } => {
    if (!password) return { score: 0, text: '', color: '' };
    
    let score = 0;
    const checks = {
      length: password.length >= 8,
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      numbers: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
    
    Object.values(checks).forEach(check => {
      if (check) score += 20;
    });
    
    if (score < 40) return { score, text: 'Weak', color: 'bg-red-500' };
    if (score < 60) return { score, text: 'Fair', color: 'bg-orange-500' };
    if (score < 80) return { score, text: 'Good', color: 'bg-yellow-500' };
    return { score, text: 'Strong', color: 'bg-green-500' };
  };

  const strength = calculateStrength(password);

  if (!password) return null;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs">
        <span className="text-muted-foreground">Password strength</span>
        <span className={`font-medium ${
          strength.text === 'Weak' ? 'text-red-600' :
          strength.text === 'Fair' ? 'text-orange-600' :
          strength.text === 'Good' ? 'text-yellow-600' :
          'text-green-600'
        }`}>
          {strength.text}
        </span>
      </div>
      <Progress value={strength.score} className="h-2" />
      <div className="text-xs text-muted-foreground space-y-1">
        <p>Password should contain:</p>
        <ul className="grid grid-cols-2 gap-1 text-xs">
          <li className={`flex items-center ${password.length >= 8 ? 'text-green-600' : 'text-muted-foreground'}`}>
            <span className="mr-1">{password.length >= 8 ? '✓' : '○'}</span>
            8+ characters
          </li>
          <li className={`flex items-center ${/[A-Z]/.test(password) ? 'text-green-600' : 'text-muted-foreground'}`}>
            <span className="mr-1">{/[A-Z]/.test(password) ? '✓' : '○'}</span>
            Uppercase letter
          </li>
          <li className={`flex items-center ${/[a-z]/.test(password) ? 'text-green-600' : 'text-muted-foreground'}`}>
            <span className="mr-1">{/[a-z]/.test(password) ? '✓' : '○'}</span>
            Lowercase letter
          </li>
          <li className={`flex items-center ${/\d/.test(password) ? 'text-green-600' : 'text-muted-foreground'}`}>
            <span className="mr-1">{/\d/.test(password) ? '✓' : '○'}</span>
            Number
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PasswordStrength;
