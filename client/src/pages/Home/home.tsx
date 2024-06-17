import { Typography } from '@material-tailwind/react';

export const Home = () => {
  return (
    <div className="lc-lg:gap-14 flex w-full flex-col items-center justify-center gap-10 pb-16">
      <div
        className=" flex h-full w-full flex-col items-center"
        style={{
          background:
            'linear-gradient(rgb(247, 247, 247) 0%, rgb(255, 255, 255) 100%)',
        }}
      >
        <div className="flex h-full w-full items-center justify-center pb-8 pt-[50px]">
          <div className="lc-lg:gap-6 flex w-full max-w-screen-xl flex-col items-center gap-4 px-3">
            <div className="font-typo lc-lg:text-[60px] text-[40px] font-bold leading-[100%]">
              Homma's Private Access
            </div>
            <div className="lc-lg:text-[16px] lc-lg:leading-[24px] text-center text-xs font-semibold text-label-2 dark:text-dark-label-2">
              <span className="whitespace-nowrap">
                Shaping Successful Traders One Trade at a Time
              </span>
            </div>
          </div>
        </div>
      </div>
      <Cards />
      <div className="lc-md:gap-8 lc-md:px-6 lc-lg:gap-10 flex w-full max-w-screen-xl flex-col gap-4 px-4">
        <div className="lc-md:gap-8 lc-lg:flex-row lc-lg:gap-10 flex w-full flex-col gap-4">
          <div className="flex flex-1 flex-col items-start gap-3">
            <div className="flex items-center gap-2">
              <img
                src="/_next/static/images/feat-icon-video-7bb0e79e542674b17667713212865bd5.svg"
                className="h-5 w-5"
                alt=""
              />
              <div className="text-base font-medium text-label-1 dark:text-dark-label-1">
                Video Solutions
              </div>
              <Typography variant="h6"> Video Solutions</Typography>
            </div>
            <div className="pl-7 text-base text-label-2 dark:text-dark-label-2">
              <div>
                Unlock elaborate premium video solutions like{' '}
                <a
                  className="text-blue-s"
                  href="https://leetcode.com/problems/merge-intervals/solution/"
                  target="_blank"
                  rel="noreferrer"
                >
                  this
                </a>
                . Each video includes a detailed conceptual overview and code
                walkthrough that will efficiently guide you through the problem.
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start gap-3">
            <div className="flex items-center gap-2">
              <img
                src="/_next/static/images/feat-icon-content-bb2b24f4abb9581c67c1d1d3cc61b8c7.svg"
                className="h-5 w-5"
                alt=""
              />
              <div className="text-base font-medium text-label-1 dark:text-dark-label-1">
                Access to Premium Content
              </div>
            </div>
            <div className="pl-7 text-base text-label-2 dark:text-dark-label-2">
              Gain exclusive access to our latest and ever-growing collection of
              premium content, such as questions, Explore cards, and premium
              solutions. Detailed explanations are written by our team of
              algorithm and data structure experts.
            </div>
          </div>
        </div>
        <div className="lc-md:gap-8 lc-lg:flex-row lc-lg:gap-10 flex w-full flex-col gap-4">
          <div className="flex flex-1 flex-col items-start gap-3">
            <div className="flex items-center gap-2">
              <img
                src="/_next/static/images/feat-icon-company-259fca9c4fac7162e63a25141b2c8f0c.svg"
                className="h-5 w-5"
                alt=""
              />
              <div className="text-base font-medium text-label-1 dark:text-dark-label-1">
                Select Questions by Company
              </div>
            </div>
            <div className="pl-7 text-base text-label-2 dark:text-dark-label-2">
              Target your studying more accurately towards reaching your dream
              job. Find out which companies asked specific questions. We have
              nearly 200 questions from Google alone.
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start gap-3">
            <div className="flex items-center gap-2">
              <img
                src="/_next/static/images/feat-icon-autocomplete-6d3b9f48a4111bc1fd549ea72101dfc9.svg"
                className="h-5 w-5"
                alt=""
              />
              <div className="text-base font-medium text-label-1 dark:text-dark-label-1">
                Autocomplete
              </div>
            </div>
            <div className="pl-7 text-base text-label-2 dark:text-dark-label-2">
              Not interested in memorization? With premium access, you'll
              receive intelligent code autocompletion based on language and an
              analysis of your source code.
            </div>
          </div>
        </div>
        <div className="lc-md:gap-8 lc-lg:flex-row lc-lg:gap-10 flex w-full flex-col gap-4">
          <div className="flex flex-1 flex-col items-start gap-3">
            <div className="flex items-center gap-2">
              <img
                src="/_next/static/images/feat-icon-debugger-3a424992a9c65c38a2c65fc6daf5ec47.svg"
                className="h-5 w-5"
                alt=""
              />
              <div className="text-base font-medium text-label-1 dark:text-dark-label-1">
                Debugger
              </div>
            </div>
            <div className="pl-7 text-base text-label-2 dark:text-dark-label-2">
              <div>
                Tired of
                <pre className="mx-2 inline rounded-[4px] border p-1 border-divider-2 dark:border-gray-7 bg-fill-4 dark:bg-dark-fill-4">
                  System.out.println(val)
                </pre>
                ? Set breakpoints and debug your code interactively line-by-line
                right inside our code editor.
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start gap-3">
            <div className="flex items-center gap-2">
              <img
                src="/_next/static/images/feat-icon-judge-680498c3b0b012c2b5eec02d0f128c17.svg"
                className="h-5 w-5"
                alt=""
              />
              <div className="text-base font-medium text-label-1 dark:text-dark-label-1">
                Lightning Judge
              </div>
            </div>
            <div className="pl-7 text-base text-label-2 dark:text-dark-label-2">
              Tired of waiting？Premium users get priority judging using an
              exclusive queue, resulting in a 3X shorter wait time, up to 10X
              during peak hours.
            </div>
          </div>
        </div>
        <div className="lc-md:gap-8 lc-lg:flex-row lc-lg:gap-10 flex w-full flex-col gap-4">
          <div className="flex flex-1 flex-col items-start gap-3">
            <div className="flex items-center gap-2">
              <img
                src="/_next/static/images/feat-icon-sort-fc03811b4653c7ae2be47eb917f57f0e.svg"
                className="h-5 w-5"
                alt=""
              />
              <div className="text-base font-medium text-label-1 dark:text-dark-label-1">
                Sort Questions by Prevalence
              </div>
            </div>
            <div className="pl-7 text-base text-label-2 dark:text-dark-label-2">
              Find out which questions turn up most frequently in interviews so
              that you know where to focus your personal studying. Invaluable
              data collected from thousands of samples.
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start gap-3">
            <div className="flex items-center gap-2">
              <img
                src="/_next/static/images/feat-icon-interview-ead72b23d97b984758767b0ca1468814.svg"
                className="h-5 w-5"
                alt=""
              />
              <div className="text-base font-medium text-label-1 dark:text-dark-label-1">
                Interview Simulations
              </div>
            </div>
            <div className="pl-7 text-base text-label-2 dark:text-dark-label-2">
              Mock assessments provide you with a way to test your abilities in
              a timed setting, just like a coding challenge or on-site
              interview. You choose the company and we will select an
              appropriate question from our constantly growing database.
            </div>
          </div>
        </div>
        <div className="lc-md:gap-8 lc-lg:flex-row lc-lg:gap-10 flex w-full flex-col gap-4">
          <div className="flex flex-1 flex-col items-start gap-3">
            <div className="flex items-center gap-2">
              <img
                src="/_next/static/images/feat-icon-playground-7055e8bdfd53f4a5ed56babac52277fc.svg"
                className="h-5 w-5"
                alt=""
              />
              <div className="text-base font-medium text-label-1 dark:text-dark-label-1">
                Unlimited Playgrounds
              </div>
            </div>
            <div className="pl-7 text-base text-label-2 dark:text-dark-label-2">
              Premium users can create an unlimited number of Playgrounds, up
              from 10! You also get the ability to organize your Playgrounds in
              folders.
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start gap-3">
            <div className="flex items-center gap-2">
              <img
                src="/_next/static/images/feat-icon-tag-37cad415e2d0d8d561dcd9ff6943254b.svg"
                className="h-5 w-5"
                alt=""
              />
              <div className="text-base font-medium text-label-1 dark:text-dark-label-1">
                Additional Discounts
              </div>
            </div>
            <div className="pl-7 text-base text-label-2 dark:text-dark-label-2">
              <div>
                Premium subscription also gets you significant discounts on
                select items/content.
              </div>
            </div>
          </div>
        </div>
        <div className="lc-md:gap-8 lc-lg:flex-row lc-lg:gap-10 flex w-full flex-col gap-4">
          <div className="flex flex-1 flex-col items-start gap-3">
            <div className="flex items-center gap-2">
              <img
                src="/_next/static/images/feat-icon-cloud-b2cbb9024ffc4a5f6e4859912bd8b3dc.svg"
                className="h-5 w-5"
                alt=""
              />
              <div className="text-base font-medium text-label-1 dark:text-dark-label-1">
                Cloud Storage
              </div>
            </div>
            <div className="pl-7 text-base text-label-2 dark:text-dark-label-2">
              Code and layouts are instantly saved to the cloud, ensuring you
              can learn across devices at ease.
            </div>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="lc-md:px-6 lc-lg:gap-16 flex w-full max-w-screen-xl flex-col items-center gap-6 px-4">
      <div className="lc-md:gap-6 lc-lg:flex-row lc-lg:items-center flex w-full flex-col gap-4">
        <div className="bg-gray-200 bg-opacity-100 flex w-full flex-1 flex-col items-start justify-center gap-4 rounded-xl px-10 py-10">
          <div className="flex items-end gap-3">
            <div className="text-label-1 text-2xl font-medium">Monthly</div>
            <div className="text-label-2 mb-[1px] text-base">
              billed monthly
            </div>
          </div>
          <div className="text-md text-label-3">
            <span className="text-label-2 font-semibold">
              Down from $39/month.
            </span>
            <br />
            Our monthly plan grants access to{' '}
            <span className="text-label-2 font-semibold">
              all premium features
            </span>
            , the best plan for short-term subscribers.
          </div>
          <div className="lc-xl:flex-row lc-xl:items-end lc-xl:justify-between flex w-full flex-col items-start justify-start gap-2 py-4">
            <div className="flex items-end gap-2">
              <div className="text-label-1 text-4xl font-semibold">$35</div>
              <div className="text-label-2 mb-0.5 text-base">/mo</div>
            </div>
            <div className="text-md text-label-3">Prices are marked in USD</div>
          </div>
          <button className="rounded items-center whitespace-nowrap focus:outline-none flex w-full justify-center bg-black px-4 py-2 text-base font-medium text-white transition-colors hover:bg-dark-layer-1">
            Subscribe
          </button>
        </div>
        <div
          className="lc-lg:order-1 -order-1 flex flex-1 flex-col items-start justify-center gap-4 rounded-xl border px-10 py-10"
          style={{
            background:
              'linear-gradient(294.57deg, rgba(255, 148, 88, 0.4) 0%, rgba(252, 229, 172, 0.4) 100%)',
            boxShadow: 'rgba(255, 161, 22, 0.24) 0px 12px 56px',
            borderColor: 'rgba(255, 161, 22, 0.3)',
          }}
        >
          <div className="lc-xl:flex-row lc-xl:justify-between flex w-full flex-col items-start gap-1">
            <div className="flex items-end gap-3">
              <div className="text-label-1 text-2xl font-medium">Yearly</div>
              <div className="text-label-2 mb-[1px] flex text-base">
                billed yearly{' '}
                <span className="ml-1 flex">
                  (<span className="">$159</span>)
                </span>
              </div>
            </div>
            <div
              className="text-md text-label-1 lc-xl:order-1 -order-1 rounded px-3 py-1 font-medium backdrop-blur-[2px]"
              style={{ background: 'rgba(255, 230, 194, 0.8)' }}
            >
              🎉 Most popular
            </div>
          </div>
          <div className="text-md text-label-3">
            Our <span className="text-label-2 font-semibold">most popular</span>{' '}
            plan previously sold for $299 and is now only{' '}
            <span className="text-label-2 font-semibold">$13.25/month</span>.
            <br />
            This plan{' '}
            <span className="text-label-2 font-semibold">
              saves you over 60%
            </span>{' '}
            in comparison to the monthly plan.
          </div>
          <div className="lc-lg:pt-16 lc-xl:flex-row lc-xl:items-end lc-xl:justify-between flex w-full flex-col items-start justify-start gap-2 py-4">
            <div className="flex items-end gap-2">
              <div className="text-label-1 text-4xl font-semibold">$13.25</div>
              <div className="text-label-2 mb-0.5 text-base">/mo</div>
            </div>
            <div className="text-md text-label-3">Prices are marked in USD</div>
          </div>
          <button className="rounded items-center whitespace-nowrap focus:outline-none flex w-full justify-center bg-black px-4 py-2 text-base font-medium text-white transition-colors hover:bg-dark-layer-1">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
