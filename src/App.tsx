import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import ParentDashboard from "./pages/ParentDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import StudentGallery from "./pages/StudentGallery";
import StudentTimetable from "./pages/StudentTimetable";
import StudentSubjects from "./pages/StudentSubjects";
import StudentAssignments from "./pages/StudentAssignments";
import StudentExams from "./pages/StudentExams";
import StudentMessagesPage from "./pages/StudentMessages";
import StudentGroupsPage from "./pages/StudentGroups";
import StudentResources from "./pages/StudentResources";
import StudentAnnouncements from "./pages/StudentAnnouncements";
import StudentSupport from "./pages/StudentSupport";
import StudentSettings from "./pages/StudentSettings";
import TeacherDashboard from "./pages/TeacherDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/student-gallery" element={<StudentGallery />} />
          <Route path="/student-timetable" element={<StudentTimetable />} />
          <Route path="/student-subjects" element={<StudentSubjects />} />
          <Route path="/student-assignments" element={<StudentAssignments />} />
          <Route path="/student-exams" element={<StudentExams />} />
          <Route path="/student-messages" element={<StudentMessagesPage />} />
          <Route path="/student-groups" element={<StudentGroupsPage />} />
          <Route path="/student-resources" element={<StudentResources />} />
          <Route path="/student-announcements" element={<StudentAnnouncements />} />
          <Route path="/student-support" element={<StudentSupport />} />
          <Route path="/student-settings" element={<StudentSettings />} />
          <Route path="/parent-dashboard" element={<ParentDashboard />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
