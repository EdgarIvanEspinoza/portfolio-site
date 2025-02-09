import { Avatar, Button, Card } from '@heroui/react';

export const Hero = () => {
  return (
    <Card
      isFooterBlurred
      className="border-none max-w-5xl m-auto px-32 py-16 mt-10 mb-10"
      radius="lg"
    >
      <div className="flex items-center justify-center p-10 gap-5">
        <Avatar className="w-20 h-20 text-large" src="/assets/profile.jpg" />
        <div className="flex flex-col items-start justify-center p-10 gap-5">
          <h1 className="text-xl font-bold text-center text-gray-900 dark:text-gray-100">
            ¡Hola! Soy Edgar Iván Espinoza
          </h1>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Button
              color="primary"
              onPress={() => {
                window.open(
                  'https://www.linkedin.com/in/edgarivanespinoza/',
                  '_blank'
                );
              }}
            >
              Encuentrame en <b>LinkedIn</b>
            </Button>
            <Button
              color="default"
              variant="bordered"
              onPress={() => {
                window.open('https://github.com/EdgarIvanEspinoza', '_blank');
              }}
            >
              Estoy en <b>Github</b>
            </Button>
          </div>
        </div>
      </div>
      <h2>
        <b>Frontend Engineer</b> especializado en el desarrollo de productos
        digitales. Desde Madrid, creando experiencias web escalables con React,
        Next.js, TypeScript y microfrontends.
        <br />
        Apasionado por la performance, el diseño de sistemas y la tecnología. 🚀
      </h2>
      <div id="projects" />
    </Card>
  );
};
