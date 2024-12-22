'use client'
import React, { useState } from 'react'
import LoginForm from './LoginForm'
import { Button } from '../ui/button'

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
              Need an accoount? Sign up
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
      {mode === 'signup' && <span>SignUpForm</span>}
      {mode === 'reset' && <span>reset password form</span>}
    </div>
  )
}

export default AuthForm
