import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import potraitImage from 'src/images/potraitImage.png'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Betty Alagwu</title>
        <meta
          name="description"
          content="I’m Betty Alagwu.  I live in Nigeria, "
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={potraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Betty Alagwu.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
               A software engineer living in Lagos Nigeria. I build solutions to business problems by creating delightful frontend experiences 
               and performant applications. 
              <br/>
              <br/>
                My personal values are growth, honesty, transparency, kindness and empathy.
              </p>
              <p>
              Over the years, I have gained experience in a variety of areas, including web development & product management. 
              <br/>
              <br/>
              I am particularly interested in creating delightful frontend experiences
               and high-performance applications that meet the needs of end-users.
              </p>
              <p>
              In terms of technical skills, I am proficient in a range of programming languages, JavaScript and Typescript, including HTML(markup language) and Tailwind CSS (CSS framework). 
              <br/>
              <br/>
              I have experience working with popular frameworks such as React and Nextjs, 
              and I am comfortable working with a variety of tools such as Git, and Docker.
              </p>
              <p>
              I approach every project with an open mind and a willingness to learn from others, 
              and I strive to build strong, positive relationships with my colleagues and clients.
              </p>
              <p>
              In my free time, I enjoy exploring new places, trying new foods, 
              and staying active through exercise and playing video games.
              <br/>
              <br/>
               <p>
               Thank you for taking the time to learn more about me. I am excited to connect with you and explore how we can work together to create meaningful solutions to business problems.
               </p>


              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/bettyalagwu"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/betty_of_laylay/"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/betty-alagwu"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/betty-alagwu-42a001166/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:bettyalagwu@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                bettyalagwu@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
