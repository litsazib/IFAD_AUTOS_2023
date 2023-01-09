import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import slugify from 'react-slugify';

const Sidemenu = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://autosapi.ifadgroup.com:8001/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data[0].product_category_list))
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (!categories) {
    return null;
  }

  return (
    <div className="cols-sm-3">
      <div className="accordion accordion-flush" id="accordionFlushExample">
        {categories.map((category, index) => {
          return (
            <div key={category.id} className="accordion-item">
              <>
                <h2>
                  <Link
                    style={{
                      color: 'black',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      padding: '0.8rem 1.5rem'
                    }}
                    // as={`/vehicles/category/${slugify(category.name)}`}
                    href={`/vehicles?category=${slugify(category.name)}`}
                  >
                    {category.name}
                  </Link>
                </h2>
              </>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidemenu;
