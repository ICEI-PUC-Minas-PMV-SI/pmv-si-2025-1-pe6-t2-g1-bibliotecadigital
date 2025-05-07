
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Check, Facebook, LoaderCircle, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LiteraryPreference } from '@/types';

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const literaryPreferences: { value: LiteraryPreference; label: string }[] = [
  { value: 'fiction', label: 'Fiction' },
  { value: 'non-fiction', label: 'Non-Fiction' },
  { value: 'mystery', label: 'Mystery' },
  { value: 'science-fiction', label: 'Science Fiction' },
  { value: 'fantasy', label: 'Fantasy' },
  { value: 'romance', label: 'Romance' },
  { value: 'thriller', label: 'Thriller' },
  { value: 'horror', label: 'Horror' },
  { value: 'biography', label: 'Biography' },
  { value: 'history', label: 'History' },
  { value: 'poetry', label: 'Poetry' },
  { value: 'young-adult', label: 'Young Adult' },
  { value: 'self-help', label: 'Self-Help' },
];

export default function AuthModal({ open, onOpenChange }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<string>('signin');
  const [signupStep, setSignupStep] = useState<number>(1);
  const [selectedPreferences, setSelectedPreferences] = useState<LiteraryPreference[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const handlePreferenceToggle = (preference: LiteraryPreference) => {
    if (selectedPreferences.includes(preference)) {
      setSelectedPreferences(selectedPreferences.filter(p => p !== preference));
    } else {
      setSelectedPreferences([...selectedPreferences, preference]);
    }
  };
  
  const handleContinue = () => {
    setSignupStep(2);
  };
  
  const handleBack = () => {
    setSignupStep(1);
  };
  
  const handleSignUp = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onOpenChange(false);
      // Reset states for next time
      setSignupStep(1);
      setSelectedPreferences([]);
    }, 1500);
  };
  
  const handleSignIn = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onOpenChange(false);
    }, 1500);
  };
  
  const handleSocialAuth = (provider: 'google' | 'facebook') => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onOpenChange(false);
    }, 1500);
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden">
        <DialogHeader className="pt-6 px-6">
          <DialogTitle className="text-2xl font-display text-center">
            {activeTab === 'signin' ? 'Bem vindo de volta' : 'Junte-se ao SaveBook'}
          </DialogTitle>
        </DialogHeader>
        
        <Tabs 
          defaultValue="signin" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="mt-1"
        >
          <TabsList className="grid grid-cols-2 mb-6 px-6">
            <TabsTrigger value="signin">Entrar</TabsTrigger>
            <TabsTrigger value="signup">Inscrever-se</TabsTrigger>
          </TabsList>
          
          <TabsContent value="signin" className="px-6 pb-6 pt-0">
            <form onSubmit={(e) => { e.preventDefault(); handleSignIn(); }}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Senha</Label>
                    <Button 
                      variant="link" 
                      className="px-0 h-auto text-xs text-muted-foreground"
                    >
                      Esqueceu sua senha?
                    </Button>
                  </div>
                  <Input id="password" type="password" />
                </div>
                
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                      Entrando
                    </>
                  ) : (
                    'Entrar'
                  )}
                </Button>
              </div>
            </form>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-background px-2 text-muted-foreground">
                  Ou continue com
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button 
                variant="outline" 
                type="button" 
                disabled={isLoading}
                onClick={() => handleSocialAuth('google')}
              >
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </Button>
              
              <Button 
                variant="outline" 
                type="button" 
                disabled={isLoading}
                onClick={() => handleSocialAuth('facebook')}
              >
                <Facebook className="mr-2 h-4 w-4 text-[#1877F2]" />
                Facebook
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="signup" className="px-6 pb-6 pt-0">
            <AnimatePresence mode="wait">
              {signupStep === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <form onSubmit={(e) => { e.preventDefault(); handleContinue(); }}>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Nome completo</Label>
                        <Input id="name" type="text" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="signup-email">Email</Label>
                        <Input id="signup-email" type="email" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="signup-password">Senha</Label>
                        <Input id="signup-password" type="password" required />
                      </div>
                      
                      <Button type="submit">Continue</Button>
                    </div>
                  </form>
                  
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border"></div>
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="bg-background px-2 text-muted-foreground">
                        Ou continue com
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Button 
                      variant="outline" 
                      type="button"
                      onClick={() => handleSocialAuth('google')}
                    >
                      <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                      Google
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      type="button"
                      onClick={() => handleSocialAuth('facebook')}
                    >
                      <Facebook className="mr-2 h-4 w-4 text-[#1877F2]" />
                      Facebook
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-4">
                    <h3 className="text-sm font-medium mb-2">Select your literary preferences</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      This helps us recommend books and connect you with like-minded readers.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {literaryPreferences.map((preference) => (
                        <Button
                          key={preference.value}
                          type="button"
                          variant="outline"
                          className={cn(
                            "justify-start h-auto py-2 px-3",
                            selectedPreferences.includes(preference.value) && 
                            "border-primary bg-primary/5"
                          )}
                          onClick={() => handlePreferenceToggle(preference.value)}
                        >
                          <span className="mr-2">
                            {selectedPreferences.includes(preference.value) ? (
                              <Check className="h-4 w-4 text-primary" />
                            ) : (
                              <div className="h-4 w-4 rounded-full border border-muted-foreground" />
                            )}
                          </span>
                          <span className="text-sm">{preference.label}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={handleBack}
                      className="text-muted-foreground"
                    >
                      Back
                    </Button>
                    
                    <Button
                      type="button"
                      onClick={handleSignUp}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                          Creating account
                        </>
                      ) : (
                        'Create account'
                      )}
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
