"use client";
import { useState } from "react";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    Description: "(+91) 7217643584",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    Description: "sanchitmishra9795@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    Description: "New delhi , India",
  },
];

import { motion } from "framer-motion";
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/submit", formData);
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-2"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[20px]">
          {/* form section */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent ">Let's work together</h3>
              <p className="text-white/60">Excited to work with you!</p>
              {/* input section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstName"
                  type="text"
                  placeholder="Firstname"
                  onChange={handleChange}
                />
                <Input
                  name="lastname"
                  type="text"
                  placeholder="Lastname"
                  onChange={handleChange}
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
                <Input
                  name="phone"
                  type="text"
                  placeholder="Phone"
                  onChange={handleChange}
                />
              </div>
              {/* select */}
              <Select
                name="service"
                onValueChange={(value) =>
                  setFormData((prevState) => ({ ...prevState, service: value }))
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="webdev">Web Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Text area */}
              <Textarea
                name="message"
                className="h-[100px] after"
                placeholder="Type your message here"
                onChange={handleChange}
              />
              {/* btn */}
              <Button size="lg" type="submit" className="max-w-40 rounded-3xl">
                Send message
              </Button>
            </form>
          </div>
          {/* Info */}
          <div className=" flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div>{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.Description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
