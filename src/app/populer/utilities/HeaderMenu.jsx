const HeaderMenu = ({ title }) => {
    return (
      <header className="text-gray-600 py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">{title}</h1>
        </div>
      </header>
    );
  };
  
  export default HeaderMenu;
  