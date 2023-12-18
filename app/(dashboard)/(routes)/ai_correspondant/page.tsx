'use client'

import * as z from "zod"
import axios from "axios"
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
import { useRouter } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Empty } from "@/components/Empty"
import Loader from "@/components/Loader"



interface MessageType{
  role: string,
  content: string,
}

const AiCorrespondant = () => {
  const router = useRouter()
  const [messages,setMessages] = useState<MessageType[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit =  async (values : z.infer<typeof formSchema>) => {
    try{
      //POST message
      const userMessage = {
        role : "user",
        content : values.prompt,
      }

      const newMessages = [...messages,userMessage]

      const response = await axios.post('/api/ai_correspondant',{
        messages: newMessages,
      })

      setMessages((current)=>[...current, userMessage, response.data])

      form.reset()
    }catch(error: any){
      console.log(error)
    }finally{
      router.refresh()
    }
  }

  return (
    <>    
      <div className="relative h-[90vh]">
          <Heading
            title='Ai correspondant'
            description='Our most advenced conversation'
            icon={MessageSquare}
            iconColor='text-violet-500'
            bgColor='bg-violet-500/10'
          />
          
          <div className='px-4 lg:px-8 h-[70vh] overflow-auto'>            
            <div className="space-y-4 mt-4">
              <div className="gap-y-4">
                {messages.length === 0 && !isLoading && (
                  <Empty label="Conversation"/>
                )} 

                {messages.map((message,index)=>(
                    <div key={index} className={cn("flex items-center gap-x-4 py-2")}>
                      <div className={cn("flex flex-col p-5 rounded", message.role === "assistant" ? "bg-yellow-500/10" : "bg-violet-900/10" )}>
                        <span className="text-xl pb-5">
                          {message.role.charAt(0).toUpperCase() + message.role.slice(1)}
                        </span>
                        
                        <p className="text-muted-foreground">
                          {message.content}
                        </p>
                      </div>
                    </div>
                ))} 
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 w-full px-4 lg:px-8">
            <Form {...form}>
              <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="
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
                  bg-white
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
                <Button type="submit" className="col-span-12 lg:col-span-2">
                  {isLoading ? <Loader/> : "Send"} 
                </Button>
              </form>
            </Form>
          </div>
      </div>
    </>
  )
}

export default AiCorrespondant