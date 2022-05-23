function HeaderItem({ title, Icon, Function }) {
  return (
    <div onClick={Function}>
      <div
        className="flex 
         flex-col  items-center px-12 xl:px-0   cursor-pointer
         w-12  sm:w-20
       hover:text-white group"
      >
        <Icon className="h-8 mb-1 group-hover:animate-bounce" />
        <p
          className="opacity-110 tracking-widest cursor-pointer
         group-hover:opacity-100 whitespace-nowrap "
        >
          {title}
        </p>
      </div>
    </div>
  );
}

export default HeaderItem;
