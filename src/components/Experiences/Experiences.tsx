import { useState } from 'react';
import { Accordion, AccordionItem, Card, User } from '@heroui/react';

import type { Selection } from '@heroui/react';
import {
  HTML5,
  CSS,
  JavaScript,
  TypeScript,
  React as ReactIcon,
  GraphQL,
  PandaCSS,
  PostHog,
  Nextjs,
  StyledComponents,
} from '../icons';

export const Experiences = () => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(['1']));

  return (
    <Card
      isFooterBlurred
      className="border-none max-w-5xl m-auto sm:px-32 px-8 py-16 mb:my-10 lg:mx-auto mx-8 my-5"
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
            Actualmente formo parte del equipo de Facephi como
            <strong> Senior Frontend Developer</strong>, donde me encargo del
            desarrollo y mantenimiento de aplicaciones web escalables utilizando
            tecnologías de vanguardia como
            <strong> React</strong>, <strong>Next.js</strong>,
            <strong> TypeScript</strong> y <strong>Panda CSS</strong>.
          </p>
          <p>
            Mi trabajo consiste en colaborar en la migración de sistemas
            heredados hacia arquitecturas modernas, implementando soluciones que
            optimizan el rendimiento mediante técnicas como
            <em> Server-Side Rendering (SSR)</em>,
            <em> Incremental Static Regeneration (ISR)</em>, caching y lazy
            loading. Esto ha permitido mejorar significativamente la velocidad y
            la experiencia del usuario en nuestras plataformas.
          </p>
          <p>
            Además, participo en la integración de APIs a través de
            <strong> REST</strong> y <strong>GraphQL</strong>, y en el
            desarrollo de librerías de componentes reutilizables, adoptando un
            enfoque modular en entornos monorepo.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              gap: 12,
              padding: 12,
            }}
          >
            <HTML5 />
            <CSS />
            <JavaScript />
            <TypeScript />
            <ReactIcon />
            <GraphQL />
            <Nextjs />
            <PandaCSS />
            <PostHog />
          </div>
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
            Durante mi tiempo en el equipo web de Zinia, he trabajado con una
            variedad de tecnologías y herramientas avanzadas, lo que me ha
            permitido entregar proyectos de forma eficiente y efectiva.
          </p>
          <p>
            He trabajado con una amplia gama de tecnologías y herramientas
            avanzadas que me han permitido entregar proyectos de forma eficaz.
            Entre ellas se destacan <strong>Redux</strong>,
            JavaScript/TypeScript, <strong>Jest</strong> para pruebas unitarias,
            HTML, CSS y JavaScript ES6+, que aseguran un desarrollo robusto y
            escalable.
          </p>
          <p>
            Adicionalmente, he integrado herramientas complementarias como
            <strong> Styled Components</strong> para la gestión de estilos y
            <strong> Storybook</strong> para el desarrollo y documentación
            eficiente de componentes. Siguiendo la metodología Agile Scrum,
            colaboro utilizando herramientas como Jira, Confluence, Bitbucket y
            Bamboo, lo que permite una gestión de proyectos organizada y
            colaborativa.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              gap: 12,
              padding: 12,
            }}
          >
            <HTML5 />
            <CSS />
            <JavaScript />
            <TypeScript />
            <ReactIcon />
            <StyledComponents />
          </div>
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
            Entre 2012 y 2019, fundé y dirigí <strong>Royalmedia</strong>, mi
            propia agencia digital en Venezuela, especializada en el desarrollo
            de soluciones web innovadoras para clientes de alto perfil. Durante
            este período, llevamos a cabo proyectos desde cero para reconocidas
            marcas como <strong>McDonald&apos;s</strong> y
            <strong> Editorial Santillana</strong>, adaptándonos a las
            necesidades del mercado local e internacional.
          </p>
          <p>
            En Royalmedia desarrollé una amplia variedad de sitios web,
            destacando proyectos basados en <strong>WordPress</strong> y
            aplicaciones web personalizadas. Mi trabajo se centró en la
            implementación de tecnologías clave de la época, como
            <strong> PHP</strong>, <strong>JavaScript</strong>,
            <strong> HTML</strong> y <strong>CSS</strong>, que me permitieron
            ofrecer soluciones robustas, dinámicas y escalables.
          </p>
          <p>
            Además de la parte técnica, mi rol implicó la gestión y coordinación
            de equipos de proyectos, garantizando la entrega oportuna y de alta
            calidad de cada iniciativa. Esta experiencia me permitió consolidar
            habilidades en liderazgo, comunicación y manejo de proyectos en un
            entorno altamente competitivo.
          </p>
          <p>
            Mi paso por Royalmedia no solo fortaleció mis competencias técnicas,
            sino que también me dotó de una visión integral del proceso de
            desarrollo web, desde la concepción de la idea hasta la entrega
            final del producto. Estoy listo para aportar esta experiencia y
            pasión por la innovación en nuevos desafíos.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              gap: 12,
              padding: 12,
            }}
          >
            <HTML5 />
            <CSS />
            <JavaScript />
          </div>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};
