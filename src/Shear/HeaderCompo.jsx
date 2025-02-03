import HeaderTitle from "../Common/HeaderTitle";


function HeaderCompo({ title, description, children }) {
  return (
    <section className="bg-lighter px-4 py-4 shadow-md w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        {/* Title Section */}
        <HeaderTitle title={title} description={description} />

        {/* Action Section */}
        <div className="w-full flex flex-col lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0">
          {children}
        </div>
      </div>
    </section>
  );
}

export default HeaderCompo;

