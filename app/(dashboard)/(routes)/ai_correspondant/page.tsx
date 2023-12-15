'use client'

import * as z from "zod"
import { useForm } from 'react-hook-form'
import { MessageSquare } from 'lucide-react'
import Heading from '@/components/Heading'

import {formSchema} from "./constants"
import { zodResolver } from "@hookform/resolvers/zod"
import { 
  Form,
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormMessage 
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Props = {}

const AiCorrespondant = (props: Props) => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt:""
    }
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit =  async (values : z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <>    
      <div>
          <Heading
            title='Ai correspondant'
            description='Our most advenced conversation'
            icon={MessageSquare}
            iconColor='text-violet-500'
            bgColor='bg-violet-500/10'
          />
          
          <div className='px-4 lg:px-8'>
            <div className="">
              <Form {...form}>
                <form 
                  onSubmit={form.handleSubmit(onSubmit)} 
                  className="
                    fixed bottom-10
                    rounded-lg
                    border
                    w-full
                    p-4
                    px-3
                    md:px-6
                    focus-within:shadow-sm
                    grid
                    grid-cols-12
                    gap-2
                  "
                >
                  <FormField
                    control={form.control}
                    name="prompt"
                    render={({ field }) => (
                      <FormItem className="col-span-12 lg:col-span-10">
                        <FormControl className=" m-0 p-0">
                          <Input 
                            className="
                              border-0 outline-none 
                              focus-visible:ring-0 
                              focus-visible:ring-transparent
                            "
                            placeholder="Hello ! How to say ..." 
                            disabled={isLoading} 
                            {...field} 
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="col-span-12 lg:col-span-2">Send</Button>
                </form>
              </Form>
            </div>
            
            <div className="">
              azeae
            </div>
          </div>
      </div>
    </>
  )
}

export default AiCorrespondant