import React, { PropTypes } from 'react';
import {Link} from 'phenomic';

import HeaderPreview from '../HeaderPreview';

import styles from './index.css';

const HeaderList = ({ pages }) => {
  return (
    <div>
      {
      pages.length
      ? (
        <ul className={styles.container}>
          {
          pages.map((page) => (
            <li className={styles.item} key={ page.title }>
              <Link to={page.__url}>
                <HeaderPreview { ...page } />
              </Link>
            </li>
          ))
        }
        </ul>
      )
      : 'No pages yet.'
    }
    </div>
  );
};

HeaderList.propTypes = {
  pages: PropTypes.array.isRequired,
};

export default HeaderList;
