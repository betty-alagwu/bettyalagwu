import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Betty Alagwu</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="14” MacBook Pro, 16GB RAM (2021)">
              I was using an Intel-based 13” MacBook Pro prior to this and the
              difference is night and day. Running a docker project on my old laptop would have the fan
              screaming. Now, I run multiple projects and everything is a breeze.
            </Tool>
            <Tool title="Xiaomi Mi Curved 32” Display screen">
              It just gives me so much more space to work with. It's also good for my working posture, since I can keep my head up and 
              not look down on my laptop screen.
            </Tool>
            <Tool title="Apple Magic Keyboard">
              I love the fact that it is wireless and has a numeric keypad, long
              lasting battery life, and a great typing experience.
            </Tool>
            <Tool title="Apple Magic Mouse">
             It's wireless, it's battery is long lasting, and it's extremely easy to use. Makes me work faster.
            </Tool>
            <Tool title="GTRacing Chair">
              My back used to hurt. It doesn't anymore.
            </Tool>
            <Tool title="None Branded Standing Desk">
              One of the best items I’ve ever bought. I’ve been using it for
              quite sometime now and it feels brand new each day. Makes me work
              efficiently and effectively. I can decide to work standing up or
              sitting down. The Best.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VS Code">
              Vs Code is my go to editor. I use it for everything from writing a
              blog post to building a full stack application.
            </Tool>
            <Tool title="Github">
              GitHub is a powerful collaboration tool and development platform
              for code review and code management.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
