import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import React, { useState } from "react";
import Login from "@/components/Login";
import Register from "@/components/Register";
import Index from "./pages/Index";
import BookDetail from "./pages/BookDetail";
import Bookshelf from "./pages/Bookshelf";
import Explore from "./pages/Explore";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  
 
  if (loading) return null;
  
  
  if (!user) return <Navigate to="/" replace />;
  
 
  return <>{children}</>;
};

const AuthModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const { login, register } = useAuth();

  const handleLogin = async (email: string, password: string) => {
    await login(email, password);
    setIsOpen(false);
  };

  const handleRegister = async (name: string, email: string, password: string) => {
    await register(name, email, password);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        {isLogin ? (
          <Login 
            onLogin={handleLogin} 
            onRegisterClick={() => setIsLogin(false)} 
          />
        ) : (
          <Register 
            onRegister={handleRegister} 
            onLoginClick={() => setIsLogin(true)} 
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthModal />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route 
              path="/bookshelf" 
              element={
                <ProtectedRoute>
                  <Bookshelf />
                </ProtectedRoute>
              } 
            />
            <Route path="/explore" element={<Explore />} />
            <Route path="/books/:id" element={<BookDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;