import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Mail, User, Phone, IdCard } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { UserRole } from '@/pages/SignUp';
import PasswordStrength from './PasswordStrength';

interface SignUpFormProps {
  role: UserRole;
  onBack: () => void;
}

const SignUpForm = ({ role, onBack }: SignUpFormProps) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure both passwords are the same.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate registration
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Account created successfully!",
      description: `Welcome to Learnwise Systems as a ${role}!`,
    });
    
    console.log('Registration data:', { role, ...formData, password });
    setIsLoading(false);
  };

  const renderFormFields = () => {
    switch (role) {
      case 'student':
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="studentName">Student Name *</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="studentName"
                  placeholder="Enter student name"
                  value={formData.studentName || ''}
                  onChange={(e) => handleInputChange('studentName', e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="schoolId">School ID Number *</Label>
              <div className="relative">
                <IdCard className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="schoolId"
                  placeholder="Enter school ID"
                  value={formData.schoolId || ''}
                  onChange={(e) => handleInputChange('schoolId', e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="studentEmail">Student Email (Optional)</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="studentEmail"
                  type="email"
                  placeholder="Enter student email"
                  value={formData.studentEmail || ''}
                  onChange={(e) => handleInputChange('studentEmail', e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="parentEmail">Parent Email *</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="parentEmail"
                  type="email"
                  placeholder="Enter parent email"
                  value={formData.parentEmail || ''}
                  onChange={(e) => handleInputChange('parentEmail', e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
          </>
        );
      
      case 'parent':
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="parentName">Parent Name *</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="parentName"
                  placeholder="Enter parent name"
                  value={formData.parentName || ''}
                  onChange={(e) => handleInputChange('parentName', e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="childName">Son/Daughter Name *</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="childName"
                  placeholder="Enter child's name"
                  value={formData.childName || ''}
                  onChange={(e) => handleInputChange('childName', e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="parentEmail">Parent Email *</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="parentEmail"
                  type="email"
                  placeholder="Enter parent email"
                  value={formData.parentEmail || ''}
                  onChange={(e) => handleInputChange('parentEmail', e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="studentEmail">Student Email (Optional)</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="studentEmail"
                  type="email"
                  placeholder="Enter student email"
                  value={formData.studentEmail || ''}
                  onChange={(e) => handleInputChange('studentEmail', e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </>
        );
      
      case 'teacher':
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="teacherName">Name *</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="teacherName"
                  placeholder="Enter your name"
                  value={formData.teacherName || ''}
                  onChange={(e) => handleInputChange('teacherName', e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="teacherEmail">Teacher Email *</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="teacherEmail"
                  type="email"
                  placeholder="Enter teacher email"
                  value={formData.teacherEmail || ''}
                  onChange={(e) => handleInputChange('teacherEmail', e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
          </>
        );
      
      case 'admin':
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="adminName">Name *</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="adminName"
                  placeholder="Enter your name"
                  value={formData.adminName || ''}
                  onChange={(e) => handleInputChange('adminName', e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="adminEmail">Admin Email *</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="adminEmail"
                  type="email"
                  placeholder="Enter admin email"
                  value={formData.adminEmail || ''}
                  onChange={(e) => handleInputChange('adminEmail', e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
          </>
        );
      
      default:
        return null;
    }
  };

  const getRoleDisplayName = () => {
    return role.charAt(0).toUpperCase() + role.slice(1);
  };

  const getRoleColor = () => {
    switch (role) {
      case 'student': return 'from-blue-600 to-cyan-600';
      case 'parent': return 'from-green-600 to-emerald-600';
      case 'teacher': return 'from-purple-600 to-violet-600';
      case 'admin': return 'from-orange-600 to-red-600';
      default: return 'from-blue-600 to-purple-600';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h3 className="text-lg font-semibold">
          {getRoleDisplayName()} Registration
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {renderFormFields()}
        
        <div className="space-y-2">
          <Label htmlFor="mobile">Mobile Number *</Label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="mobile"
              type="tel"
              placeholder="Enter mobile number"
              value={formData.mobile || ''}
              onChange={(e) => handleInputChange('mobile', e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">Password *</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <PasswordStrength password={password} />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password *</Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <Button 
          type="submit" 
          className={`w-full bg-gradient-to-r ${getRoleColor()} hover:opacity-90`}
          disabled={isLoading}
        >
          {isLoading ? "Creating account..." : `Create ${getRoleDisplayName()} Account`}
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
