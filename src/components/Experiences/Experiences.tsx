import { useState } from 'react';
import { Accordion, AccordionItem, Card, User } from '@heroui/react';

import type { Selection } from '@heroui/react';

export const Experiences = () => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(['1']));

  return (
    <Card
      isFooterBlurred
      className="border-none max-w-5xl m-auto px-32 py-16 mt-10 mb-10"
      radius="lg"
      id="experiences"
    >
      <h1 className="text-xl font-bold text-center text-gray-900 dark:text-gray-100">
        Experiencia
      </h1>
      <Accordion
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <AccordionItem
          key="1"
          title={
            <User
              avatarProps={{
                src: '/assets/facephi_logo.jpg',
              }}
              description="Senior Frontend Engineer"
              name="Facephi"
            />
          }
        >
          <p>
            Desarrollo de Aplicaciones Web: Creación y mantenimiento de
            plataformas escalables con React, Next.js, TypeScript y Panda CSS.
            Migración de sistemas heredados a arquitecturas modernas.
            Optimización de Rendimiento: Implementación de SSR, ISR, caching y
            lazy loading para mejorar velocidad y experiencia de usuario.
            Resolución de problemas como FOUC y optimización del renderizado.
            Integración con APIs y Componentización: Desarrollo de librerías de
            componentes reutilizables y arquitectura modular en monorepos.
            Conexión eficiente con APIs REST y GraphQL. Compatibilidad y
            Accesibilidad: Diseño adaptable a múltiples dispositivos y
            navegadores. Uso de herramientas como Storybook para mejorar la
            documentación y reutilización de componentes. Liderazgo Técnico y
            Colaboración: Trabajo estrecho con equipos de diseño y backend,
            asegurando implementación fiel a UX/UI y optimización del flujo de
            trabajo en entornos ágiles.
          </p>
        </AccordionItem>
        <AccordionItem
          key="2"
          title={
            <User
              avatarProps={{
                src: '/assets/openbank_logo.jpg',
              }}
              description="Frontend Engineer"
              name="Openbank by Santander"
            />
          }
        >
          <p>
            I&apos;m a passionate front-end developer with experience in
            developing web applications using React. My focus is on creating
            highly responsive and high-quality user interfaces. During my time
            on the Zinia Web Team, I&apos;ve worked with a variety of advanced
            technologies and tools to efficiently and effectively deliver
            projects. 𝗞𝗲𝘆 𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝗶𝗲𝘀 𝗮𝗻𝗱 𝗠𝗲𝘁𝗵𝗼𝗱𝗼𝗹𝗼𝗴𝗶𝗲𝘀 -𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝗶𝗲𝘀: React,
            Redux, JavaScript/TypeScript, Jest for unit testing, Flow, HTML,
            CSS, and JavaScript ES6+. -𝗔𝗱𝗱𝗶𝘁𝗶𝗼𝗻𝗮𝗹 𝗟𝗶𝗯𝗿𝗮𝗿𝗶𝗲𝘀 𝗮𝗻𝗱 𝗧𝗼𝗼𝗹𝘀: Styled
            Components for style management and Storybook for efficient
            component development and documentation. -𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁 𝗠𝗲𝘁𝗵𝗼𝗱𝗼𝗹𝗼𝗴𝘆: I
            follow the Agile Scrum methodology for effective project management,
            utilizing tools such as Jira, Confluence, Bitbucket, and Bamboo, all
            part of the Atlassian Project Management Software ecosystem.
            I&apos;m a passionate front-end developer with experience in
            developing web applications using React. My focus is on creating
            highly responsive and high-quality user interfaces. During my time
            on the Zinia Web Team, I&apos;ve worked with a variety of advanced
            technologies and tools to efficiently and effectively deliver
            projects. 𝗞𝗲𝘆 𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝗶𝗲𝘀 𝗮𝗻𝗱 𝗠𝗲𝘁𝗵𝗼𝗱𝗼𝗹𝗼𝗴𝗶𝗲𝘀 -𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝗶𝗲𝘀: React,
            Redux, JavaScript/TypeScript, Jest for unit testing, Flow, HTML,
            CSS, and JavaScript ES6+. -𝗔𝗱𝗱𝗶𝘁𝗶𝗼𝗻𝗮𝗹 𝗟𝗶𝗯𝗿𝗮𝗿𝗶𝗲𝘀 𝗮𝗻𝗱 𝗧𝗼𝗼𝗹𝘀: Styled
            Components for style management and Storybook for efficient
            component development and documentation. -𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁 𝗠𝗲𝘁𝗵𝗼𝗱𝗼𝗹𝗼𝗴𝘆: I
            follow the Agile Scrum methodology for effective project management,
            utilizing tools such as Jira, Confluence, Bitbucket, and Bamboo, all
            part of the Atlassian Project Management Software ecosystem.
            Aptitudes: Leadership · React · TypeScript · Jest · JavaScript · CSS
            · Communication
          </p>
        </AccordionItem>
        <AccordionItem
          key="3"
          title={
            <User
              avatarProps={{
                src: '/assets/royalmedia_logo.jpg',
              }}
              description="Software Engineer"
              name="Royal Media"
            />
          }
        >
          <p>
            I developed various websites, including projects from scratch for
            clients like 𝗠𝗰𝗗𝗼𝗻𝗮𝗹𝗱&apos;𝘀 𝗮𝗻𝗱 𝗘𝗱𝗶𝘁𝗼𝗿𝗶𝗮𝗹 𝗦𝗮𝗻𝘁𝗶𝗹𝗹𝗮𝗻𝗮. I also worked
            on 𝗪𝗼𝗿𝗱𝗣𝗿𝗲𝘀𝘀-𝗯𝗮𝘀𝗲𝗱 𝗽𝗿𝗼𝗷𝗲𝗰𝘁𝘀. During my time at Royalmedia, I gained
            experience in web development using 𝗣𝗛𝗣, 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁, 𝗛𝗧𝗠𝗟, 𝗮𝗻𝗱 𝗖𝗦𝗦.
            I developed various websites, including projects from scratch for
            clients like 𝗠𝗰𝗗𝗼𝗻𝗮𝗹𝗱&apos;𝘀 𝗮𝗻𝗱 𝗘𝗱𝗶𝘁𝗼𝗿𝗶𝗮𝗹 𝗦𝗮𝗻𝘁𝗶𝗹𝗹𝗮𝗻𝗮. I also worked
            on 𝗪𝗼𝗿𝗱𝗣𝗿𝗲𝘀𝘀-𝗯𝗮𝘀𝗲𝗱 𝗽𝗿𝗼𝗷𝗲𝗰𝘁𝘀. During my time at Royalmedia, I gained
            experience in web development using 𝗣𝗛𝗣, 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁, 𝗛𝗧𝗠𝗟, 𝗮𝗻𝗱 𝗖𝗦𝗦.
            Aptitudes: Gestión de equipos de proyectos · HTML · WordPress · PHP
            · Hojas de estilos en cascada (CSS) · JavaScript · Communication
          </p>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};
