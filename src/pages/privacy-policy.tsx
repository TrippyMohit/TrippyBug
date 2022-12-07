import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function PrivacyPolicy() {
  const tableOfContentItems = [
    {
      title: "About the Policy",
      link: "#privacy-policy",
    },
    {
      title: "Our Legitimate Interests",
      link: "#use-of-the-website"
    },
    {
      title: "Approaching you to invite you to take part in genuine market research",
      link: "#use"
    },
   {
      title: "Contact Us",
      link: "#contact-us"
    },
  ]
  return (
    <div className='w-full relative '>
      <div className=' opacity-25 absolute  w-full h-52  top-[20vh] '>
        <Image alt="" objectFit="contain" layout="fill" src="/assets/images/vault.png" objectPosition={"100% 0"} />
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
                    {/* <a className='hover:text-gray-500' href={item.link}>{item.title}</a> */}
                  </li>
                ))}

              </ul>
            </div>
          </div>
          <div className=' flex flex-col lg:w-3/4 w-full  mt-7 overflow-scroll scroll max-h-screen scrollbar-hide pb-10'>
            <div className='flex  flex-col gap-7'>
              <div className='flex flex-col gap-3'>
                <div className='relative -mt-24 ' id='privacy-policy'></div>
                <h1 className='font-sans mt-24 font-bold text-4xl'>Privacy Policy</h1>
                <div className=' text-xl  text-gray-400'>
                  <p>
                 <a href='https://trippybug.com/'>Trippybug</a>   {` provides a space for the client and the customer respecting their privacy commits to keep the personal document confidential. The company only collects, uses, and filters the obtained information according to its requirements. `}
                  </p>

                </div>
              </div>
              <div className='flex flex-col gap-3' >
                <h1 className='font-sans font-bold text-4xl'>About the Policy</h1>
                <div className=' text-xl  text-gray-400'>
                  <p>
                    {`        The word 'personal data' frequently appears in this policy. By that, we mean any information that are used for self-identification includes such as your name, contact information, trip itinerary, internet protocol ("IP") address, cookie strings, or device IDs, as well as information that can't identify you on its own but is stored alongside such identifiers, such as how you use and explore our services or the country you're in when you plan a trip.`}
                  </p>

                </div>
                <div className=' text-xl  text-gray-400'>
                  <p>
                    {`  Trippybug validate and state themselves as a third party; thus, this policy does not apply to any airlines, online travel agencies, hotels, car rental companies, or other travel firms (we'll call them &"Travel Suppliers" that we feature. When you make a reservation with a Travel Supplier, your information will be processed according to their privacy policies and terms and conditions. But professionally we'll always provide you with the relevant links for your ease and reading on your searches before making a reservation.`}
                  </p>
                </div>
              </div>
              <div className='flex flex-col gap-3' >
                <div id='use-of-the-website'  >
                <h1 className='font-sans font-bold text-4xl'>Our Legitimate Interests</h1>
                </div>
                <div className=' text-xl  text-gray-400'>
                  <p>
                  {`Protection and embezzlement purposes, such as retaining a subset of your payment information, such as the last four digits of your credit card and your IP address, to track where a payment may have originated, or to safeguard our services from API abuse or automated software agents. If we  make automatic decisions about the  purposes, which may result in the Travel Supplier with whom you are booking blocking the transaction or us`}
                  </p>

                </div>
                <div className=' text-xl  text-gray-400'>
                  <p>
                  Using information such as internet browser, OS version, locale, dialect information, and site layout activity, we identify and correct flaws with our services or areas for improvement, offering you customer support or assistance in response to any queries or problems you may have while utilising our services. Although the ultimate Travel Supplier is responsible to you for any issues you may have with a flight, hotel, or another travel service you & a positive booked through Trippybug, if you or the Travel Provider contact us about a problem with your booking, we"ll need to use some of your personal data for client satisfactory agendas.
                  </p>
                </div>
                <div className=' text-xl  text-gray-400'>
            
                  <p>
                    {`Analysing and examining how, when, and why people use Trippybug to deliver, evaluate, improve, and optimise the delivery of our services. Consider the following scenario: for the purposes of commercial statistics and business analytics, measuring the number of users who switch to, or book trips with, Travel Operators, as well as the details of the corresponding travel alternatives being picked examining what different categories of individuals  are observing or clicking on inside our services on an aggregate level for genuine identification  whether features or functions are popular  and  valuable than others, any User Content that you submit to the Trippybug Services; assessing and filtering any User Content that you upload to the Trippybug Services Conducting A/B tests that show different groups of users alternate versions of our services to assess the positive or negative impact of such changes on our users' experience of our services. For instance, for different users accessing our site, we may vary the prominence of a button, its color, or its placement to assist us in understanding how to make our service easier to use or to more effectively bring users' attention to the most significant and necessary information; and`}

                  </p>
                  </div>
                  <div className=' text-xl  text-gray-400'>
                  <p className=' text-xl  text-gray-400'> 
                    {`Tailoring your experience with our services so that your time on Trippybug is as valuable, convenient, and meaningful as possible. Consider the following scenario.`}

                  </p>
                  </div>
                  <p className=' text-xl  text-gray-400'>
                    {`Trippybug will use cookies to record your language and currency preferences, as well as to customise your experience by emphasising or suggesting content or travel choices that we estimate are meaningful to you based on your Trippybug search history and use of our services`}

                  </p>
                  <p className=' text-xl  text-gray-400'>
                    {`If you've requested that we send you newsletters or other promotional messages, we may personalise the scheduling or subject matter of these to represent what we think will be of most significance to you, such as using the fact that you've recently searched for a flight in Valencia to indicate us to ask if you'd also like to search for a resort in Valencia`}

                  </p>
                  <p className=' text-xl  text-gray-400'>
                    {`We may utilise your current location to anticipate the airport you would want to travel from or return to; and deliver related adverts about our services or other services that we believe you might be interested in. For instance, if we know you've recently searched for a flight to a particular place, we may send you a message asking if you'd like to search for a hotel or car in the same area. For additional details, see the part below titled "How is your information used for advertising?"`}

                  </p>
                  <p className=' text-xl  text-gray-400'>
                  <a href='https://trippybug.com/'>Trippybug</a>   {` create a profile and history of your behaviour and a timeline on our services to customise your experience. In every way , we take great effort to ensure that none of our activities include any profiling or automatic decision-making that could have legal or other severe consequences for you.`}

                  </p>
                  <p className=' text-xl  text-gray-400'>
                    {`We may use your information to educate our artificial intelligence techniques to improve the Services' personalization. We will not use personally identifying information such as your contact information or payment information for these objectives.`}

                  </p>
                  <div>
                  <p className=' text-xl  text-gray-400'>
                    {`Developing aggregated datasets of anonymous data allows us to gain valuable insights into trends or patterns in the tourism sector to inform strategic business decisions. For instance, we use searching information to monitor destination demand and ensure that the pricing and travel alternatives we provide our customers are accessible through our services. This data is beneficial for Tour Operators since it allows them to identify new destinations in high demand and ensure that they are providing reasonable pricing.`}

                  </p>
                  </div>
                  <div>
                  <p  className=' text-xl  text-gray-400'>
                    {` We can only speak for ourselves; thus, this policy does not apply to any airlines, online travel agencies, hotels, car rental companies, or other travel firms (we'll call them "Travel Suppliers") that we feature. When you make a reservation with a Travel Supplier, your information will be processed according to their privacy policies and terms and conditions. But don't worry, we'll always provide you with the relevant links so you can read them before making a reservation.`}
                  </p>
                 
                </div>
               
             
              </div>
              <div className='flex flex-col gap-3' id='use'>
                <h1 className='font-sans font-bold text-4xl'>Approaching you to invite you to take part in genuine market research</h1>
                <div className=' text-xl  text-gray-400'>
                  <p>
                    {`We will only collect personal information based on a significant and legitimate interest if the computation is meaningful, appropriate, and restricted to what is required for the reason it was collected. Of course, we'll always make sure that our legitimate interests don't infringe on your personal freedoms and rights.`}
                  </p>

                </div>
                <div className=' text-xl  text-gray-400'>
                  <p>
                    {`We can only speak for ourselves; thus, this policy does not apply to any airlines, online travel agencies, hotels, car rental companies, or other travel firms (we'll call them "Travel Suppliers") that we feature. When you make a reservation with a Travel Supplier, your information will be processed according to their privacy policies and terms and conditions. But don't worry, we'll always provide you with the relevant links so you can read them before making a reservation.`}
                  </p>

                </div>
              </div>
              <div className='flex flex-col gap-3'>
                <h1 className='font-sans font-bold text-4xl' id='contact-us'>Contact Us</h1>
                <div className=' text-xl  text-gray-400'>
                  <p>
                    {`If you have questions about these Privacy Policy, please send an e-mail to bugtrippy@gmail.com`}
                  </p>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}
