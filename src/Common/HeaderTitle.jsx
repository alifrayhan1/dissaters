const HeaderTitle = ({ title, description }) => (
  <div className="w-full">
    <h6 className="text-light text-xs">{description}</h6>
    <h1 className="font-bold text-2xl text-dark leading-8">{title}</h1>
  </div>
);
export default HeaderTitle;
