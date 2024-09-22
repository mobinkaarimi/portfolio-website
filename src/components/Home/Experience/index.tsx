import './style.css'
export default function Experience() {
  return (
    <section id="experience" className="min-h-screen">
      <div className="flex justify-center my-10">
        <h1 className="text-center pb-3 text-4xl text-white border-b border-b-palette-primary-yellow w-max">
          Experiences
        </h1>
      </div>
      <div className="flex flex-col space-y-10 relative md:overflow-y-hidden px-1 md:px-10 md:my-16 my-6">
        <div className="w-[2px] absolute h-[96%] bg-palette-primary-yellow top-10"></div>
        <div className="relative min-h-44 px-6 md:px-8">
          <div className="absolute top-[-13px] left-[-17px] rounded-full w-8 h-8 bg-palette-primary-yellow">
            <div className="absolute w-5 h-5 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-palette-primary-gray"></div>
          </div>
          <div className="relative top-[-20px] flex flex-col space-y-3">
            <h2 className="text-lg md:text-4xl text-palette-primary-yellow">
              Frontend Developer At <a href="https://tradingfinder.com/" className=" underline">TradingFinder</a>
            </h2>
            <h3 className="text-white text-lg">May 2023 - Present</h3>
            <div className="flex flex-col space-y-4">
              <p className="text-white">
                Optimized code and implemented lazy loading techniques, following in a 20% reduction in page load time. This improved
                user experience and boosted SEO rankings.
              </p>
              <p className="text-white">
                Developed a website using SEO principles, including accurate semantic HTML and ensuring appropriate meta tags.
                Recording a 20% surge in Google Analytics.
              </p>
              <p className="text-white">
                Directed a successful project to enhance caching and session management through Redis, which facilitated better resource
                allocation; enhanced performance for the application and increased server capacity by 25%, ensuring seamless user
                interactions.
              </p>
              <p className="text-white">
                Initiated establishing a multilingual service through subdomains,
                incorporating SEO best practices; saw significant
                improvements in search visibility, result to a doubled global audience
                reach within eight months.
              </p>
              <p className="text-white">
                Developed an automated testing framework that streamlined regression tests, resulting in more than 100 test cases being
                executed within half the time previously required; this increased deployment frequency for releases by two weeks.
              </p>
              <p className="text-white">
                Created an interactive map that empowers users to input village locations using control geometry, reducing data entry
                Errors by 20% and facilitating faster project turnarounds.
              </p>
              <p className="text-white">
                Developed and deployed new navigation features that streamlined access to key functionalities; this led to a notable
                reduction in support queries related to usability issues by approximately 35% over two months.
              </p>
            </div>
          </div>
        </div>
    
        <div className="relative min-h-44 px-6 md:px-8">
          <div className="absolute top-[-13px] left-[-17px] rounded-full w-8 h-8 bg-palette-primary-yellow">
            <div className="absolute w-5 h-5 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-palette-primary-gray"></div>
          </div>
          <div className="relative top-[-20px] flex flex-col space-y-3">
            <h2 className="text-lg md:text-4xl text-palette-primary-yellow">
              Frontend Developer At <a href="https://23rd.co/" className="underline">23rd</a>
            </h2>
            <h3 className="text-white text-lg">Feb 2022 - Mar 2023</h3>
            <div className="flex flex-col space-y-4">
              <p className="text-white">
                Created comprehensive documentation of the project development flow, which Strengthened clarity and reduced
                onboarding time for developers by 3 days; this process is now utilized by over 5 team members regularly.
              </p>
              <p className="text-white">
                executed Material Design standards into the company’s processes Reduced development efficiency and elevated design
                consistency by 35%.
              </p>
              <p className="text-white">
                Refactored two projects from React.js to Next.js to optimize for SEO, which led to a 30% increase in daily users. Built best
                practices for responsive design that enhanced mobile usability, leading to a 30% increase in mobile user retention rates.
              </p>
            </div>
          </div>
        </div>
        <div className="relative min-h-44 px-6 md:px-8">
          <div className="absolute top-[-13px] left-[-17px] rounded-full w-8 h-8 bg-palette-primary-yellow">
            <div className="absolute w-5 h-5 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-palette-primary-gray"></div>
          </div>
          <div className="relative top-[-20px] flex flex-col space-y-3">
            <h2 className="text-lg md:text-4xl text-palette-primary-yellow">
              Frontend Developer At <a href="https://www.wishwork.org/" className="underline">Wish Work</a>
            </h2>
            <h3 className="text-white text-lg">Jan 2022 - Feb 2022</h3>
            <div className="flex flex-col space-y-4">
              <p className="text-white">
              Engineered a pre-loading strategy for website components that accelerated performance by 30%, ensuring a seamless user
              experience that led to positive feedback from over 500 users during testing phases.
              </p>
              <p className="text-white">
                Contributed to the development of mobile-friendly web layouts, resulting in a 10% boost in interaction from users on mobile
                devices.
              </p>
            </div>
          </div>
        </div>
        <div className="relative min-h-44 px-8">
          <div className="absolute top-[-13px] left-[-17px] rounded-full w-8 h-8 bg-palette-primary-yellow">
            <div className="absolute w-5 h-5 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-palette-primary-gray"></div>
          </div>
          <div className="relative top-[-20px] flex flex-col space-y-3">
            <h1 className="text-lg md:text-4xl text-palette-primary-yellow">
              Frontend Developer At Vira Software Group
            </h1>
            <h1 className="text-white text-lg">Nov 2020 - Jan 2022</h1>
            <div className="flex flex-col space-y-4">
              <p className="text-white">
                Liaising with the back-end team to understand the project's data
                flow and integrated elements to create a secure web design.
              </p>
              <p className="text-white">
                Integrated Git's pull request features to enhance code review
                processes, leading to a 30% increase in code quality, as
                evidenced by a significant reduction in post-deployment bugs
                over six months.
              </p>
              <p className="text-white">
                Established integrated B2B system with admin and user panels,
                utilizing component-based knowledge for coding and integrating
                geographic coordinates for Google Maps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
