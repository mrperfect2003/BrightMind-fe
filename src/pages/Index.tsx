
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Users, BookOpen, Shield, ArrowRight } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Student Portal',
      description: 'Access courses, track progress, and connect with teachers',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Parent Dashboard',
      description: 'Monitor your child\'s learning journey and achievements',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: BookOpen,
      title: 'Teacher Hub',
      description: 'Create engaging content and manage your students',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: Shield,
      title: 'Admin Control',
      description: 'Comprehensive platform management and analytics',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">LW</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Learnwise Systems
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Link to="/signin">Sign In</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Welcome to Learnwise
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            The comprehensive learning management system designed for students, parents, teachers, and administrators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Link to="/signup" className="flex items-center">
                Join Learnwise Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/signin">Already have an account?</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for Every Role in Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're learning, teaching, or managing, Learnwise provides the tools you need to succeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <CardHeader className="text-center">
                  <div className={`mx-auto w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Learning Experience?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of students, parents, and educators who trust Learnwise for their educational journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/signup">Create Your Account</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                <Link to="/signin">Sign In</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>&copy; 2024 Learnwise Systems. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
