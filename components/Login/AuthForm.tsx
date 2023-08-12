'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

export default function AuthForm() {
  const supabase = createClientComponentClient();

  return (
    <div className='mb-6'>
      <Auth
        redirectTo='https://aicolor.vercel.app/auth/callback'
        supabaseClient={supabase}
        view='magic_link'
        showLinks={false}
        appearance={{ theme: ThemeSupa }}
        theme='dark'
        providers={['google', 'github']}
        socialLayout='horizontal'
      />
    </div>
  );
}
