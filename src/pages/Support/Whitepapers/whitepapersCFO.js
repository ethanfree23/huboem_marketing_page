import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid';

import imageDowntimeChart from '../../../img/downtime_chart.png'

function WhitepapersCFO() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">Whitepaper</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Driving a Business' Valuation with Proactive After-Sales Demand Management (PASDM)
        </h1>
        <p className="mt-6 text-xl leading-8">
          Driving a business’ valuation is an important objective for any CFO/executive leadership 
          team. Strong, well-supported valuations can give companies looking to sell a much stronger 
          hand at the negotiation table. Even if you are not looking to sell, an improved valuation can help 
          an organization get access to cheaper capital as well as provide a useful measuring stick for 
          shareholders. In these times of increased competition, sometimes the simple solutions are 
          overlooked. To that end the Factory Automation Industry has a unique tool in its arsenal. Sales 
          of wear and replacement parts, service, and support are areas with margins well above or even 
          at multiples of the main product line, but they are often overlooked as drivers of growth.
        </p>
        
        <div className="mt-10 max-w-2xl">
          <p>
            While all valuation improvement strategies are imperfect, in general they revolve around 
            doing more with less, automation equipment OEMs have a unique tool in their toolbelt in the 
            form of proactive after-sales demand management (PASDM). PASDM involves OEMs forming 
            closer relationships with their customers to create a more consistent, forecastable schedule for 
            wear parts, services, and consumables. In a world of rising labor costs, supply chain 
            bottlenecks, and uncertain inflation expectations, strengthening this OEM/Customer relationship 
            can pay tremendous dividends in terms of cost savings and operational efficiency in addition to 
            the boost it can provide for OEM business valuation.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">Boosts Higher Margin Sales</h2>
          <p className="mt-6">
            Automation OEMs typically derive most of their revenue from three sources, the first and 
            most obvious being new equipment sales, then services including training, and lastly through 
            the sale of replacement parts, especially wear parts like belts, springs, and bearings. The exact 
            balance of these three areas will vary from one organization to the next, depending heavily on 
            the type and complexity of machines being sold with parts and service making up anywhere 
            from a small percentage to over half of a company’s top-line revenue number. Despite this, most 
            organizations focus sales resources on new equipment sales. Obviously, new 
            equipment sales are linked to spare parts volumes, however, 
            all too often little or no attention is given to parts sales.
          </p>

          <figure className="mt-10 border-l border-indigo-600 pl-9">
            <img 
              src={imageDowntimeChart} 
              alt="Graph showing causes of downtime" 
              className="aspect-video rounded-xl bg-gray-50 object-cover"
            />
            <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
              <InformationCircleIcon aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-gray-300" />
              Leading causes of downtime in the automation industry
            </figcaption>
          </figure>

          <p className="mt-6">
            Given this imbalance, one would be forgiven for assuming that the margins on 
            new equipment must be much higher and therefore be a much bigger driver in an 
            organization’s success. On the contrary, new equipment typically has margins of about 15-20%, 
            with a few reaching as high as 40%. Compare that to the replacement parts segment of the 
            business where 50% is often the bottom end of the range with the upper end sometimes more 
            than 80% depending on the specific part. Even with the more conservative numbers, an added 
            dollar from the parts business contributes more than double the profit of an additional dollar in 
            new equipment sales.
          </p>
        </div>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Recurring Revenue Sales Get Better Valuations</h2>
        <p className="mt-6">
          Large capital equipment sales are long-term investments. Many of these machines have 
          service lives of 10 to 20 years or more, often being resold and refurbished on secondary 
          markets long after their original mission is done. While the machine itself is a one-time sale, the 
          sale of parts and service will be required for the machine’s entire service life and constitutes a 
          tremendous opportunity for a recurring revenue stream. Many venture capital firms now value 
          companies’ one-time revenues with a 2-3x multiplier, whereas recurring revenue can be valued 
          with a 3-8x multiplier. This means that even if there is no net impact to a company’s overall 
          profit, shifting dollars from the new machine bucket to the parts and service bucket can 
          dramatically boost a company’s valuation.
        </p>

        <figure className="mt-10 border-l border-indigo-600 pl-9">
          <blockquote className="font-semibold text-gray-900">
            <p>
              “A recent PMMI survey of major consumer packaged goods producers listed Wear & Tear as the number one cause of machine downtime. This combined with unexpected component failure constituted nearly 40% of overall equipment downtime. Two factors that could be dramatically reduced by the timely replacement of wear parts.”
            </p>
          </blockquote>
        </figure>

        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Reduce Working Capital Requirement</h2>
          <p className="mt-6">
            Implementing PASDM tools and strategies can dramatically reduce the amount of inventory 
            needed to achieve an organization's target service level. In addition to lowering operating costs, it 
            has a direct impact on a company’s working capital requirements. This can translate into a year 1 
            bump in Free Cash Flow, maximizing the impact on your company’s valuation. Companies can also 
            benefit from lower market risk premiums as large inventory holdings increase a company’s risk 
            profile. Smaller companies with higher costs of capital will stand to see the most benefit.
          </p>
        </div>

        <figure className="mt-16">
          <img 
            src={imageDowntimeChart}
            alt="Inventory and risk management in PASDM" 
            className="aspect-video rounded-xl bg-gray-50 object-cover"
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-gray-300" />
            PASDM tools and strategies in reducing inventory risk
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default WhitepapersCFO;
