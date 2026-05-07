export const Footer = () => {
  return (
    <footer id="footer" className="relative mt-24">
      {/* Top jagged edge */}
      <div className="absolute top-0 left-0 w-full h-16 bg-p5-black clip-jagged -translate-y-8 z-10" />
      
      <div className="bg-p5-black text-p5-white pt-16 pb-12 px-6 flex flex-col items-center relative z-20 border-t-8 border-p5-red">
        <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-anton tracking-widest text-p5-white mb-2">
              IVAN ESPINOZA
            </h2>
            <p className="text-p5-yellow font-bold uppercase tracking-widest mb-4">
              SENIOR SOFTWARE ENGINEER
            </p>
            <p className="text-p5-white/50 font-mono text-sm">
              &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://www.linkedin.com/in/edgar-ivan-espinoza-3b3b3b1b/" 
              target="_blank" 
              rel="noreferrer"
              className="bg-p5-red text-p5-white font-anton text-2xl px-6 py-3 clip-button hover:bg-p5-yellow hover:text-p5-black transition-colors"
            >
              LINKEDIN ★
            </a>
            <a 
              href="https://github.com/EdgarIvanEspinoza" 
              target="_blank" 
              rel="noreferrer"
              className="bg-p5-white text-p5-black font-anton text-2xl px-6 py-3 clip-button hover:bg-p5-yellow transition-colors"
            >
              GITHUB ★
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};
