import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';
import slugify from 'react-slugify';

const Sidemenu = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');

  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    fetch('https://autosapi.ifadgroup.com/categories')
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
                  <Link href={`/vehicles?category=${slugify(category.name)}`} 
                    style={{
                      color: 'black',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      padding: '0.8rem 1.5rem'
                    }}
                    className={router.query.category === slugify(category.name)? "activeItem": " "}>
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
