export const FormSection = () => {
  return (
    <div className="h-100% min-w-335px max-w-335px flex flex-col border-r-1 border-r-solid border-r-#c7c7c711 ">
      <p className="text-#d2d0dd font-RebondBold text-25px">To Do Hive</p>

      <form action="" className="mt-50px w-100%">
        <input type="text" className="text-box mb-30px h-40px" />
        <input type="text" className="text-box h-200px" />
      </form>
      <ul className="w-90% mt-20px h-fit flex justify-center items-center gap-x-1 gap-y-1.5 flex-wrap">
        <li className="btn-blur w-100px h-30px font-InterThin flex justify-center items-center rounded-10px  text-#9b96b0 bg-emerald-900/20 backdrop-blur-sm cursor-pointer">
          Important
        </li>
        <li className="btn-blur w-80px h-30px font-InterThin flex justify-center items-center rounded-10px text-#9b96b0 bg-emerald-900/20 backdrop-blur-sm cursor-pointer">
          Hard
        </li>
        <li className="btn-blur w-80px h-30px font-InterThin flex justify-center items-center rounded-10px text-#9b96b0 bg-emerald-900/20 backdrop-blur-sm cursor-pointer">
          Regular
        </li>
      </ul>
      <div className="w-100% flex justify-center p-r-35px mt-35px">
        <div className="w-100px h-50px color-#7060c2 create-btn font-RebondRegular flex justify-center items-center rounded-40px">
          Create
        </div>
      </div>
    </div>
  );
};
