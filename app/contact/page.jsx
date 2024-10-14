"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 8178990405",
    link: "tel:+918178990405", // Phone link
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "janiket112@gmail.com",
    link: "mailto:janiket112@gmail.com", // Email link
  },
  {
    icon: <FaWhatsapp />,
    title: "Whatsapp",
    description: "+91 8178990405",
    link: "https://wa.me/+918178990405", // Whatsapp link
  },
];

const formSchema = z.object({
  firstName: z.string().min(3, "Please enter a valid first name"),
  lastName: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().optional(),
  message: z.string().min(2, "Please enter a valid message"),
});

const toastId = "toast-contact";

const Contact = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  const { handleSubmit, reset } = form;

  const onSubmit = async (values) => {
    toast.loading("Sending message...", { id: toastId });
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = await res.json();
    if (data.success) {
      toast.success(data.message, { id: toastId });
      reset();
    } else {
      toast.error(data.message, { id: toastId });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* contact form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <Form {...form}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6 p-10 bg-secondaryBg rounded-xl"
              >
                <h3 className="text-4xl text-accent">
                  {"Let's work together"}
                </h3>
                <p className="text-white/60">
                  {
                    "I'm always open to new projects and collaborations. Let's connect and create something amazing together."
                  }
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="First Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Last Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Email" {...field} type="email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Phone Number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Type your message here"
                          className="h-[200px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex gap-4">
                  <Button size="md" className="max-w-40">
                    Send Message
                  </Button>
                  <Button
                    size="md"
                    type="reset"
                    className="max-w-40 bg-primary text-white/60 hover:bg-primary hover:text-white/60"
                    onClick={() => reset()}
                  >
                    Reset Form
                  </Button>
                </div>
              </form>
            </Form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-secondaryBg text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <a
                      href={item.link}
                      className="text-xl hover:text-accent hover:underline"
                    >
                      {item.description}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
