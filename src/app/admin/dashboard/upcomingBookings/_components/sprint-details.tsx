import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const staticBookingDetails = {
  name: "Rahul Prakash",
  email: "rahul@gmail.com",
  phoneNumber: "+917685745746",
  dateOfRequest: "12 Oct 2024",
  programName: "Nano Sprint",
  schoolName: "Rahul Memorial School",
  udiseCode: "U-213012894",
  city: "Bengaluru",
  pincode: "465789",
  grade: "Grade 6",
  numberOfStudents: 40,
  actualNumberOfStudents: 40,
  slot: "24 Oct 2024 | 4 PM to 6 PM"
};

const staticFeedback = {
  teacher: {
    name: "Rahul Prakash",
    content: "The sprint at the makerspace lab was a game-changer for my students! The hands-on learning experience and collaborative environment helped them develop problem-solving skills and think creatively. I saw a significant improvement in their critical thinking and innovation skills. Can't wait to plan the next sprint!",
    avatar: "/Ellipse 1.png"
  },
  students: [
    {
      name: "Aarav, Grade 9",
      content: "I never knew learning could be so much fun! The sprint at the makerspace lab was an amazing experience. I got to work on a project that I loved, and the mentors were super helpful. I learned so much about coding, designing, and teamwork. Can't wait for the next one!",
      avatar: "/Ellipse 1.png"
    },
    {
      name: "Kiara, Grade 9",
      content: "The makerspace lab sprint was incredible! I loved the freedom to experiment and try new things. The atmosphere was so supportive and encouraging. I made new friends and learned so much from them. It was an unforgettable experience!",
      avatar: "/Ellipse 1.png"
    }
  ]
};

export default function SprintDetailsComponent() {
    return (
      <div className="w-full max-w-4xl mx-auto px-4 py-8 space-y-16">
        <div className="space-y-8">
          <h1 className="text-4xl font-extrabold text-midnight-blue-main">Booking Details</h1>
          <Card>
            <CardContent className="pt-6 space-y-6">
              {Object.entries(staticBookingDetails).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <Label className="font-extrabold text-lg text-text-primary">{key.replace(/([A-Z])/g, ' $1').trim()}</Label>
                  <Input
                    value={value !== null ? value.toString() : '-'}
                    readOnly
                    className="w-80 rounded-81xl bg-grey-300 border-text-primary font-medium text-lg text-text-primary"
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-8">
          <h2 className="text-4xl font-extrabold text-midnight-blue-main">Sprint Feedback</h2>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-extrabold text-midnight-blue-main">Teacher Feedback (Only one allowed)</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img src={staticFeedback.teacher.avatar} alt={staticFeedback.teacher.name} className="w-12 h-12 rounded-full" />
                <span className="font-medium text-lg text-text-primary">{staticFeedback.teacher.name}</span>
                <span className="px-2 py-1 text-xs font-medium bg-typhoon-light text-typhoon-main rounded-full">Teacher</span>
              </div>
              <p className="font-medium text-lg text-text-primary">{staticFeedback.teacher.content}</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-extrabold text-midnight-blue-main">Student Feedback</h3>
            {staticFeedback.students.map((student, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-4">
                  <img src={student.avatar} alt={student.name} className="w-12 h-12 rounded-full" />
                  <span className="font-extrabold text-lg text-text-primary">{student.name}</span>
                </div>
                <p className="font-medium text-lg text-text-primary">{student.content}</p>
              </div>
            ))}
            <Button
            variant = "proceed"
              className="bg-transparent border-[2px] border-incandescent-main text-incandescent-main"
            >
              Add Feedback
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center">
        <Button variant = "proceed">
        Submit and Complete Sprint
        </Button>
        </div>
      </div>
    );
  }
  
  