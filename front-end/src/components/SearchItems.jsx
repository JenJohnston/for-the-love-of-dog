import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useContext } from 'react';
import { format } from 'date-fns';
import { ModalSearchContext } from '../context/ModalSearchContext'
import { Link } from 'gatsby';

function BlogResultItems({blog}) {
    const { closeModalSearch } = useContext(ModalSearchContext);
    return (
        <Link
            to={`/blogs/${blog.slug.current}`}
            onClick={() => closeModalSearch()}
            className="modal__blog"
        >
            <GatsbyImage
                image={blog.coverImage.asset.gatsbyImageData}
                alt={blog.coverImage.alt}
                className="modal__img"
            />
            <div className="modal__searchContent">
                <h3>{blog.title}</h3>
                <p>
                {format(new Date(blog.publishedOn), 'p, MMMM dd, yyyy')}
                </p>
            </div>
        </Link>
    )
}

function CategoryResultItem({ category }) {
    const { closeModalSearch } = useContext(ModalSearchContext);
    return (
      <Link
        to={`/categories/${category.slug.current}`}
        onClick={() => closeModalSearch()}
        className="modal__categories"
      >
        <h3 className="title">{category.title}</h3>
      </Link>
    );
}

function ServiceResultItem({ service }) {
    const { closeModalSearch } = useContext(ModalSearchContext);
    return (
      <Link
        to={`/services/${service.slug.current}`}
        onClick={() => closeModalSearch()}
        className="modal__services"
      >
        <GatsbyImage
          image={service.coverImage.asset.gatsbyImageData}
          alt={service.coverImage.alt}
          className="modal__img"
        />
        <div className="modal__searchContent">
            <h3 className="title">{service.title}</h3>
            <p>P$ {service.price}</p>
        </div>
      </Link>
    );
}

export {
    BlogResultItems,
    CategoryResultItem,
    ServiceResultItem
}