import { useState } from "react";
import {useSendEmailForm} from "@contexts/SendEmailContext"

import IconCross from '@assets/icons/icon-cross.png'


type FormData = {
  name: string;
  email: string;
  message: string;
  access_key: string;
};


export default function SendSmsForm(){
  const {isOpen, setIsOpen} = useSendEmailForm()  
  const [result, setResult] = useState<string>("");
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    access_key: "e075254c-62dc-4f55-84e9-84907e0607f1",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult("Sending....");
    console.log("Form submitted:", form);
    const response = await fetch('https://api.web3forms.com/submit',{
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    
    })

    const data = await response.json()
    if (data.success) {
      setResult("Form Submitted Successfully");
      setForm({
        name: "",
        email: "",
        message: "",
        access_key: "e075254c-62dc-4f55-84e9-84907e0607f1",
      });
      setTimeout(() =>{
        setResult("");
        setIsOpen(false);
      }, 3000)
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    
    if(!isOpen) return null
    return(
      <div className="fixed inset-0 bg-[#0000003b] z-10 flex items-center justify-center"
      onClick={() => setIsOpen(false)}
      >
       <div className=' w-[450px] flex flex-col gap-4 items-center justify-start'
       onClick={(e) => e.stopPropagation()}
       > 
            
            <form
              onSubmit={handleSubmit}
              className="relative w-full max-w-lg mx-auto flex flex-col gap-4 bg-[#1e1e1e] p-6 rounded-2xl border border-[#3c3c3c] shadow-lg"
            >
              <h2 className="text-xl font-semibold text-[#d4d4d4]">Send me a message</h2>
              <div className='absolute top-3 right-3 hover:cursor-pointer hover:scale-110 max-w-[25px]'>
                        <img src={IconCross} onClick={() => setIsOpen(false)} alt="Icon Cross" />
              </div>
              {/* Name */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm text-[#9cdcfe] mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="p-2 rounded-md bg-[#252526] text-[#d4d4d4] border border-[#3c3c3c] focus:outline-none focus:ring-2 focus:ring-[#569cd6]"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm text-[#9cdcfe] mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="p-2 rounded-md bg-[#252526] text-[#d4d4d4] border border-[#3c3c3c] focus:outline-none focus:ring-2 focus:ring-[#569cd6]"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm text-[#9cdcfe] mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="p-2 rounded-md bg-[#252526] text-[#d4d4d4] border border-[#3c3c3c] focus:outline-none focus:ring-2 focus:ring-[#569cd6]"
                />
              </div>

              <button
                type="submit"
                className="mt-2 bg-[#0e639c] hover:bg-[#1177bb] text-white font-medium px-4 py-2 rounded-md transition-colors"
              >
                Send
              </button>
            </form>
            {result && <p className="text-sm text-[#9cdcfe] mt-2">{result}</p>}
       </div>
      </div>

    )
}