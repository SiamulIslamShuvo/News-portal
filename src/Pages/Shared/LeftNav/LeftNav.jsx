import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h4 className="my-4">All Category</h4>
            {categories.map((cat) => (
                <p key={cat.id}>
                    <Link
                        className="text-decoration-none text-secondary"
                        to={`/category/${cat.id}`}
                    >
                        {cat.name}
                    </Link>
                </p>
            ))}
        </div>
    );
};

export default LeftNav;
