import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function TermsOfService() {
  const tableOfContentItems = [
    {
      title: "Terms of Service",
      link: "#terms-of-services",
    },
    {
      title: "Asking for Permissions",
      link: "#asking"
    },
 {
      title: "Contact Us",
      link: "#contact-us"
    },
  ]
  return (
    <div className='w-full relative '>
      <div className=' opacity-25 absolute  w-full h-96  top-[20vh] '>
        <Image alt="" objectFit="contain" layout="fill" src="/assets/images/terms-and-conditions.png" objectPosition={"100% 0"} />
      </div>
      <div>

        <div className=' z-30 relative w-full min-h-screen gap-10 m-auto flex flex-col-reverse lg:flex-row lg:mt-10 container px-10 lg:p-0'>
          <div className='lg:w-1/4 w-full lg:border-r-2 lg:border-r-gray-400 '>
            <div className='font-bold text-2xl pt-7 font-sans'>Table of Contents</div>
            <div className='pt-7'>
              <ul className=' list-disc list-inside flex gap-5 flex-col font-sans text-lg font-medium text-gray-400  '>
                {tableOfContentItems.map((item) => (
                  <li key={item.title} className="flex flex-row items-center gap-3">
                    <div className='w-1.5 h-1.5 rounded-full bg-teal-400'></div>
                    <Link href={item.link}>
                      <a className='hover:text-gray-500'>{item.title}</a>
                    </Link>
                  </li>
                ))}

              </ul>
            </div>
          </div>
          <div className=' flex flex-col lg:w-3/4 w-full gap-14 mt-7 overflow-scroll scroll max-h-screen scrollbar-hide pb-10'>
            <div>
              <div className='relative -mt-24 ' id='terms-of-services'></div>
              <h1 className='font-sans mt-24 font-bold text-4xl'>Terms of Service</h1>
              <div className=' text-xl mt-4 text-gray-400'>

        
              <p>
              Protection and embezzlement purposes, such as retaining a subset of your payment information, such as the last four digits of your credit card and your IP address, to track where a payment may have originated, or to safeguard our services from API abuse or automated software agents. We may make automatic decisions about you for those purposes, which may result in the Travel Supplier with whom you are booking blocking the transaction or us
                </p>
               <br/>
               <p>
               Using information such as internet browser, OS version, locale, dialect information, and site layout activity, as well as any particular comments you may provide from time to time, we can identify and correct flaws with our services or areas for improvement
                </p>
               <br/>
               <p>
               Offering you customer support or assistance in response to any queries or problems you may have while utilising our services. Although the ultimate Travel Supplier is responsible to you for any issues you may have with a flight, hotel, or another travel service you've booked through Trippybug, if you or the Travel Provider contact us about a problem with your booking, we'll need to use some of your personal data to help you. 
                </p>
               <br/>
               <p>

               Analysing and examining how, when, and why people use Trippybug to deliver, evaluate, improve, and optimise the delivery of our services. Consider the following scenario for the purposes of commercial statistics and business analytics, measuring the number of users who switch to, or book trips with, Travel Operators, as well as the details of the corresponding travel alternatives being picked

                </p>
               <br/>
               <p>
               You are solely responsible for any User Content you post, and you represent and agree that you will not share anything for which you do not have the permission or right to share or for which you are unable to provide the license described in paragraph 2 below.
                </p>
               <br/>
               <p>
               Although you or your licensors own all intellectual property rights in any User Content, and you are always free to share your User Content with others, you hereby grant TrippyBug and the TrippyBug Group Companies a non-exclusive, perpetual, royalty-free, worldwide, transferable, and sub-licensable right to host, use, reproduce both electronically and otherwise, publicly display, distribute, modify, adapt, publish, translate, and create derision from your User Content. We may, for example, make User Content available to our commercial partners or other TrippyBug Group Companies for use on their own websites. You own the User Content you post to the TrippyBug Services, and you can cancel this license at any time by deleting the User Content or your TrippyBug account. User Content that has been deleted will be removed within 48 hours.
                </p>
               <br/>
               <p>
               We have no duty to keep, maintain, publish, or make available any User Content you contribute, and you are solely responsible for backing up your own User Content.
                </p>
               <br/>
               <p>
               If you offer us any suggestions, comments, improvements, ideas, or other feedback ("Input"), you thus irrevocably assign to us all intellectual property rights in that feedback and recognize that we are free to use and use the feedback for any purpose. You can give us feedback by using the 'feedback' page or contacting our customer support.
                </p>
               <br/>
                <b id='asking'>Asking for Permissions</b>
                <br/>
                <br/>
                <b>We'll ask for your permission for things like:</b>
                <br/>
           
                <ul className=' pt-10 list-disc  pl-10 flex flex-col gap-10 '>
                  <li>
                  Delivering you emails for items you've requested, such as Pricing Notifications.
                  </li>
                  <li>
                  Showing you online marketing messages via email, push notification, or other means if you've agreed to.
                 </li>
                 <li>
                 Collecting certain cookies on your devices if you have given your agreement to do so.
                 </li>
                 <li>
                 collecting and analyzing your input if you accept to participate in one-on-one user testing.
                 </li>
                 <li>
                 You can withdraw your agreement at any time if we process your personal information solely based on your consent, either by utilizing the facility offered within the corresponding product feature or by contacting us.
                 </li>
                </ul>
                <br/>
                <b>We need to use or comply with our own legal rights or obligations.</b>
                <br/>
                <br/>
                <p>Your information may be retained and used in connection with lawsuits, as well as for compliance, regulatory, and auditing purposes. For instance, we may keep data if we are compelled by law or if a court order or regulatory authority requires it. In addition, if you exercise any applicable legal right of access, correct, or delete your personal information, we may ask for identification and verification papers to establish your identity.</p>
             
              </div>
            </div>
            
           
            <div id='contact-us'>
              <h1 className='font-sans font-bold text-4xl mt-5'>Contact Us</h1>
              <div className='text-xl mt-4 flex flex-col gap-7 text-gray-400'>
                <p >
                If you have questions about these Privacy Policy, please send an e-mail to bugtrippy@gmail.com

                </p>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div>
  )
}
