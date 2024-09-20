// import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid';
// import imagePareto1 from '../../../img/pareto1.png'

import imagePareto2 from '../../../img/pareto2.png'

function WhitepapersPareto() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">Introducing</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Pareto Priority Index</h1>
        <p className="mt-6 text-xl leading-8">
          The data-driven approach to project prioritization.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            I have spent a lot of my time advising small businesses on process improvement. Most of these companies make consumer goods with a small team. They typically have a deep knowledge and passion for their product but very limited engineering experience. When I suggest the implementation of Lean or Six Sigma I am often met with (at worst) outright resistance or (at best) perplexed stares. There is an unfounded belief in many smaller organizations that Six Sigma is really only for giant companies with engineering staffs and continuous improvement teams.
          </p>
          <p className="mt-6">
            One of the smaller companies I worked with gained valuable insight using Six Sigma tools. The customer is a smaller artisan candy producer in the Pacific Northwest. They were pretty much a 100% manual operation. With labor costs rising, they knew that they would need to invest in some process and packaging automation equipment to increase their output.
          </p>

          <figure className="mt-10 border-l border-indigo-600 pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>
                "So how should we decide where to focus their automation dollars? Fortunately, there is something in the Six Sigma toolbox for just this sort of situation. It is called the Pareto Priority Index."
              </p>
            </blockquote>
          </figure>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Pareto Priority Index (PPI)</h2>
          <p className="mt-6">
            The Pareto Priority Index (PPI) takes in a project’s savings, its likelihood of being successful, cost of the project, as well as its implementation time. All of these inputs are factored together like in the below formula to give you a single objective metric for comparing projects.
          </p>
          <p className="mt-6">
            <figure className="mt-16">
              <blockquote className="font-semibold text-gray-900">
                <img
                  src={imagePareto2}
                  alt="Customer service strategy"
                  className="aspect-video rounded-xl bg-gray-50 object-cover"
                />
                <p>
                  http://sixsigmastudyguide.com/pareto-wisdom-of-solomon/
                </p>
              </blockquote>
            </figure>
            <br />
            <strong>PPI = (Savings * Probability of Success) / (Cost * Time for Completion)</strong>
          </p>

          <table className="table-auto mt-6 w-full text-left text-gray-700">
            <thead>
              <tr>
                <th className="border-b border-gray-300 px-4 py-2">Project</th>
                <th className="border-b border-gray-300 px-4 py-2">Cost</th>
                <th className="border-b border-gray-300 px-4 py-2">Completion Time</th>
                <th className="border-b border-gray-300 px-4 py-2">Probability of Success</th>
                <th className="border-b border-gray-300 px-4 py-2">Savings</th>
                <th className="border-b border-gray-300 px-4 py-2">PPI Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2">Flow Wrapper</td>
                <td className="border-b border-gray-200 px-4 py-2">$75,000</td>
                <td className="border-b border-gray-200 px-4 py-2">18 weeks</td>
                <td className="border-b border-gray-200 px-4 py-2">90%</td>
                <td className="border-b border-gray-200 px-4 py-2">Est. $600,000</td>
                <td className="border-b border-gray-200 px-4 py-2">0.400</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2">Cooling Tunnel</td>
                <td className="border-b border-gray-200 px-4 py-2">$35,000</td>
                <td className="border-b border-gray-200 px-4 py-2">16 weeks</td>
                <td className="border-b border-gray-200 px-4 py-2">90%</td>
                <td className="border-b border-gray-200 px-4 py-2">Est. $90,000</td>
                <td className="border-b border-gray-200 px-4 py-2">0.144</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2">Candy Drop Roller</td>
                <td className="border-b border-gray-200 px-4 py-2">$11,000</td>
                <td className="border-b border-gray-200 px-4 py-2">22 weeks</td>
                <td className="border-b border-gray-200 px-4 py-2">95%</td>
                <td className="border-b border-gray-200 px-4 py-2">Est. $30,000</td>
                <td className="border-b border-gray-200 px-4 py-2">0.118</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2">Chocolate Depositor</td>
                <td className="border-b border-gray-200 px-4 py-2">$105,000</td>
                <td className="border-b border-gray-200 px-4 py-2">18 weeks</td>
                <td className="border-b border-gray-200 px-4 py-2">90%</td>
                <td className="border-b border-gray-200 px-4 py-2">Est. $700,000</td>
                <td className="border-b border-gray-200 px-4 py-2">0.333</td>
              </tr>
            </tbody>
          </table>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Savings</h2>
          <p className="mt-6">
            Savings were estimated based on the labor and material savings the project would create during a five-year time window. The service life of the equipment is expected to be longer but if they achieved their sales growth targets, it would most likely be obsolete by then.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Probability of Success</h2>
          <p className="mt-6">
            This was estimated based on the complexity of the equipment involved in the project. Highly customized equipment means a much higher risk of late delivery, cost overruns, or other unforeseen issues.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Cost and Time for Completion</h2>
          <p className="mt-6">
            All costs associated with the equipment engineering, testing, installation, and support work. Time includes the lead time for equipment delivery, training, and startup time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhitepapersPareto;
