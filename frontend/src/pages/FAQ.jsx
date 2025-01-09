import React, { useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to track which answer is open

  const faqs = [
    {
      question: "What is a time capsule?",
      answer: "A time capsule is a digital collection of memories, photos, videos, letters, or anything meaningful that you want to preserve and unlock at a future date. It's a way to capture the moments that matter and rediscover them when the time is right."
    },
    {
      question: "How do I create my first time capsule?",
      answer: "Creating a time capsule is easy! Simply sign up for an account, upload your content (photos, videos, messages, etc.), set a future date for when the capsule will be unlocked, and then share it with others or keep it private. You can start creating your capsule in just a few steps."
    },
    {
      question: "Can I choose when my time capsule will be unlocked?",
      answer: "Yes! You have complete control over when your time capsule is unlocked. Whether it’s a few months or decades from now, you can select a specific date, and when the time comes, your memories will be unlocked and ready for you to rediscover."
    },
    {
      question: "Can I keep my time capsule private?",
      answer: "Absolutely! You can choose to keep your time capsule completely private, sharing it only with yourself, or you can share it with loved ones, friends, or the public. The choice is yours!"
    },
    {
      question: "What types of content can I add to my time capsule?",
      answer: "You can upload photos, videos, letters, and more to your time capsule. Whether it’s a personal message, a family video, or a milestone you want to preserve, we allow a wide variety of media types to make sure your memories are captured in a way that’s meaningful to you."
    },
    {
      question: "Can I update or add to my time capsule after it’s been created?",
      answer: "Yes, you can always update your time capsule or add new content before it’s locked. Once the capsule is sealed and the date is set, it will remain intact until the designated reveal date, but you have complete flexibility to edit it before that moment."
    },
    {
      question: "How secure are my time capsules?",
      answer: "We take the security of your memories very seriously. All time capsules are stored in a secure, encrypted environment to ensure your content is safe and protected. Only you and those you share it with will have access to your time capsule."
    },
    {
      question: "Can I share my time capsule with anyone?",
      answer: "Yes! You can choose to share your time capsule with anyone, whether it’s with specific people or publicly on the platform. You can send a private link to your loved ones, or if you want to share it with a wider audience, you can make it public."
    },
    {
      question: "What happens if I forget the unlock date of my time capsule?",
      answer: "Don’t worry! If you forget the unlock date, you’ll receive a reminder notification when the date is approaching, so you won’t miss the special moment of rediscovering your memories."
    },
    {
      question: "What happens to my time capsule after the unlock date?",
      answer: "Once the unlock date arrives, you’ll receive a notification that your time capsule is ready to be opened. You’ll be able to view and relive the memories inside. After that, you can choose to leave it open for future reference or lock it again for safekeeping."
    },
    {
      question: "Can I create multiple time capsules?",
      answer: "Absolutely! You can create as many time capsules as you like. Whether it’s for different milestones, occasions, or people, the platform gives you the freedom to store and revisit countless moments from your life."
    },
    {
      question: "Do I need any special equipment to view my time capsule?",
      answer: "No special equipment is required. You can access and view your time capsule from any device—whether it's your phone, tablet, or computer—whenever the unlock date arrives."
    },
    {
      question: "Is there a cost to create a time capsule?",
      answer: "While creating a time capsule is free, we also offer premium features for users who want additional storage or enhanced functionality. You can choose the plan that works best for your needs."
    },
    {
      question: "Can I delete a time capsule?",
      answer: "Yes, you can delete any time capsule you've created at any time, before it’s locked for the future. Once it’s sealed and set to unlock, it cannot be deleted until the time arrives."
    },
    {
      question: "How can I contact customer support?",
      answer: "If you have any questions or need assistance, our customer support team is always here to help. You can reach out to us through the 'Contact Us' page, and we'll get back to you as soon as possible."
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active question
  };

  return (
    <div className="bg-gray-100 text-gray-800 px-6 py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div className="mb-6" key={index}>
          <h3 
            className="text-xl font-semibold   mb-2 cursor-pointer" 
            onClick={() => toggleAnswer(index)}
          >
         <p className='flex items-center gap-3'>  <AiOutlinePlus  className='font-bold'/> {faq.question}</p> 
          </h3>
          {activeIndex === index && <p className="text-gray-700">{faq.answer}</p>} {/* Only show answer if activeIndex matches */}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
