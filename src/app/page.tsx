"use client";

import { UserButton } from '@/features/auth/components/user-button';
import { useAuthActions } from '@convex-dev/auth/react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { signOut } = useAuthActions();
  const  router  = useRouter()

  const handleSignOut = async () => {
    await signOut();
    location.replace("/auth");
  };
  
  return (
    <div>
      Logged in
      <UserButton />
    </div>
  );
}
