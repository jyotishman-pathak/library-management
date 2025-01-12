"use client";

import AuthForm from '@/components/AuthForm'
import {  SignUpSchema } from '@/lib/validation'
import React from 'react'

const SignUp = () => {
    return (
        <AuthForm
            type='sign-up'
            schema={SignUpSchema}
            defaultValues={{
                email: '',
                password: '',
                fullname: '',
                universityId: 0,
                universityCard: '',
             

            }}
            onSubmit={() => {
              
            }}
        />
    )

}

export default SignUp