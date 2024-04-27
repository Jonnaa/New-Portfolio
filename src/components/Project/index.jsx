const Project = ({ info }) => {
  const {name, gh, web, desc, imgs} = info
  return (
    <>
      <div className="rounded bg-black h-full relative flex flex-col justify-between items-center">
        <h1 className="w-full flex flex-col justify-center text-center text-xl md:text-2xl">
          {name}
        </h1>
        <div className="snap-x snap-mandatory flex flex-nowrap overflow-x-auto w-full mx-auto max-w-[700px]">
          {imgs.map((img) => (
            <div
              key={img.id}
              className="snap-start snap-always shrink-0 w-full max-w-[700px]"
            >
              <img src={img.location} alt={img.name} className="rounded-t"/>
            </div>
          ))}
        </div>
        <div className="w-3/4 sm:w-1/2 my-1">{desc}</div>
        <div className="flex justify-center gap-10 text-sm md:text-md mb-1">
          <a href={gh} target="_blank" className="hover:bg-purple-400 bg-rose-200 text-black rounded p-1">
            GitHub
          </a>
          <a href={web} target="_blank" className="hover:bg-purple-400 bg-rose-200 text-black rounded p-1">
            Website
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
