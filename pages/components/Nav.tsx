import React, { useEffect, useState } from "react";
import { isNullishCoalesce } from "typescript";

export default function Nav() {
  const [category, setCategory] = useState<any[]>([]);

  useEffect(() => {
    fetch("/data/category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div>
      {category.map((cat) => (
        <>
          {cat.pid == 0 ? (
            <div key={cat.id} className="dropdown">
              <span
                className="dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {cat.name}
              </span>
              {cat.subcategories ? (
                <ul className="dropdown-menu">
                  <li key={cat.id}>
                    <a className="dropdown-item" href="#">
                      {cat.name}
                    </a>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
        </>
      ))}
    </div>
  );
}
