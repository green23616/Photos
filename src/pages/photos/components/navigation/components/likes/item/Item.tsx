// CSS
import styles from './Item.module.scss';
// Type
import Photo from '../../../../../../../types/CardType';
// Recoil
import { useSetRecoilState } from 'recoil';
import {
  detailState,
  selectedState,
} from '../../../../../../../store/atoms/detailState';
import { useEffect } from 'react';

interface CardProps {
  like: Photo;
}

function Item({ like }: CardProps) {
  useEffect(() => {
    console.log('Item Render');
  });
  const setIsOpen = useSetRecoilState(detailState);
  const setSelected = useSetRecoilState(selectedState);

  const handleClick = () => {
    setIsOpen(true);
    setSelected(like);
  };

  return (
    <div className={styles.item} key={like.id} onClick={handleClick}>
      <div className={styles.container} key={like.id}>
        <img
          className={styles.container__cardImg}
          src={like.urls.small}
          alt={like.id}
        />
        <h3 className={styles.container__cardDesc}>{like.alt_description}</h3>
      </div>
    </div>
  );
}

export default Item;
