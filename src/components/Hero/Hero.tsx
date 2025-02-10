import { Avatar, Button, Card } from '@heroui/react';

export const Hero = () => {
  return (
    <Card
      className="border-none max-w-5xl m-auto sm:px-32 px-10 py-16 mb:my-10 lg:mx-auto mx-8 my-5"
      radius="lg"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center sm:p-10 sm:gap-5">
        <Avatar className="w-20 h-20 text-large" src="/assets/profile.jpg" />
        <div className="flex flex-col items-start justify-center px-10 py-3 gap-5">
          <h1 className="text-xl font-bold text-center text-gray-900 dark:text-gray-100">
            ¡Hola! Soy Edgar Iván Espinoza
          </h1>
          <div className="flex lg:flex-row flex-col gap-5 max-lg:align-center w-full">
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
