// const Loader = () => {
//     return (
//         <div>
//             <h1 className="text-2xl m-auto text-slate-400 font-serif animate-ping">InnavatED...</h1>
//         </div>
//     );
// };

// export default Loader;

const Loader = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center">
     <span className="loading loading-dots loading-lg"></span>
    </div>
  );
};

export default Loader;
