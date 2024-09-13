import imageCFO from '../../img/CFO.jpg'
import imageDigging from '../../img/digging.jpg'
import imagePareto from '../../img/pareto.jpg'

const posts = [
  {
    id: 1,
    title: 'Missing Piece – Lost Opportunity to Drive Valuation',
    href: '/Whitepapers/CFO',
    description:
      'Learn how you can drive growth in the valuation of your company through the latest in customer care technology.',
    imageUrl:
      imageCFO,
    date: 'Mar 3, 2021',
    datetime: '2021-03-03',
    category: { title: 'Finance', href: '#' },
    author: {
      name: 'Alex Johnston',
      role: 'Founder / CEO',
      href: '#',
      imageUrl:
        'https://media.licdn.com/dms/image/v2/C5603AQHbuSqS2VxgMg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517793948556?e=1731542400&v=beta&t=kZC9EMkUh6ludPclTKGWuG67MEyEKg_4H01ocfceQig',
    },
  },
  {
    id: 2,
    title: 'Pareto Priority Index',
    href: '/whitepapers/Pareto',
    description:
      'Learn how you can drive growth in the valuation of your company through the latest in customer care technology.',
    imageUrl:
      imagePareto,
    date: 'Jul 23, 2022',
    datetime: '2022-07-23',
    category: { title: 'Operations', href: '#' },
    author: {
      name: 'Alex Johnston',
      role: 'Founder / CEO',
      href: '#',
      imageUrl:
        'https://media.licdn.com/dms/image/v2/C5603AQHbuSqS2VxgMg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517793948556?e=1731542400&v=beta&t=kZC9EMkUh6ludPclTKGWuG67MEyEKg_4H01ocfceQig',
    },
  },
  {
    id: 3,
    title: 'Digging the Moat',
    href: '/whitepapers/Digging_the_Moat',
    description:
      'Its much harder to find a new customer than to keep an old one. Learn how cloud based customer care can help you protect your hard won customer base.',
    imageUrl:
      imageDigging,
    date: 'Jan 06, 2023',
    datetime: '2023-01-06',
    category: { title: 'Sales', href: '#' },
    author: {
      name: 'Alex Johnston',
      role: 'Founder / CEO',
      href: '#',
      imageUrl:
        'https://media.licdn.com/dms/image/v2/C5603AQHbuSqS2VxgMg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517793948556?e=1731542400&v=beta&t=kZC9EMkUh6ludPclTKGWuG67MEyEKg_4H01ocfceQig',
    },
  },
  // More posts...
]

function Whitepapers() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Whitepapers</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn more about the added benefits, customer success, and industry trends
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <img
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}


export default Whitepapers;