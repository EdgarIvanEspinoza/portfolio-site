import { Card, CardHeader, CardFooter, Image, Button } from '@heroui/react';

export const Projects = () => {
  return (
    <div className="max-w-[1090px] gap-2 grid grid-cols-12 grid-rows-2 px-8 m-auto">
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Nueva</p>
          <h4 className="text-white font-medium text-2xl">
            Página web de Boda
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full object-cover opacity-20 cursor-pointer transform hover:scale-110"
          src="/assets/wedding-site.png"
          onClick={() => {
            window.open('https://www.ivanyjoanna.com/', '_blank');
          }}
        />
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-black/60 uppercase font-bold">
            Zina by Santander
          </p>
          <h4 className="text-black/90 font-medium text-xl">Customer Exp</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover cursor-pointer transform hover:scale-110"
          src="/assets/zinia.png"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Zinia app Logo"
              className="rounded-full w-10 h-11 bg-black cursor-pointer"
              src="/assets/zinia-logo-app.png"
              onClick={() => {
                window.open('https://www.zinia.com/', '_blank');
              }}
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Zinia by Santander</p>
              <p className="text-tiny text-white/60">Enjoy now. Pay Later.</p>
            </div>
          </div>
          <a href="https://www.zinia.com/" target="_blank" rel="noreferrer">
            <Button radius="full" size="sm">
              Get App
            </Button>
          </a>
        </CardFooter>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Inteligencia Artificial
          </p>
          <h4 className="text-white font-medium text-large">Aeternus AI</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover cursor-pointer transform hover:scale-110"
          src="/assets/aeternus.png"
          onClick={() => {
            window.open('https://aeternus.vercel.app//', '_blank');
          }}
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-black/80 uppercase font-bold">
            Art & Design
          </p>
          <h4 className="text-black font-medium text-large">PixelHitos</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover opacity-20 cursos-wait transform hover:scale-110"
          src="/assets/pixelhitos.png"
          onClick={() => {
            window.open('https://www.pixelhitos.com/', '_blank');
          }}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black/80 font-medium text-small">
              Compra arte en Madrid
            </p>
          </div>
        </CardFooter>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Editorial Santillana
          </p>
          <h4 className="text-white font-medium text-large">
            AR book experience
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover cursor-pointer transform hover:scale-110"
          src="/assets/qdea.png"
          onClick={() => {
            window.open('https://www.santillana.com.ve/', '_blank');
          }}
        />
      </Card>
    </div>
  );
};
