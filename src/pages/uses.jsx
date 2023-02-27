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
            <Tool title="13” MacBook Pro, 64GB RAM (2017)">
              I was using an Intel-based 16” MacBook Pro prior to this and the
              difference is night and day. I’ve never heard the fans turn on a
              single time, even under the incredibly heavy loads I put it
              through with the various packages i install.
            </Tool>
            <Tool title="samsung 32inches Display screen">
              The only display that fits the workload if you want something
              bigger than 32”. When you’re always building, every pixel you can
              get counts.
            </Tool>
            <Tool title="Apple Magic Keyboard">
              I love the fact that it is wireless and has a numeric keypad, long
              lasting battery life, and a great typing experience.
            </Tool>
            <Tool title="Apple Magic Mouse">
              Something about all the gestures makes me feel like a wizard with
              special powers. I really like feeling like a wizard with special
              powers.
            </Tool>
            <Tool title="GTRacing Chair">
              If I’m going to slouch in the worst ergonomic position imaginable
              all day, I might as well do it in an expensive chair.
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
          <ToolsSection title="Design">
            <Tool title="Figma">
              I started using Figma as just a design tool but now it’s become
              my virtual whiteboard. Never would have
              expected the collaboration features to be the real hook.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
