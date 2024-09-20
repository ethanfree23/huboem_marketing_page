import { InformationCircleIcon } from '@heroicons/react/20/solid';

import imageDigging1 from '../../../img/digging1.png'
import imageDigging2 from '../../../img/digging2.png'
import imageDigging3 from '../../../img/digging3.png'

function WhitepapersDigging() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">Introduction</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Digging The Moat with HubOEM
        </h1>
        <p className="mt-6 text-xl leading-8">
          The term "economic moat," popularized by Warren Buffett, refers to a business's
          ability to maintain competitive advantages over its competitors in order to protect its
          long-term profits and market share. Just like a medieval castle, the moat serves to
          protect those inside the fortress and their riches from outsiders. I know in recent
          years the term has sometimes attracted a bad reputation as companies have
          implemented strategies like “change fees” or complex switching costs to try and lock
          in customers as a form of “moat”. While these can often have the planned effect of
          making it harder for current customers to leave, they also damage a company’s ability to attract
          new customers. The original intent of the moat metaphor was not as a barrier to keep customers
          inside, but a set of value creating properties so strong, that your competition cannot touch you.
        </p>

        {/* <figure className="mt-10 border-l border-indigo-600 pl-9"> */}
        <figure className="mt-16">
          <img
            src={imageDigging1}
            alt="Historical data and inventory management"
            className="aspect-video rounded-xl bg-gray-50 object-cover"
          />
          {/* <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-gray-300" />
            Effective inventory management through data-driven insights
          </figcaption> */}
        </figure>

        <div className="mt-10 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Historical Data</h2>
          <p className="mt-6">
            Every business school student has read the case study on the mass mailing of targeted coupon
            programs. When they first came on the scene customers would sometimes comment that it
            was almost spooky how a conversation about being out of cereal in the morning would result
            in a coupon for Captain Crunch in the afternoon’s mail. The real reason this is possible however
            is not magic, but statistics.
          </p>

          <p className="mt-6">
            For OEMs the most obvious and pressing example relates to managing inventory. Holding an
            excess of inventory ties up working capital, risks loss or damage, and in many jurisdictions, is
            actually subject to additional taxes. Alternatively, an understock of critical inventory can lead to
            stockouts, shipping delays and overall negative customer experiences.
          </p>

          {/* <figure className="mt-10 border-l border-indigo-600 pl-9"> */}
          <figure className="mt-10">
            <img
              src={imageDigging2}
              alt="Historical data and inventory management"
              className="aspect-video rounded-xl bg-gray-50 object-cover"
            />
            <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
              <InformationCircleIcon aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-gray-300" />
              Effective inventory management through data-driven insights
            </figcaption>
          </figure>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">EcoSystem</h2>
          <p className="mt-6">
            Look at Apple, how their products both hardware and software seamlessly integrate together. If
            you have an iPhone, an iPad, and a Macbook, and are in the market for a smart watch, what are
            the odds you buy a Samsung? This integrated ecosystem of products has allowed Apple to
            grow from a company on life support to the first company to reach a Trillion-dollar valuation.
          </p>
          <p className="mt-6">
            What do you do if you only have one product or you are working in a B2B context? One obvious
            choice is making sure your product integrates easily with your customers’ existing ecosystem(s).
            To do otherwise will often eliminate you completely from consideration in future projects.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Customer Service</h2>
          <p className="mt-6">
            This is probably the oldest and most tried and true. In numerous customer satisfaction studies it
            has been shown that customers who received fast and effective service when having a problem
            actually rated their satisfaction higher than customers who never experienced a problem in the first place.
          </p>

          <figure className="mt-10 border-l border-indigo-600 pl-9">
          {/* <figure className="mt-16"> */}
            <blockquote className="font-semibold text-gray-900">
              <p>
                “Requiring a phone call or site visit for a simple problem that could easily be seen as more
                annoyance than asset. Alternatively providing the right help with the truly complex issues can win
                you a customer for life.”
              </p>
            </blockquote>
          </figure>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Never Stop Digging</h2>
          <p className="mt-6">
            A moat is only effective if it surrounds the entire castle. Even a great library of historical customer data
            cannot save you if your customer service is weak. Likewise, great service cannot retain customers if
            you fail to keep up with the prevailing ecosystems of your industry.
          </p>

          <figure className="mt-16">
            <img
              src={imageDigging3}
              alt="Customer service strategy"
              className="aspect-video rounded-xl bg-gray-50 object-cover"
            />
            <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
              <InformationCircleIcon aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-gray-300" />
              HubOEM’s continuous approach to fortifying customer relationships
            </figcaption>
          </figure>

          <div className="mt-16 max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">The HubOEM Approach</h2>
            <p className="mt-6">
              HubOEM works hard to be a partner in all three of these critical areas — historical data, ecosystem
              integration, and superior customer service — to help you fortify your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhitepapersDigging;
