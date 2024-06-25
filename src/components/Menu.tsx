import React, { useState, useEffect } from 'react';

export const Menu = () => {
  const [selected, setSelected] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    {page: 'Home', link: '#'},
    {page: 'About', link: '#'},
  ];

  // Close the mobile menu when the screen width exceeds 1000px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="menu rounded-md flex">
      <div className="menu-items">
        {menuItems.map(item => (
          <div
            key={item.page}
            className={`items-center flex gap-2 pl-2 pr-2 py-2 md:pl-4 md:pr-4 md:py-3 md:max-w-[340px] md:h-[40px] menu-item ${selected === item.page ? 'selected' : ''}`}
            onClick={() => setSelected(item.page)}
          >
            <a href={item.link}>
              {item.page}
            </a>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M12.9602 15.7131L18.9702 9.70309L17.5572 8.28809L12.9602 12.8881L8.36419 8.28809L6.9502 9.70209L12.9602 15.7131Z" fill={`${selected === item.page ? '#9A59FF' : '#fff'}`}/>
            </svg>
          </div>
        ))}
      </div>
      <div className="burger-menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <div className="burger-icon">&#9776;</div>
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-menu-items">
          {menuItems.map(item => (
            <div
              key={item.page}
              className={`menu-item ${selected === item.page ? 'selected' : ''}`}
              onClick={() => {
                setSelected(item.page);
                setIsMobileMenuOpen(false);
              }}
            >
              <a href={item.link}>
              {item.page}
            </a>
            </div>
          ))}
          <div key="close" className={`menu-item`} onClick={() => {setIsMobileMenuOpen(false);}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
                width="24"
                height="24"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
        </div>
      )}
    </nav>
  );
};
