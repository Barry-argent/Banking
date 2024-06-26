'use client'
import Image from 'next/image'
import Link from 'next/link' 
import { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form" 

import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(20), 
  })

 

const Authform = ({type}:{type : string}) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
 const [user, setUsere] = useState(null)
  return (
    <div>
       <section className="auth-form">
            <header className="flex flex-col gap-8">
             <Link href='/' className=" flex cusor-pointer items-center gap-1 ">
                    <Image
                        src='/icons/logo.svg'
                        width={34}
                        height={34}
                        alt='Bizon bank'
                    />
                    <h1 className="text-20 font-ibm-plex-serif font-bold text-black-1">Bizon Bank</h1>
                </Link>  
                <div className="flex flex-col gap-1 md:gap-3">
                    <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
                        {user? 'link Account' : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
                        <p className="text-16 font-normal text-gray-600">
                            {user?
                            'link your account to get started ' : 'please enter your detailsb'}
                        </p>
                    </h1>
                </div>  
            </header>
            {user? (
                <div className="flex flex-col gap-4">
                    {/* plaidLink */}
                </div>
            ):(
                <>
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <div className="form-item">
                                <FormLabel className="form-label">
                                    Email
                                </FormLabel>
                                <div className="flex w-full flex-col">
                                    <FormControl>
                                        <Input
                                        placeholder="Enter your email "
                                        className='input-class'
                                        {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className='form-message mt-2'></FormMessage>
                                </div>
                            </div>
                        )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <div className="form-item">
                                    <FormLabel className="form-label">
                                        Password
                                    </FormLabel>
                                    <div className="flex w-full flex-col">
                                        <FormControl>
                                            <Input
                                            placeholder="Password"
                                            className='input-class'
                                            {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className='form-message mt-2'></FormMessage>
                                    </div>
                                </div>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                    </Form>
                </>
            )}
       </section>
    </div>
  )
}

export default Authform
