// CSS
import styles from './Likes.module.scss';
// Types
import Photo from '../../../../../../types/CardType';
// Component
import Item from './item/Item';
// Recoil
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { likeState } from '../../../../../../store/atoms/likeState';
import { storageState } from '../../../../../../store/atoms/storageState';
import React from 'react';

function Likes() {
  const setLikePage = useSetRecoilState(likeState);
  const localLikes = useRecoilValue(storageState);
  const resetStorage = useResetRecoilState(storageState);

  const handleDelete = () => {
    resetStorage();
  };

  return (
    <div className={styles.likes}>
      <div className={styles.container}>
        <div
          className={'material-symbols-outlined'}
          style={{ cursor: 'pointer', color: 'gray' }}
          onClick={() => setLikePage(false)}
        >
          close
        </div>
        <h2 className={styles.container__likelist}>
          <p
            className={`${'material-symbols-outlined'} ${
              styles.container__likelist__favorite
            }`}
          >
            list
          </p>
          Like list
        </h2>
        <p
          className={`${'material-symbols-outlined'} ${
            styles.container__likelist__delete
          }`}
          onClick={handleDelete}
        >
          delete
        </p>
        {localLikes.length < 1
          ? '사진에 좋아요를 눌러보세요'
          : localLikes
              .filter((like): like is Photo => like !== null)
              .map(like => <Item like={like} key={like.id} />)}
      </div>
    </div>
  );
}

export default React.memo(Likes);
