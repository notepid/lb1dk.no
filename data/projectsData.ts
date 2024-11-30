interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  // {
  //   title: 'A Search Engine',
  //   description: `What if you could look up any information in the world? Webpages, images, videos
  //   and more. Google has many features to help you find exactly what you're looking
  //   for.`,
  //   imgSrc: '/static/images/google.png',
  //   href: 'https://www.google.com',
  // },
  // {
  //   title: 'HF HAM band characteristics',
  //   description: `One of the things as a new HAM struggle with is to remember what the different HF bands are good for and when to use them. So here is my compliation of this information and I hope it is useful to you as well.`,
  //   imgSrc: '/static/images/time-machine.jpg',
  //   href: '/blog/hf-bands',
  // },
]

export default projectsData
