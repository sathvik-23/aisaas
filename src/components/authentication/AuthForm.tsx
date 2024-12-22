'use client'
import React, { useState } from 'react'
import LoginForm from './LoginForm'
import { Button } from '../ui/button'
import SignupForm from './SignupForm'
import Link from 'next/link'
import ResetPassword from './ResetPassword'

const AuthForm = () => {
  const [mode, setMode] = useState('login')

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          {mode === 'reset'
            ? 'Reset Password'
            : mode === 'login'
            ? 'Login'
            : 'Sign Up'}
        </h1>
        <p className="text-sm font-muted-foreground">
          {mode === 'reset'
            ? 'Enter your email address to reset your password.'
            : mode === 'login'
            ? 'Enter your email and password to log in.'
            : 'Enter your information below to create an account '}
        </p>
      </div>
      {mode === 'login' && (
        <>
          <LoginForm />
          <div className="text-center flex justify-between">
            <Button
              variant="link"
              className="p-0"
              onClick={() => setMode('signup')}
            >
              Need an account? Sign up
            </Button>
            <Button
              variant="link"
              className="p-0"
              onClick={() => setMode('reset')}
            >
              Forgot Password
            </Button>
          </div>
        </>
      )}
      {mode === 'signup' && (
        <>
          <SignupForm />
          <div className="text-center">
            <Button
              variant="link"
              className="p-0"
              onClick={() => setMode('login')}
            >
              Alredy have an account? Login
            </Button>
          </div>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By continuing, you agree to our{' '}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Use
            </Link>{' '}
            and{' '}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </>
      )}
      {mode === 'reset' && (
        <>
          <ResetPassword />
          <div className="text-center">
            <Button
              variant="link"
              className="p-0"
              onClick={() => setMode('login')}
            >
              Back to Login
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

export default AuthForm
